import { expect, test } from '@playwright/test';

const viewportWidths = [
  320, 375, 430, 600, 672, 673, 768, 769, 800, 832, 900, 1024, 1088, 1089, 1120, 1248, 1249, 1312,
  1313, 1440, 1472, 1473, 1536, 1600, 1920,
];

test('portfolio remains readable across responsive layout transitions', async ({ page }) => {
  for (const width of viewportWidths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const layout = await page.evaluate(() => {
      const isVisible = (element: Element) => {
        const bounds = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element);

        return (
          styles.display !== 'none' &&
          styles.visibility !== 'hidden' &&
          bounds.width > 0 &&
          bounds.height > 0
        );
      };

      const visibleNavigationLinks = [...document.querySelectorAll('.site-nav__link')].filter(
        isVisible,
      );
      const navigationBounds = visibleNavigationLinks.map((link) => link.getBoundingClientRect());
      const navigationOverlaps = navigationBounds.some((first, firstIndex) =>
        navigationBounds
          .slice(firstIndex + 1)
          .some(
            (second) =>
              first.left < second.right &&
              first.right > second.left &&
              first.top < second.bottom &&
              first.bottom > second.top,
          ),
      );

      const overflowingElements = [...document.querySelectorAll('body *')]
        .filter(isVisible)
        .filter((element) => {
          const bounds = element.getBoundingClientRect();

          return bounds.left < -1 || bounds.right > window.innerWidth + 1;
        })
        .map((element) => `${element.tagName.toLowerCase()}.${element.className}`)
        .slice(0, 5);

      const portrait = document.querySelector('.hero__portrait')?.getBoundingClientRect();
      const hero = document.querySelector('.hero')?.getBoundingClientRect();
      const heroVisual = document.querySelector('.hero__visual')?.getBoundingClientRect();
      const projectPreview = document.querySelector('.project-preview')?.getBoundingClientRect();

      return {
        documentWidth: document.documentElement.scrollWidth,
        overflowingElements,
        visibleNavigationLinkCount: visibleNavigationLinks.length,
        navigationOverlaps,
        portraitInsideHero:
          Boolean(portrait && hero) &&
          portrait!.left >= hero!.left - 1 &&
          portrait!.right <= hero!.right + 1 &&
          portrait!.top >= hero!.top - 1 &&
          portrait!.bottom <= hero!.bottom + 1,
        previewInsideViewport:
          Boolean(projectPreview) &&
          projectPreview!.left >= -1 &&
          projectPreview!.right <= window.innerWidth + 1,
        portraitInsideVisual:
          window.innerWidth > 1472 ||
          (Boolean(portrait && heroVisual) &&
            portrait!.left >= heroVisual!.left - 1 &&
            portrait!.right <= heroVisual!.right + 1 &&
            portrait!.top >= heroVisual!.top - 1 &&
            portrait!.bottom <= heroVisual!.bottom + 1),
        previewInsideVisual:
          Boolean(projectPreview && heroVisual) &&
          projectPreview!.left >= heroVisual!.left - 1 &&
          projectPreview!.right <= heroVisual!.right + 1 &&
          projectPreview!.top >= heroVisual!.top - 1 &&
          projectPreview!.bottom <= heroVisual!.bottom + 1,
        responsiveVisualsOverlap:
          window.innerWidth > 1472 ||
          (Boolean(portrait && projectPreview) &&
            portrait!.left < projectPreview!.right &&
            portrait!.right > projectPreview!.left),
        responsiveVisualsShareBaseline:
          window.innerWidth > 1472 ||
          (Boolean(portrait && projectPreview) &&
            Math.abs(portrait!.bottom - projectPreview!.bottom) <= 1),
      };
    });

    expect.soft(layout.documentWidth, `${width}px viewport has horizontal scrolling`).toBe(width);
    expect
      .soft(layout.overflowingElements, `${width}px viewport has overflowing elements`)
      .toEqual([]);
    expect.soft(layout.visibleNavigationLinkCount, `${width}px viewport hides navigation`).toBe(7);
    expect
      .soft(layout.navigationOverlaps, `${width}px viewport overlaps navigation links`)
      .toBe(false);
    expect
      .soft(layout.portraitInsideHero, `${width}px viewport lets the portrait escape the hero`)
      .toBe(true);
    expect
      .soft(layout.previewInsideViewport, `${width}px viewport clips the project preview`)
      .toBe(true);
    expect
      .soft(
        layout.portraitInsideVisual,
        `${width}px viewport lets the portrait float outside its stage`,
      )
      .toBe(true);
    expect
      .soft(
        layout.previewInsideVisual,
        `${width}px viewport lets the preview float outside its stage`,
      )
      .toBe(true);
    expect
      .soft(
        layout.responsiveVisualsOverlap,
        `${width}px viewport visually detaches the portrait from the preview`,
      )
      .toBe(true);
    expect
      .soft(
        layout.responsiveVisualsShareBaseline,
        `${width}px viewport gives the hero visuals different baselines`,
      )
      .toBe(true);
  }
});

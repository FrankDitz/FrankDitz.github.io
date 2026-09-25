import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  { name: 'portfolio home', path: '/' },
  { name: 'not found page', path: '/404.html' },
];

for (const pageToTest of pages) {
  test(`${pageToTest.name} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(pageToTest.path);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page }).analyze();

    expect(
      results.violations,
      results.violations
        .map(
          (violation) =>
            `${violation.id}: ${violation.help}\n${violation.nodes
              .map((node) => `  ${node.target.join(' ')} — ${node.failureSummary}`)
              .join('\n')}`,
        )
        .join('\n\n'),
    ).toEqual([]);
  });
}

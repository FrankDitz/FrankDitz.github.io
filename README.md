# Frank Ditz — Software Engineering Portfolio

Personal portfolio for presenting my software engineering experience, technical capabilities, and independent projects to recruiters and engineering teams.

## Project status

The site is under active development. Project entries distinguish clearly between planned, in-progress, and live work; links to source code or demonstrations are only published when they exist.

## Technology

- [Astro](https://astro.build/) for static rendering and content-focused pages
- TypeScript with Astro's strict configuration
- React islands for interactions that require client-side state
- Vitest for automated tests
- ESLint and Prettier for consistent, reviewable code

## Local development

This project requires Node.js 22.12 or newer and pnpm 11.

```sh
pnpm install
pnpm dev
```

The development server is available at `http://localhost:4321` by default.

## Quality checks

Run the complete local validation suite before opening a pull request:

```sh
pnpm verify
```

Individual checks are also available:

```sh
pnpm format:check
pnpm lint
pnpm check
pnpm test
pnpm build
```

## Contribution workflow

Work is developed on short-lived branches and merged through focused pull requests. Branch naming, commit conventions, and review expectations are documented in [CONTRIBUTING.md](CONTRIBUTING.md).

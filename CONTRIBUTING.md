# Contributing

This repository uses a lightweight, review-first workflow intended to keep `main` deployable and the project history easy to understand.

## Branches

Create short-lived branches from an up-to-date `main` branch:

- `feat/<concise-name>` for user-facing work
- `fix/<concise-name>` for defects
- `chore/<concise-name>` for tooling and maintenance
- `docs/<concise-name>` for documentation-only changes
- `test/<concise-name>` for test-only changes

Use lowercase kebab-case, for example `feat/featured-projects`.

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(hero): build identity-first cobalt layout
fix(navigation): prevent mobile menu overflow
docs(readme): document local setup
```

Each commit should represent one coherent change, use imperative language, and leave the repository in a reviewable state. Avoid vague messages such as `updates` or `fix stuff`.

## Pull requests

Pull requests should be focused and include:

- A concise explanation of what changed and why
- Screenshots for visible changes
- The validation performed
- Accessibility considerations for interactive or visual work
- Known placeholders or follow-up work

Run `pnpm verify` before requesting review. All automated checks must pass before merging.

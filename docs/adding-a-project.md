# Adding a portfolio project

The project system is evidence-first. A recruiter should understand the problem, result, and your
role before encountering implementation detail.

## Publication checklist

1. Complete the application and confirm the main workflow works on the deployed version.
2. Prepare a public repository with a useful README, setup instructions, tests, and an architecture
   overview.
3. Capture one strong product image or a short demonstration. Do not add decorative stock imagery.
4. Copy `projectTemplate` in `src/data/projects.ts` into the exported `projects` array.
5. Replace every placeholder with a concise, verifiable claim.
6. Keep `published: false` while drafting. Preview the shared layout at
   `/projects/project-template/` during local development.
7. Set `published: true` only after the repository, demo, links, and case study are ready.
8. Run `pnpm verify` and review desktop, tablet, and phone layouts before merging.

## Writing rules

- Lead with the user and problem, not the framework.
- State your role explicitly when collaborators were involved.
- Prefer measured outcomes. If no metric exists, describe a concrete observable result.
- Explain two or three consequential decisions; do not narrate every implementation step.
- Name tradeoffs and limitations. They demonstrate judgment, not weakness.
- Include testing and operational behavior appropriate to the project.
- Keep the overview readable in roughly one minute; deeper sections are for technical reviewers.
- Never claim planned functionality as completed work.

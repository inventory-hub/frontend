This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

> Disclaimer: Auth is not user for hasura at the moment.

### Prerequisites

- Have node and pnpm installed
- Have docker and docker compose

### Steps to run

1. `pnpm install`
2. Open the backend repo and run `docker compose up -d`. Read the README there if necessary. In the future the functionality there will be migrated here
3. Run `docker compose up -d` here to start hasura
4. Run `pnpm hasura:apply` and then `pnpm hasura:seed` to apply the migrations and seeding. This is needed to be run only when changes to the db schema are made
5. Run `pnpm hasura:console` to open the hasura console. This is useful for debugging
6. Run `pnpm graphql:codegen`. This needs to be re-run whenever you write new graphql queries or the schema changes
7. Run `pnpm dev` to start the Next.js app.

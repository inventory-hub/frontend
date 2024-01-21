// apollo is not used, config for the vscode extension
const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET || "admin-key";

module.exports = {
    client: {
        service: {
            name: "Hasura",
            url: "http://localhost:8080/v1/graphql",
            headers: {
                "x-hasura-role": "admin",
                "x-hasura-admin-secret": adminSecret
            }
        }
    }
}
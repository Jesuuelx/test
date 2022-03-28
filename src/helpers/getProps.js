import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getProps = async (owner) => {
  try {
    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer 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`,
        },
      };
    });

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(
        new HttpLink({
          uri: "https://api.github.com/graphql",
        })
      ),
    });

    const { data } = await client.query({
      query: gql`
    {
      repositoryOwner(login: "${owner}") {
        repositories(first: 10) {
          edges {
            node {
              name
              url
              id
            }
          }
        }
      }
    }`,
    });

    const { repositoryOwner } = data;
    const items = repositoryOwner.repositories.edges.map(({ node }) => node);

    return items;
  } catch {
    throw `No existe Ningun Repositorio con ese nombre ${owner}`;
  }
};

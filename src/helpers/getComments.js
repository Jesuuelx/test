import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getComments = async (owner, project, number) => {
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
          repository(name: "${project}", owner: "${owner}") {
            issue(number: ${number}) {
              title
              comments(first: 10) {
                nodes {
                  bodyText
                  author {
                    login
                  }
                }
              }
            }
          }
        }
      `,
    });

    const { repository } = data;

    const title = repository.issue.title;
    const comments = repository.issue.comments.nodes.map(
      ({ bodyText, author }) => ({ bodyText: bodyText, author: author.login })
    );

    return { title, comments }
  } catch {
    throw `No existe Ningun Repositorio con ese nombre ${owner} ni ${project}`;
  }
};

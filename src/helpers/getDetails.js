import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getDetail = async (owner, project) => {
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
      query: gql`{
      repository(name: "${project}", owner: "${owner}") {
        issues(first: 10) {
          edges {
            node {
              id
              number
              title
              url
              comments(first: 10) {
                edges {
                  node {
                    id
                    createdAt
                    url
                    bodyText
                    author {
                      ... on User {
                        id
                        email
                        avatarUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    });

    const { repository } = data;
    const issues = repository.issues.edges.map(({ node }) => node);
    /* console.log(issues) */
    const description = issues.map(({ id, number, title, url }) => ({
      id: id,
      number: number,
      title: title,
      url: url,
    }));
    /* console.log(issues) */
    const comments = issues.map(({ comments }) => comments.edges).forEach(({data}) => data);
    console.log(comments)

    let nuevoComentario;
    for (let i = 0; i < comments.length; i++) {
      nuevoComentario = comments[i];
    }
    console.log(nuevoComentario)
    const final = nuevoComentario
      .map(({ node }) => node)
      .map(({ author, bodyText, createdAt, url }) => ({
        author: author,
        bodyText: bodyText,
        createdAt: createdAt,
        url: url,
      }));

    console.log(final);

    return { description, final };

    /* console.log(description) */

    /* const { repositoryOwner } = data;
  const items = repositoryOwner.repositories.edges.map(({ node }) => node); */
  } catch {
    throw `No existe Ningun Repositorio con ese nombre ${owner} ni ${project}`;
  }
};

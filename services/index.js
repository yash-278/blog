import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection() {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            id
            categories {
              name
              id
              slug
            }
            featuredPost
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection(last: 10) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            id
            categories {
              name
              id
              slug
            }
            featuredPost
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPostDetails {
      posts(where: { featuredPost: true }, orderBy: createdAt_DESC, last: 3) {
        id
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const results = await request(graphqlAPI, query);

  return results.posts;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetSimilarPostsDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
        last: 3
      ) {
        id
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const results = await request(graphqlAPI, query, { categories, slug });

  return results.posts;
};

export const getCategoryPosts = async (slug) => {
  const query = gql`
    query getCategoryPosts($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            id
            categories {
              name
              id
              slug
            }
            featuredPost
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });

  return results.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategoriesDetails {
      categories {
        name
        slug
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.categories;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetCommentsDetails($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });

  return results.comments;
};

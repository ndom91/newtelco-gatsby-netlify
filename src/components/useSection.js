import { useStaticQuery, graphql } from 'gatsby'
export const useSection = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SectionContent {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "section" } } }
        ) {
          edges {
            node {
              frontmatter {
                category
                title
                short
                image
              }
              fields {
                locale
                slug
              }
              html
              parent {
                ... on File {
                  base
                  sourceInstanceName
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

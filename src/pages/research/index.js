import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-white full-height m-4 p-8 rounded overflow-hidden shadow-lg">
        <section>
          <article>
            <h1 className="my-font ml-2">Research Articles</h1>
            <h4 className="my-font ml-2">
              {data.allMarkdownRemark.totalCount} Posts
            </h4>
            <div className="flex flex-wrap">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div
                  className="w-1/3 m-3 p-3 rounded border border-solid border-gray-500"
                  key={node.id}
                >
                  <Link
                    className="no-underline text-black"
                    to={`research/${node.fields.slug}`}
                  >
                    <h3 className="my-font">{node.frontmatter.title}</h3>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

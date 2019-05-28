const { slugify } = require("./src/utils/slugify")
const path = require("path")
const authors = require("./src/utils/authors")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromtTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromtTitle,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    post: path.resolve("src/templates/single-post.js"),
    postList: path.resolve("src/templates/post-list.js"),
    authorPosts: path.resolve("src/templates/author-posts.js"),
  }

  const res = await graphql(`
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          author
        }
        fields{
          slug
        }
      }
    }
  }`)

  if (res.errors) return Promise.reject(res.errors)

  //extracting all posts from res promise once is resolved:
  const posts = res.data.allMarkdownRemark.edges

  //create single post page:
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
        // Find author imageUrl from author array and pass it to template
        imageUrl: authors.find(x => x.name === node.frontmatter.author)
          .imageUrl,
      },
    })
  })

  // Create author posts pages
  authors.forEach(author => {
    createPage({
      path: `/author/${slugify(author.name)}`,
      component: templates.authorPosts,
      context: {
        authorName: author.name,
        imageUrl: author.imageUrl,
      },
    })
  })
}

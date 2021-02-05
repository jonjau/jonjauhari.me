import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ArticleFooterNav from "../components/article-footer-nav";
import Article from "../components/article";
import ArticleHeader from "../components/article-header";
import HorizontalRule from "../components/horizontal-rule";
import { MDXRenderer } from "gatsby-plugin-mdx";

const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      timeToRead
      tableOfContents
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

interface Props {
  location: Location;
  data: {
    mdx: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
    previous: any;
    next: any;
  };
  pageContext: any;
}

const BlogPost = ({ data, location }: Props) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  // TODO: table of contents, tags
  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        url={location.href}
      />
      <Article itemScope itemType="http://schema.org/Article">
        <ArticleHeader>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date} | <span>{post.timeToRead} min read</span>
          </p>
        </ArticleHeader>
        <HorizontalRule />
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
        <HorizontalRule />
      </Article>
      <ArticleFooterNav>
        <ul>
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                <FaArrowLeft /> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} <FaArrowRight />
              </Link>
            )}
          </li>
        </ul>
      </ArticleFooterNav>
    </Layout>
  );
};

export { BlogPost as default, pageQuery };

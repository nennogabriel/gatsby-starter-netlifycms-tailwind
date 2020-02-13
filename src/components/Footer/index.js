import React from "react"

import menu from "content/settings/menu.json"
import siteMetadata from "content/settings/siteMetadata.json"
import { graphql, StaticQuery } from "gatsby"

import { phone, address, email } from "content/general/info"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"
import Signature from "./Signature"

export default function Footer() {
  return (
    <div className="container bg-gray-800">
      <div className="text-white py-6 xl:mb-2">
        <div className="flex flex-col md:flex-row">
          <div className={styles.col}>
            <header>Menu</header>
            <ul>
              {menu.links.map(link => (
                <li key={link.label}>
                  <SmartLink to={link.url}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <header>Tópicos Recentes</header>
            <BlogPosts />
          </div>
          <div className={styles.col}>
            <header>Entre em contato</header>
            <ul>
              <li>form</li>
            </ul>
          </div>
          <div className={styles.col}>
            <div className="mb-4">
              <img src={siteMetadata.logoAlt} alt="talent logo" />
            </div>
            <div className="text-custom-1-0">
              <p className="mb-6">
                <i className="italic">{siteMetadata.slogan}</i>
              </p>
              <p>
                <div className="flex items-center">
                  <SVGIcon name="envelope" className="w-4 h-4 mr-2" />
                  <span>{email.address}</span>
                </div>
                <div className="flex items-center">
                  <SVGIcon name="mobile-alt" className="w-4 h-4 mr-2" />
                  <span>{phone.display}</span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Signature />
    </div>
  )
}

function FooterBlogPots({ data }) {
  const { nodes } = data.allMarkdownRemark
  return (
    <ul>
      {nodes.map(post => (
        <li key={post.id}>
          <SmartLink to={post.fields.slug}>
            <span>{post.frontmatter.title}</span>
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}

const BlogPosts = () => (
  <StaticQuery
    query={graphql`
      query FooterBlogIndex {
        allMarkdownRemark(
          limit: 5
          sort: {
            order: DESC
            fields: [frontmatter___metadata___datePublished]
          }
          filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
        ) {
          nodes {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <FooterBlogPots data={data} count={count} />}
  />
)

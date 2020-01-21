import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import Quote from "../components/quote"
import { Container, Row, Col } from "react-bootstrap"
import postData from "../../content/posts.yaml"

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Container>
        <Row className="mt-2 mb-5">
          <Col className="text-center">
            <Quote />
          </Col>
        </Row>
        {postData.posts.map((item, index) => {
          return (
            <Row key={`item_${index}`} className="mt-2 mb-2">
              <Col>
                <PostPreview
                  title={item.title}
                  description={item.description}
                  tag={item.tag}
                  image={item.image}
                  content={item.content}
                />
              </Col>
            </Row>
          )
        })}
      </Container>
    </Layout>
  )
}

export default Homepage
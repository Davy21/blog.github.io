import React from "react"
import Layout from "../components/layout"
import { Row, Col, Image } from "react-bootstrap"

import { useLocation } from "@reach/router"
import { withPrefix } from "gatsby-link"

const Post = ({ location }) => {
  const loc = useLocation()
  if (loc.pathname === withPrefix("/post/")) {
    import("../styles/post.css")
  }

  if (location.state) {
    const { image, title, content } = location.state
    return (
      <Layout>
        <Row>
          <Col>
            <div>
              <div className="text-center">
                <Image
                  className="thumbnail"
                  src={require(`../images/${image}`)}
                  rounded
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>{title}</h5>
            <p>{content}</p>
          </Col>
        </Row>
      </Layout>
    )
  } else {
    return null
  }
}

export default Post

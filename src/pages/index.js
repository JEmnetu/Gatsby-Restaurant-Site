import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Col, Row, Image, Container } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col className="d-flex mt-3  justify-content-center">
          <h1 id="main-heading">Habte Eats</h1>
        </Col>
      </Row>
      <Row
        className="mb-2 d-flex justify-content-center w-75 mx-auto "
        id="address"
      >
        <Col md={3}>
          <span> 101 Main St, Baltimore MD</span>
        </Col>
        <Col md={2}>
          <span>555-555-5555</span>
        </Col>
        <Col md={3}>
          <span>Carryout & Delivery Available</span>
        </Col>
      </Row>
      <Row className="mb-5 bg-dark">
        <Col xs={6} className="d-flex pl-0 pr-0 justify-content-start">
          <Image
            src="https://www.delonghi.com/Global/recipes/multifry/97.jpg"
            alt=""
            height="300px"
            width="100%"
          />
        </Col>
        <Col className="d-flex align-self-center justify-content-center text-light">
          <p className="main-desc">
            At Habte Eats, we pride ourselves in making a delicious meal for
            every customer, every time.
          </p>
        </Col>
      </Row>
      <Row className="mb-5 bg-dark">
        <Col className="d-flex align-self-center justify-content-center text-light">
          <p className="main-desc">
            We use only the finest, freshest, locally sourced ingredients.
          </p>
        </Col>
        <Col xs={6} className="d-flex pl-0 pr-0 justify-content-end">
          <Image
            src="https://images.pexels.com/photos/5916/food-salad-healthy-colorful.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            height="300px"
            width="100%"
          />
        </Col>
      </Row>
      <Row className="mb-5 bg-dark">
        <Col xs={6} className="d-flex pl-0 pr-0 justify-content-start">
          <Image
            src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            height="300px"
            width="100%"
          />
        </Col>
        <Col className="d-flex align-self-center justify-content-center text-light">
          <p className="main-desc">
            Give us a call, and let us show you that your satisfaction is our
            top priority!
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

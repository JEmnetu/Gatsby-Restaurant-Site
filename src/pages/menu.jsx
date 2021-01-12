import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "react-bootstrap"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <Container>
      <Row>
        <Col className="d-flex mt-3 mb-4 justify-content-center">
          <h1 className="font-italic">Our Menu</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} md={4} className="bg-light pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Pizzas</h4>
            </li>
            <li>
              <h5>Cheese Pizza</h5>

              <span>$10.95</span>
            </li>
            <li>
              <h5>Pepperoni Pizza</h5>
              <span>$11.95</span>
            </li>
            <li>
              <h5>Veggie Pizza</h5>

              <span>$12.95</span>
            </li>
            <li>
              <h5>Supreme Pizza</h5>

              <span>$12.95</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="bg-light pl-1 pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Pastas</h4>
            </li>
            <li>
              <h5>Marinara</h5>
              <span>$8.95</span>
            </li>
            <li>
              <h5>Lasagna</h5>
              <span>$9.95</span>
            </li>
            <li>
              <h5>Sausage, Peppers, & Onions</h5>
              <span>$9.95</span>
            </li>
            <li>
              <h5>Shrimp Alfredo</h5>
              <span>$10.95</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="bg-light pl-1 pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Salads</h4>
            </li>
            <li>
              <h5>Garden Salad</h5>
              <span>$6.95</span>
            </li>
            <li>
              <h5>Cobb Salad</h5>
              <span>$7.95</span>
            </li>
            <li>
              <h5>Greek Salad</h5>
              <span>$7.95</span>
            </li>
            <li>
              <h5>Antipasta Salad</h5>
              <span>$7.95</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row id="second-row">
        <Col xs={12} md={4} className="bg-light pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Subs</h4>
            </li>
            <li>
              <h5>Cheesesteak</h5>
              <span>$6.95</span>
            </li>
            <li>
              <h5>Chicken Cheesesteak</h5>
              <span>$7.95</span>
            </li>
            <li>
              <h5>Chicken Parmesan</h5>
              <span>$7.95</span>
            </li>
            <li>
              <h5>Tuna Sub</h5>
              <span>$7.95</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="bg-light pl-1 pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Sides</h4>
            </li>
            <li>
              <h5>French Fries</h5>
              <span>$3.95</span>
            </li>
            <li>
              <h5>Garlic Bread</h5>
              <span>$5.95</span>
            </li>
            <li>
              <h5>Stuffed Mushrooms</h5>
              <span>$6.95</span>
            </li>
            <li>
              <h5>Chicken Wings - 10pc</h5>
              <span>$8.95</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4} className="bg-light pl-1 pt-1">
          <ul className="food-menu">
            <li
              style={{ justifyContent: "center", textDecoration: "underline" }}
            >
              <h4>Desserts</h4>
            </li>
            <li>
              <h5>Canoli</h5>
              <span>$2.95</span>
            </li>
            <li>
              <h5>Ice Cream</h5>
              <span>$3.95</span>
            </li>
            <li>
              <h5>Rice Pudding</h5>
              <span>$4.95</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default MenuPage

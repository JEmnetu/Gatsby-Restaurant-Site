import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Row, Form, Button, FormGroup } from "react-bootstrap"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Row
        id="contact-row"
        className="w-75 mx-auto mb-4 d-flex justify-content-center"
      >
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-center mr-xs-0 mr-md-5 p-3"
        >
          <div>
            <h5 className="font-weight-bold">Contact Us</h5>
            <p>We want to hear from you!</p>
            <hr />
            <ul className="hours">
              <li>
                <span className="font-weight-bold">Mon - Thurs:</span> 11:00AM -
                9:00PM
              </li>
              <li>
                <span className="font-weight-bold">Fri - Sat:</span> 11:00AM -
                10:00PM
              </li>
              <li>
                <span className="font-weight-bold">Sun:</span> 12:00PM - 9:00PM
              </li>
              <hr />
              <li className="font-weight-bold">&#40;555&#41;-555-5555</li>
              <hr />
            </ul>
          </div>
        </Col>
        <Col xs={12} md={7} className="ml-2">
          <Form
            name="contact v1"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact v1" />
            <Form.Group>
              <Form.Label className="font-weight-bold">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="font-weight-bold">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="font-weight-bold">Message</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={3}
                name="message"
                id="message"
              />
            </Form.Group>
            <FormGroup>
              <div data-netlify-recaptcha="true"></div>
            </FormGroup>

            <Button className="btn btn-dark" type="submit" id="contact-submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}

export default ContactPage

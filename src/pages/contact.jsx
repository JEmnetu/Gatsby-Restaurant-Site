import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Col, Row, Form, Button, FormGroup } from "react-bootstrap"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submission, setSubmission] = useState()
  return (
    <Layout>
      <SEO title="Contact" />
      <Row
        style={{ marginTop: "8em" }}
        className="w-75 mx-auto d-flex justify-content-center"
      >
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-center mr-5 p-3"
        >
          <div>
            <h5>Contact Us</h5>
            <p>We want to hear from you!</p>
            <hr />
            <ul className="hours">
              <li>Mon - Thurs: 11:00AM - 9:00PM</li>
              <li>Fri - Sat: 11:00AM - 10:00PM</li>
              <li>Sun: 12:00PM - 9:00PM</li>
              <hr />
              <li>555-555-5555</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={7} className="ml-5">
          <form
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            // onSubmit={e => {
            //   e.preventDefault()
            //   const user = { name, email, message }
            //   setSubmission(user)
            //   console.log(submission)
            //   setName("")
            //   setEmail("")
            //   setMessage("")
            // }}
          >
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                value={name}
                required
                onChange={e => {
                  setName(e.target.value)
                }}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={e => {
                  setEmail(e.target.value)
                }}
                placeholder="Enter your email address"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                onChange={e => {
                  setMessage(e.target.value)
                }}
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

            <Button className="btn btn-dark" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Layout>
  )
}

export default ContactPage

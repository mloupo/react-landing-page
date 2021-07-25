import React, { useState } from 'react';
import ContactImage from "../../assets/img/contact-image.png";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { sendEmail } from "../../axios"
const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({})

  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    setValidated(true);

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      let response
      
      try {
        response = await sendEmail(formData);

        if (response.status === 201) {
          setShowAlert(true)
          setError(false);

          form.reset()

          setValidated(false);

          setTimeout(()=>{setShowAlert(false)}, 3000)
        } else {
          setError(true)
        }
      } catch(err) {
        setShowAlert(true)
        setError(true)
      }
    }
  }

  const handleOnChange = (e) => {
    // Vamos a crear nuestro objeto formData
    // {
    //   name: 'Franco'
    //   email: "franco@gmail.com"
    //   phone: 346787666656
    //   message: 'sadasdasdasd asd asd '
    // }
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <h3>
              Get in touch<br></br>
              <span>We are hiring!</span>
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  type='text'
                  placeholder='Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group >
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='email'
                  type='email'
                  placeholder='Email'
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un email válido
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group >
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='phone'
                  type='tel'
                  placeholder='Phone'
                />
              </Form.Group>

              <Form.Group controlId='formBasicTextArea'>
                <Form.Control
                  onChange={handleOnChange}
                  required
                  name='message'
                  as='textarea'
                  rows={3}
                  placeholder='Message'
                />
                <Form.Control.Feedback type='invalid'>
                  Por favor ingrese un mensaje
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant='primary' type='submit'>
                Send
              </Button>
            </Form>
            < br />
          </Col>
          <Col md={12} lg={7}>
            <img src={ContactImage} alt='Contact' className='d-block w-100' />
          </Col>
        </Row>
        
        { showAlert 
          ? error 
            ? <Alert variant={'danger'}>Hubo un error al enviar el email </Alert> 
            : <Alert variant={'success'}>Email enviado con éxito</Alert> 
          : null }
      </Container>
     
    </section>
  );
}

export default Contact;

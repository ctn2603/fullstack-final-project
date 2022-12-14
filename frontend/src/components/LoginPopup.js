import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import logo from "../images/logo.png";
import '../css/LoginPopup.css'



function LoginPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} id="loginButton">
        login
      </Button>

      <Modal show={show} onHide={handleClose} id= "popUp">
        <Modal.Header closeButton id="header">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center"
              alt="books emoji"
            />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label class = "text">username</Form.Label>
              <Form.Control
                type="username"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label class = "text">password</Form.Label>
              <Form.Control
                type="password"
               // placeholder=""
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Button variant="primary" type = "login" onClick={handleClose} id="submitFormButton">
            login
          </Button>
      </Modal>
    </>
  );
}

export default LoginPopup;
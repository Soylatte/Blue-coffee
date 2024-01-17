import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Regulars.css'
import regulars from '../images/regulars.jpg'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <img src={regulars} />
    <Form.Control size="lg" type="text" placeholder="Type your email" />
      <Button className='btn-wait' variant="primary" onClick={handleShow}>
        JOIN THE WAITLIST
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully join the waitlist!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import regulars from '../images/regulars.jpg'
import './Regulars.css'


function Regulars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={regulars} alt="regulars" />
      <Card.ImgOverlay>
        <div className='input-btn'>
      <input className='input-container' type="text" placeholder="Type your email"></input>
      <button className='btn-wait' onClick={handleShow}>
        SUBMIT!
      </button>
      </div>
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
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

export default Regulars;
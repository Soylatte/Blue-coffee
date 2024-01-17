import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import Latte from '../images/Latte.jpg'

export default function App() {
    const navigate = useNavigate();
  return (
    <>
      <MDBCard className='mb-3'>
      <Link to='/about'></Link>
        <MDBCardImage position='top' src={Latte} alt='Latte' />
        <MDBCardBody>
          <MDBCardTitle>OUR PASSION</MDBCardTitle>
          <MDBCardText>
          In August 2020, we launched our first location,
                    <br></br> a 5x10 coffee cart nestled in the garden of the Wythe diner in Seoul.
                    Our operation was simple and our footprint was small,
                    <br></br>which let us remove costs that didn’t benefit our customers or baristas.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>we’re offering an all around better ritual.See you in store.</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}


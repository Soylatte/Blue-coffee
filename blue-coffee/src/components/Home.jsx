import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import poster from '../images/poster.png';
import './Home.css'
function Home() {
  return (
    <Container className='background'>
      <Row>
        <Col sm={8}>
            <h1 className='h1-title'>SEE YOU IN STORE!</h1>
            <p className='h2-title'>OUR OPENING HOURS</p>
            <p className='p-class'>MON - SUN : 6am - 9:30pm</p>
        </Col>
        <Col sm={4}>
            <img src={poster} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

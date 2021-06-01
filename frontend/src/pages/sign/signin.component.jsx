import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from '../../axios.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import BgImage from "../../assets/img/illustrations/signin.svg";


const SignIn= () => {

  const history = useHistory();
  const [studentNumber,setStudentNumber] = useState()
  const [password,setPassword] = useState()
  const [waiting,setWaiting] = useState(false)

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        login()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [studentNumber,password]);


  const checkValidity = () => {
    if(studentNumber === "" || password==="" ){
      alert("At least one of the inputs is empty")
      return false
    }  else {
      return true
    }
  }
  const sleep = m => new Promise(r => setTimeout(r, m))
  const login = ()  => {
    console.log("sending name"+studentNumber)
    if(checkValidity()){
      axios.post('/login', {
        number: Number(studentNumber),
        password: password,
      })
      .then( async (response) => {
        if(response.data.correct === true){
          console.log(response);
          console.log('Successfully Login');
          sessionStorage.setItem('token', response.data.token)
          sessionStorage.setItem('id', studentNumber)
          setWaiting(true)
          await sleep(500)
          history.push("/dashboard");
        }
      }, (error) => {
        console.log(error);
      });
    }
  }

  
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to="/" className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              { !waiting ? 
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Student Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control onChange={(e) => setStudentNumber(e.target.value)} autoFocus required  placeholder=" Student Number" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button onClick={()=>login()} variant="primary" className="w-100">
                    Sign in
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to="/signup" className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div> :<CircularProgress /> }
            </Col>
          </Row>
        </Container>
      </section>  
    </main>
  );
};

export default SignIn;
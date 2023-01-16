import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Form, Button, Row, Col, Container, Navbar as BNavbar, Nav, Card, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faSearch, faCogs, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGem, faLightbulb } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// using the routing library
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"


// importing and using custom pages 
import Homepage from './pages/Homepage'
import LoginPage from './pages/Login'
document.title = "TechCraft Hosting"



// the navigation bar for the application
const Navigation = () => {

  return (
    <div>
      <BNavbar expand="md" bg="light" variant="light">
        <Container>
          <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BNavbar.Brand ><b id="brand-name">TechCraftHost</b></BNavbar.Brand>
          <BNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center m-auto" activeKey="/" id="navigation">
              <Nav.Item ><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link href="/">Consult Us</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link href="#services">Services</Nav.Link></Nav.Item>
              <Nav.Item ><Nav.Link href="https://www.techcraft.co.tz/">Main Site</Nav.Link></Nav.Item>
            </Nav>
          </BNavbar.Collapse>
          <Link to="/login" ><Button variant="outline-primary" className="nav-button">Log In</Button></Link>
        </Container>
      </BNavbar>
    </div>
  )
}


// call to buy a domainName






const CallToBuy = (props) => {
  return <div id="call-to-buy" >
    <Container className="justify-content-center">
      <Alert variant="success">
        <h3>You have searched for {props.name}, <Button variant="success" >Buy It Now</Button> and Get a {props.discount}% discount once you buy it with us </h3>
      </Alert>
    </Container>
  </div >
}



// Greetings and call to action
const Greetings = () => {
  return <div className="m-md-5 p-md-2 shadow-sm">
    <Container className="justify-content-center">
      <div className="m-md-5 p-md-2 shadow-sm">
        <h1 className="display-5 fw-bold" id="site-greetings">
          Get Your Business, Brand, or Office Domain<br />
          And Scale Up Your Business With<br />
          Us. It's Just A Single Click
          <FontAwesomeIcon icon={faArrowDown} id="arrow-down" />
        </h1>
      </div>
    </Container>
  </div>
}



// the app for domain lookup
const App = () => {
  // for the domain to be looked up for since we are not going to implement any logic for pages while checking
  const [domainName, setDomainName] = useState("")
  // the check result should be assigned to this state
  const [checkResult, setCheckResult] = useState("")

  // const [isAvailableDomain, setIsAvailableDomain] = useState(null)
  const [isAvailable, setIsAvailable] = useState(null)
  // error check div
  const [error, setError] = useState("")
  // the apiKey paid for the company domain lookup service Access
  const apiKey = "at_S7GiKRUSgB9dilmMnaTWaV5IfHhBF"

  // look for the submitted domain name, once the user starts toi type again, then button is not submitted till he submit again too
  const [submitted, setSubmitted] = useState(false)
  // Checking domain name required for lookuo if changed
  function handleNameChange(e) {
    e.preventDefault()
    setSubmitted(false)
    setCheckResult("")
    setDomainName((e.target.value).toLowerCase())
  }
  // checking for user's need to search for a particular domain
  function handleSubmit(e) {
    e.preventDefault()
    console.log(domainName)
    setSubmitted(true)
  }
  function Buy() {
    const [askSuggestion, setAskSuggestions] = useState(false)
    function suggest() {
      const lastIndex = domainName.lastIndexOf(".")
      const rootName = domainName.slice(0, lastIndex)
      return `${rootName}.co.tz`
    }
    if (submitted && checkResult === "AVAILABLE") {
      return <div>
        <div>
          <CallToBuy name={domainName} discount={20} />
        </div>
      </div>
    } else if (submitted && checkResult === "UNAVAILABLE") {
      return <div>
        <Alert variant="success">
          <div>
            <Container>
              <Alert variant="info">
                <h1>The domain is not available, But there are other suggestions</h1>
                <Button variant="primary" onClick={(e) => { setAskSuggestions(true) }}><FontAwesomeIcon icon={faSearch} size="lg" /> Click here to get them</Button>
              </Alert>
            </Container>
          </div>
        </Alert>
        <Container>
          <div>{askSuggestion ? `${suggest()}` : "Can You Try Another Good Name"}</div>
        </Container>
      </div>
    }
    else if (!submitted && error === "") {
      return <div id="empty"></div>
    }
    else if (submitted && error !== "") {
      return <Alert variant="info">
        <Container>
          <div>
            <div className="container-fluid mt-5 mb-5">
              <Row md={2} className="bg-none">
                <Col span={1} offset={1}>
                  <div className="">
                    <FontAwesomeIcon icon={faCogs} size="5x" spin className="arrow-down" />
                  </div>
                </Col>
                <Col span={9}>
                  <Container>
                    <Alert variant="danger">
                      <h3 className="fw-b center-align">Sorry But an Error Occured during loading up your domain<br />
                        Can You try One More Time
                      </h3>
                    </Alert>
                  </Container>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </Alert>
    }
    else {
      return <div className="bg-light pt-5 pb-5"><Container><Alert varinat="secondary">
        <h4 className="center-align">Am pretty sure you will enjoy working with us</h4>
      </Alert>
      </Container>
      </div>
    }
  }
  useEffect(() => {
    if (submitted) {
      fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domainName}&credits=DA`, {
        method: "GET",
        mode: "cors",
        headers: {
          "content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log(response)
          setCheckResult(response["DomainInfo"].domainAvailability)
          setIsAvailable(true)
          console.log(checkResult)
        })
        .catch(error => {
          console.log(error.message)
          setIsAvailable(false)
          setError(error)
        })
    }
  }, [submitted, checkResult, domainName])

  // function getNameSuggestions(name){
  // }
  function availableCheck() {
    if (isAvailable) {
      return <div>
        <Container className="p-md-5 m-sm-2 m-md-5">
          <div>
            <Container>
              <h1>The Domain You have Looked for is {checkResult}</h1>
            </Container>
          </div>
        </Container>
      </div>
    } else {
      return <div>
        <Container>
          <h1>The domain check was succesful but some action failed</h1>
        </Container>
      </div>
    }
  }
  const empty = <div className="empty"></div>


  return <div className="justify-content-center shadow shadow-sm">
    <div id="empty"></div>
    <Container>
      <Form method="POST" onSubmit={(e) => handleSubmit(e)} className="m-2">
        <Row sm={1} md={2} className="justify-content-center">
          <Col sm md={8} className="justify-content-sm-center">

            <Form.Control type="text" placeholder="Domain Name" onChange={(e) => { handleNameChange(e) }} id="domain-input" className="shadow m-2" required />
          </Col>
          <Col sm={12} md={4} className="justify-content-sm-center" >
            <Button type="submit" variant="outline-primary" className="m-2 shadow w-100">Look For Your Domain</Button>
          </Col>
        </Row>
      </Form>
    </Container>
    <div>
      <Container className="justify-content-center">
        <h4 className="align-center">{submitted ? `We are Looking for ${domainName}` : ``}</h4>
      </Container>
    </div>
    <div className="container">
      {submitted && isAvailable ? "The domain is submitted and data is fetched" : submitted && isAvailable === null ? "Just A second" : ""}
    </div>
    <Buy />

    {availableCheck}
    <div>
      <Container className="p-md-2">
        <p className="text-center">{isAvailable !== null ? `${checkResult}` : `Techcraft Offers The Best way to work with its customers`}</p>
      </Container>
    </div>
    {empty}
  </div>
}


// The hosting services we offer
const HostingServices = () => {
  function seeMoreMail(e) {
    e.preventDefault()
    console.log("want to see more mail")
  }
  function seeMoreWeb(e) {
    e.preventDefault()
    console.log("want to see more Web")
  }

  return <div className="hosting-services-container m-md-5 p-md-5 bg-light">
    <div className="mt-2">
      <h4 className="hosting-services-header center-align">
        Techraft Offers Hosting in both System Hosting and Email
      </h4>
    </div>
    <Container className="hosting-services">
      <Row sm={1} md={3} gap={5}>
        <Col md={{ span: 4 }}>
          <Card className="justify-content-center shadow shadow-sm bg-white m-md-2">
            <Card.Header className="m-md-2">
              <Card.Title>Email Hosting</Card.Title>
            </Card.Header>
            <Card.Body className="m-md-2">
              <Card.Text>We Offer Hosting in email bra bra bra</Card.Text>
            </Card.Body>
            <Card.Footer className="m-md-2">
              <Button variant="info w-100" onClick={e => seeMoreMail(e)}>See More</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={{ span: 4 }}>
          <Card className="justify-content-center shadow shadow-sm bg-white m-md-2">
            <Card.Header className="m-md-2">
              <Card.Title >Web And System Hosting</Card.Title>
            </Card.Header>
            <Card.Body className="m-md-2">
              <Card.Text>We Offer Hosting in Our servers  bra bra bra</Card.Text>
            </Card.Body>
            <Card.Footer className="m-md-2">
              <Button variant="info w-100" onClick={e => seeMoreWeb(e)}>See More</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={{ span: 4 }}>
          <Card className="justify-content-center shadow shadow-sm bg-white m-md-2">
            <Card.Header className="m-md-2">
              <Card.Title>Domain Names Selling</Card.Title>
            </Card.Header>
            <Card.Body className="m-md-2">
              <Card.Text>We Offer Domain names as and add-in service freely for our hosters in Our servers  bra bra bra</Card.Text>
            </Card.Body>
            <Card.Footer className="m-md-2">
              <Button variant="info w-100" onClick={e => seeMoreWeb(e)}>See More</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Container>
  </div>
}

const Reason = () => {
  return <div className="why-chose-us p-5">
    <Container>
      <h3 className="why-chose-us-heading fw-b marg-top">Why Chose Us</h3>
      <p className="why-chose-us-top-content">At Techcraft Technologies Ltd, we guarantee reliable solutions that work. Our working mode is guide by our values that we hold <br />close to heart. Ensuring that all products we deliver are the byproduct of these values.</p>
    </Container>
    <div className="reasons-card">
      <Container>
        <Row className="justify-content-center">
          <Col sm={6} md={4} className="mb-2">
            <Card className="reason-card">
              <Card.Header>
                <div className="justify-content-center text-center">
                  <FontAwesomeIcon icon={faGem} size="3x" className="m-auto justify-content-center" />
                </div>
                <Card.Title className="reason-card-text">
                  Collaboration
                </Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className="reason-card-text">
                  Ensuring great teamwork by having teams made up of several developers with different skill set all working on a common goal.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="reason-card-text fw-b"></p>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={6} md={4} className="mb-2">
            <Card className="reason-card">
              <Card.Header>
                <div className="justify-content-center align-center text-center">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" />
                </div>
                <Card.Title className="reason-card-text">
                  Innovation
                </Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className="reason-card-text">
                  Helping our people in our organizations achieve their full potential, through fostering creativity and disruptive innovation when solving challenges
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="reason-card-text fw-b"></p>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={6} md={4} className="mb-2">
            <Card className="reason-card">
              <Card.Header>
                <div className="justify-content-center align-center text-center">
                  <FontAwesomeIcon icon={faLightbulb} size="3x" className="justify-content-center mx-auto" />
                </div>
                <Card.Title className="reason-card-text">
                  Integrity
                </Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className="reason-card-text">
                  Working to deliver services without compromising our professional ethics and maintaining transparency on our organization and with our customers
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="reason-card-text fw-b">See More</p>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={6} md={4} className="mb-2">
            <Card className="reason-card">
              <Card.Header>
                <div className="justify-content-center align-center text-center">
                  <FontAwesomeIcon icon={faGem} size="3x" className="justify-content-center mx-auto" />
                </div>
                <Card.Title className="reason-card-text">
                  Quality
                </Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className="reason-card-text">
                  Our provided ICT solutions function as per user requirement and are highly effective, robust , secure and reliable.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <p className="reason-card-text fw-b"></p>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
        <Row className="social-media-icons justify-content-center ">
          <h1 className="reason-card-text mb-3 text-white">Also, You Can Follow Us on Social Media</h1>
          <Col sm={{ span: 2, offset: 1 }}>
            <FontAwesomeIcon icon={faGithub} size="4x" className="brand-icon" />
          </Col>
          <Col sm={{ span: 2, offset: 1 }}>
            <FontAwesomeIcon icon={faFacebook} size="4x" className="brand-icon" />
          </Col>
          <Col sm={{ span: 2, offset: 1 }}>
            <FontAwesomeIcon icon={faInstagram} size="4x" className="brand-icon" />
          </Col>
          <Col sm={{ span: 2, offset: 1 }}>
            <FontAwesomeIcon icon={faLinkedin} size="4x" className="brand-icon" />
          </Col>

        </Row>
      </Container>
    </div>
  </div>
}

const Services = () => {
  const [services, setServices] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!loaded) {
      fetch('http://127.0.0.1:8000/subscription/service/', {
        mode: 'cors',
        method: 'GET', // or 'PUT'
      })
        .then(response => response.json())
        .then(data => {
          setServices(data)
          setLoaded(true)
        })
        .catch(err => {
          console.log(err.message)
          return <div>
            <Container>
              <h2 className="text-center">We are Offering the Best Deployment problem you will have to encounter</h2>
            </Container>
          </div>
        })
      return;
    }
  })
  if (loaded) {
    console.log(services.length)
    return <div>
      <Container bg="white" className="justify-content-center">
        <Row xs="auto" md="3" lg="4" className="g-3">
          {services.map((service) =>
            <Col key={service.id} bg="light" className="service-container mx-auto mt-5">
              <div>
                <h4>{service.name}</h4><hr />
                <p className="service-description-text">{service.description}</p>
                <img alt="services " src={service.image} className="img-fluid" />
              </div>
            </Col>)}
        </Row>
      </Container>
    </div >
  }
  return <div>
    <Container>
    </Container>
  </div>
}

const Footer = () => {
  return (<Container fluid className="bg-dark text-white p-5">
    <Row className="justify-content-center">
      <Col sm={6} md={4} className="mb-2 ml-sm-5">
        <h4>Physical Address</h4>
        <address>
          <p className="footer-text">Mbezi Beach, Goigi</p>
        </address>
        <p><FontAwesomeIcon icon={faPhone} /> 0758  286 451</p>
        <p><FontAwesomeIcon icon={faMailBulk} />info@techcraft.co.tz</p>
      </Col>
      <Col sm={6} md={4} className="mb-2 ml-sm-5">
        <h4>Other Links</h4>
        <ul>
          <li>Homepage</li> <hr />
          <li>Registration</li><hr />
          <li>Jobs and Recruitment</li><hr />
          <li>Contact Us</li><hr />
          <li>Our Policies</li><hr />
        </ul>
      </Col>
      <Col sm={6} md={4} className="mb-2 ml-sm-5">
        <h4>Our Partners</h4>
        <ListGroup className="bg-dark text-white b-white">
          <ListGroup.Item className="bg-dark text-white m-sm-2 p-sm-2">Techcraft</ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white m-sm-2 p-sm-2">UDSM</ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white m-sm-2 p-sm-2">MachuStudio</ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white m-sm-2 p-sm-2">Cisco Tanzania</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>

  </Container >)
}










// some of the works performed by the company


const Main = () => {
  return <div>

    <Greetings />
    <App />
    <HostingServices />
    {/* <Services /> */}
    <Reason />
  </div>
}




ReactDOM.render(<div className="">
  <Router basename="tchosting">
    <Navigation />
    <Routes>
      <Route path="/" element={<div>
        <Main />
        <Services className="my-5" />
      </div>} />

      <Route path="/homepage" element={<Homepage />} />
      <Route path="/login" element={<LoginPage domainChecked="machu.com" className="h-100" />} />
    </Routes>
    <Footer />
  </Router>
</div>, document.getElementById('root'))
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Form, Button, Row, Col, Container, Navbar as BNavbar, Nav, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Bounce, LightSpeed, Slide, Fade } from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faSearch, faCogs } from "@fortawesome/free-solid-svg-icons"
import { faGem, faLightbulb } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// using the routing library
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"


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
  return <div >
    <Container className="justify-content-center">
      <Bounce top>
        <h1 className="display-5 fw-bold" id="site-greetings">
          Get Your Business, Brand, or Office Domain<br />
          And Scale Up Your Business With<br />
          Us. It's Just A Single Click
          <FontAwesomeIcon icon={faArrowDown} id="arrow-down" />
        </h1>
      </Bounce>
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
        <Bounce>
          <CallToBuy name={domainName} discount={20} />
        </Bounce>
      </div>
    } else if (submitted && checkResult === "UNAVAILABLE") {
      return <div>
        <Alert variant="success">
          <Slide right>
            <Container>
              <Alert variant="info">
                <h1>The domain is not available, But there are other suggestions</h1>
                <Button variant="primary" onClick={(e) => { setAskSuggestions(true) }}><FontAwesomeIcon icon={faSearch} size="lg" /> Click here to get them</Button>
              </Alert>
            </Container>
          </Slide>
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
          <LightSpeed>
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
          </LightSpeed>
        </Container>
      </Alert>
    }
    else {
      return <Fade in><div className="bg-light pt-5 pb-5"><Container><Alert varinat="secondary">
        <h4 className="center-align">Am pretty sure you will enjoy working with us</h4>
      </Alert>
      </Container></div></Fade>
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
        <LightSpeed bottom>
          <Container>
            <h1>The Domain You have Looked for is {checkResult}</h1>
          </Container>
        </LightSpeed>
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
    <div><Container>
      {isAvailable !== null ? `${checkResult}` : `Techcraft Offers The Best way to work with its customers`}
    </Container></div>
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

  return <div className="hosting-services-container">
    <div><h4 className="hosting-services-header center-align">
      Techraft Offers Hosting in both System Hosting and Email
    </h4></div>
    <Container className="hosting-services">
      <Row sm={1} md={2}>
        <Col md={{ span: 4, offset: 1 }}>
          <Card className="justify-content-center shadow shadow-sm bg-white">
            <Card.Header>
              <Card.Title>Email Hosting</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>We Offer Hosting in email bra bra bra</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info w-100" onClick={e => seeMoreMail(e)}>See More</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <Card className="justify-content-center shadow shadow-sm bg-white">
            <Card.Header>
              <Card.Title>Web And System Hosting</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>We Offer Hosting in Our servers  bra bra bra</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info w-100" onClick={e => seeMoreWeb(e)}>See More</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

    </Container>
  </div>
}

const Reason = () => {
  return <div className="why-chose-us">
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
        <Row className="social-media-icons justify-content-center">
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
                <img src={service.image} className="img-fluid" />
              </div>
            </Col>)}
        </Row>
      </Container>
    </div >
  }
  return <div>
    <Container>
      <h3>Techcraft Offers Most of the services considering Deployment, Automation and Hosting</h3>
    </Container>
  </div>
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




ReactDOM.render(<div>
  <Router basename="tchosting">
    <Navigation />
    <Switch>
      <Route path="/" exact>
        <Main />
        <Services className="my-5" />
      </Route>
    </Switch>
    <Switch>
      <Route path="/homepage" exact>
        <Homepage />
      </Route>
      <Route path="/login" exact>
        <LoginPage domainChecked="machu.com" />
      </Route>
    </Switch>
  </Router>
</div>, document.getElementById('root'))
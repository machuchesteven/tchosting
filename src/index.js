import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Form, Button, Row, Col, Container, Navbar as BNavbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import {Bounce, LightSpeed} from 'react-reveal'


// the navigation bar for the application
const Navigation = () => {
  function loginButton(e) {
    e.preventDefault()
    console.log("Redirect to /login  screen")
    window.location.href = "/login"
  }
  return (
    <div>
      <BNavbar bg="light" stick="top" expand="md">
        <Container>
          <div><BNavbar.Brand><b id="brand-name">TechCraftHost</b></BNavbar.Brand></div>
          <Nav className="justify-content-center" activeKey="/" id="navigation">
            <Nav.Item style={{ flex: 3 }}><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item style={{ flex: 3 }}><Nav.Link href="/">Consult Us</Nav.Link></Nav.Item>
            <Nav.Item style={{ flex: 3 }}><Nav.Link href="#services">Services</Nav.Link></Nav.Item>
            <Nav.Item style={{ flex: 2 }}><Nav.Link href="https://www.techcraft.co.tz/">Main Site</Nav.Link></Nav.Item>
          </Nav>
          <Button variant="outline-primary" className="nav-button" onClick={(e) => loginButton(e)}>Log In</Button>

        </Container>
      </BNavbar>
    </div>
  )
}


// call to buy a domainName






const CallToBuy = (props) => {
  return <div id="call-to-buy" >
    <Container className="justify-content-center">
      <h3>You have searched for {props.name}, <Button variant="outline-success">Buy It Now</Button> and Get a {props.discount}% discount once you buy it with us </h3>
    </Container>
  </div >
}



// Greetings and call to action
const Greetings = () => {
  return <div >
    <Container className="justify-content-center">
      {/* <Bounce top> */}
      <h1 className="display-5 fw-bold" id="site-greetings">
        Get Your Business, Brand, or Office Domain<br />
        And Scale Up Your Business With<br />
        Us. It's Just A Single Click
        {/* <FontAwesomeIcon icon={faArrowDown} id="arrow-down" /> */}
      </h1>
      {/* </Bounce> */}
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

  const apiKey = "at_S7GiKRUSgB9dilmMnaTWaV5IfHhBF"
  
  // look for the submitted domain name, once the user starts toi type again, then button is not submitted till he submit again too
  const [submitted, setSubmitted] = useState(false)
  // Checking domain name required for lookuo if changed
  function handleNameChange(e) {
    e.preventDefault()
    setSubmitted(false)
    setDomainName((e.target.value).toLowerCase())
  }
  // checking for user's need to search for a particular domain
  function handleSubmit(e) {
    e.preventDefault()
    console.log(domainName)
    setSubmitted(true)
  }
  function Buy() {
    if (submitted) {
      return <div>
        <CallToBuy name={domainName} discount={20} />
      </div>
    } else {
      return <div>We will help you get your domain at every cost</div>
    }
  }
  useEffect(() => {
    if(submitted){
    fetch(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${domainName}&credits=DA`,{
      method: "GET",
      mode: "cors",
      headers: {
        "content-type":"application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(response=>{
        console.log(response)
        setCheckResult(response["DomainInfo"].domainAvailability)
        setIsAvailable(true)
        console.log(checkResult)
      })
      .catch(error=>{
        console.log(error.message)
        setIsAvailable(false)
      })
    }
    }, [submitted])

  // function getNameSuggestions(name){
  // }
  function availableCheck(){
    if(isAvailable){
      return <div>
        <Container>
        <h1>The Domain You have Looked for is {checkResult}</h1>
        </Container>
      </div>
    }else{
      return <div>
        <Container>
          <h1>The domain check was succesful but some action failed</h1>
        </Container>
      </div>
    }
  }


  return <div className="justify-content-center">
    <div id="empty"></div>
    <Container>
    <Form method="POST" onSubmit={(e)=> handleSubmit(e)}>
      <Row sm={1} md={2} className="justify-content-center">
        <Col sm={9} md={8} className="justify-content-sm-center">
        
          <Form.Control type="text" placeholder="Domain Name" onChange={(e) => { handleNameChange(e) }} id="domain-input" required />
        </Col>
        <Col sm={3} md={4} className="justify-content-sm-center" >
          <Button type="submit" variant="outline-primary">Look For Your Domain</Button>
        </Col>
      </Row>
    </Form>
    </Container>
    <div>{submitted ? `We are Looking for ${domainName}` : "We guarantee the availability of our service to you 24/7"}</div>
    <div>{submitted && isAvailable? "The domain is submitted and data is fetched": submitted && isAvailable === false ? "The domain LookUp failed, but the value is submitted": submitted && isAvailable === null? "The value is submitted but the check is not complete": "Not submitted at all"}</div>
    <Buy />
    {availableCheck}
    <div>{isAvailable? `${checkResult}`: `Waiting for the check to complete`}</div>
  </div>
}

// services div
const Services = () => {
  return <div id="services" className="bg-dark">
    <Container>
      <div id="services-heading-container">
        <h2 className="fw-bold display-8" id="services-heading">
          We offer More Services like :-
        </h2>
        <div id="services-cards-container">
          Here goes the ervices cards and their rows
        </div>
      </div>
    </Container>
  </div>
}




// The hosting services we offer
const HostingServices = () => {
  return <div className="hosting-services-container">
    <div><h4 className="hosting-services-header">
      Techraft Offers Hosting in both System Hosting and Email
    </h4></div>
    <Container className="hosting-services">
      <div className="hosting-services-overlay-image"></div>
      <div className="hosting-services-col">
        <h4 className="fw-bold hosting-service-heading" id="web-hosting-header">Web Hosting</h4>
        <p className="hosting-service-content">
          We provide services in design and development of mobile applications,
          desktop applications,
          web applications with focus on responsiveness and good SEO.
        </p>
      </div>
      <div className="hosting-services-overlay-image"></div>
      <div className="hosting-services-col">
        <h4 className="fw-bold hosting-service-heading" id="web-hosting-header">Email Hosting</h4>
        <p className="hosting-service-content">
          We provide services in design and development of mobile applications,
          desktop applications,
          web applications with focus on responsiveness and good SEO.
        </p>
        <button className="see-more-button">Explore More</button>
      </div>
    </Container>
  </div>
}















// map and contacts for the company














// some of the works performed by the company







ReactDOM.render(<div>
  <Navigation />
  <Greetings />
  <App />
  <HostingServices />
  <Services />
</div>, document.getElementById('root'))
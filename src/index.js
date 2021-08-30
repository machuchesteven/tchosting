import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Form, Button, Row, Col, Container, Navbar as BNavbar, Nav, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Bounce, LightSpeed, Fade, Slide, Flip} from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner, faArrowDown, faSearch, } from "@fortawesome/free-solid-svg-icons"
import {faGem, faLightbulb} from "@fortawesome/free-regular-svg-icons"
import {faGithub, faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"




// the navigation bar for the application
const Navigation = () => {
  function loginButton(e) {
    e.preventDefault()
    console.log("Redirect to /login  screen")
    window.location.href = "/login"
  }
  return (
    <div>
      <BNavbar  sticky="top" bg="light" expand="md" className="h-100">
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
    function suggest(){
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
    } if(submitted && checkResult === "UNAVAILABLE"){
      return <div>
      <Alert variant="success">
      <Bounce>
      
        <h1>The domain is not available, But there are other suggestions</h1>
        <Button variant="primary" onClick={(e)=> {setAskSuggestions(true)}}><FontAwesomeIcon icon={faSearch} />Click here to get them</Button>
      </Bounce>
      </Alert>
      <Container>
      <div>{askSuggestion? `${suggest()}`: "Can You Try Another Good Name"}</div>
      </Container>
      </div>
    }
    else {
      return <div><FontAwesomeIcon icon={faSpinner} spin size="4x" /></div>
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
      <LightSpeed bottom>
        <Container>
        <h1>The Domain You have Looked for is {checkResult}</h1>
        </Container>
      </LightSpeed>
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
// const Services = () => {
//   return <div id="services" className="bg-dark">
//     <Container>
//       <div id="services-heading-container">
//         <h2 className="fw-bold display-8" id="services-heading">
//           We offer More Services like :-
//         </h2>
//         <div id="services-cards-container">
//           Here goes the ervices cards and their rows
//         </div>
//       </div>
//     </Container>
//   </div>
// }
// const Services = () =>{
//  return <div className="services-container"  id="services">
//     <div className="services">
//       <Fade left>
//       {/* <FontAwesomeIcon icon={faSpinner} spin size="10x" style={{color: "blueviolet"}}/> */}
//       <h2><Slide left>TechCraft Technologies </Slide><Slide right>Offers Other Services</Slide></h2>
//       </Fade>
//       <Container className="justify-content-center services" id="service-container">
//       <Row xs={1} md={2} lg={2}>
//       <Card className="justify-content-center col-md-5 shadow-sm mt-2 ml-2">
//           <Card.Title>Software Development</Card.Title>
//           <Card.Body><Card.Text>
//           We provide services in design and development of mobile applications, 
//           desktop applications, 
//           web applications with focus on responsiveness and good SEO.
//           </Card.Text></Card.Body>
//         </Card>
//         <Card className="justify-content-center col-md-5 shadow-sm m-2">
//           <Card.Title>ICT Infrastructure Support & Maintenance</Card.Title>
//           <Card.Body><Card.Text>
//           We provide wire and wireless networking solutions for residential and enterprise applications. We also provide support and maintenance services tailored tospecific ICT requirements.
//           </Card.Text></Card.Body>
//         </Card>        
//         <Card className="justify-content-center col-md-5 shadow-sm m-2">
//           <Card.Title>Research</Card.Title>
//           <Card.Body><Card.Text>
//           We conduct applied research in various areas of information and communication technologies. We also develop data collection and entry systems for use in both qualitative and quantitative research in various fields.
//           </Card.Text></Card.Body>
//         </Card>        
//         <Card className="justify-content-center col-md-5 shadow-sm m-2">
//           <Card.Title>Training</Card.Title>
//           <Card.Body><Card.Text>
//           We offer professional training in Mobile apps development, Desktop and Web apps development, IoT products & services development, Computer networking, Cyber security and Business Model Development for ICT products & services.
//           </Card.Text></Card.Body>
//         </Card>        
//         <Card className="justify-content-center col-md-5 shadow-sm m-2">
//           <Card.Title>Artificial Intelligence</Card.Title>
//           <Card.Body><Card.Text>
//           We harnessing the power of data to accelerate change of your business by leveraging AI and analytics for business to unlock new efficiencies and increase productivity using enterprise-wide AI solutions that deliver game changing results.
//           </Card.Text></Card.Body>
//         </Card>        
//         <Card className="justify-content-center col-md-5 shadow-sm m-2">
//           <Card.Title>Internet of Things (IoT)</Card.Title>
//           <Card.Body><Card.Text>
//           We provide strategic consulting, development, data analytics tools and application management using network of physical devices connected and exchanging data to solve business challenges and get new revenue streams via IoT technology.
//           </Card.Text></Card.Body>
//         </Card>  
//         <div className=" col-md-3"></div> 
//         <LightSpeed right>     
//         <Card className="justify-content-center shadow-sm m-2">
//           <Card.Title>ICT Consultancy</Card.Title>
//           <Card.Body><Card.Text>
//           We offer a range of consultancy services in ICT and provide security audit services.
//           </Card.Text></Card.Body>
//         </Card>
//         </LightSpeed>
//       </Row>
//       </Container>
//       </div>
//       </div>

// }



// The hosting services we offer
const HostingServices = () => {
  return <div className="hosting-services-container">
    <div><h4 className="hosting-services-header">
      Techraft Offers Hosting in both System Hosting and Email
    </h4></div>
    <Container className="hosting-services">
    
    </Container>
  </div>
}

const Reason = () =>{
  return <div className="why-chose-us">
  <Container>
    <h3 className="why-chose-us-heading fw-b marg-top">Why Chose Us</h3>
    <p className="why-chose-us-top-content">At Techcraft Technologies Ltd, we guarantee reliable solutions that work. Our working mode is guide by our values that we hold <br />close to heart. Ensuring that all products we deliver are the byproduct of these values.</p>
  </Container>
  <div className="reasons-card">
  <Container>
    <Row sm={1} md={4}>
     <Col md={{span : 2, offset: 1}} className="mb-2">
    <Card className="reason-card">
    <Card.Header>
    <FontAwesomeIcon icon={faGem} />
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
        <Col md={{span : 2, offset: 1}} className="mb-2">
    <Card className="reason-card">
    <Card.Header>
      <FontAwesomeIcon icon={faLightbulb} />
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
        <Col md={{span : 2, offset: 1}} className="mb-2">
    <Card className="reason-card">
    <Card.Header>
      <FontAwesomeIcon icon={faLightbulb} />
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
    </Col>   <Col md={{span : 2, offset: 1}} className="mb-2">
    <Card className="reason-card">
    <Card.Header>
    <FontAwesomeIcon icon={faGem} />
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
    <Col sm={{span: 2, offset: 1 }}>
      <FontAwesomeIcon icon={faGithub} size="5x" className="brand-icon" />
    </Col>
    <Col sm={{span: 2, offset: 1 }}>
      <FontAwesomeIcon icon={faFacebook} size="5x" className="brand-icon" />
    </Col>
    <Col sm={{span: 2, offset: 1 }}>
      <FontAwesomeIcon icon={faInstagram} size="5x" className="brand-icon" />
    </Col>
    <Col sm={{span: 2, offset: 1 }}>
      <FontAwesomeIcon icon={faLinkedin} size="5x" className="brand-icon" />
    </Col>
    
    </Row>
  </Container>
  </div>
  </div>
}















// map and contacts for the company














// some of the works performed by the company







ReactDOM.render(<div>
  <Navigation />
  <Greetings />
  <App />
  <HostingServices />
  {/* <Services /> */}
  <Reason />
</div>, document.getElementById('root'))
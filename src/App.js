import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, useParams, Switch } from 'react-router-dom'
import './index.css'

import { Container, Button, Form, Navbar as NBar, Nav } from 'react-bootstrap'


const Navbar = () => {
  return (<div>
    <NBar bg="light" expand="md">
      <NBar.Brand><h1>Hosting</h1></NBar.Brand>
      <Nav className="justify-content-center">
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>About</Nav.Item>
        <Nav.Item>Services</Nav.Item>
      </Nav>
      <Button variant="outline-primary" className="justify-content-right">
        Log In
      </Button>
    </NBar>
  </div>)
}

const Home = () => {
  const [query, setQuery] = useState("")

  function submit(e) {
    console.log(query)
  }
  return (
    <div>
      <h1>Search For your domain Name</h1>
      <Form onSubmit={(e) => submit(e)} action={`search/${query}`} method="POST">
        <Form.Control name="query" type="text" placeholder="Enter Search query" onChange={(e) => { setQuery(e.target.value) }} />
        <Button variant="primary" type="submit" name="submit"><Link to={`/search/${query}`}>Submit</Link></Button>
      </Form>
    </div>
  )
}


const SearchBar = () => {
  const { searched } = useParams()
  function handleSubmit(e) {
    e.preventDefault()
    console.log(searched)
  }
  return <div>

    <Form action="/">
      <Form.Group><Form.Control type="text" value={searched} name="searched" /><Button variant="outline-primary" id="search-button" onClick={(e) => handleSubmit(e)}>Check Availability</Button></Form.Group>
    </Form>
    <h1>Your Domain Name is unavabilable, but the following are available {searched}</h1>
    <div>
      <h3><b>The Other List of available domain is here</b></h3>
    </div>
  </div>
}
const Services = () => {

  return <div>
    <h1>Our services</h1>
    <image src="/img.jpg" alt="The image Not Found" />
  </div>
}
const Login = () => {
  return <Container>
    <h1>Login Now</h1>
  </Container>
}
const Footer = () => {
  return <h1>Footer</h1>
}
ReactDOM.render(
  <div>
    <h1>Before we define the routes</h1>

    <div>
      <Navbar />

    </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={`/search/:searched`} component={SearchBar} />
        <Route path="/services" exact component={Services} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer className="footer" />
    </Router>
    <div>
      <h1>Defining the Other Part for the routes</h1>
      <Router>
        <Route path="/api">
          <h1>The Part Specific For API calls</h1>
        </Route>
      </Router>
    </div>
  </div>,
  document.body
);

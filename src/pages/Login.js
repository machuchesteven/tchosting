import React, { useState } from 'react'
import { Container, Form, Button, Tabs, Tab } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Slide } from 'react-reveal'
import '../index.css'





const LoginPage = (props) => {
    const [domainToBuy, setDomainToBuy] = useState(props.domainChecked)
    const [key, setKey] = useState("login")

    function checkIfDomainIsGiven() {
        if (domainToBuy === "") {
            return <h4>We are 24/7 active for You!</h4>
        }
        else {
            return <>
                <h4>Login/Sign Up to redeem your domain</h4>
                <p><a href="#">{props.domainChecked}</a></p>
            </>
        }
    }
    function Authenticate() {
        console.log("The user wants to authenticate")
    }
    function CreateAccount() {
        console.log("User want to create a new account")
    }
    return <div className="login-signup-page mx-auto mt-sm-3 mt-5">
        <Container>
            {checkIfDomainIsGiven()}
            <div className="login-signup-form">
                <Tabs id="login-signup-tabs"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="login" title="Have An Account">
                        <Slide left>
                            <div className="login-form">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" className="bg-light" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="bg-light" />
                                <Button variant='outline-dark w-100' className="my-2 fw-b btn-outline-colored" onClick={Authenticate}>Login</Button>
                            </div>
                        </Slide>
                    </Tab>
                    <Tab eventKey="signup" title="Create A New Account" >
                        <Slide right>
                            <div className="login-form">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" bg="light" />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" bg="light" />
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" bg="light" />
                                <Form.Label>Enter Your Password</Form.Label>
                                <Form.Control type="password" className="rounded-pill bg-light ml-md-3 login-input" />
                                <Form.Label>Confirm Your Password</Form.Label>
                                <Form.Control type="password" />
                                <Button variant='outline-dark w-100' className="my-2 fw-b shadow-sm rounded-pill" onClick={CreateAccount}>Create Account</Button>
                            </div>
                        </Slide>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    </div>
}

export default LoginPage;
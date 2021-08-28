import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [domainName, setDomainName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  function handleNameChange(e) {
    e.preventDefault()
    setDomainName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(domainName)
    setSubmitted(true)
  }
  return <div>
    <Form.Control type="text" placeholder="Domain Name" onChange={(e) => { handleNameChange(e) }} />
    <Button onClick={e => { handleSubmit(e) }} variant="outline-primary">Submit</Button>

    <div>{submitted ? "The Value is Submitted" : ""}</div>
  </div>
}


ReactDOM.render(<div>
  <App />
</div>, document.getElementById('root'))
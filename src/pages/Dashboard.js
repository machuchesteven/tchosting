import React from 'react'
import { Container, Row, Column } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => {
    async const getUser = await fetch('127.0.0.1:8000/user/check', {
    })
        .then(res => res.json())
        .then(result => {
            console.log("results")
        })
        .catch(err => {
            console.log(err.message)
        })
    return <div>
        <Container>
            <Row>
                {getUser}
            </Row>
        </Container>
    </div>
}

export default Dashboard;
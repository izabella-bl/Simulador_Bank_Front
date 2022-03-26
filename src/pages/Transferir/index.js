import React from "react";
import {Form,Button,Card } from 'react-bootstrap';
import Header from '../../header'


const Transferir = (props) =>{

    return(
        
        <div>
             <Header> </Header>
                    <Card className="mx-auto" style={{ width: '70rem', height: '24rem'}}>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label style={{fontSize:"15px"}}>CPF do destinatário:</Form.Label>
                                    <Form.Control style={{height:"45px" , fontSize: "15px"}} type="text" placeholder="Ex:000.000.000-00"></Form.Control> 
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{fontSize:"15px"}}>Valor (R$):</Form.Label>
                                    <Form.Control style={{height:"44px" , fontSize: "15px"}} type="number" />
                                </Form.Group>

                                <Button variant="primary" type="submit" size="lg">
                                   Transferir
                                </Button>
                            </Form>
                        </Card.Body>
                     </Card>
            </div>
          
    )
} 


export default Transferir;
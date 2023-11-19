import React from "react";
import styles from './registeration.module.scss';
import { Form } from "react-bootstrap";

const Registeration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="John Doe"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your roll number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="12"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="johndoe@mail.com"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your mobile number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0123456789"
                        />
                    </Form.Group>
                </Form>
                <button className={styles.btn}>Register</button>
            </div>
        </div>
    )
}

export default Registeration;
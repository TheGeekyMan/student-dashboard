import React, { useState } from "react";
import styles from './result.module.scss';
import { Form } from "react-bootstrap";

const Result = () => {

    const [score, setScore] = useState();
    const [userInput, setUserInput] = useState();

    const generateMarks = () => {
        if (userInput && !score) {
            const marks = (Math.random() * 100).toFixed(2);
            setScore(marks);
        }
    }

    const marksColor = (marks) => {
        if (marks < 40) {
            return styles.fail;
        } else if (marks > 50) {
            return styles.pass;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your roll number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="12345"
                                onChange={(e) => setUserInput(e.target.value)}
                                disabled={score ? true : false}
                            />
                        </Form.Group>
                    </Form>
                    <button className={styles.btn} onClick={() => generateMarks()}>Show Result</button>
                </div>
                {score && <div className={styles.marksText}>
                    <p>
                        {score > 40 ? 'Congratulations!! You cleared your exams..Your score is ' : `Sorry, you didn't paased your exams..your score is `}
                        <span className={marksColor(score)}>{score}</span>
                    </p>
                </div>}
            </div>
        </div>
    )
}

export default Result;
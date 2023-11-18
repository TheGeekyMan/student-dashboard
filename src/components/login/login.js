import React, { useState } from "react";
import styles from './login.module.scss';
import { Col, Row } from "react-bootstrap";
import LoginBG from '../../assets/login.svg';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [mailId, setMailId] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        sessionStorage.setItem('email', mailId);
        navigate('/');
    }
    return (
        <Row>
            <Col className={styles.leftSide}>
                <div className={styles.form}>
                    <p className={styles.login}>Login</p>
                    <p className={styles.subLoginText}>Enter your account details</p>
                    <div style={{ paddingTop: '30px' }}>
                        <input
                            placeholder="Username"
                            type="email"
                            onChange={(e) => setMailId(e.target.value)}
                        />
                        <br />
                        <input
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <p className={styles.forgotPass}>Forgot Password?</p>
                    <button className={styles.btn} onClick={() => handleLogin()}>Login</button>
                </div>
            </Col>
            <Col className={styles.rightSide}>
                <div className={styles.textContainer}>
                    <p className={styles.heading}>Welcome to <span className={styles.subHeading}>
                        student portal</span>
                    </p>
                    <p className={styles.subTitle}>Login to access your account</p>
                </div>
                <img src={LoginBG} alt="" className={styles.loginBg} />
            </Col>
        </Row>
    )
}

export default Login;
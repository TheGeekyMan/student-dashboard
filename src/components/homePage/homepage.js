import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../sideBar/sideBar';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import styles from './homepage.module.scss';

const HomePage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sideBarContainer}>
                <SideBar />
            </div>
            <div className={styles.rightSideContainer}>
                <Header />
                <Dashboard />
            </div>
        </div>
    )
}

export default HomePage;
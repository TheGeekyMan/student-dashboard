import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/header/header";
import styles from './layout.module.scss';
import Login from "./components/login/login";

const Layout = ({ children }) => {

    const currentPathName = window.location.pathname;

    return (
        <>
            {
                currentPathName !== '/login' ?
                    <div className={styles.container}>
                        <div className={styles.sideBarContainer}>
                            <SideBar />
                        </div>
                        <div className={styles.rightSideContainer}>
                            <Header />
                            {children}
                        </div>
                    </div> 
                :
                    <Login />
            }
        </>
    )
}

export default Layout;
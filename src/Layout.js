import React from "react";
import SideBar from "./components/sideBar/sideBar";
import Header from "./components/header/header";
import styles from './layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.sideBarContainer}>
                <SideBar />
            </div>
            <div className={styles.rightSideContainer}>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Layout;
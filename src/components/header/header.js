import React, { useEffect, useState, useRef } from "react";
import styles from './header.module.scss';
import { Form } from "react-bootstrap";
import ProfileLogo from '../../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import MobileSideBar from "../sideBar/mobileSideBar";
import { sideBarData } from "../../constants/sideBarData";

const Header = () => {

    const [showSideBar, setShowSideBar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);


    const menuRef = useRef(null);
    const profileMenuRef = useRef(null);


    useEffect(() => {
        let handler = (e) => {

            if (!menuRef?.current?.contains(e.target)) {
                setShowSideBar(false)
            }

            if (!profileMenuRef?.current?.contains(e.target)) {
                setShowProfile(false)
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler, true);
        }
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div onClick={() => setShowSideBar(!showSideBar)} className={styles.sideBarMobile} ref={menuRef}>
                    {showSideBar ?
                        <FontAwesomeIcon icon={faXmark} style={{ color: "#e100ff", height: '38px', width: '30px' }} />
                        :
                        <FontAwesomeIcon icon={faBarsStaggered} style={{ color: "#e100ff", height: '38px', width: '30px' }} />
                    }
                </div>
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className={styles.searchBox}
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div style={{ display: 'flex' }} onClick={() => setShowProfile(!showProfile)} ref={profileMenuRef}>
                    <div>
                        <img src={ProfileLogo} alt="ProfileLogo" className={styles.ProfileLogo} />
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.name}>John Doe</p>
                        <p className={styles.eduYear}>3rd year</p>
                    </div>
                </div>
                {showProfile &&
                    <div className={styles.profileModal}>
                        <div>
                            <p className={styles.name}>John Doe</p>
                            <p className={styles.eduYear}>3rd year</p>
                        </div>
                    </div>
                }
            </div>
            <div ref={menuRef} onClick={()=>setShowSideBar(!showSideBar)}>
                {showSideBar && <MobileSideBar />}
            </div>
        </>
    )
}

export default Header;
import React from "react";
import styles from './mobileSideBar.module.scss';
import LogoutLogo from '../../assets/logout.svg';
import { useNavigate } from 'react-router-dom';
import { sideBarData } from "../../constants/sideBarData";


const MobileSideBar = () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('email');
        navigate('/login')
    }

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                {sideBarData.map((item, index) => {
                    return (
                        <li key={index} className={styles.menuContainer} onClick={()=>navigate(item.path)}>
                            <img src={item.logo} alt={item.logo} />
                            <span className={styles.menuItem}>{item.title}</span>
                        </li>
                    )
                })}
            </div>
            <li className={styles.logoutItem} onClick={()=>{handleLogout()}}>
                <img src={LogoutLogo} alt='LogoutLogo' />
                <span className={styles.menuItem}>Logout</span>
            </li>
        </div>
    )
}

export default MobileSideBar;
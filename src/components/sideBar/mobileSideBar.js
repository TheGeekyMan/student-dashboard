import React from "react";
import styles from './mobileSideBar.module.scss';
import DashboardLogo from '../../assets/dashboard.svg';
import PaymentInfoLogo from '../../assets/cash.svg';
import RegisterationLogo from '../../assets/pencil.svg';
import CoursesLogo from '../../assets/notebook.svg';
import DropSemesterLogo from '../../assets/dropSem.svg';
import ResultLogo from '../../assets/results.svg';
import NoticeLogo from '../../assets/notice.svg';
import ScheduleLogo from '../../assets/schedule.svg';
import LogoutLogo from '../../assets/logout.svg';
import { useNavigate } from 'react-router-dom';


const MobileSideBar = () => {

    const sideBarData = [
        { logo: DashboardLogo, title: 'Dashboard' },
        { logo: PaymentInfoLogo, title: 'Payment Info' },
        { logo: RegisterationLogo, title: 'Registeration' },
        { logo: CoursesLogo, title: 'Courses' },
        { logo: DropSemesterLogo, title: 'Drop Semester' },
        { logo: ResultLogo, title: 'Result' },
        { logo: NoticeLogo, title: 'Notice' },
        { logo: ScheduleLogo, title: 'Schedule' }
    ]

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
                        <li key={index} className={styles.menuContainer}>
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
import React from "react";
import styles from './notice.module.scss';
import { useNavigate } from "react-router-dom";

const NoticeSection = () => {

    const currentPathName = window.location.pathname;
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>Daily notice</p>
                {currentPathName !== '/notice' && <p className={styles.seeAll} onClick={()=>navigate('/notice')}>See all</p>}
            </div>
            <div className={styles.cardBody}>
                <p className={styles.heading}>Prelim payment due</p>
                <p className={styles.subHeading}>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className={styles.seeMore}>See more</p>
                <p className={styles.heading}>Exam schedule</p>
                <p className={styles.subHeading}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis.</p>
                <p className={styles.seeMore}>See more</p>
            </div>
        </div>
    )
}

export default NoticeSection;
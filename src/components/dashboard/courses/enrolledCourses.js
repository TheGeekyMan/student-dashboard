import React from "react";
import styles from './enrolledCourses.module.scss';
import OOPSLogo from '../../../assets/OOPS.svg';
import FDBMSLogo from '../../../assets/FDBMS.svg';

const EnrolledCourses = () => {

    const coursesList = [
        {logo:OOPSLogo, title:'Object oriented programming'},
        {logo:FDBMSLogo, title:'Fundamentals of database systems'}
    ]

    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>Enrolled Courses</p>
                <p className={styles.seeAll}>See all</p>
            </div>
            <div className={styles.cardContainer}>
                {coursesList.map((item,index)=>{
                    return(
                        <div className={styles.cardBody} key={index}>
                            <div className={styles.firstCol}>
                                <p className={styles.courseName}>{item.title}</p>
                                <button className={styles.btn}>View</button>
                            </div>
                            <div>
                                <img src={item.logo} alt={item.title} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnrolledCourses;
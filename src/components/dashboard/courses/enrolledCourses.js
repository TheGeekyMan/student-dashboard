import React, { useState } from "react";
import styles from './enrolledCourses.module.scss';
import { CoursesList } from "../../../constants/courses";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../shared/modal";

const EnrolledCourses = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('');

    const currentPathName = window.location.pathname;
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>Enrolled Courses</p>
                {currentPathName !== '/courses' && <p className={styles.seeAll} onClick={()=>navigate('/courses')}>See all</p>}
            </div>
            <div className={styles.cardContainer}>
                {CoursesList.map((item,index)=>{
                    return(
                        <div className={styles.cardBody} key={index}>
                            <div className={styles.firstCol}>
                                <p className={styles.courseName}>{item.title}</p>
                                <button className={styles.btn} onClick={()=>{setShowModal(!showModal);setSelectedCourse(item.title)}}>View</button>
                            </div>
                            <div>
                                <img src={item.logo} alt={item.title} />
                            </div>
                        </div>
                    )
                })}
            </div>
            {showModal && <CustomModal 
                show={showModal}
                onHide={() => setShowModal(false)}
                title={selectedCourse}
            />}
        </div>
    )
}

export default EnrolledCourses;
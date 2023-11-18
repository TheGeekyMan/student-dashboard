import React from "react";
import styles from './instructor.module.scss';
import InstructorLogo1 from '../../../assets/instructor1.svg';
import InstructorLogo2 from '../../../assets/instructor2.svg';
import InstructorLogo3 from '../../../assets/instructor3.svg';

const Instructors = () => {

    const instructorList = [
        { logo: InstructorLogo1 },
        { logo: InstructorLogo2 },
        { logo: InstructorLogo3 }
    ]

    return (
        <div className={styles.container}>
            <p className={styles.title}>Course intructors</p>
            <div className={styles.images}>
                {instructorList.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.logo} alt='instructor' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Instructors;
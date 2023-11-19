import React from "react";
import { ScheduleList } from "../../constants/constants";
import styles from './schedule.module.scss';

const Schedule = () => {
    return(
        <div className={styles.container}>
            <p className={styles.title}>Schedule</p>
            <div className={styles.content}>
                {ScheduleList.map((item,index)=>{
                    return(
                        <ul key={index}>
                            <li className={styles.listTitle}>{item.title}</li>
                            <p className={styles.listSubTitle}>{item.subTitle}</p>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Schedule;
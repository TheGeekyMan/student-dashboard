import React from 'react';
import HomePageBanner from '../dashboard/banner/homePageBanner';
import FinananceCard from './finanace/finanace';
import EnrolledCourses from './courses/enrolledCourses';
import NoticeSection from './notice/notice';
import styles from './dashboard.module.scss';
import Instructors from './instructor/instructor';

const Dashboard = () => {
    return (
        <div style={{ paddingBottom: '20px' }}>
            <HomePageBanner />
            <div className={styles.compContainer}>
                <div>
                    <FinananceCard />
                    <EnrolledCourses />
                </div>
                <div>
                    <Instructors />
                    <NoticeSection />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
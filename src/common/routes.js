import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from '../components/payment/payment';
import Registeration from '../components/registeration/registeration';
import Courses from '../components/courses/courses';
import DropSem from '../components/dropSemester/dropSem';
import Result from '../components/result/result';
import Schedule from '../components/schedule/schedule';
import Notice from '../components/notice/notice';
import Homepage from '../components/homePage/homepage';
import Login from '../components/login/login';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/paymentInfo" element={<Payment />} />
            <Route path="/registeration" element={<Registeration />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/dropSemester" element={<DropSem />} />
            <Route path="/result" element={<Result />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
    )
}

export default RoutesComponent;
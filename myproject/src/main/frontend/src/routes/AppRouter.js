import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoScreen from "../screens/VideoScreen"; // ✅ 비디오 화면 추가
import HomeScreen from '../screens/HomeScreen';//홈

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideoScreen />} /> {/* 기본 화면 = 비디오 */}
                <Route path="/home" element={<HomeScreen />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
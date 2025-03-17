import React from "react";
import "../App.css";
import Header from "../components/Menu/Header"; // 헤더 추가
import Navbar from "../components/Menu/Navbar"; // 네비게이션 추가
import ImageSlider from "../components/Slider/ImageSlider"; // 슬라이드 추가

const HomeScreen = () => {
  return (
    <div className="container">
      <Header /> {/* 헤더 */}
      <ImageSlider /> {/* 이미지 슬라이드 */}

      {/* 리스트 */}
      <div className="list-container">
        <div className="item">
          <div className="item-image-container"> {/* ✅ 이미지 감싸는 div 추가 */}
            <img src="https://img.lovepik.com/photo/48004/3257.jpg_wh860.jpg" alt="item" />
          </div>
          <div className="item-info">
            <h3>BAG</h3>
            <h2>LEATER BAG</h2>
            <p>A leather bag handmade by Italian craftsman</p>
            <span className="price">89,000₩</span>
          </div>
        </div>

        <div className="item">
          <div className="item-image-container"> {/* ✅ 이미지 감싸는 div 추가 */}
            <img src="https://png.pngtree.com/png-clipart/20240902/original/pngtree-a-white-skirt-with-that-says-on-transparent-background-png-image_15917499.png" alt="item" />
          </div>
          <div className="item-info">
            <h3>BOTTMS</h3>
            <h2>PLEATS SKIRT</h2>
            <span className="price">39,000₩</span>
            <p>A leather bag handmade by Italian craftsman</p>
          </div>
        </div>

        <div className="item">
          <div className="item-image-container"> {/* ✅ 이미지 감싸는 div 추가 */}
            <img src="https://via.placeholder.com/150" alt="item" />
          </div>
          <div className="item-info">
            <h2>Item 3 <span className="price">10,000₩</span></h2>
            <p>Item Detail 3</p>
            <p>count: 1</p>
          </div>
        </div>
      </div>

      <Navbar /> {/* 하단 네비게이션 */}
    </div>
  );
};

export default HomeScreen;

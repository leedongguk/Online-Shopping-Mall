import React from "react";
import "../../css/Navbar.css"; // ✅ CSS 적용
import { IoHomeOutline, IoSearchOutline, IoCartOutline } from "react-icons/io5"; // 아이콘 추가
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="nav-button" onClick={() => navigate("/")}>
        <IoHomeOutline size={24} />
      </button>
      <button className="nav-button" onClick={() => navigate("/search")}>
        <IoSearchOutline size={24} />
      </button>
      <button className="nav-button" onClick={() => navigate("/cart")}>
        <IoCartOutline size={24} />
      </button>
    </div>
  );
};

export default Navbar;

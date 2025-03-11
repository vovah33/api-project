import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/nav.css";

const Nav = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="navbar">
      {/* Slogan line */}
      <div className="nav-line">
        <p>Ніколи не бійся і не кради!</p>
      </div>

      {/* Menu */}
      <nav className="menu">
        <Link to="/">Домашня сторінка</Link>
        <Link to="/go-opl">ГО ОПЛ</Link>
        <Link to="/masterclass">Майстер-класи</Link>
        <Link to="/language">Мова</Link>
        <Link to="/municipality">Самоврядування</Link>

        {/* Авторизація */}
        <div className="auth-buttons">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="auth-btn">
                Особистий кабінет
              </Link>
              <button className="auth-btn logout-btn" onClick={logout}>
                Вийти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-btn login-btn">
                Увійти
              </Link>
              <Link to="/register" className="auth-btn register-btn">
                CORS ERROR HIER
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

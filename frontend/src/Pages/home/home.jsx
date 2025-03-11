import React from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
import Plate from './Plate';
import '../../styles/home.css';
import plateImage from '../../assets/images/home/Тарілка.jpg';
import Nav from '../../Components/nav';

const Home = () => {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <section>
          <Background />
        </section>

        <section className="plates">
          <div className="grid">
            <Plate
              link="/go-opl"  // 🔥 Замість "./GO-OPL/go-opl.html"
              image={plateImage}
              alt="Виготовлення іграшок"
              description="ГО ОПЛ"
            />
            <Plate
              link="/masterclass"  // 🔥 Замість "./MasterClass/masterclass.html"
              image={plateImage}
              alt="Ліплення"
              description="Майстер-класи"
            />
            <Plate
              link="/municipality"  // 🔥 Замість "municipality.html"
              image={plateImage}
              alt="Виготовлення тарілок"
              description="Самоврядування"
            />
            <Plate
              link="/profile"  // 🔥 Наприклад, зробимо четверту кнопку для профілю
              image={plateImage}
              alt="Профіль"
              description="Особистий кабінет"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

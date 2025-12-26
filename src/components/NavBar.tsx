import { NavLink } from "react-router";
import burger from "../assets/burger.svg";
import { useState } from "react";
import cn from "../utils/tailwindMerge";

export default function NavBar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const handleBurgerClick = () => setBurgerOpen(!burgerOpen);

  return (
    <>
      <nav className="bg-white relative z-50">
        <div className="container">
          <ul className="flex gap-10 justify-end items-center text-black-text py-8 max-xl:py-6 max-md:py-4">
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/to_students">Студентам</NavLink>
            </li>
            <li>
              <NavLink to="/to_universities">Вузам</NavLink>
            </li>
            <li className="max-lg:hidden">
              <a href="https://privet-web-steel.vercel.app/">
                Веб-приложение ↗
              </a>
            </li>
            <li className="lg:hidden">
              <div className="cursor-pointer" onClick={handleBurgerClick}>
                <img src={burger} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={cn(
          "pb-2 pr-5 flex justify-end transition-ease duration-350 absolute bg-white w-screen z-10 top-14 opacity-0",
          burgerOpen ? "opacity-100" : "invisible"
        )}
      >
        <a href="https://privet-web-steel.vercel.app/">Веб-приложение ↗</a>
      </div>
    </>
  );
}

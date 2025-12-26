import { NavLink } from "react-router";
// import ru_flag from "../assets/ru_flag.svg";

export default function NavBar() {
  return (
    <nav className="bg-white">
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
          <li>
            <a href="https://privet-web-steel.vercel.app/">Веб-приложение ↗</a>
          </li>
          {/* <li>
            <div className="border-2 border-primary-yellow rounded-[10px] p-1.75">
              <img src={ru_flag} alt="" className="h-[44.8px] w-[44.8px]" />
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

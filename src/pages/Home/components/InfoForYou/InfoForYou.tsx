import students from "../../../../assets/students.svg";
import managers from "../../../../assets/managers.svg";
import laptop from "../../../../assets/laptop.svg";
import { NavLink } from "react-router";

export default function InfoForYou() {
  return (
    <div className="space-y-20">
      <h3>Посмотрите информацию для вас</h3>
      <div className="flex flex-wrap justify-between gap-2 max-2xl:gap-20 max-xl:gap-15 max-2xl:justify-center items-center [&_img]:h-65">
        <div className="w-112.5 flex flex-col gap-10 justify-center items-center">
          <img src={students} alt="" />
          <NavLink className="btn-secondary" to="/students">
            Иностранным студентам ↗
          </NavLink>
        </div>
        <div className="w-112.5 flex flex-col gap-10 justify-center items-center">
          <img src={managers} alt="" />
          <NavLink className="btn-secondary" to="/universities">
            Менеджерам вузов ↗
          </NavLink>
        </div>
        <div className="w-112.5 flex flex-col gap-10 justify-center items-center">
          <img src={laptop} alt="" />
          <a
            href="https://privet-web-steel.vercel.app/"
            className="btn-secondary"
          >
            Веб-приложение ↗
          </a>
        </div>
      </div>
    </div>
  );
}

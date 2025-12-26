import logo from "../../../../assets/logo_privet.svg";
import AppStores from "../../../../components/AppStores";

export default function HomeBanner() {
  return (
    <div>
      <div>
        <img src={logo} alt="" />
        <div className="mt-5">
          <p>
            Приложение для легализации и адаптации
            <br />
            иностранных студентов в России
          </p>
        </div>
      </div>
      <AppStores />
    </div>
  );
}

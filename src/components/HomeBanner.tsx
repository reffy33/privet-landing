import logo from "../assets/logo_privet.svg";
import banner_img from "../assets/banner_illustration.svg";
import AppStores from "./AppStores";

export default function HomeBanner() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 grid-row-2 max-md:grid-row-1 gap-x-20 max-lg:gap-x-5 gap-y-9 max-md:gap-y-5">
      <div className="order-1 max-xl:col-span-2 max-md:col-span-1">
        <img src={logo} alt="" />
        <div className="mt-5">
          <p>
            Приложение для легализации и адаптации
            <br />
            иностранных студентов в России
          </p>
        </div>
      </div>

      <div className="order-3 max-xl:row-span-3">
        <AppStores className="max-xl:items-center" />
      </div>

      <div className="row-span-3 order-2 max-xl:order-3 max-md:order-2 max-md:justify-self-center">
        <img src={banner_img} alt="" className="h-full max-lg:max-w-52.75" />
      </div>
    </div>
  );
}

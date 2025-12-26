import btn_rustore from "../assets/btn_rustore.svg";
import btn_playmarket from "../assets/btn_playmarket.svg";
import btn_appstore from "../assets/btn_appstore.svg";
import cn from "../utils/tailwindMerge";

export default function AppStores({
  className,
  variant,
}: {
  className?: string;
  variant?: "row" | "column";
}) {
  return (
    <div
      className={cn(
        "flex",
        variant === undefined || variant === "row"
          ? "gap-[20.5px] items-end"
          : "",
        variant === "column" ? "flex-col gap-9" : "",
        "max-xl:flex-col max-xl:gap-9 max-md:gap-4.5",
        className
      )}
    >
      <a href="https://www.rustore.ru/catalog/app/com.cuties.privet">
        <div>
          <img src={btn_rustore} alt="" className="max-xl:max-w-53.75 max-lg:max-w-35" />
        </div>
      </a>
      <div className="flex flex-col gap-2 text-center text-[#B8B8B8] text-[24px] ">
        <span>Скоро</span>
        <img src={btn_playmarket} alt="" className="max-xl:max-w-53.75 max-lg:max-w-35" />
      </div>
      <div className="flex flex-col gap-2 text-center text-[#B8B8B8] text-[24px] ">
        <span>Скоро</span>
        <img src={btn_appstore} alt="" className="max-xl:max-w-53.75 max-lg:max-w-35" />
      </div>
    </div>
  );
}

import btn_rustore from "../assets/btn_rustore.svg";
import btn_playmarket from "../assets/btn_playmarket.svg";
import btn_appstore from "../assets/btn_appstore.svg";
import cn from "../utils/tailwindMerge";

export default function AppStores({ variant }: { variant?: "row" | "column" }) {
  return (
    <div
      className={cn(
        "flex",
        variant === undefined || variant === "row"
          ? "gap-[20.5px] items-end mt-9"
          : "",
        variant === "column" ? "flex-col gap-9" : ""
      )}
    >
      <a href="https://www.rustore.ru/catalog/app/com.cuties.privet">
        <div>
          <img src={btn_rustore} alt="" />
        </div>
      </a>
      <div className="flex flex-col gap-2 text-center text-[#B8B8B8] text-[24px]">
        <span>Скоро</span>
        <img src={btn_playmarket} alt="" />
      </div>
      <div className="flex flex-col gap-2 text-center text-[#B8B8B8] text-[24px]">
        <span>Скоро</span>
        <img src={btn_appstore} alt="" />
      </div>
    </div>
  );
}

import en from "../../../../assets/english_app.png";
import ch from "../../../../assets/chinese_app.png";
import ar from "../../../../assets/arab_app.png";
import AppStores from "../../../../components/AppStores";

export default function AppInYourLanguage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3>Приложение на вашем языке</h3>
        <p>Приложение переведено на 3 языка: английский, китайский, арабский</p>
      </div>
      <div className="flex max-2xl:flex-col items-center gap-10">
        <img src={en} alt="" />
        <img src={ch} alt="" />
        <img src={ar} alt="" />
        <div className="flex flex-col items-center space-y-9">
          <p>Скачать приложение:</p>
          <AppStores variant="column" />
        </div>
      </div>
    </div>
  );
}

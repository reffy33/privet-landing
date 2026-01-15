import HomeBanner from "../../components/HomeBanner";
import AppInYourLanguage from "./components/AppInYourLanguage/AppInYourLanguage";
import EasyLegalization from "./components/EasyLegalization/EasyLegalization";
import Pricing from "./components/Pricing/Pricing";

export default function ToStudents() {
  return (
    <>
      <HomeBanner />
      <EasyLegalization />
      <AppInYourLanguage />
      <Pricing />
    </>
  );
}

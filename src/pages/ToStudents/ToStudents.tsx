import HomeBanner from "../../components/HomeBanner";
import AppInYourLanguage from "./components/AppInYourLanguage/AppInYourLanguage";
import EasyLegalization from "./components/EasyLegalization/EasyLegalization";
import StudentForm from "./components/StudentForm/StudentForm";

export default function ToStudents() {
  return (
    <>
      <HomeBanner />
      <EasyLegalization />
      <AppInYourLanguage />
      <StudentForm />
    </>
  );
}

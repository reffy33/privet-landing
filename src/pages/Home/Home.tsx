import StudentForm from "../ToStudents/components/StudentForm";
import AppInYourLanguage from "./components/AppInYourLanguage/AppInYourLanguage";
import EasyLegalization from "./components/EasyLegalization/EasyLegalization";
import HomeBanner from "./components/HomeBanner/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <EasyLegalization />
      <AppInYourLanguage />
      <StudentForm />
    </>
  );
}

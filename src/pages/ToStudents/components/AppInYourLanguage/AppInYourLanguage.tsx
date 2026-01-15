import en from '../../../../assets/english_app.png'
import ch from '../../../../assets/chinese_app.png'
import ar from '../../../../assets/arab_app.png'
import AppStores from '../../../../components/AppStores'
import StudentSection from '../StudentSection/StudentSection'

export default function AppInYourLanguage() {
  return (
    <StudentSection>
      <StudentSection.Header>
        <h3>Приложение на вашем языке</h3>
        <p>Приложение переведено на 3 языка: английский, китайский, арабский</p>
      </StudentSection.Header>
      <div className="flex items-center gap-10 max-[1680px]:flex-col">
        <div className="flex items-center gap-10 max-3xl:flex-col">
          <img src={en} alt="" />
          <img src={ch} alt="" />
          <img src={ar} alt="" />
        </div>
        <div className="flex flex-col items-center space-y-9">
          <p>Скачать приложение:</p>
          <AppStores variant="column" />
        </div>
      </div>
    </StudentSection>
  )
}

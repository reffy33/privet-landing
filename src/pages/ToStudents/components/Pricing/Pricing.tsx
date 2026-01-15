import StudentSection from '../StudentSection/StudentSection'
import { Pricing1col, Pricing2cols, Pricing3cols } from './PricingLayouts'

export default function Pricing() {
  return (
    <StudentSection>
      <StudentSection.Header>
        <h3>Стоимость услуг</h3>
        <p>
          В приложении три тарифа: бесплатный, онлайн-сопровождение и очное
          сопровождение
        </p>
      </StudentSection.Header>

      <Pricing3cols className="max-3xl:hidden" />
      <Pricing2cols className="max-xl:hidden 3xl:hidden" />
      <Pricing1col className="xl:hidden" />
    </StudentSection>
  )
}

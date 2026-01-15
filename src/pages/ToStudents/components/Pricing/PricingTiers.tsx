import type { ReactNode } from 'react'

export function FreeTier() {
  return (
    <>
      <Wrapper>
        <p>Бесплатный тариф:</p>
        <ListWrapper>
          <li>3 задачи по легализации в&nbsp;вашем&nbsp;вузе</li>
          <li>все подсказки</li>
          <li>все маршруты</li>
          <li>профиль</li>
        </ListWrapper>
      </Wrapper>
      <p className="font-bold">Стоимость: бесплатно</p>
    </>
  )
}

export function OnlineTier() {
  return (
    <>
      <Wrapper>
        <p>Онлайн-сопровождение: всё от предыдущего тарифа, плюс:</p>
        <ListWrapper>
          <li>все задачи по легализации в&nbsp;вашем вузе</li>
          <li>сопровождающий на связи в&nbsp;мессенджере</li>
        </ListWrapper>
      </Wrapper>
      <p className="font-bold">Стоимость: 5000₽</p>
    </>
  )
}

export function FullTier() {
  return (
    <>
      <Wrapper>
        <p>Очное сопровождение: всё от предыдущего тарифа, плюс:</p>
        <ListWrapper>
          <li>сопровождающий, который поможет пройти все инстанции</li>
          <li>сопровождающий всегда на связи в&nbsp;мессенджере</li>
        </ListWrapper>
      </Wrapper>
      <p className="font-bold">Стоимость: 20&nbsp;000₽</p>
    </>
  )
}

function Wrapper({ children }: { children: ReactNode }) {
  return <div className="space-y-6">{children}</div>
}

function ListWrapper({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-6 pl-7.5">{children}</ul>
}

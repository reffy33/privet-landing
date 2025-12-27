export default function Footer() {
  return (
    <footer className="bg-white py-10 ">
      <div className="container flex max-lg:flex-col gap-9">
        <div className="flex-1">
          <h4>Документы</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="docs/Политика конфиденциальности.docx" target="_blank">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="docs/Пользовательское соглашение.docx">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="docs/Оферта.docx">Оферта</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-6">
          <h4>Правовая информация</h4>
          <p>© 2025, ООО «ПРИВЕТ», все права защищены</p>
        </div>
      </div>
    </footer>
  );
}

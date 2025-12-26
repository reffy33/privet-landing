export default function Footer() {
  return (
    <footer className="bg-white py-10 text-[24px]">
      <div className="container flex gap-9">
        <div className="flex-1">
          <h4>Документы</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="">Оферта</a>
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

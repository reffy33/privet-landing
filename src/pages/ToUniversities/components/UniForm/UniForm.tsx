import { useState } from "react";

export default function UniForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = JSON.stringify({ name, email });
    localStorage.setItem("lastUniForm", value);
    setSuccess(true);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-15 rounded-2xl space-y-9 ">
          <div className="space-y-6 w-90">
            <div className="input-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Иванов Иван Иванович"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Электронная почта</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="university@uni.ru"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit">Отправить</button>
          </div>
          {isSuccess && (
            <div className="text-[20px] space-y-4">
              <p>✅ Получили вашу заявку</p>
              <p>⌛ Свяжемся в течение 24 часов</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

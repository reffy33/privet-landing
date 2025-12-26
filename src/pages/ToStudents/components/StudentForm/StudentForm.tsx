import { useState } from "react";
import cn from "../../../../utils/tailwindMerge";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [uni, setUni] = useState("");
  const [uniError, setUniError] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrors();
    setSuccess(false);

    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const uniValid = validateUni();

    if (nameValid && emailValid && phoneValid && uniValid) {
      const value = JSON.stringify({ name, email, phone, uni });
      localStorage.setItem("lastStudentForm", value);
      setSuccess(true);
    }
  };

  function clearErrors() {
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setUniError("");
  }

  function validateName() {
    if (name === "") {
      setNameError('Поле "Имя" обязательно для заполнения');
      return false;
    }

    if (name.length < 2) {
      setNameError("Имя должно содержать минимум 2 символа");
      return false;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name)) {
      setNameError("Имя может содержать только буквы и пробелы");
      return false;
    }

    return true;
  }

  function validateEmail() {
    if (email === "") {
      setEmailError('Поле "E-mail" обязательно для заполнения');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Введите корректный email адрес");
      return false;
    }

    return true;
  }

  function validateUni() {
    if (uni === "") {
      setUniError('Поле "Универстит" обязательно для заполнения');
      return false;
    }

    if (uni.length < 2) {
      setUniError("Университет должен содержать минимум 2 символа");
      return false;
    }

    if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(uni)) {
      setUniError("Универстит может содержать только буквы и пробелы");
      return false;
    }

    return true;
  }

  function validatePhone() {
    if (phone === "") {
      setPhoneError('Поле "Телефон" обязательно для заполнения');
      return false;
    }

    if (phone.length < 10) {
      setPhoneError("Номер телефона должен содержать минимум 10 цифр");
      return false;
    }

    return true;
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className={cn("form-wrapper", isSuccess ? "form-success" : "")}>
          <div className="form-inputs">
            <div className="input-group">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Иванов Иван Иванович"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="form-error">{nameError}</span>
            </div>
            <div className="input-group">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (XXX) XXX-XX-XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <span className="form-error">{phoneError}</span>
            </div>
            <div className="input-group">
              <label htmlFor="email">Электронная почта</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="student@uni.ru"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="form-error">{emailError}</span>
            </div>
            <div className="input-group">
              <label htmlFor="uni">Название вуза в который вы поступили</label>
              <input
                type="text"
                id="uni"
                name="uni"
                placeholder="УрФУ"
                value={uni}
                onChange={(e) => setUni(e.target.value)}
              />
              <span className="form-error">{uniError}</span>
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

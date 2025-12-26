import todo from "../../../../assets/todo.svg";
import tips from "../../../../assets/tips.svg";
import chat from "../../../../assets/chat.svg";
import route from "../../../../assets/route.svg";
import profile from "../../../../assets/profile.svg";

const resourses = [
  {
    title: "Список задач",
    icon: todo,
    listTitle: "Чек-лист легализации и адаптации в конкретном вузе России:",
    list: ["что делать", "в каком порядке", "куда идти"],
  },
  {
    title: "Подсказки",
    icon: tips,
    listTitle: "Полезная информация в России:",
    list: [
      "визовый режим",
      "магазины, аптеки",
      "правила проживания в общежитии",
    ],
  },
  {
    title: "Мессенджер",
    icon: chat,
    listTitle: "Связь с менеджером и сопровождающим:",
    list: ["сообщения", "изображения", "перевод сообщений (скоро)"],
    disabeledListItems: ["перевод сообщений (скоро)"],
  },
  {
    title: "Маршрут",
    icon: route,
    listTitle: "Ссылки на законы о легализации",
  },
  {
    title: "Профиль",
    icon: profile,
    listTitle: "Личная информация о студенте",
  },
];

export default resourses;

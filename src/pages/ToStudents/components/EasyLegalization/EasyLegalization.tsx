import resourses from "./EasyLegalization.data";
import ScreenBlock from "./ScreenBlock";

export default function EasyLegalization() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3>Упрощаем твою легализацию в России</h3>
        <p>
          Собрали полезную информацию и функционал для иностранных студентов
        </p>
      </div>
      <div className="flex max-xl:flex-col w-full flex-0 flex-wrap justify-center max-xl:items-center gap-x-5 gap-y-20 max-xl:gap-y-15">
        {resourses.map((item) => (
          <ScreenBlock>
            <ScreenBlock.Header icon={item.icon}>
              {item.title}
            </ScreenBlock.Header>
            <ScreenBlock.Description>
              <p className={item.list === undefined ? "text-center" : ""}>
                {item.listTitle}
              </p>
              <ScreenBlock.List>
                {item.list?.map((listItem) => (
                  <li
                    className={
                      item.disabeledListItems?.includes(listItem)
                        ? "text-[#B8B8B8]"
                        : ""
                    }
                  >
                    {listItem}
                  </li>
                ))}
              </ScreenBlock.List>
            </ScreenBlock.Description>
          </ScreenBlock>
        ))}
      </div>
    </div>
  );
}

import UniBlock from "./components/UniBlock/UniBlock";
import resourses from "./ToUniversities.data";

export default function ToUniversities() {
  return (
    <>
      {resourses.map((item) => (
        <UniBlock key={item.title}>
          <UniBlock.Text>
            <h3>{item.title}</h3>
            {item.texts?.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <UniBlock.List>
              {item.list?.map((listItem) => (
                <li key={listItem}>{listItem}</li>
              ))}
            </UniBlock.List>
          </UniBlock.Text>
          <UniBlock.Image src={item.image} />
        </UniBlock>
      ))}
    </>
  );
}

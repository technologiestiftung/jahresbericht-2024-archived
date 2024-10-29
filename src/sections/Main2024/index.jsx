import NewIcons from "../../components/NewIcons";
import cn from "./Main2024.module.scss";

function MainSection({ content, icon }) {
  const { title, text } = content;
  return (
    <section className={cn.wrapper} id={icon}>
      <div className={cn.content}>
        {icon && <div>{!!icon && <NewIcons type={icon} />}</div>}
        <div>
          <h2 className={cn.title}>{title}</h2>
          <p className={cn.subTitle}>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;

import content2024 from "../../content2024";
import cn from "./Outro.module.scss";
import Button from "../../components/Button";

function Outro() {
  return (
    <div className={cn.wrapper}>
      <h2 dangerouslySetInnerHTML={{ __html: content2024.outro.title }} />
      <div className={cn.content}>
        {content2024.outro.content.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: item.content }} />
            <Button to={item.link} label={item.btnText} />
          </div>
        ))}
      </div>
      <h4 className={cn.sub}>{content2024.outro.sub}</h4>
      <div className={cn.logoWrapper}>
        {content2024.outro.logos.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} />
        ))}
      </div>
    </div>
  );
}

export default Outro;

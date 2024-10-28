import content2024 from "../../content2024";
import cn from "./Intro.module.scss";

function Intro() {
  const { headline, logo, header } = content2024.intro;
  return (
    <div className={cn.wrapper}>
      <div>
        <div>
          <img className={cn.logo} src={logo.src} alt={logo.alt} />
          <h2
            className={cn.headline}
            dangerouslySetInnerHTML={{ __html: headline }}
          />
        </div>
        <div>
          <img className={cn.header} src={header.src} alt={header.alt} />
        </div>
      </div>
    </div>
  );
}

export default Intro;

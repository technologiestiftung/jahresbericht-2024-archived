import content2024 from "../../content2024";
import cn from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className={cn.wrapper}>
        <div className={cn.logos}>
          {content2024.footer.icons.map((item, index) => (
            <a key={index} href={item.link} rel='noreferrer' target='_blank'>
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
      <div className={cn.last}>
        <div>
          <p className={cn.paragrah}>{content2024.footer.title}</p>
          <div>
            {content2024.footer.links.map((item, index) => (
              <a key={index} href={item.link} rel='noreferrer' target='_blank'>
                <p className={cn.paragrah}>{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

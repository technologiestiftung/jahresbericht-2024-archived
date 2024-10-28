import { useEffect, useRef, useState } from "react";
import cn from "./Sticky.module.scss";
import cx from "classnames";
import Button from "../../components/Button";

function Sticky({ content }) {
  const sectionRef = useRef(null);
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (
        content?.length === 2 &&
        firstContainerRef.current &&
        secondContainerRef.current
      ) {
        const firstRect = firstContainerRef.current.getBoundingClientRect();
        const secondRect = secondContainerRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (firstRect.bottom >= 0 && firstRect.top <= windowHeight) {
          setIsFirstVisible(true);
        } else if (secondRect.top <= windowHeight && secondRect.bottom >= 0) {
          setIsFirstVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!content) return <></>;

  return (
    <section className={cn.wrapper} ref={sectionRef}>
      <div className={cn.bg}>
        {isFirstVisible && <img src={content[0].img.src} />}
        {!isFirstVisible && content?.length === 2 && (
          <img src={content[1].img.src} />
        )}
      </div>
      <div className={cn.content}>
        {content.map((current, index) => (
          <div
            className={cx(cn.container, !index ? cn.first : cn.second)}
            ref={!index ? firstContainerRef : secondContainerRef}
            key={current.id}
          >
            <p className={cn.sub}>{current.sub}</p>
            <h4>{current.title}</h4>
            <p className={cn.paragraph}>{current.paragraph}</p>
            <Button to={current.link.href} label={current.link.btnText} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sticky;

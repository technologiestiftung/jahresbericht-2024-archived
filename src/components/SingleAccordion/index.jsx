import { useEffect, useRef, useState } from "react";
import cn from "./SingleAccordion.module.scss";

function SingleAccordion({ content, title = "Vorwort lesen" }) {
  const clickEl = useRef();
  const panelEl = useRef();
  const [isOpen, setOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const clickHandler = () => {
    return setOpen(!isOpen);
    if (!isOpen) {
      window.setTimeout(
        () =>
          clickEl.current.scrollIntoView({
            block: "start",
            behavior: "smooth",
          }),
        400
      );
    }
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (panelEl.current) {
      setScrollHeight(panelEl.current.scrollHeight);
    }
  }, [panelEl.current]);

  return (
    <div className={cn.accordion} id={`accordion-${Math.random()}`}>
      <div
        className={cn.clickable}
        onClick={e => clickHandler(e)}
        ref={clickEl}
      >
        <img
          src='assets/ui/arrow-down.png'
          alt='arrow-down'
          className={isOpen ? cn.turned : ""}
        />
        <p className={cn.title}>{title}</p>
      </div>
      <div
        className={cn.panel}
        style={isOpen ? { maxHeight: scrollHeight + 60 } : { maxHeight: "0px" }}
      >
        <div ref={panelEl} className={cn.paragraph}>
          <p
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleAccordion;

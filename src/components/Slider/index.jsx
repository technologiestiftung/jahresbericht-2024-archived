import { useRef, useState, useEffect } from "react";
import cn from "./Slider.module.scss";
import content2024 from "../../content2024";
import Button from "../Button";

const Slider = () => {
  const [indexActive, indexActiveSet] = useState(0);

  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderGap = 28;

  useEffect(() => {
    if (sliderRef.current && !sliderWidth) {
      const elementWidth = sliderRef.current.getBoundingClientRect().width;
      setSliderWidth(elementWidth + sliderGap);
    }
  }, []);

  return (
    <div className={cn.rueckblick}>
      <h2>Unser Jahr im Rückblick</h2>
      <div className={cn.sliderWrapper}>
        <img
          src='assets/ui/arrow-left.png'
          alt='arrow'
          className={cn.arrow}
          onClick={() => {
            if (indexActive - 1 < 0)
              return indexActiveSet(content2024.rueckblick.length - 1);
            indexActiveSet(indexActive - 1);
          }}
        />
        <div className={cn.sliderNew}>
          <div
            className={cn.contentSlider}
            style={{
              transform: `translateX(${sliderWidth * -indexActive}px)`,
              gap: `${sliderGap}px`,
            }}
          >
            {content2024.rueckblick.map((slide, index) => (
              <div
                className={cn.slide}
                key={index}
                ref={index === 0 ? sliderRef : null}
                style={{
                  flexDirection:
                    slide.placeImage === "right" ? "row" : "row-reverse",
                }}
              >
                <div className={cn.content}>
                  <h4>{slide.title}</h4>
                  <p>{slide.content}</p>
                  <Button to={slide.link} label={slide.btnText} />
                </div>
                <div
                  className={cn.bg}
                  style={{ backgroundImage: `url(${slide.img.src})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <img
          src='assets/ui/arrow-right.png'
          alt='arrow'
          className={cn.arrow}
          onClick={() => {
            if (indexActive + 1 === content2024.rueckblick.length)
              return indexActiveSet(0);
            indexActiveSet(indexActive + 1);
          }}
        />
      </div>
      <div className={cn.nav}>
        <p>
          {indexActive + 1} / {content2024.rueckblick.length}
        </p>
      </div>
    </div>
  );
};

export default Slider;

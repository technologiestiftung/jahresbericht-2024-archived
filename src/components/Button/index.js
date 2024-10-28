import { useState } from "react";
import cn from "./Button.module.scss";

function Button({ to, label = "Hier gehts lang..." }) {
  const [arrow, setArrow] = useState("assets/ui/pfeil-right.png");
  return (
    <a
      className={cn.btn}
      href={to}
      rel='noreferrer'
      target='_blank'
      onMouseEnter={() => setArrow("assets/ui/pfeil-right-white.png")}
      onMouseLeave={() => setArrow("assets/ui/pfeil-right.png")}
    >
      <img src={arrow} alt='arrow' />
      <p>{label}</p>
    </a>
  );
}

export default Button;

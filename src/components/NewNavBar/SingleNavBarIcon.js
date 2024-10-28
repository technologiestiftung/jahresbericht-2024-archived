import cx from "classnames";
import cn from "./NewNarbar.module.scss";
import { useState } from "react";

function SingleNavBarIcon({ icon, name }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn.icon}>{icon}</div>
      {isHovered && (
        <div className={cx(cn.speechBubble, cn.right)}>
          <p>{name}</p>
        </div>
      )}
    </div>
  );
}

export default SingleNavBarIcon;

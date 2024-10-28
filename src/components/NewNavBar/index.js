import { useState } from "react";
import cx from "classnames";
import cn from "./NewNarbar.module.scss";

import { ReactComponent as SmartCityIcon } from "../../icons/Smart-City.svg";
import { ReactComponent as NeueTechnologienIcon } from "../../icons/Neue-Technologien.svg";
import { ReactComponent as KulturIcon } from "../../icons/Kultur.svg";
import { ReactComponent as BildungIcon } from "../../icons/Bildung.svg";
import { ReactComponent as PrototypingIcon } from "../../icons/Prototyping.svg";
import { ReactComponent as WeiteresIcon } from "../../icons/Weiteres.svg";
import { ReactComponent as UpIcon } from "../../icons/arrow-up.svg";
import SingleNavBarIcon from "./SingleNavBarIcon";

function NewNarbar() {
  const [activeLabel, setActiveLabel] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const icons = [
    { name: "Smart City", icon: <SmartCityIcon /> },
    {
      name: "Neue Technologien",
      icon: <NeueTechnologienIcon />,
    },
    {
      name: "Kultur",
      icon: <KulturIcon />,
    },
    {
      name: "Bildung",
      icon: <BildungIcon />,
    },
    {
      name: "Prototyping",
      icon: <PrototypingIcon />,
    },
    {
      name: "Weiteres",
      id: "weitere-aktivitaeten",
      icon: <WeiteresIcon />,
    },
  ];

  return (
    <div className={cn.wrapper}>
      <div className={cn.main}>
        {icons.map((icon, index) => (
          <div
            key={index}
            onClick={() => {
              const getID =
                icon.id || icon.name.toLowerCase().replace(" ", "-");
              const section = document.getElementById(getID);
              console.log(getID, section);
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <SingleNavBarIcon icon={icon.icon} name={icon.name} />
          </div>
        ))}
      </div>
      <div
        className={cn.jump}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <UpIcon />
      </div>
    </div>
  );
}

export default NewNarbar;

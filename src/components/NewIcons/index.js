import cn from "./Icon.module.scss";

function NewIcons({ type }) {
  return (
    <div className={cn.iconWrapper}>
      {type === "smart-city" && (
        <img src='assets/icons/Kapitel-Smart-City.png' alt='Icon Smart City' />
      )}
      {type === "neue-technologien" && (
        <img
          src='assets/icons/Kapitel-Neue-Technologien.png'
          alt='Icon Neue Technologien'
        />
      )}
      {type === "kultur" && (
        <img src='assets/icons/Kapitel-Kultur.png' alt='Icon Kultur' />
      )}
      {type === "bildung" && (
        <img src='assets/icons/Kapitel-Bildung.png' alt='Icon Bildungy' />
      )}
      {type === "protyping" && (
        <img src='assets/icons/Kapitel-Protyping.png' alt='Icon Protyping' />
      )}
      {type === "weitere-aktivitaeten" && (
        <img
          src='assets/icons/Kapitel-Weitere-Aktivitaeten.png'
          alt='Icon Weitere-Aktivitäten'
        />
      )}
    </div>
  );
}

export default NewIcons;

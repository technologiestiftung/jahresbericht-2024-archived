import cn from "./Vorwort.module.scss";
import SingleAccordion from "../../components/SingleAccordion";
import content2024 from "../../content2024";

function Vorwort() {
  return (
    <section className={cn.wrapper}>
      <h2 dangerouslySetInnerHTML={{ __html: content2024.vortwort.title }} />
      {content2024.vortwort.people.map((item, index) => (
        <div className={cn.peopleWrapper} key={index}>
          <div>
            <div>
              <div
                className={cn.image}
                style={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundSize: item.img.fit,
                }}
              ></div>
            </div>
          </div>
          <div>
            <p className='vorwort'>&quot;{item.vorwort}&quot;</p>
            <p>{item.name}</p>
            <p>{item.position}</p>
            <SingleAccordion content={item.vorwort} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Vorwort;

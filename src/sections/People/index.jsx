import cn from "./People.module.scss";
import cx from "classnames";
import content2024 from "../../content2024";
import Button from "../../components/Button";

function People() {
  return (
    <section className={cn.wrapper}>
      <h2 dangerouslySetInnerHTML={{ __html: content2024.people.title }} />
      <p dangerouslySetInnerHTML={{ __html: content2024.people.subtitle }}></p>
      {content2024.people.content.map((item, index) => (
        <div
          className={cx(cn.peopleWrapper, index % 2 === 0 ? cn.right : cn.left)}
          key={item.id}
        >
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
            <p className='vorwort'>&quot;{item.intro}&quot;</p>
            <p>{item.name}</p>
            <p>{item.position}</p>
          </div>
        </div>
      ))}
      <div className={cn.btnWrapper}>
        <Button
          to={content2024.people.link}
          label={content2024.people.btnText}
        />
      </div>
    </section>
  );
}

export default People;

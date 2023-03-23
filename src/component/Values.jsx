import Image from "../photos/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <img src={Image} alt="values image" />
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum Culpa dolor eusit enim velit nostrud veniamex eautid
            deserunt deserunt deserunt deserunt .
          </p>
          <div className="values__wrapper">
            {
                values.map(({id, icon, title, desc})=>{
                    return <Card className="values__value"key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{desc}</small>
                    </Card>

                })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

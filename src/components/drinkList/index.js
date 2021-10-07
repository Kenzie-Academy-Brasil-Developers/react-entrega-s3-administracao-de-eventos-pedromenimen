import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import "./styles.css";
import PopoverAdd from "../popover";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";

const DrinkList = () => {
  const history = useHistory();
  const { catalogue } = useContext(CatalogueContext);
  return (
    <div>
      <header className="DrinkListHeader">
        <AiFillHome onClick={() => history.push("/")} className="HomeIcon" />
        <div onClick={() => history.push("/events")}>
          <h1>Eventos</h1>
        </div>
      </header>
      <div className="drinkList">
        {catalogue.map((drink, index) => (
          <div className="drinkInfo" key={index}>
            <img src={drink.image_url} alt={drink.name}></img>
            <p>{drink.name}</p>
            <p>{drink.first_brewed}</p>
            <p>{drink.volume.value} litros</p>
            <PopoverAdd drink={drink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
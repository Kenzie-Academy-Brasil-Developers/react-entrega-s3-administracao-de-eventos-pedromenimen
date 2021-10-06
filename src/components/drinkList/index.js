import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import "./styles.css"
import PopoverAdd from "../popover";

const DrinkList = () => {
  const { catalogue } = useContext(CatalogueContext);
  return (
    <div className="drinkList">

      {catalogue.map((drink, index) => (
        <div 
        className="drinkInfo"
        key={index}>
          <img src={drink.image_url} alt={drink.name}></img>
          <p>{drink.name}</p>
          <p>{drink.first_brewed}</p>
          <p>{drink.volume.value} litros</p>
          <PopoverAdd drink={drink}/>
        </div>
      ))}
    </div>
  );
};

export default DrinkList;
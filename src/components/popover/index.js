import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CatalogueContext } from "../../providers/catalogue";
import { ConfraternizationContext } from "../../providers/confraternization";
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";
import { useContext } from "react";

const PopoverAdd = ({ drink }) => {
  const { WeddingDrinks, setWeddingDrinks } = useContext(WeddingContext);
  const { GraduationDrinks, setGraduationDrinks } =
    useContext(GraduationContext);
  const { ConfraternizationDrinks, setConfraternizationDrinks } = useContext(
    ConfraternizationContext
  );
  
  const { addToEvent } = useContext(CatalogueContext);
  const addToWedding = () => {
    addToEvent(WeddingDrinks, setWeddingDrinks, drink);
  };
  const addToConfraternization = () => {
    addToEvent(ConfraternizationDrinks, setConfraternizationDrinks, drink);
  };
  const addToGraduation = () => {
    addToEvent(GraduationDrinks, setGraduationDrinks, drink);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Adcionar a evento</Button>
      </PopoverTrigger>
      <PopoverContent className="popovercontent">
        <Button onClick={addToWedding}>Casamento</Button>
        <Button onClick={addToConfraternization}>Confraternização</Button>
        <Button onClick={addToGraduation}>Graduação</Button>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverAdd;

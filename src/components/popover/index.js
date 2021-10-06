import { Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import Button from "@chakra-ui/react";
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
 
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Adcionar a evento</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Button onclick={() => addToEvent(WeddingDrinks, setWeddingDrinks, drink)} >Casamento</Button>
        <Button  onclick={() => addToEvent(ConfraternizationDrinks, setConfraternizationDrinks, drink)} >Confraternização</Button>
        <Button  onclick={() => addToEvent(GraduationDrinks, setGraduationDrinks, drink)} >Graduação</Button>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverAdd;

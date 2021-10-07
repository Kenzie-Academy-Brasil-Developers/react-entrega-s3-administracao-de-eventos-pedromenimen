import { Button } from "@chakra-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { useHistory } from "react-router";
import { ConfraternizationContext } from "../../providers/confraternization";
import { GraduationContext } from "../../providers/graduation";
import { WeddingContext } from "../../providers/wedding";
import { CatalogueContext } from "../../providers/catalogue";
import "./styles.css";

const Events = () => {
  const history = useHistory();
  const { WeddingDrinks, setWeddingDrinks } = useContext(WeddingContext);
  const { GraduationDrinks, setGraduationDrinks } =
    useContext(GraduationContext);
  const { ConfraternizationDrinks, setConfraternizationDrinks } = useContext(
    ConfraternizationContext
  );
  const { removeFromEvent } = useContext(CatalogueContext);
  return (
    <div className="EventsContainer">
      <header>
        <div>
          <AiFillHome onClick={() => history.push("/")} className="HomeIcon" />
        </div>
        <div>
          <h2 onClick={() => history.push("/drinks")}>Bebidas</h2>
        </div>
      </header>
      <div className="weddingEvent">
        <h1>Casamento</h1>
        <Popover
          returnFocusOnClose={false}
          closeOnBlur={true}
          placement="right"
        >
          <PopoverTrigger>
            <Button>Ver bebidas</Button>
          </PopoverTrigger>
          <PopoverContent
            flexDirection="row"
            className="drinkInfoEventContainer"
            width="max-content"
            marginLeft="15px"
            maxWidth="680px"
            flexWrap="wrap"
            maxHeight="750px"
            overflow="auto"
          >
            {WeddingDrinks.length === 0 ? (
              <h1>Você ainda não adicionou bebidas nesse evento</h1>
            ) : (
              WeddingDrinks.map((item, index) => (
                <div className="drinkInfoEvent" key={index}>
                  <img src={item.image_url} alt={item.name}></img>
                  <p>{item.name}</p>
                  <p>{item.first_brewed}</p>
                  <p>{item.volume.value} litros</p>
                  <Button onClick={() => removeFromEvent(WeddingDrinks, setWeddingDrinks, item)}>Remover bebida</Button>
                </div>
              ))
            )}
          </PopoverContent>
        </Popover>
      </div>
      <div className="confraternizationEvent">
        <h1>Confraternização</h1>
        <Popover
          returnFocusOnClose={false}
          closeOnBlur={true}
          placement="right"
        >
          <PopoverTrigger>
            <Button>Ver bebidas</Button>
          </PopoverTrigger>
          <PopoverContent
            flexDirection="row"
            className="drinkInfoEventContainer"
            width="max-content"
            marginLeft="15px"
            maxWidth="680px"
            flexWrap="wrap"
            maxHeight="750px"
            overflow="auto"
          >
            {ConfraternizationDrinks.length === 0 ? (
              <h1>Você ainda não adicionou bebidas nesse evento</h1>
            ) : (
              ConfraternizationDrinks.map((item, index) => (
                <div className="drinkInfoEvent" key={index}>
                  <img src={item.image_url} alt={item.name}></img>
                  <p>{item.name}</p>
                  <p>{item.first_brewed}</p>
                  <p>{item.volume.value} litros</p>
                  <Button 
                   onClick={() => removeFromEvent(ConfraternizationDrinks, setConfraternizationDrinks, item)}
                  >Remover bebida</Button>
                </div>
              ))
            )}
          </PopoverContent>
        </Popover>
      </div>
      <div className="graduationEvent">
        <h1>Graduação</h1>
        <Popover
          returnFocusOnClose={false}
          closeOnBlur={true}
          placement="right"
        >
          <PopoverTrigger>
            <Button>Ver bebidas</Button>
          </PopoverTrigger>
          <PopoverContent
            flexDirection="row"
            className="drinkInfoEventContainer"
            width="max-content"
            marginLeft="15px"
            maxWidth="680px"
            flexWrap="wrap"
            maxHeight="750px"
            overflow="auto"
          >
            {GraduationDrinks.length === 0 ? (
              <h1>Você ainda não adicionou bebidas nesse evento</h1>
            ) : (
              GraduationDrinks.map((item, index) => (
                <div className="drinkInfoEvent" key={index}>
                  <img src={item.image_url} alt={item.name}></img>
                  <p>{item.name}</p>
                  <p>{item.first_brewed}</p>
                  <p>{item.volume.value} litros</p>
                  <Button onClick={() => removeFromEvent(GraduationDrinks, setGraduationDrinks, item)}>Remover bebida</Button>
                </div>
              ))
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Events;

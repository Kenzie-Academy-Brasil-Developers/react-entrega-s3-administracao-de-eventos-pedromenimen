import { Switch, Route } from "react-router";
import Home from "../components/home";
import DrinkList from "../components/drinkList";
// import Events from "../components/events";
import { CatalogueProvider } from "../providers/catalogue";
import { WeddingProvider } from "../providers/wedding";
import { GraduationProvider } from "../providers/graduation";
import { ConfraternizationProvider } from "../providers/confraternization";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/drinks">
      <ConfraternizationProvider>
        <GraduationProvider>
          <WeddingProvider>
            <CatalogueProvider>
              <DrinkList />
            </CatalogueProvider>
          </WeddingProvider>
        </GraduationProvider>
      </ConfraternizationProvider>
      </Route>
      <Route exact path="/events"></Route>
    </Switch>
  );
};

export default Routes;

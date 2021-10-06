import "./styles.css";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div className="HomeContainer">
      <header className="HomeHeader">
        <div>
          <h1 onClick={() => history.push("/drinks")}>Bebidas</h1>
        </div>
        <div>
          <h1>Eventos</h1>
        </div>
      </header>
      <main className="HomeMain">
        <h1>O melhor administrador de eventos da minha casa</h1>
      </main>
    </div>
  );
};

export default Home;

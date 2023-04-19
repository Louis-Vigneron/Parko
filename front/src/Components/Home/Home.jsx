import Map from "../CarParkMap/CarParkMap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Map />
      <div className="home__nav">
        <Link to="/Réserver-ma-place" className="home__nav__link"> Je réserve ma place </Link>
        <Link to="/Libérer-ma-place" className="home__nav__link"> Je libère ma place </Link>
      </div>
    </div>
  );
}

export default Home;
import Map from "../CarParkMap/CarParkMap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
          <Map/>
          <Link to="/Réserver-ma-place" className="home__link"> Je réserve ma place </Link>
          <Link to="/Libérer-ma-place" className="home__link"> Je libère ma place </Link>
        </div>
    );
}

export default Home;
import { Link } from "react-router-dom"

function PageError(){
    return(
        <div className="errorPage">
            <h2 className="errorPage__title">Oups, cette page n'existe pas !</h2>
            <Link className="errorPage__link" to="/">Revenir à l'accueil</Link>
        </div>
    )
}

export default PageError
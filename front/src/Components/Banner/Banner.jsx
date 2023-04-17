function Banner(props){
    return(
        <figure className="banner">
            <img className="banner__img" src={props.img} alt={props.alt} />
            <figcaption className="banner__legend" >{props.text}</figcaption>
        </figure>
    )
}

export default Banner
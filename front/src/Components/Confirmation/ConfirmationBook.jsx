function ConfirmationBook() {
       var str = (window.location.href);
    var url = new URL(str);
    var name = url.searchParams.get("name");
    var ticket = url.searchParams.get("ticket");
    var place = url.searchParams.get("place"); 
    console.log(str)
    return (
        <div className="confirmation">
            <h2 className="confirmation__title">Place réservé</h2>
            <p className="confirmation__text">Merci { name} pour votre réservation</p>
            <p className="confirmation__text"> Votre numéro de ticket est { ticket }</p>
            <p className="confirmation__text"> Votre place de parking est { place }</p>
        </div>
    );
}

export default ConfirmationBook;

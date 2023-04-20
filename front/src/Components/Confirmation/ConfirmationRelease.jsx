function ConfirmationBook() {
    var str = (window.location.href);
    var url = new URL(str);
    var name = url.searchParams.get("name");
    console.log(str)
    return (
        <div className="confirmation">
            <h2 className="confirmation__title">Place libéré</h2>
            <p className="confirmation__text">Merci {name} pour votre visite et à bientôt !</p>
        </div>
    );
}

export default ConfirmationBook;

import "./card.css";
function Card({
    nom,
    description,
    prix,
    image,
    modalvisible,
    setModalvisible,
}) {
    return (
        <>
            <div className="card">
                <img src={image} alt="" style={{ width: "100%" }} />
                <div className="card_body">
                    <h3>{nom}</h3>
                    <p>{description}</p>
                    <p>{prix}</p>
                </div>
                <span
                    className="bnt_commander"
                    onClick={() => {
                        setModalvisible(!modalvisible);
                    }}
                >
                    Commander
                </span>
            </div>
        </>
    );
}
export default Card;

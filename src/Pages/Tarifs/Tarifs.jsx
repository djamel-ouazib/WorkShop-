import "./tarif.css";
import logo from "../../assets/logo.png";
function Tarifs() {
    return (
        <div>
            <div
                className="logo"
                style={{
                    width: "100%",
                    height: "300px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={logo}
                    alt="logo_amtramgramme"
                    style={{
                        height: "100%",
                    }}
                />
            </div>
            <h1
                style={{
                    paddingBottom: "2rem",
                }}
            >
                Nos Tarifs
            </h1>

            <h4
                style={{
                    padding: "2rem",
                }}
            >
                Les prix suivants sont « à partir de » et peuvent évoluer en
                fonction de la complexité du décor. Les commandes ne seront
                confirmées qu’après le paiement d’un acompte de 40%. Les
                acomptes sont encaissés dès réception. Le solde est dû à la date
                de l’événement.
            </h4>

            <h2>
                Je vous offre des créations pâtissières artisanales de haute
                qualité, idéales pour vos événements, et entièrement
                personnalisables.
            </h2>

            <p
                style={{
                    paddingBottom: "2rem",
                }}
            >
                Chacune de nos pâtisseries est préparée à la commande dans notre
                atelier. Nous n'utilisons ni biscuits ni confitures industriels.
                Toutes nos garnitures sont faites maison, avec des ingrédients
                de première qualité, sans ajout de conservateurs.
            </p>

            <div className="firstbloc">
                <div>
                    <h2>Layer cake</h2>
                    <p>- Décoration simple : 8,00 € (minimum 12 parts)</p>
                </div>

                <div>
                    <h2>Wedding cake</h2>
                    <p>
                        - Décoration simple : à partir de 8,00 € par part <br />
                        - Étages factices : 20 € l'étage de 15 cm
                    </p>
                </div>

                <div>
                    <h2>Number cake</h2>
                    <p>- À partir de 8,00 € par part</p>
                </div>

                <div>
                    <h2>Modelage figurine</h2>
                    <p>- À partir de 8,00 €</p>
                </div>

                <div>
                    <h2>Les gourmandises</h2>
                    <p>
                        - Minimum 10 pièces <br />
                        – Popcakes : à partir de 3,00 € la pièce <br />
                        – Cupcakes (crème au beurre, ganache, citron, fraise,
                        framboise, ananas) : à partir de 3,80 € la pièce <br />
                        – Magnumcakes : à partir de 3,60 € la pièce <br />–
                        Sablés personnalisés (pâte à sucre) : à partir de 4,00 €
                        la pièce
                    </p>
                </div>

                <div>
                    <h2>Les Délais</h2>
                    <p>
                        Le planning se remplissant rapidement, il est conseillé
                        de passer votre commande dès que possible. <br />
                        – Au moins 10 jours en avance pour les cakes design
                        et/ou petits plus (baby shower, naissance, anniversaire,
                        etc.)
                        <br />
                        – Au moins 2 mois en avance pour les wedding cakes et
                        sweet tables <br />
                        Les commandes de dernière minute (au moins une semaine
                        avant la date de l’événement) sont possibles sous
                        réserve de disponibilité. N’hésitez pas à nous{" "}
                        <a
                            href="https://www.instagram.com/madaourida/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            contacter
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tarifs;

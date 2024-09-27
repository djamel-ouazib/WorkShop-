import "./home.css";
import imgdefonds from "../../assets/imgdefonds.webp";
import datas from "../../datas/data";
import Card from "../../components/Card/Card";
import { useState } from "react";
function Home() {
    const [modalvisible, setModalvisible] = useState(false);
    console.log(`modal : ${modalvisible}`);

    return (
        <>
            <header>
                <div className="anounceBar">
                    <h4 className="anounceBar_text">
                        Reprise des commandes 🎂🍒🍒 Reprise des commandes
                        🎂🍒🍒 Reprise des commandes 🎂🍒🍒
                    </h4>
                </div>
                <section
                    className="imgFond"
                    style={{
                        width: "100%",
                        height: "500px",
                        backgroundImage: `url(${imgdefonds})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="title">amstramgramme</h1>
                    <p className="description">
                        ✨ Des gâteaux sur mesure signés Mada Ourida ! ✨ Mada
                        Ourida, pâtissière diplômée à Paris, réalise vos wedding
                        cakes, gâteaux d'anniversaire, et layer cakes avec
                        passion et précision. Chaque création est unique, faite
                        avec des ingrédients de qualité pour sublimer vos
                        moments spéciaux. Faites de votre événement une
                        expérience gourmande inoubliable avec les créations de
                        Mada Ourida ! 🍰
                    </p>
                </section>
            </header>
            <div className="product_section">
                <section>
                    <h2 className="product_section_title">Nos Produit</h2>
                    <div className="card_container">
                        {datas.map((data, index) => (
                            <Card
                                key={index}
                                nom={data.nom}
                                description={data.description}
                                prix={data.prix}
                                image={data.image}
                                modalvisible={modalvisible}
                                setModalvisible={setModalvisible}
                            />
                        ))}
                    </div>
                </section>
                <div
                    className={`modal ${modalvisible ? "isActived" : ""}`}
                    onClick={() => {
                        setModalvisible(!modalvisible);
                    }}
                ></div>
                <div
                    className={`modal_container ${modalvisible ? "isActive" : ""}`}
                >
                    <div className="close">
                        <span
                            className="bnt_close_modal"
                            onClick={() => {
                                setModalvisible(!modalvisible);
                            }}
                        >
                            X
                        </span>
                    </div>
                    <h2>layer cake</h2>
                    <p>Prix 99 euro</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    );
}
export default Home;

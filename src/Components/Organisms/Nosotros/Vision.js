import img from "../../Templates/img";
const Vision = () => {
    return(
        <section className="section_article fondThree">
            <h1>Vision</h1>
            <div>
                <p>Nuestra vision es ser la empresa lider de sneakers en America Latina y Europa
                para 2024 tendremos presencia en 5 paises de America Latino America y 3 de Europa
                Entre los paises de latinoamerica donde operamos son
                </p>
                <ul>
                    <li>Mexico</li>
                    <li>Argentina</li>
                </ul>
                <p>Los paises donde tenemos presencia en Europa son los cuales pudimos
                    entrar en el 3er trimestre del año, hemos tenido un crecimiento del 20%
                    en el 3er trimestre del año, como se esperaba
                </p>
                <ul>
                    <li>Francia</li>
                    <li>Paises Bajos</li>
                </ul>
                <p>Al final del 4to trimestre del año esperamostener presencia
                    en los sigueintes paises de America Latina los cuales se nos
                    hicieron excelentes oportunidades para comenzar a operar y
                    posicionarnos en el mercado asi como lo hemos hecho en los
                    paises donde ya tenemos presencia
                </p>
                <ul>
                    <li>Brasil</li>
                    <li>Colombia</li>
                    <li>Chile</li>
                </ul>
                <p>Y en Europa esperamos tener presencia en los siguientes paises</p>
                <ul>
                    <li>Alemania</li>
                </ul>
            </div>
            <img src={img[4].img} alt={img[4].alt} />
        </section>
    );
}

export default Vision;
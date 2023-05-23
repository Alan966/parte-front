import img from "../../Templates/img";
const Mision = () => {
    return(
        <section className="section_article fondOne">
            <h1>Mision</h1>
            <p>
                Nuestra mision es poder democratizar el acceso a Sneakers de calidad, para que todos
                puedan disfrutar de un par de snekaers de calidad, sin tener que pagar en excesso por ellos,
                y disfrutar de la cultura de los sneakers.
            </p>
            <img src={img[2].img} alt={img[2].alt} />
            <p>
                Empezamos vendiendo sneakers en Ciudad de México con la inversion de 2000 pesos y para este 2024
                esperamos expandirnos gasta Europa especialmente en Francia ya que hemos visto que el mercado ponencial
                de Francia nos parece un mercado muy interesante porque no hay muchos competidores haciendo lo mismo que nosotros.
                La mayoria de empresas se efoca en la venta de sneakers de lujo y nosotros nos enfocamos en la venta de sneakers de calidad
                a un precio accesible.
                Lo que no esta de moda nosotros lo hacemos moda.
            </p>
            <img src={img[3].img} alt={img[3].alt} />
        </section>
    );
}

export default Mision;
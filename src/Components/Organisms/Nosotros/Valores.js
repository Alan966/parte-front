import img from "../../Templates/img";
const Valores = () => {
    return(
        <section className="section_article fondOne fondFour">
            <h1>Valores</h1>
            <p>Si estás interesado en trabajar con nosotros,
                me encantaría compartirte los valores que nos
                definen como empresa de revendedores de sneakers.</p>
            <ul>
                <li>Autenticidad: Para nosotros, la autenticidad es fundamental.
                    Nos aseguramos de que todos los sneakers que vendemos sean
                    100% originales y provengan directamente de las marcas más
                    reconocidas.
                </li>
                <li>
                    Calidad: Sabemos que nuestros clientes buscan la mejor calidad en sus sneakers,
                    por lo que nos aseguramos de que cada par que vendemos cumpla con los más altos
                    estándares de calidad.
                </li>
                <li>
                    Transparencia: Nos comprometemos a ser completamente transparentes en todas
                    nuestras transacciones. Queremos que nuestros clientes se sientan seguros al
                    comprar con nosotros y estén completamente informados sobre cada compra que realizan.
                </li>
                <li>
                    Experiencia del cliente: Valoramos a nuestros clientes y trabajamos arduamente
                    para brindarles la mejor experiencia posible. Nos esforzamos por responder
                    rápidamente a cualquier consulta o problema que puedan tener, y trabajamos
                    para superar sus expectativas en cada compra.
                </li>
                <li>
                    Responsabilidad social: Como empresa, nos preocupamos
                    por nuestro impacto en la comunidad y en el medio ambiente. Nos
                    comprometemos a trabajar con proveedores éticos y a utilizar prácticas
                    comerciales sostenibles siempre que sea posible.
                </li>
            </ul>
            <img src={img[5].img} alt={img[5].alt} />
            <p>
                Si compartes estos valores y estás interesado en trabajar con nosotros,
                ¡esperamos contar contigo en nuestro equipo!
            </p>
            <img src={img[6].img} alt={img[6].alt} />
        </section>
    );
};

export default Valores;
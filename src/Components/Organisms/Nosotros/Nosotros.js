import img from '../../Templates/img';
import { useEffect, useRef, useState } from 'react';
const NosotrosComponent = () => {
    const imgPrincipal = useRef(null);
    const [srcImage, setSrcImage] = useState(
        window.innerWidth >= 768 ? img[0].img : img[1].img
    );
    const [srcImage2, setSrcImage2] = useState(
        window.innerWidth >= 768 ? img[1].img : img[0].img
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 768){
                setSrcImage(img[0].img)
                setSrcImage2(img[1].img)
            }else{
                setSrcImage(img[1].img)
                setSrcImage2(img[0].img)
            }
        })
    }, [window.innerWidth])

    return(
        <>
        <div className='contend-image'>
            <img ref={imgPrincipal} src={srcImage} alt={img[0].alt} />
        </div>
        <section className='section_article_principal section_article'>
            <h1>SNKRS NIGHT</h1>
            <p>
                Somos una empresa dedicada a la venta de sneakers. Principalmente
                nos enfocamos en darle a nuestros clientes la mejor grasa que puedan
                encontrar en el mercado, con la mejor calidad y al mejor precio.
            </p>
            <p>
            Nuestra empresa comenzó con un sueño de dos jóvenes universitarios: democratizar el mercado de los sneakers, para que todos puedan tener acceso a los mejores productos disponibles. Creemos firmemente en brindar igualdad de oportunidades para que todos puedan disfrutar de los mejores sneakers del mercado.
            </p>
                <img src={srcImage2} alt={img[1].alt} />

        </section>
        </>
    );
};

export default NosotrosComponent;
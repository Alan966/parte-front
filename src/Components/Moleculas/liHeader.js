import UlHeader from "../Organisms/header/UlHeaders";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";



const LiHeader = ({categorie,childs, succesChild,}) => {
    const ref = useRef(null);
    function movile(width){
        if(width < 768){
            const category = ref.current?.getAttribute("category")
            if(category === "categorie" && categorie.name !== "Nosotros" && categorie.name !== "Articulos"){
                const father = ref.current
                const firstchild = ref.current.children[0]
                const newchild = document.createElement('span')
                newchild.innerHTML = categorie.name
                newchild.className = "categorie"
                father && firstchild && father.replaceChild(newchild, firstchild)
            }
        }
    }
    useEffect(() => {
        movile(window.innerWidth)
        window.addEventListener("resize", () => {
            movile(window.innerWidth)
        })
    }, [window.innerWidth])

    return (
        <li
        ref={ref}
        category= {categorie.id_subcategorie ? "subcategorie" : "categorie"}
        data-key= {
            categorie.id_subcategorie ?
            categorie.id_subcategorie :
            categorie.id_category
        }
        className={categorie.id_subcategorie ? "subcategorie" : "categorie"}
        key={
            categorie.id_subcategorie ?
            categorie.id_subcategorie :
            categorie.id_category
        }>
            <NavLink
                to={ categorie.id_subcategorie ?
                     `products/${categorie.id_category}/${categorie.id_subcategorie}` :
                     categorie.name === "Nosotros" || categorie.name === "Articulos" ?
                    `/${categorie.id_category}` :
                     `products/${categorie.id_category}`
                    }
                >
                {
                    categorie.name
                }
            </NavLink>{
                childs &&  succesChild &&
            < UlHeader
                key={categorie.id_subcategorie}
                success={succesChild}
                arrayLis={childs}
            />
            }
        </li>
    )
}

export default LiHeader;
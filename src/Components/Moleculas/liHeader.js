import UlHeader from "../Organisms/header/UlHeaders";
import { NavLink } from "react-router-dom";

const LiHeader = ({categorie,childs, succesChild,}) => {


    return (
        <li
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
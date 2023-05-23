import LiHeader from "../../Moleculas/liHeader";

const UlHeader = ({ success, arrayLis, subcategories, successSub }) => {

    return(
        <ul
        className="content-list-headers"
        >
                {
                    success === false ?
                    <h2>Loading ...</h2>
                    :
                    arrayLis.map(categorie => (
                        categorie.id_subcategorie ?
                        <LiHeader
                        key={categorie.id_subcategorie}
                        categorie={categorie}
                        />
                        :
                        <LiHeader
                        key={categorie.id_category}
                        categorie={categorie}
                        childs={subcategories.filter(subcategorie => subcategorie.id_category === categorie.id_category)}
                        succesChild={successSub}
                        />
                    ))
                }
            </ul>
    )
}

export default UlHeader;
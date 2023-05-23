import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductosBySubcategory } from "../Redux/features/Productos/ProductosBySubcategorySlice";
import CardProdcuts from "../Moleculas/CardProducts";
const ProductosBySubcategory = () => {

    const dispatch = useDispatch();
    const { id_subcategory} = useParams();
    const success = useSelector(state => state.ProductosBySubcategory.success);
    const message = useSelector(state => state.ProductosBySubcategory.message);
    const productos = useSelector(state => state.ProductosBySubcategory.productos);
    const subcategory = useSelector(state => state.ProductosBySubcategory.subcategory);

    useEffect(() => {
        const getProductos = () => {
            dispatch(getProductosBySubcategory(id_subcategory));
        }
        getProductos();
    }, [id_subcategory])


    return(
        <section className="sectionProducts">
            {
                success === false ?
                <h2>{message}</h2>
                :
                <>
                <h2>{subcategory}</h2>
                <div className="contendProdcuts">
                    {
                        productos.map(producto => {
                           return(
                            <CardProdcuts
                            key={producto.id_producto}
                            id_producto={producto.id_producto}
                            name={producto.name}
                            cantidad={producto.cantidad}
                            price={producto.price}
                            marca= {producto.id_marca}
                            indexState={'ProductosBySubcategory'}
                            />
                           )
                        })
                    }
                </div>
                </>
            }
        </section>
    )
}

export default ProductosBySubcategory;
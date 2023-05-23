import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../Redux/features/Productos/ProductosByCategorySlice";
import CardProdcuts from "../Moleculas/CardProducts";
const ProductsByCategory = () => {

    const { id_category } = useParams();

    const dispatch = useDispatch();
    const success =  useSelector(state => state.productosByCategory.success);
    const message =  useSelector(state => state.productosByCategory.message);
    const productos =  useSelector(state => state.productosByCategory.productos);
    const category =  useSelector(state => state.productosByCategory.category);

    useEffect(() => {
        const getProducts =  () => {
            dispatch(getProductos(id_category));
        }
        getProducts();
    }, [id_category])


    return (
        <section className="sectionProducts">
            {
                success === false ?
                <h2>{message}</h2>
                :
                <>
                <h2>{category}</h2>
                <div className="contendProdcuts">
                {
                    productos.map(producto => (
                        <CardProdcuts
                        key={producto.id_producto}
                        id_producto={producto.id_producto}
                        name={producto.name}
                        cantidad={producto.cantidad}
                        price={producto.price}
                        marca= {producto.id_marca}
                        indexState={'productosByCategory'}
                        />
                    ))
                }
                </div>
                </>
            }
        </section>
    )
}

export default ProductsByCategory;
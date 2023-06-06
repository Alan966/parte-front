import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productAdd } from "../Redux/features/Productos/ProductoSlice";
import backend from "../Templates/backend";
const CardProdcuts = ({id_producto, name, price, indexState}) => {


    const dispatch = useDispatch();
    const products = useSelector((state) => state[indexState].productos);

    const addProduct = () => {
        dispatch(productAdd(products.find(product => product.id_producto === id_producto)));
    }

    return(
        <NavLink to={`/product/${id_producto}`} onClick={addProduct}>
        <div className="producto">
            <img
            className="img_producto"
            src= {`${backend.url_base}/productos/img/img_three/${id_producto}`}
            >
            </img>
            <h3 className="title_producto">{name}</h3>
            <p className="price">{`$${price}.00`}</p>
        </div>
        </NavLink>
    )
};

export default CardProdcuts;
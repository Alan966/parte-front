import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/features/Productos/ProductsByIdUsersSlice";
import { Navigate } from "react-router-dom";
import  CardShippingProduct  from '../Moleculas/cardShippingProduct';
const Shipping = () => {
    const email = sessionStorage.getItem("email");
    const success = useSelector(state => state.productsByIdUser.success);
    const message = useSelector(state => state.productsByIdUser.message);
    const products = useSelector(state => state.productsByIdUser.products);
    const dispatch = useDispatch();
    const id_user = sessionStorage.getItem("id_user");
    if(!id_user){
        alert("Debes iniciar sesion")
        Navigate('/signin')
        return
    }

    useEffect(() => {
        dispatch(getProducts(id_user))
    }, [])

    return (
        <div className="container_profile">
            <div className="email">email :{`${email}`}</div>
            {
                success === true ?
                products.map((product) => {
                    return(
                        <CardShippingProduct
                        key={product.id_shopping}
                        product={product}
                        />
                    )
                })
                :
                <div className="message">{message}</div>
            }
        </div>
    )
}

export default Shipping
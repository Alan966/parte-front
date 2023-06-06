import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/features/Productos/ProductsByIdUsersSlice";
import { useNavigate } from "react-router-dom";
import  CardShippingProduct  from '../Moleculas/cardShippingProduct';
const Shipping = () => {
    const email = sessionStorage.getItem("email");
    const success = useSelector(state => state.productsByIdUser.success);
    const message = useSelector(state => state.productsByIdUser.message);
    const products = useSelector(state => state.productsByIdUser.products);
    const deleteProdcut = useSelector(state => state.deleteShopping.success);
    const dispatch = useDispatch();
    const id_user = sessionStorage.getItem("id_user");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts(id_user))
        if(!id_user){
            navigate("/signin")
        }
    }, [deleteProdcut])

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
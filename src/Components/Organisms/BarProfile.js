import { Link } from "react-router-dom";
import img from "../Templates/img";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getProduct } from "../Redux/features/Shopping/shippingProductsSlice";
const BarProfile = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.signin.success);
    const email = useSelector(state => state.signin.email);
    const token = useSelector(state => state.signin.token);
    const id_user = useSelector(state => state.signin.id_user);
    const ref = useRef(null);

    const successAdd  = useSelector(state => state.carshopping.success);
    const carrito = useSelector(state => state.shippingProducts.products);

    useEffect(() => {
        if(success === true){
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("id_user", id_user);
        }

    }, [success]);
    useEffect(() => {
        if(sessionStorage.getItem("token")){
            ref.current.innerHTML = `
            <div className="item_bar">
            ${sessionStorage.getItem("email")}
            </div>
            `
        }
    }, [success])
    useEffect(() => {
        if(sessionStorage.getItem("id_user")){
            dispatch(getProduct(sessionStorage.getItem("id_user")))
        }else{
        }
    }, [successAdd])


    return(
        <section className="bar_contend">
            <div className="item_bar">
                <img src={img[9].img} alt={img[9].alt} />
            </div>
            <div className="item_bar bar_contend" >
                <div className="item_bar bar_contend"ref={ref}>
                <div className="item_bar">
                        <Link to={'/signup'}>
                            Unete
                        </Link>
                    </div>
                    <div className="item_bar">
                        <Link to={'/signin'}>
                            Iniciar Sesion
                        </Link>
                </div>
                </div>
                <div className="item_bar two_items">
                    <Link to={`/shipping`}>
                        <img src={img[7].img} alt={img[7].alt} />
                    </Link>
                    <div className="counter">
                        {
                            carrito.length
                        }
                    </div>
                </div>
                <div className="item_bar">
                        <img src={img[8].img} alt={img[8].alt} />
                </div>
            </div>
        </section>
    )
}

export default BarProfile;
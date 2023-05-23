import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { postProduct } from "../Redux/features/Shopping/cardShoppingSlice";
const Product = () => {

    const dispatch = useDispatch();

    const product = useSelector(state => state.producto);
    if(product.length > 0){
        localStorage.setItem("product", JSON.stringify(product));
    }
    const productLocal = JSON.parse(localStorage.getItem("product"))[0];
    const token = sessionStorage.getItem('token')
    const id_users = sessionStorage.getItem('id_user')

    const contendImg = useRef(null);
    let x = 0;
    function rightButton(){

        switch(x){
            case 0:
                x = 100;
                break;
            case 100:
                x = 200;
                break;
            case 200:
                x = 300;
                break;
            case 300:
                x = 0;
                break;
            default:
                x = 0;
                break;
        }
        contendImg.current.style.transform = `translateX(-${x}%)`;
    }
    function leftButton(){
        switch(x){
            case 0:
                x = 300;
                break;
            case 100:
                x = 0;
                break;
            case 200:
                x = 100;
                break;
            case 300:
                x = 100;
                break;
            default:
                x = 0;
                break;
        }
        contendImg.current.style.transform = `translateX(-${x}%)`;
    }
    const addProduct = () => {
        if(!token){
            alert('Inicia sesion para agregar productos al carrito')
            return
        }
        const data = {
            id_users: id_users,
            id_producto: productLocal.id_producto,
            cantidad: 1
        }
         dispatch(postProduct({token, data}))
    }
    return(
        <section className="section_product">
            <div className="contend_info_product">
                <div className="contend_info_product_text">
                    <h2 className="title">{productLocal.name}</h2>
                    <p>{productLocal.subcategory ? productLocal.subcategory : productLocal.category}</p>
                    <p>{`$${productLocal.price}.00`}</p>
                </div>
                <div className="contend_section_images">
                    <div className="contend_buttons">
                        <div className="button_left" onClick={leftButton}></div>
                        <div className="button_right" onClick={rightButton}></div>
                    </div>
                    <div className="contend_images_product" ref={contendImg}>
                        <img src={`https://parte-backend-ecommerce.onrender.com/productos/img/img_one/${productLocal.id_producto}`} alt="" />
                        <img src={`https://parte-backend-ecommerce.onrender.com/productos/img/img_two/${productLocal.id_producto}`} alt="" />
                        <img src={`https://parte-backend-ecommerce.onrender.com/productos/img/img_three/${productLocal.id_producto}`} alt="" />
                        <img src={`https://parte-backend-ecommerce.onrender.com/productos/img/img_four/${productLocal.id_producto}`} alt="" />
                    </div>
                </div>
            </div>
            <div className="description_product">
                <table>
                    <caption> Tallas</caption>
                    <tbody>
                        <tr>
                            <td>CM 25</td>
                            <td>CM 25.5</td>
                            <td>CM 26</td>
                        </tr>
                        <tr>
                            <td>CM 26.5</td>
                            <td>CM 27</td>
                            <td>CM 27.5</td>
                        </tr>
                        <tr>
                            <td>CM 28</td>
                            <td>CM 29.5</td>
                            <td>CM 29</td>
                        </tr>
                        <tr>
                            <td>CM 29.5</td>
                            <td>CM 30</td>
                            <td>CM 30.5</td>
                        </tr>
                    </tbody>
                </table>
                <div className="description">
                <p>{`Cantidad en existencia ${productLocal.cantidad}`}</p>
                    <div className="contend_one_p">
                        <p>Envío gratuito*</p>
                        <p>Para obtener información de envío precisa </p>
                    </div>
                    <div className="contend_second_p">
                        <p>
                            Inspirado en el original que se lanzó en 1985,
                            el Air Jordan 1 Low ofrece un estilo clásico
                            impecable que se resulta familiar, pero renovado.
                            Con un diseño icónico que combina perfectamente
                            con cualquier ajuste, este calzado garantiza que
                            siempre estará a la moda.
                        </p>
                    </div>
                    <div className="contend_three_p">
                        <ul>
                            <li>Color que se muestra: Negro/Verde suerte/Blanco/Negro</li>
                            <li>Estilo: 553558-065</li>
                        </ul>
                    </div>
                </div>
                <div className="contend_button_agregar">
                    <div className="button" onClick={addProduct}>
                        Agregar al carrito
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Product;
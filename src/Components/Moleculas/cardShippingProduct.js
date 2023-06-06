
import backend from '../Templates/backend';
import { useDispatch } from 'react-redux';
import { deleteShopping } from '../Redux/features/Shopping/deleteShoppingByidSlice';
import { useEffect, useState } from 'react';


const CardShippingProduct = ({ product }) => {

    const dispatch = useDispatch();
    const deleteProduct  = () => {
        dispatch(deleteShopping(product.id_shopping))
    }
    return(
        <div className="container_card">
            <div className="left">
                <h2>{product.name}</h2>
                <div className="contend_img_carrito">
                    <img src={`${backend.url_base}/productos/img/img_three/${product.id_producto}`} alt="" />
                </div>
            </div>
            <div className="right">
                <p> identificador producto {`${product.id_producto}`}</p>
                <p> cantidad {`${product.cantidad}`}</p>
                <p> identificador pedido : {`${product.id_shopping}`}</p>
                <p> Marca {`${product.marca}`}</p>
                <p>Subcategoria: {`${product.nameSubcategory}`}</p>
                <p> Precio {`${product.price}`}</p>
            </div>
            <div className="contend_button">
                <div className="button"  onClick={deleteProduct}>
                    Eliminar del carrito
                </div>
            </div>
        </div>
    )
}

export default CardShippingProduct;
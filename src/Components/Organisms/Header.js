import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../Redux/features/categories/categoriesSlice";
import { fetchSubCategories } from "../Redux/features/categories/subCategoriesSlice";
import UlHeader from "./header/UlHeaders";
import HamburguerButton from "./header/hamburguer-button";
import img from "../../img/logo/logo_sneakers.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const success = useSelector(state => state.categories.success);
    const categories = useSelector(state => state.categories.categories);
    const successSub = useSelector(state => state.subCategories.success);
    const subcategories = useSelector(state => state.subCategories.subCategories);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchSubCategories());
    },[])

    const header = useRef(null);
    const button = useRef(null);
    function buttonClick(){
        header.current.classList.toggle("active");
        button.current.classList.toggle("active");
    }

    return(
        <header className="header" ref={header}>
            <div className="content-logo">
                <NavLink to="/">
                <img className="logo" src={img} alt="logo de Sneakers" />
                </NavLink>
            </div>
            <UlHeader
                key={1}
                success={success}
                arrayLis={categories}
                subcategories={subcategories}
                successSub={successSub}
                />
            <HamburguerButton referencia={button} buttonClick={buttonClick} />
        </header>
    )
};

export default Header;
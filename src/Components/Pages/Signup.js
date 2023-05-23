import InputForm from "../Atoms/Form/InputForm";
import InputSend from "../Atoms/Form/InputSend";
import InputRatioContent from "../Moleculas/InputRatioContent";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/features/users/usersSlice";
import { useNavigate } from "react-router-dom";

const arrayCountrys = [
    {
        id: "mx",
        name: "country",
        value: "Mexico"
    },{
        id: "ca",
        name: "country",
        value: "Canada"
    },{
        id: "usa",
        name: "country",
        value: "USA"
    }
];

const arrayGenero = [
    {
        id: "man",
        name: "genero",
        value: "Hombre"
    },{
        id:"woman",
        name: "genero",
        value: "Mujer"
    }
];
const Signup = () => {

    const dispatch = useDispatch();
    const message = useRef(null);
    const navigate = useNavigate();

    const form = useRef(null);
    const success = useSelector(state => state.users.success);
    const messageAction = useSelector(state => state.users.message);

    const Submit = async (e) => {
        e.preventDefault();
        message.current.textContent = "";

        const formData = {
            email:form.current.email.value,
            password:form.current.password.value,
            name: form.current.first_name.value,
            apellido:form.current.last_name.value,
            fecha_nacimiento: form.current.birthday.value,
            pais: form.current.country.value,
            sexo:form.current.genero.value
        };

        if( formData.email === ""||
            formData.password === "" ||
            formData.first_name === "" ||
            formData.last_name === "" ||
            formData.birthday === "" ||
            formData.country === "" ||
            formData.genero === ""){
            message.current.textContent = "Por favor llenar todos los campos correspondientes";
            return;
        }
            dispatch(addUser(formData));
    };

    useEffect(() => {
        if(success === true){
            navigate("/signin");
        }
    }, [success, navigate]);

    return(
        <main className="content_form">
        <div
            className="message_form"
            ref={message}>{
                success === true ?
                "":
                messageAction
            }
        </div>
        <h2
        className="title_form"
            >Registrate</h2>
        <form
        className="form"
        ref={form} >
            <InputForm
            id="email"
            type="email"
            required
            pattern="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$"
            label="Email"
            />
            <InputForm
            id="password"
            type="password"
            required
            label="Password"
            />
            <InputForm
            id="first_name"
            type="text"
            required
            label="First Name"
            />
            <InputForm
            id="last_name"
            type="text"
            required
            label="Last Name"
            />
            <InputForm
            id="birthday"
            type="date"
            required
            label="Birthday"
            />
            < InputRatioContent
                key={"country"}
                id={"country"}
                title={"Country"}
                arrayItemsRatio={arrayCountrys}
            />
            <InputRatioContent
                 key={"genero"}
                id={"genero"}
                 title={"Genero"}
                arrayItemsRatio={arrayGenero}
            />
            <InputSend
                valueSend="Registrarse"
                action={Submit}
            />
        </form>
    </main>
    )
}

export default Signup;
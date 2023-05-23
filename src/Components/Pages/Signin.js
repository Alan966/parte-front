import InputForm from "../Atoms/Form/InputForm";
import InputSend from "../Atoms/Form/InputSend";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAction } from "../Redux/features/users/signinSlice";
const Sinin = () => {

    const formRef = useRef(null);
    const message = useRef(null);
    const click = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const success = useSelector(state => state.signin.success);
    const messageAction = useSelector(state => state.signin.message);


    const submit = e => {
        e.preventDefault();
        message.current.textContent = "";
        const dataFrom = {
            email: formRef.current.email.value,
            password:formRef.current.password.value
        }
        if(dataFrom.email === "" || dataFrom.password === ""){
            message.current.textContent = "Todos los campos son obligatorios";
            return;
        }

        dispatch(signinAction(dataFrom));
    }

    useEffect(() => {
        if(success === true){
            navigate("/");
        }else{
            message.current.textContent = messageAction;
        }
    }, [success, navigate, messageAction]);


    return(
        <main className="content_form">
            <div className="message_form" ref={message}></div>
            <h1 className="title_form">Inicia Secion</h1>
            <form
            className="form"
            ref={formRef}>
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
                <InputSend
                valueSend="Iniciar"
                action={submit}
                referen={click}
                />
            </form>
        </main>
    )
}

export default Sinin;
const HamburguerButton = ({ buttonClick, referencia}) => {
    return(
        <div className="button_hamburguer" ref={referencia} onClick={buttonClick}>
            <div className="line"></div>
        </div>
    );
}
export default HamburguerButton;
const InputSend = ({valueSend, action, referen}) => {
    return(
        <input className="button" type="button" ref={referen} value={valueSend} onClick={action}/>
    )
}

export default InputSend;
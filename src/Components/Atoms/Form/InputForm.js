const InputForm = ({id, type, required, pattern, label}) => {
    return(
        <div className="container_input">
            <label htmlFor="">{label}</label>
            <input
            id={id}
            type={type}
            required={required}
            pattern={pattern}
            />
        </div>
    )
}

export default InputForm;
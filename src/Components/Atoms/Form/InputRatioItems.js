const InputRatioItems = ({ id, name, value}) => {
    return(
        <>
        <input type="radio" id={id} name={name} value={value} />
        <label htmlFor="">
            {value}
        </label>
        </>
    )
}

export default InputRatioItems;
import InputRatioItems from "../Atoms/Form/InputRatioItems"
const InputRatioContent = ({arrayItemsRatio, title, id}) => {
    return(
        <div id={id} className="container_ratio">
            <p>{ title }</p>
            {
                arrayItemsRatio.map(({id, name, value, label}) => {
                return(
                    <InputRatioItems
                    key={id}
                    id={id}
                    name={name}
                    value={value}
                    label={label}
                    />
                )
                })
            }
        </div>
    )
}

export default InputRatioContent
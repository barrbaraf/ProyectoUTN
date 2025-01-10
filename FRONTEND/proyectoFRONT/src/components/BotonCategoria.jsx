const BotonCategoria = ({text,functionPadre,valor})=>{
    const handleOnClick=()=>{
        functionPadre(valor)
    }
    return (
        <button onClick={handleOnClick}>{text}</button>
    )
}
export default BotonCategoria
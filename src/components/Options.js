export default function Options(props) {
    return (
        <p
        className={props.active === props.option ? "active" : null}
        onClick={()=>{props.changeOption(props.option)}}>{props.option}</p>
    )
}
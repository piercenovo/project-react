// Forma muy corta
// const Message = ({ color, message }) => <h1 style={{ color }}>{message}</h1>

// Forma corta
const Message = ({color,message}) => {
    return <h1 style={{color}}>
        {message}</h1>
}

// Forma media
// const Message = (props) => {
//     const {color} = props
//     const {message} = props
//     return <h1 style={{color}}>
//         {message}</h1>
// }

// Forma larga
// const Message = (props) => {
//     // console.log(props)

// return <h1 style={{color: props.color}}>
//     {props.message}</h1>
// }

export default Message
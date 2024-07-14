const Image = ({picture,title}) => {
    return (
        <div>
            <img src={picture} alt={title}/>
        </div>
    )
}
export default Image;
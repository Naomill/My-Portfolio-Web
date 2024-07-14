
const FormattedDate = ({isHighlight,children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighlight ? "text-white" : ""}`}>{children}</span>
        </div>
    )
}
export default FormattedDate;
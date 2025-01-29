const ReportDate = (prop) =>{
    const month = prop.date.toLocaleString('en-us',{month:'long'})
    const day = prop.date.toLocaleString('en-us',{days:'2-digit'}) 
    const year = prop.date.getFullYear()
    return(
        <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
    )
}
export default ReportDate
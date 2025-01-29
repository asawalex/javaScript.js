import ReportDate from "./reportDate"

const Report = (props) =>{
    return(
        <div className="report-container">
            <ReportDate date={props.date}/>
            <div>{props.type}</div>
            <div>{props.location}</div>
            <div>{props.description}</div>
            <div>{props.userId}</div>
            <div>{props.media}</div>
        </div>
    )
}
export default Report

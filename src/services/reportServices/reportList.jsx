import Report from "./report"
const ReportList = (props) =>{
    return(
        <div>
            {props.list.map((prop)=>{
           <Report
           key={prop.key}
           type={prop.type}
           location={prop.location}
           description={prop.description}
           date={prop.date}
           media={prop.media}
           />
})}
        </div>
    )
}
export default ReportList 

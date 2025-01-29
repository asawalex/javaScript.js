import { useState } from "react";
import ReportList from "./reportList";
import IncidentForm from "./IncidentForm";
const DUMMY = [
    {
        id:'1i',
        type:'robbring',
        location:'sabo',
        description:'null',
        userId:'2w',
        date:new Date(2021,11,12),
        media:'null',
    },
    {
        id:'1i',
        type:'robbring',
        location:'sabo',
        description:'null',
        userId:'2w',
        date:new Date(2021,11,12),
        media:'null',
    },
    {
        id:'1i',
        type:'robbring',
        location:'sabo',
        description:'null',
        userId:'2w',
        date:new Date(2021,11,12),
        media:'null',
    },
];
const Incident = () =>{
    const [userData,setUserData] = useState(DUMMY)

    const addUserDetails = (userInput) =>{
        setUserData((previousUserData)=>{
          
          return[userInput,...previousUserData]
        });
      };

    return(
        <div>
            <IncidentForm onchageData={addUserDetails}/>
            <ReportList list={userData}/>
        </div>
    )
}
export default Incident

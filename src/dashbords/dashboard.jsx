import Navbar from "../components/Navbar";
import Buttons from '../dashbords/Buttons';
import Filter from "../components/Filter";
import ServicesDashboard from "../services/ServicesDashbord";

const dashbord = ()=>{
    return(
        <div>
            <Navbar />
            <Buttons />
            <ServicesDashboard/>
            <Filter />
        </div>
    )
}
export default dashbord
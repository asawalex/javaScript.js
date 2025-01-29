import Register from "../services/Register";
import LogIn from "../services/LogIn";
import Dashboard from "../dashbords/dashboard";
import WelcomePage  from "../services/WelcomePage";
import Incident from "../services/reportServices/Incident";
import DashboardService from "../dashbords/dashboarService";

const Rout = [
    {
        path:"/",
        element:<Dashboard />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/logIn",
        element:<LogIn />
    },
    {
        path:"/welcomePage",
        element:<WelcomePage />
    },
    {
        path:"/incident",
        element:<Incident/>
    },
    {
        path:"/dashboardService",
        element:<DashboardService/>
    }
]
export default Rout
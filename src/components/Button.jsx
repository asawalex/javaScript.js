import securityGuide from '../assets/securityguide.jpeg';
import '../styles/Button.css';
const button = ()=>{
    return(
<div className='button-image'>
    <img src={securityGuide} alt="" />
</div>
    )
}
export default button
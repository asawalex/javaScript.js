import Button from '../components/Button';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import '../styles/Buttons.css'
const Bottons =()=>{
    return(
        <div className='contain'>
            <div className='button'><Button/></div>
            <div className='button'><Button1/></div>
            <div className='button'><Button2/></div>
        </div>
    )
}
export default Bottons
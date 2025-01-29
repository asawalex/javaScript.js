import '../styles/Filter.css'
const Filter =()=>{
    return(
        <div className="filter-containers">
            <h1>About Us:</h1>
            <div className="section">
            <label htmlFor="">Mission Statement:</label>
            <p>Our mission is to ensure the safety and security of</p>
            <p>our neighborhood through vigilant and proactive measures. We are</p>
            <p>committed to creating a safe environment where residents can live</p>
            <p>peacefully and without fear.</p>
            </div>
            <div className="section">
                <label htmlFor="">Team:</label>
               <p>Our team consists of highly trained and experienced security</p>
                <p>professionals dedicated to protecting our community. Each member of</p>
                <p>our team undergoes rigorous training and background checks to ensure</p>
                <p>they are equipped to handle any situation that may arise.</p>
            </div>
            <div className="section">
                <label htmlFor="">Community Involvement:</label>
                <p>We believe in the power of community and</p>
                <p>actively engage with residents to build strong relationships and foster a</p>
                <p>sense of trust. We work closely with local organizations and law</p>
                <p>enforcement to ensure a coordinated and effective approach to</p>
                <p>neighborhood security.</p>
            </div>
        </div>
    )
}
export default Filter
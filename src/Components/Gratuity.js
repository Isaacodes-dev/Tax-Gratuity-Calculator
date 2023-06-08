import "../App.css";
import { useState } from "react";

function Gratuity() {
    const [basicSalary, setBasicSalary] = useState(0.0);
    const [monthsWorked, setMonthsWorked] = useState(0.0);
    const [gratuityRate, setgratuityRate] = useState(25);
    const [gratuityAmount, setgratuityAmount] = useState(0);
    const [clearForm, setclearForm] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        let rate = gratuityRate/100
        setgratuityAmount(
            basicSalary * rate * monthsWorked
        );
    }
  return (
    <section id="Gratuity">
        <h1 className="Section_header">Gratuity Calculator</h1>
        <div className="Tax_conatiner">
        <div className="image">
            <img src={require('../Img/money2.jpg')}></img>
        </div>
        <div className="calculator">
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                <label>Basic Salary</label>
                <input type="number" placeholder="0.00" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)}/>
                </div>
                <div className="form-input">
                <label>Months Worked </label>
                <input type="number" placeholder="0" value={monthsWorked} onChange={(e) => setMonthsWorked(e.target.value)}/>
                </div>
                <div className="form-input">
                <label>Gratuity Percentage Rate</label>
                <input type="number" placeholder="0.00" value={gratuityRate} onChange={(e) => setgratuityRate(e.target.value)}/>
                </div>
                <div className="form-input">
                <label>Gratuity Amount</label>
                <input value={gratuityAmount} placeholder="0.00" readOnly/>
                </div>
                <input type="submit" value="Submit"/>
                <input type="submit" value="Clear" onClick={clearForm} className="clear"/>
            </form>
        </div>
      </div>
    </section>
  );
}

export default Gratuity;

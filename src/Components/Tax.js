import "../App.css";
import { useState } from "react";

function Tax() {
  const [basicSalary, setBasicSalary] = useState(0.0);
  const [houseAllowance, setHouseAllowance] = useState(0.0);
  const [transportAllowance, setTransportAllowance] = useState(0.0);
  const [lunchAllowance, setLunchAllowance] = useState(0.0);
  let [taxValue, setTaxValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let grossPay = parseFloat(basicSalary) +
    parseFloat(houseAllowance) +
    parseFloat(transportAllowance) +
    parseFloat(lunchAllowance);
    let taxPercentagerate = 30/100;
    let totalPay = grossPay * taxPercentagerate
    let taxValue = grossPay - totalPay - 60 - 452.50
    setTaxValue(
        taxValue
    );
  };
  return (
    <section id="Tax">
      <h1 className="Section_header">Tax Calculator</h1>
      <div className="Tax_conatiner">
        <div className="image">
          <img src={require("../Img/Tax Image.jpg")}></img>
        </div>
        <div className="calculator">
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label>Basic Salary</label>
              <input
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Housing Allowance</label>
              <input
                type="number"
                value={houseAllowance}
                onChange={(e) => setHouseAllowance(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Transport Allowance</label>
              <input
                type="number"
                value={transportAllowance}
                onChange={(e) => setTransportAllowance(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Lunch Allowance</label>
              <input
                type="number"
                value={lunchAllowance}
                onChange={(e) => setLunchAllowance(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Tax Payable</label>
              <input value={taxValue} readOnly />
            </div>
            <input type="submit" value="Submit" />
            <input type="submit" value="Clear" className="clear"/>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Tax;

import React from "react";

export default function TaxEstimation() {
    const [hourlyRate, setHR] = React.useState('');
    const [finalHR, setFinalHR] = React.useState(0);
    const [annualRate, setAR] = React.useState('');
    const [finalAR, setFinalAR] = React.useState(0);

    const [hourInDay, setHID] = React.useState(8);
    const [dayInWeek, setDIW] = React.useState(5);

    const weekInYear = 52;

    const inputHRNumber = (num) => {
        let input = num.target.value;
        if(input.match(/^([0-9]{1,4})?(\.)?([0-9]{0,2})?$/))
            setHR(input);
    }
    const inputARNumber = (num) => {
        let input = num.target.value;
        if(input.match(/^([0-9]{1,9})?(\.)?([0-9]{0,2})?$/))
            setAR(input);
    }

    const setHoursPerDay = (num) => {
        let input = num.target.value;
        if(input.match(/^([0-9]{1,2})?$/))
            setHID(input);
    }
    const setWorkingDaysPerWeek = (num) => {
        let input = num.target.value;
        if(input.match(/^([0-7]{1})?$/))
            setDIW(input);
    }

    function submitHRNumber(event) {
        event.preventDefault();

        // if(hourlyRate == "") alert("No Input Detected");
        var hr = hourlyRate == "" ? 0.0.toFixed(2) : parseFloat(hourlyRate).toFixed(2)
        setFinalHR(hr);
        setFinalAR((hr * hourInDay * dayInWeek * weekInYear).toFixed(2));
    }
    function submitARNumber(event) {
        event.preventDefault();

        // if(annualRate == "") alert("No Input Detected");
        var ar = annualRate == "" ? 0.0.toFixed(2) : parseFloat(annualRate).toFixed(2)
        setFinalAR(ar);
        setFinalHR((ar / weekInYear / dayInWeek / hourInDay).toFixed(2));
    }
    return (
        <section>
            <form onSubmit={submitHRNumber}>
                <input placeholder="Hourly Rate $" value={hourlyRate} onChange={inputHRNumber} className="bg-white text-black p-1 m-2" />
                <button type="submit" className="bg-gray-700 p-2 m-1">submit</button>
            </form>
            <form onSubmit={submitARNumber}>
                <input placeholder="Annual Wage $" value={annualRate} onChange={inputARNumber} className="bg-white text-black p-1 m-2" />
                <button type="submit" className="bg-gray-700 p-2 m-1">submit</button>
            </form>
            <input placeholder="Hours" value={hourInDay} onChange={setHoursPerDay} className="bg-white text-black p-1 m-2" />
            <input placeholder="Days" value={dayInWeek} onChange={setWorkingDaysPerWeek} className="bg-white text-black p-1 m-2" />
            <div className="text-black"> Hourly Rate: ${finalHR} </div>
            <div className="text-black"> Annual Gross Salary: ${finalAR} </div>
            <div className="text-black"> Daily working hours: {hourInDay} hours </div>
            <div className="text-black"> Weekly working days: {dayInWeek} days </div>
        </section>
    )
}
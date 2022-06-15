import ResultSummary from '../components/resultSummary';
import styles from './css-modules/flightPlanner.module.css'

import { useEffect, useState } from 'react'

export default function Home() {
    
    const getFlight = async (event) => {
        event.preventDefault();
        const res = await fetch('/api/getFlights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                departure: event.target.departure.value,
                destination: event.target.holidayType.value,
                month: event.target.month.value,
                days: event.target.days.value,
                budget: event.target.budget.value,
                class: event.target.class.value,
                people: event.target.people.value,
            }),
            
        });
        const result = await res.json();
        if (result.error) {
            throwError(result.error);
        } else {
            if (result.data[0]) {
                // call function to format the data
               setFlightData(await formatData(result.data));
            }
            else {
                noFlight();
            }
        }
    }
    const [flightData, setFlightData] = useState([{flyFromAirport: '', flyToAirport: '', flyFromCity: '', flyToCity: '', dateOut: '', dateBack: '', price: '', airline: '', bookingLink: ''}]);

    async function getAirlineName(code) {
        const res =  await fetch('/api/getAirlineCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code
            }),
            
        });
        
        const result = await res.json();
        if (result.errors) {
            return "Data Not Found"
            
        } else {
            return result.data[0].commonName;
        }       
    }

    async function formatData(data) {
        let datum;
        let formattedData = [];
        for (let i = 0; i < data.length; i++) {
            let formattedDatum = {flyFromAirport: '', flyToAirport: '', flyFromCity: '', flyToCity: '', dateOut: '', dateBack: '', price: '', airline: '', bookingLink: ''};
            datum = data[i];
            formattedDatum.flyFromAirport = datum.flyFrom;
            formattedDatum.flyToAirport = datum.flyTo;
            formattedDatum.flyFromCity = datum.cityFrom;
            formattedDatum.flyToCity = datum.cityTo;
            formattedDatum.dateOut = new Date(datum.route[0].local_departure).toLocaleString();
            formattedDatum.dateBack = new Date(datum.route[1].local_departure).toLocaleString();
            formattedDatum.price = datum.price;
            formattedDatum.airline = (await getAirlineName(datum.route[0].airline));
            formattedDatum.bookingLink = datum.deep_link;
            
            formattedData.push(formattedDatum);
        }
        console.log(formattedData);
        return await formattedData;
    }



    /* If no flight is returned display an error message */
    function noFlight() {
        setFlightData([{flyFromAirport: '', flyToAirport: '', flyFromCity: '', flyToCity: '', dateOut: '', dateBack: '', price: '', airline: '', bookingLink: ''}])
        document.getElementById("errormessage").innerHTML = "No Flights Available!"
    }

    /* current month incremented by 2 as javascript date counts month from 0
    and next month is needed.
    when month is 1 digit long (jan -> oct) a 0 is added to the start */
    function getNextMonthAndCurrentYear() {
        const month = String(new Date().getMonth()+2);
        const year = new Date().getFullYear();
        
        return year+"-"+month.padStart(2, '0')
    }

    function throwError(errorMessage) {
        document.getElementById("errormessage").innerHTML = errorMessage;
    }

    return (
        <section>

        <div className={styles.forms}>
            <div className={styles.searchForm}>
                <form onSubmit={getFlight}>
                        
                    <label>Departure Airport</label><input className={styles.inputs} id="departure" name="departure" type="text" defaultValue="Edinburgh"></input>
                                        
                    <label>Type of Holiday</label>
                    <select className={styles.inputs} name="holidayType" id="holidayType">
                        <option value="MAD">Relax on the Beach</option>
                        <option value="CDG">Explore a City</option>
                        <option value="GVA">Snowy Adventure</option>
                        <option value="IBZ">Non-stop Party</option>
                    </select>
                   
                    <label>Month of Travel</label><input className={styles.inputs} id="month" name="month" type="month" defaultValue="2022-07" min={`${getNextMonthAndCurrentYear()}`}></input>
                    <label>How Many Days</label><input className={styles.inputs} id="days" name="days" type="number" defaultValue="7" min="1" max="28"></input>
                    <label>Budget</label><input className={styles.inputs} id="budget" name="budget" type="number" defaultValue="750" min="25"></input>

                    <label>Cabin Class</label>
                    <select className={styles.inputs} name="class" id="class">
                        <option value="M">Economy</option>
                        <option value="W">Premium Economy</option>
                        <option value="C">Business</option>
                        <option value="F">First</option>
                    </select>
                    

                    <label>How Many People</label><input className={styles.inputs} id="people" name="people" type="number" defaultValue="2" min="1" max="9"></input>

                    <button className={styles.submit} id="submit" type="submit">Submit</button>

                </form>

            </div>

            <div className={styles.results}>
                {flightData.map((d) => (<ResultSummary dest={d.flyToCity} outgoing={d.dateOut} back={d.dateBack} price={d.price} airline={d.airline}/>))}
            </div>

            <label className={styles.error} id="errormessage"></label>     

        </div>

        

        </section>

    )
}

import styles from './css-modules/flightPlanner.module.css'

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
                destination: event.target.destination.value,
                month: event.target.month.value,
                days: event.target.days.value,
                budget: event.target.budget.value,
                people: event.target.people.value,
            }),
            
        });
        const result = await res.json();
        if (result.data[0]) {
            displayFlight(result.data[0]);
        }
        else {
            noFlight();
        }
        
    }

    function displayFlight(data) {
        document.getElementById("errormessage").innerHTML = ""
        document.getElementById("resultDest").value = data.cityTo
        document.getElementById("resultDateOut").value = data.route[0].local_departure
        document.getElementById("resultDateBack").value = data.route[1].local_departure
        document.getElementById("resultPrice").value = data.price
        document.getElementById("resultPricePP").value = data.price/2
        document.getElementById("Carrier").value = data.airlines[0]

        document.getElementById("book").href = data.deep_link
    }

    function noFlight() {
        document.getElementById("resultDest").value = ""
        document.getElementById("resultDateOut").value = ""
        document.getElementById("resultDateBack").value = ""
        document.getElementById("resultPrice").value = ""
        document.getElementById("resultPricePP").value = ""
        document.getElementById("Carrier").value = ""

        document.getElementById("book").href = ""

        document.getElementById("errormessage").innerHTML = "No Flights Available!"
    }

    return (
        <section>

        <div className={styles.forms}>
            <div className={styles.searchForm}>
                <form className={styles.form} onSubmit={getFlight}>
                        
                    <label>Departure Airport</label><input id="departure" name="departure" type="text" defaultValue="GLA"></input>
                    <label>Destination Airport</label><input id="destination" name="destination" type="text" defaultValue="ROM"></input>
                    <label>Month of Travel</label><input id="month" name="month" type="number" defaultValue="7"></input>
                    <label>How Many Days</label><input id="days" name="days" type="number" defaultValue="7"></input>
                    <label>Budget</label><input id="budget" name="budget" type="number" defaultValue="750"></input>
                    <label>How Many People</label><input id="people" name="people" type="number" defaultValue="2"></input>

                    <button className={styles.submit} id="submit" type="submit">Submit</button>

                </form>

            </div>

            <div className={styles.resultsForm}>

                <form className={styles.form}>
                    <label>Destination</label><input id="resultDest" name="destination" type="text" disabled></input>
                    <label>Outgoing Flight Time</label><input id="resultDateOut" name="dateOut" type="text" disabled></input>
                    <label>Return Flight Time</label><input id="resultDateBack" name="dateBack" type="text" disabled></input>
                    <label>Total Price</label><input id="resultPrice" name="price" type="text" disabled></input>
                    <label>Price Per Person</label><input id="resultPricePP" name="pricePP" type="text" disabled></input>
                    <label>Airline</label><input id="Carrier" name="flightNo" type="text" disabled></input>
                    <button className={styles.submit}><a id="book" name="book" href="">Go To Book</a></button>
                </form>
                <label className={styles.error} id="errormessage"></label>

            </div>
        </div>

        </section>

    )
}
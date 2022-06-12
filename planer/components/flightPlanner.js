
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
                class: event.target.class.value,
                people: event.target.people.value,
            }),
            
        });
        const result = await res.json();
        if (result.error) {
            throwError(result.error);
        } else {
            if (result.data[0]) {
                displayFlight(result.data[0]);
            }
            else {
                noFlight();
            }
        }
        
        
    }

    /* display results of api call
    also formats dates/times of flights*/
    function displayFlight(data) {
        const dateGoing = new Date(data.route[0].local_departure);
        const dateReturning = new Date(data.route[1].local_departure);
        document.getElementById("errormessage").innerHTML = ""
        document.getElementById("resultDept").value = data.cityFrom
        document.getElementById("resultDest").value = data.cityTo
        document.getElementById("resultDateOut").value = dateGoing.toLocaleString()
        document.getElementById("resultDateBack").value = dateReturning.toLocaleString()
        document.getElementById("resultPrice").value = data.price
        document.getElementById("resultPricePP").value = Math.round((data.price/document.getElementById("people").value + Number.EPSILON) * 100) / 100
        document.getElementById("Carrier").value = data.airlines[0]

        document.getElementById("book").href = data.deep_link
    }

    /* If no flight is returned display an error message */
    function noFlight() {
        document.getElementById("resultDept").value = ""
        document.getElementById("resultDest").value = ""
        document.getElementById("resultDateOut").value = ""
        document.getElementById("resultDateBack").value = ""
        document.getElementById("resultPrice").value = ""
        document.getElementById("resultPricePP").value = ""
        document.getElementById("Carrier").value = ""

        document.getElementById("book").href = ""

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
                <form className={styles.form} onSubmit={getFlight}>
                        
                    <label>Departure Airport</label><input id="departure" name="departure" type="text" defaultValue="Edinburgh"></input>
                    <label>Destination Airport</label><input id="destination" name="destination" type="text" defaultValue="ROM"></input>
                    {/*                     
                    <label>Type of Holiday</label>
                    <select name="holidayType" id="holidayType">
                        <option value="beach">Relax on the Beach</option>
                        <option value="city">Explore a City</option>
                        <option value="snow">Snowy Adventure</option>
                        <option value="party">Non-stop Party</option>
                    </select>
                    */}
                    <label>Month of Travel</label><input id="month" name="month" type="month" defaultValue="2022-07" min={`${getNextMonthAndCurrentYear()}`}></input>
                    <label>How Many Days</label><input id="days" name="days" type="number" defaultValue="7" min="1" max="28"></input>
                    <label>Budget</label><input id="budget" name="budget" type="number" defaultValue="750" min="25"></input>

                    <label>Cabin Class</label>
                    <select name="class" id="class">
                        <option value="M">Economy</option>
                        <option value="W">Premium Economy</option>
                        <option value="C">Business</option>
                        <option value="F">First</option>
                    </select>
                    

                    <label>How Many People</label><input id="people" name="people" type="number" defaultValue="2" min="1" max="9"></input>

                    <button className={styles.submit} id="submit" type="submit">Submit</button>

                </form>

            </div>

            <div className={styles.resultsForm}>

                <form className={styles.form}>
                    <label>Selected Departure</label><input id="resultDept" name="departure" type="text" disabled></input>
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
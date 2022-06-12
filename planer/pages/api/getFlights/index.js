module.exports = async (req, res) => {
    const data = req.body
    try {
        // query the locations api to get a destination ID
        const locationsURL = ``
        //build the url
        const url =`https://tequila-api.kiwi.com/v2/search?fly_from=${data.departure}&fly_to=${data.destination}&dateFrom=01/${data.month}/2022&dateTo=28/${data.month}/2022&return_from=01/${data.month}/2022&return_to=28/${data.month}/2022&curr=GBP&max_stopovers=0&nights_in_dst_from=${data.days}&nights_in_dst_to=${data.days}&adults=${data.people}&selected_cabins=M&price_from=0&price_to=${data.budget}&limit=1`

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'apiKey': process.env.KIWI_API_KEY
            }
        }
        const response = await fetch(url, options);
        const result = await response.json();
        res.status(200);
        res.end(JSON.stringify(result))
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}
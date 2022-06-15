module.exports = async (req, res) => {
    try {
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                grant_type: '',
                client_id: process.env.AMADEUS_API_KEY,
                client_descret: process.env.AMADEUS_API_SECRET
            }
        };
        const url = 'https://test.api.amadeus.com/v1/security/oauth2/token'
        const response = await fetch(url, options);
        const result = response.json()
        
        res.status(200);
        res.end(JSON.stringify(result));

    } catch(error) {
        res.json({error: error.message});

    }
}
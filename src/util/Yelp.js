const apiKey = 'tEP7OJafFWA7DsIl7DLwGmelyECsTcyWKg-0H6AcIgissJIk287bUUdLuSBRwfREV8igWwKL09NUwbMh7h4F3WvJSBR7JT_cu84AgSQvJcf8D55xaXpX-1MTXtgYZHYx'
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url
                }));
            }
        });
    }
};

export default Yelp;
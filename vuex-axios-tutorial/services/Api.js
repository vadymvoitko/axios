import axios from 'axios'

//Hier export is function but usually its object
// return axios.create is smth new 
export default() => {
    return axios.create({
        baseURL: `http://api.pearson.com/v2/dictionaries`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

//Accept
//
//Tells the server what MIME-type of resource the browser is looking for.
//
//Content-Type
//
//Tells the server what the data type that the application is sending is. Which is not required for our App as we are not using any PUT or POST requests but good to know nonetheless.
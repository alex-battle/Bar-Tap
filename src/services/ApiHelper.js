import axios from 'axios'

const id = 'JFXW0132AMGNT4GHJNYSXGXOS4JM0W05Z2TCSKVKX0ICF1ZG'
const secret = '1FESXTTSHXBKK5AMFXVCDOHCBBFRI43J5SGD05EBBC1EL0GS'

// const idURL = `https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=${id}&client_secret=${secret}&v=${vDate()}`

function vDate() {
    let today = new Date()
    let day = today.getDate().toString();
    let mon = today.getMonth() + 1;
    mon = (mon < 10) ? '0' + mon.toString() : mon.toString();
    var year = today.getFullYear().toString();
    var dateString = year + mon + day;
    return (dateString);
}

export const findBar = async (search) => {
    const searchURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&query=${search}&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const response = await axios.get(searchURL)
    return response
}
export const barsList = async () => {
    const allURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d116941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const responseAll = await axios.get(allURL)
    return responseAll
}

export const loungesList = async () => {
        const loungeURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d121941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const loungeAll = await axios.get(loungeURL)
        return loungeAll
    }
    
export const cocktailList = async () => {
        const cocktailURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11e941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
        const cocktailAll = await axios.get(cocktailURL)
        return cocktailAll
    }
export const sportsBarList = async () => {
    const sportsBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d11d941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const sportsbarAll = await axios.get(sportsBarURL)
    return sportsbarAll
}
export const hookahList = async () => {
    const hookahURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d119941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const hookahAll = await axios.get(hookahURL)
    return hookahAll
}
export const diveBarList = async () => {
    const diveBarURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d118941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const diveBarAll = await axios.get(diveBarURL)
    return diveBarAll
    
}
export const whiskeyList = async () => {
    const whiskeyURL = `https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4bf58dd8d48988d122941735&client_id=${id}&client_secret=${secret}&v=${vDate()}`
    const whiskeyAll = await axios.get(whiskeyURL)
    return whiskeyAll
}

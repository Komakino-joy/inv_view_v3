import axios from 'axios';
const source = axios.CancelToken.source();

export const CHG_API_URL = 'http://localhost:5051/chg';
export const FSC_API_URL = 'http://localhost:5050/fsc';


export const httpFileUpload = async(baseUrl, apiRoute, file) => {
    console.log(baseUrl+apiRoute)
    const formData = new FormData();
    formData.append(
        "file",
        file,

      ); 
    axios.post(`${baseUrl}${apiRoute}`, 
                formData, 
                {cancelToken: source.token})
                .then(res => { alert('Report Finished Uploading') })
                .catch(error => { alert('Report Failed to upload')});
};

export const fetchData = (url, setStateFunction ) => {
    fetch(url)
    .then(data => data.json())
    .then(data => setStateFunction(data))
};

export const httpFetchDailyShrink = async(url) => {
    try{
        const response = await fetch(`${url}/data/on-hand-inventory-by-day`);
        const dailyShrink = await response.json();
        return dailyShrink
    } catch(err) {
        console.log(err)
    };
};

export const httpFetchWeeklyShrink = async(url) => {
    try{
        const response = await fetch(`${url}/data/on-hand-inventory-by-week`);
        const weeklyShrink = await response.json();
        return weeklyShrink
    } catch(err) {
        console.log(err)
    };
};

export const httpFetchMonthlyShrink = async(url) => {
    try{
        const response = await fetch(`${url}/data/on-hand-inventory-by-month`);
        const monthlyShrink = await response.json();
        return monthlyShrink
    } catch(err) {
        console.log(err)
    };
};

export const httpFetchYearlyShrink = async(url) => {
    try{
        const response = await fetch(`${url}/data/on-hand-inventory-by-year`);
        const yearlyShrink = await response.json();
        return yearlyShrink
    } catch(err) {  
        console.log(err)
    };
};

export const httpFetchDailyCount = async(url) => {
    try{
        const response = await fetch(`${url}/data/counts-by-day`);
        const dailyCount = await response.json();
        return dailyCount
    } catch(err) {
        console.log(err)
    };
};


export const httpFetchUserCount = async(url) => {
    try{
        const response = await fetch(`${url}/data/counts-by-user`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    };
};

export const httpFetchUserCountByDay = async(url) => {
    try{
        const response = await fetch(`${url}/data/counts-by-user-by-day`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    };
};


export const httpFetchOccupiedLocsUncounted = async(url) => {
    try {
        const response = await fetch(`${url}/data/occupied-locations-uncounted`);
        const occupiedLocsUncounted = await response.json();
        return occupiedLocsUncounted
    } catch (error) {
        return error;;
    };
};

export const httpFetchOccupiedLocsCounted = async(url) => {
    try {
        const response = await fetch(`${url}/data/occupied-locations-counted`);
        const occupiedLocsCounted = await response.json();
        return occupiedLocsCounted
    } catch (error) {
        return error;;
    };
};


export const httpFetchEmptyLocsCounted = async(url) => {
    try {
        const response = await fetch(`${url}/data/empty-locations-counted`);
        const emptyLocsCounted = await response.json();
        return emptyLocsCounted
    } catch (error) {
        return error;;
    };
};


export const httpFetchEmptyLocsUncounted = async(url) => {
    try {
        const response = await fetch(`${url}/data/empty-locations-uncounted`);
        const emptyLocsUncounted = await response.json();
        return emptyLocsUncounted
    } catch (error) {
        return error;;
    };
};


export const httpFetchTotalExpectedQty = async(url) => {
    try {
        const response = await fetch(`${url}/data/total-expected-qty-sum`);
        const sum = await response.json();
        return sum
    } catch (error) {
        return error;;
    };
};

export const httpFetchTotalVarianceQty = async(url) => {
    try {
        const response = await fetch(`${url}/data/total-variance-sum`);
        const sum = await response.json();
        return sum
    } catch (error) {
        return error;;
    };
};


export const httpFetchUniqueLocsCounted = async(url) => {
    try {
        const response = await fetch(`${url}/data/count-unique-locations-counted`);
        const count = await response.json();
        return count
    } catch (error) {
        return error;;
    };
};

export const httpFetchTotalCountsWithVariance = async(url) => {
    try {
        const response = await fetch(`${url}/data/count-variances`);
        const count = await response.json();
        return count
    } catch (error) {
        return error;;
    };
};

export const httpFetchPR = async(url) => {
    try {
        const response = await fetch(`${url}/data/pr`);
        const count = await response.json();
        return count;
    } catch (error) {
        return error;;
    };
};

export const httpFetchDmg = async (url) => {
    try {
        const response = await fetch(`${url}/data/damages`);
        const count = await response.json();
        return count;
    } catch (error) {
        return error;;
    };
};

export const httpFetchNotPutawayByDay = async(url, day) => {
    try {
        const response = await fetch(`${url}/data/not-putaway-${day}-day-count`);
        const count = await response.json();
        return count
    } catch (error) {
        return error;
    };
};

export const httpFetchTransitionalByDay = async(url, day) => {
    try {
        const response = await fetch(`${url}/data/transitional-inv-${day}-count`);
        const count = await response.json();
        return count
    } catch (error) {
        return error;
    };
};

export const httpLatestCountData = async(url) => {
    try {
        const response = await fetch(`${url}/data/latest-count-data`);
        const count = await response.json();
        return count
    } catch (error) {
        return error;
    };
};


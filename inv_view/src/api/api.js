export const CHG_API_URL = 'http://localhost:5051/';
export const FSC_API_URL = 'http://localhost:5050/'

export const fetchData = (url, setStateFunction ) => {
    fetch(url)
    .then(data => data.json())
    .then(data => setStateFunction(data))
};


export const fetchDailyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-day`);
        const dailyShrink = await response.json();
        return dailyShrink
    } catch(err) {
        console.log(err)
    }
};

export const fetchWeeklyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-week`);
        const weeklyShrink = await response.json();
        return weeklyShrink
    } catch(err) {
        console.log(err)
    }
};

export const fetchMonthlyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-month`);
        const monthlyShrink = await response.json();
        return monthlyShrink
    } catch(err) {
        console.log(err)
    }
};


export const fetchYearlyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-year`);
        const yearlyShrink = await response.json();
        return yearlyShrink
    } catch(err) {
        console.log(err)
    }
};

export const fetchDailyCount = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-day`);
        const dailyCount = await response.json();
        return dailyCount
    } catch(err) {
        console.log(err)
    }
};


export const fetchUserCount = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-user`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    }
};

export const fetchUserCountByDay = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-user-by-day`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    }
};


// ^ --------------------------FSC API CALLS ------------------------

export const FSC_fetchDailyShrink = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/on-hand-inventory-by-day`);
        const dailyShrink = await response.json();
        return dailyShrink
    } catch(err) {
        console.log(err)
    }
};


export const FSC_fetchWeeklyShrink = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/on-hand-inventory-by-week`);
        const weeklyShrink = await response.json();
        return weeklyShrink
    } catch(err) {
        console.log(err)
    }
};


export const FSC_fetchMonthlyShrink = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/on-hand-inventory-by-month`);
        const monthlyShrink = await response.json();
        return monthlyShrink
    } catch(err) {
        console.log(err)
    }
};

export const FSC_fetchYearlyShrink = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/on-hand-inventory-by-year`);
        const yearlyShrink = await response.json();
        return yearlyShrink
    } catch(err) {
        console.log(err)
    }
};


export const FSC_fetchDailyCount = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/counts-by-day`);
        const dailyCount = await response.json();
        return dailyCount
    } catch(err) {
        console.log(err)
    }
};


export const FSC_fetchUserCount = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/counts-by-user`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    }
};

export const FSC_fetchUserCountByDay = async() => {
    try{
        const response = await fetch(`${FSC_API_URL}fsc/data/counts-by-user-by-day`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    }
};




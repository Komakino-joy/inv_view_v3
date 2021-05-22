export const CHG_API_URL = 'http://localhost:5051/';
export const FSC_API_URL = 'http://localhost:5050/'

export const fetchData = (url, setStateFunction ) => {
    fetch(url)
    .then(data => data.json())
    .then(data => setStateFunction(data))
};

// ^ --------------------------CHG API CALLS ------------------------

export const fetchDailyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-day`);
        const dailyShrink = await response.json();
        return dailyShrink
    } catch(err) {
        console.log(err)
    };
};

export const fetchWeeklyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-week`);
        const weeklyShrink = await response.json();
        return weeklyShrink
    } catch(err) {
        console.log(err)
    };
};

export const fetchMonthlyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-month`);
        const monthlyShrink = await response.json();
        return monthlyShrink
    } catch(err) {
        console.log(err)
    };
};

export const fetchYearlyShrink = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/on-hand-inventory-by-year`);
        const yearlyShrink = await response.json();
        return yearlyShrink
    } catch(err) {
        console.log(err)
    };
};

export const CHG_fetchDailyCount = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-day`);
        const dailyCount = await response.json();
        return dailyCount
    } catch(err) {
        console.log(err)
    };
};


export const CHG_fetchUserCount = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-user`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    };
};

export const CHG_fetchUserCountByDay = async() => {
    try{
        const response = await fetch(`${CHG_API_URL}chg/data/counts-by-user-by-day`);
        const userCount = await response.json();
        return userCount
    } catch(err) {
        console.log(err)
    };
};


export const CHG_fetchOccupiedLocsUncounted = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/occupied-locations-uncounted`);
        const occupiedLocsUncounted = await response.json();
        return occupiedLocsUncounted
    } catch (error) {
        console.log(error);
    };
};

export const CHG_fetchOccupiedLocsCounted = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/occupied-locations-counted`);
        const occupiedLocsCounted = await response.json();
        return occupiedLocsCounted
    } catch (error) {
        console.log(error);
    };
};


export const CHG_fetchEmptyLocsCounted = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/empty-locations-counted`);
        const emptyLocsCounted = await response.json();
        return emptyLocsCounted
    } catch (error) {
        console.log(error);
    };
};


export const CHG_fetchEmptyLocsUncounted = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/empty-locations-uncounted`);
        const emptyLocsUncounted = await response.json();
        return emptyLocsUncounted
    } catch (error) {
        console.log(error);
    };
};


export const CHG_fetchTotalExpectedQty = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/total-expected-qty-sum`);
        const sum = await response.json();
        return sum
    } catch (error) {
        console.log(error);
    };
};

export const CHG_fetchTotalVarianceQty = async() => {
    try {
        const response = await fetch(`${CHG_API_URL}chg/data/total-variance-sum`);
        const sum = await response.json();
        return sum
    } catch (error) {
        console.log(error);
    };
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




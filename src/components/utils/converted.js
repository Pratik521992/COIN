export const usdToInr = (value) => {
    return Math.floor(73.37 * value)
}
export function ethToUsd(usd, value) {
    if(usd && value) {
        return (Math.floor((usd * value)*100)/100).toString()
    }
    return null
}
export const ethToInr = (inr, value) => {   
    if(inr && value) {
        return (Math.floor((inr * value)*100)/100).toString()
    }
    return null
}

export function epoch (date) {
    var utcSeconds = date;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return d;
}

export function hashToMegaHash(hash) {
    return Math.round(hash*0.000001*100)/100
}

export const getETH = (value) => {
    if(value) {
        return Math.floor(value*Math.pow(10, -18)*10000)/10000
    }
    return null
}
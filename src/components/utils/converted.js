export const usdToInr = (value) => {
    return Math.floor(73.37 * value)
}
export function ethToUsd(usd, value) {
    if(usd && value) {
        return (Math.floor((usd * value)*100)/100)
    }
    return 0
}
export const ethToInr = (inr, value) => {   
    if(inr && value) {
        return (Math.floor((inr * value)*100)/100)
    }
    return 0
}

export function epoch (date) {
    return Math.floor(Math.abs(new Date() - new Date(date * 1000))/1000/60)
}

export function hashToMegaHash(hash) {
    if(hash) {
        return Math.round(hash*0.000001*100)/100
    }
    return 0
}

export const getETH = (value) => {
    if(value) {
        return Math.floor(value*Math.pow(10, -18)*100000)/100000
    }
    return 0
}
export const getETHChart = (value) => {
    if(value) {
        return Math.abs(value*Math.pow(10, -15))
    }
    return 0
}
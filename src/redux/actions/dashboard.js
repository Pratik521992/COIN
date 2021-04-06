import { STATS_DATA, EXCHANGE_RATE } from "../types";

export const statsData = (data) => {
    return {
        type: STATS_DATA,
        payload: data
    }
}
export const exChangeRate = (currency, rate) => {
    return {
        type: EXCHANGE_RATE,
        currency: currency,
        rate: rate
    }
}
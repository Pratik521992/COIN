import { STATS_DATA, EXCHANGE_RATE, PAYOUTS, UNPAID } from "../types";

const initialState = {
  stats: [{
    activeWorkers: 0,
    averageHashrate: 0,
    btcPerMin: 0,
    coinsPerMin: 0.0,
    currentHashrate: 0,
    invalidShares: 0,
    lastSeen: 0,
    reportedHashrate: 0,
    staleShares: 0,
    time: 1617524400,
    unconfirmed: null,
    unpaid: 3503298829872405,
    usdPerMin: 0.0033927125944785666,
    validShares: 35,
    inr: null,
    usd: null
  }],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATS_DATA:
      return {
        ...state,
        stats: action.payload,
        nextTick: new Date().getMilliseconds()
      };
    case EXCHANGE_RATE:
      return {
        ...state,
        [action.currency]: action.rate,
      };
    case PAYOUTS:
      return {
        ...state,
        payouts: action.payload,
      };
    case UNPAID:
      return {
        ...state,
        unpaid: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;

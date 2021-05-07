import { STATS_DATA, EXCHANGE_RATE, PAYOUTS, UNPAID, NET_WORTH } from "../types";

export const statsData = (data) => {
  return {
    type: STATS_DATA,
    payload: data,
  };
};
export const setPayouts = (data) => {
  return {
    type: PAYOUTS,
    payload: data,
  };
};
export const setNetWorth = (data) => {
  return {
    type: NET_WORTH,
    payload: data,
  };
};
export const setUnpaid = (data) => {
  return {
    type: UNPAID,
    payload: data,
  };
};
export const exChangeRate = (currency, rate) => {
  return {
    type: EXCHANGE_RATE,
    currency: currency,
    rate: rate,
  };
};

export const getComponentDetails = () => {
  const urls = [
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=INR",
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD",
    "https://api.ethermine.org/miner/0x33feb9771e261a41b78429e0e1be8c360727e584/rounds",
    "https://api.ethermine.org/miner/0x33feb9771e261a41b78429e0e1be8c360727e584/history",
    "https://api.ethermine.org/miner/0x33feb9771e261a41b78429e0e1be8c360727e584/currentStats",
    "https://api.ethermine.org/miner/0x33feb9771e261a41b78429e0e1be8c360727e584/payouts",
  ];
  let requests = urls.map((url) => fetch(url));
  return (dispatch) => {
    Promise.all(requests)
    .then((res) =>
      res.forEach((res) =>
        res.json()
        .then((res) => {
          if (res.ethereum) {
            const key = Object.keys(res.ethereum)[0];
            dispatch(exChangeRate(key, res.ethereum.inr || res.ethereum.usd));
          }else if (res.data.time) {
            dispatch(setUnpaid(res.data));
          } else if (res.data[0].time) {
            dispatch(statsData(res.data));
          } else if(res.data[0].paidOn) {
            dispatch(setNetWorth(res.data))
          } else {
            dispatch(setPayouts(res));
          }
        })
      )
    );
  };
};

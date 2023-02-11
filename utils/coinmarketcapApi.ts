import axios from 'axios'

import { apiGetRequest } from './axios'

export const getCategory = async () => {
  // return await apiGetRequest(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=635634b93e16136f3bb2ee9e`,
  // // )
  // return await axios({
  //   // mode: 'cors',
  //   headers: {
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, origin, content-typ, accept',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
  //     'Access-Control-Allow-Origin': '*',
  //     'X-CMC_PRO_API_KEY': '8e408b4e-44c0-42ff-82b1-4351c1e4a267',
  //     'Connection': 'keep-alive',
  //   },

  //   method: 'GET',

  //   url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=635634b93e16136f3bb2ee9e`,
  // }).then(response => console.log(response?.json()))
  let response = null
  return new Promise(async (resolve, reject) => {
    try {
      response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
      });
    } catch(ex) {
      response = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      console.log(json);
      resolve(json);
    }
  });
}

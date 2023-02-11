import axios, { type AxiosStatic } from 'axios'

export const apiGetRequest = async (payload: string) => {
  try {
    return await axios.get(payload)
  } catch (error: any) {
    return error.response
  }
}

export const apiPostRequest = async (payload: { url: string; data: object }) => {
  const { url, data } = payload
  try {
    return await axios.post(url, data)
  } catch (error: any) {
    return error.response
  }
}

export const apiPutRequest = async (payload: { url: string; data: object }) => {
  const { url, data = {} } = payload
  try {
    const response = await axios.put(url, data)
    return response
  } catch (error: any) {
    console.log(error)
    if (error.response.status === 401) {
      return error.response
    } else {
      return error.response
    }
  }
}
export function setupAxios(axios: AxiosStatic) {
  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   axios.interceptors.request.use(
//     (config) => {
//       const {
//         auth: { accessToken },
//       } = store.getState()

//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`
//       }

//       return config
//     },
//     (err) => Promise.reject(err)
//   )
}
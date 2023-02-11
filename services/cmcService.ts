import { getCategory } from "../utils/coinmarketcapApi"

export const getCoinData = async () => {
  const response = await getCategory()
  return {
    ...response
  }
}
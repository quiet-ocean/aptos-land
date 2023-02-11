import { useState, useEffect } from "react"
import { getCoinData } from "../../services/cmcService"

export const Header = () => {
  const [price, setPrice] = useState(0)
  const [avgFloor, setAvgFloor] = useState(0)
  const [listedCount, setListedCount] = useState(0)
  const [dailyVolume, setDailyVolume] = useState(0)

  useEffect(() => {
    const effect = async () => {
      // const response = await getCoinData()
      // console.log(response)
    }
    effect()
  }, [])

  return (
    <>
      <div className='bg-lightblack text-white rounded-bl-[18px] border-l-[1px] border-b-[1px] border-white/[0.1]'>
        <div className='flex items-center justify-center p-4'>
          <div className='box-clip-path py-2 basis-[265px] text-center gradient-green-v2'>
            <p>
              APT/USD: <span className='text-orange'>{price && `$14.35`}</span>
            </p>
          </div>
          <div className='box-clip-path py-2 basis-[265px] text-center gradient-green-v2 ml-[-26px]'>
            <p>
              Avg. Floor Price: <span className='text-red'> -0.53%</span>
            </p>
          </div>
          <div className='box-clip-path py-2 basis-[265px] text-center gradient-green-v2 ml-[-26px]'>
            <p>
              Avg. Listed Count: <span className='text-orange'>-0.66%</span>
            </p>
          </div>
          <div className='box-clip-path py-2 basis-[265px] text-center gradient-green-v2 ml-[-26px]'>
            <p>
              Daily Volume: <span className='text-[#03FBB5]'>57.26%</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import CloudIcon from '@mui/icons-material/Cloud';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BarChartIcon from '@mui/icons-material/BarChart';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function IconsBackground() {
  return (
    <div className='max-w-[550px] w-full m-auto px-1 xl:hidden
'>
      <div className='flex justify-between px-14 pt-12'>
        <AirplanemodeActiveIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
        <EmojiEmotionsIcon className='text-background' sx={{ fontSize: 30 }} />
        <CloudIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
      </div>

      <div className='flex justify-between px-4 pt-5'>
        <ThumbUpIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
        <BarChartIcon className='text-background' sx={{ fontSize: 28 }} />
        <WbSunnyIcon className='text-background' sx={{ fontSize: 28 }} />
        <InstagramIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
      </div>

      <div className='text-center py-5'>
        <p className='text-2xl font-Edu font-normal'>
          Welcome to the future of <br /> Frontend Development
        </p>
      </div>

      <div className='w-full'>
        <div className='flex justify-between pl-9 pr-3'>
          <DirectionsBikeIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
          <FacebookIcon className='text-background' sx={{ fontSize: 28 }} />
          <TwitterIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
          <PauseIcon className='text-background' sx={{ fontSize: 28 }} />
        </div>

        <div className='flex justify-between pr-9 pt-4'>
          <Brightness3Icon className='text-background' sx={{ fontSize: 28 }} />
          <PlayArrowIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
          <AcUnitIcon className='text-background' sx={{ fontSize: 28 }} />
          <InstagramIcon className='text-background text-gray-500' sx={{ fontSize: 28 }} />
        </div>
      </div>
    </div>
  )
}

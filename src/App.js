
import { BsFillGrid1X2Fill,BsBroadcast,BsFillFileEarmarkCheckFill,BsThreeDotsVertical } from 'react-icons/bs';
import { FaFileAlt, FaFilter,FaDollarSign } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdCalendar,IoIosArrowForward, IoIosArrowDown,IoIosArrowUp } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';
import { TbBellRinging } from 'react-icons/tb';
import { MdCall } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';
import { CgSandClock } from 'react-icons/cg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

function App() {

  let currentProjects = [{
    name: 'Construction Project',
    propertyName: 'Property name',
    rate: '100-800',
    deadline : '25 may',
    venderPic : 'https://randomuser.me/api/portraits/men/3.jpg',
    venderName : 'Vendor name'
  },{
    name: 'Construction Project',
    propertyName: 'Property name',
    rate: '100-800',
    deadline : '25 may',
    venderPic : 'https://randomuser.me/api/portraits/men/3.jpg',
    venderName : 'Vendor name'
  },{
    name: 'Construction Project',
    propertyName: 'Property name',
    rate: '100-800',
    deadline : '25 may',
    venderPic : 'https://randomuser.me/api/portraits/men/3.jpg',
    venderName : 'Vendor name'
  },{
    name: 'Construction Project',
    propertyName: 'Property name',
    rate: '100-800',
    deadline : '25 may',
    venderPic : 'https://randomuser.me/api/portraits/men/3.jpg',
    venderName : 'Vendor name'
  },{
    name: 'Construction Project',
    propertyName: 'Property name',
    rate: '100-800',
    deadline : '25 may',
    venderPic : 'https://randomuser.me/api/portraits/men/3.jpg',
    venderName : 'Vendor name'
  }]

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <h1 className="font-bold text-center text-2xl my-4">LOGO</h1>
        <div className="p-4 bg-gray-50">
          <nav className='my-6'>
            <ul className='space-y-5 py-4'>
              <li className=''>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <BsFillGrid1X2Fill className='inline mr-3'/>Dashboard
                </a>
              </li>
              <li>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <FaFileAlt className='inline mr-3'/>Project
                </a>
              </li>
              <li>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <IoMdCalendar className='inline mr-3' />Calender
                </a>
              </li>
              <li>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <IoSend className='inline mr-3' />Messages
                </a>
                <span className="inline-block p-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#14A9F9] text-white rounded text-sm">5</span>
              </li>
              <li>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <TbBellRinging className='inline mr-3' />Notifications
                </a>
                <span className="inline-block p-1 text-sm leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#14A9F9] text-white rounded">5</span>
              </li>
              <li>
                <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                  <MdCall className='inline mr-3' />Contacts
                </a>
              </li>
            <h3>Promotions</h3>
            <li>
              <a className='focus:border-l-4 focus:border-[#14A9F9] focus:rounded-sm px-4 cursor-pointer focus:text-[#14A9F9] text-slate-500' href='#'>
                <GiBullseye className='inline mr-3' />Promotions
              </a>
            </li>
            </ul>
            
          </nav>
        </div>
      </div>
      <div className="col-span-7 px-3 my-4">
        <div className='my-2'>
          <form class="flex items-center">   
              <div class="relative w-full">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="simple-search" class="bg-slate-100 text-gray-900 text-sm block w-full pl-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-black" placeholder="Search for projects" />
              </div>
          </form>
        </div>
        <div className='mt-12 space-y-2'>
          <h1 className='text-xl font-semibold'>Welcome back, Andrew!</h1>
          <p className='text-sm text-gray-500'>Have a look at the Quick Progress Bar.</p>
          <div className='grid grid-cols-12 gap-2 '>
            <div className='rounded-lg col-span-5 h-36 bg-[#6590FF] relative shadow-lg shadow-[#6590FF]/60'>
              <svg
                id="wave"
                style={{ transform: "rotate(180deg)", transition: "0.3s" }}
                viewBox="0 0 1440 490"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
                    <stop stopColor="rgba(122, 159, 255, 1)" offset="0%" />
                    <stop stopColor="rgba(122, 159, 255, 1)" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  style={{ transform: "translate(0, 0px)", opacity: 1 }}
                  fill="url(#sw-gradient-0)"
                  d="M0,147L60,147C120,147,240,147,360,147C480,147,600,147,720,171.5C840,196,960,245,1080,294C1200,343,1320,392,1440,408.3C1560,425,1680,408,1800,359.3C1920,310,2040,229,2160,236.8C2280,245,2400,343,2520,383.8C2640,425,2760,408,2880,383.8C3000,359,3120,327,3240,277.7C3360,229,3480,163,3600,163.3C3720,163,3840,229,3960,269.5C4080,310,4200,327,4320,277.7C4440,229,4560,114,4680,122.5C4800,131,4920,261,5040,294C5160,327,5280,261,5400,204.2C5520,147,5640,98,5760,138.8C5880,180,6000,310,6120,343C6240,376,6360,310,6480,310.3C6600,310,6720,376,6840,359.3C6960,343,7080,245,7200,187.8C7320,131,7440,114,7560,155.2C7680,196,7800,294,7920,277.7C8040,261,8160,131,8280,114.3C8400,98,8520,196,8580,245L8640,294L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"
                />
              </svg>
              <div className='absolute top-5 px-3'>
                <div className='flex justify-between'>
                  <p className='py-1 px-3 text-white text-[12px] bg-black/20 rounded-md'>
                    <BsBroadcast  className='inline mr-2 font-bold'/>Live projects</p>
                  <p className='py-1 px-3 text-white text-[12px] bg-black/20 rounded-md'>View All</p>
                </div>

                <div className='mt-5 px-3'>
                  <p className='text-5xl font-bold text-white'>56</p>
                  <p className='text-sm text-white'>Currently, the projects is in progress.</p>
                </div>
              </div>
            </div>
            <div className='rounded-lg  col-span-4 h-36 bg-[#65CAFF] relative shadow-lg shadow-[#65CAFF]/60'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill=" #7AD1FF"
                  fillOpacity={1}
                  d="M0,288L48,272C96,256,192,224,288,181.3C384,139,480,85,576,90.7C672,96,768,160,864,192C960,224,1056,224,1152,229.3C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
              </svg>
              <div className='absolute top-5 px-3'>
                <div className='flex justify-between'>
                  <p className='py-1 px-3 text-white text-[12px] bg-black/20 rounded-md'>
                    <CgSandClock  className='inline mr-2 font-bold'/>In Progress</p>
                </div>

                <div className='mt-5 px-3'>
                  <p className='text-5xl font-bold text-white'>124</p>
                  <p className='text-sm text-white'>Projects in progress</p>
                </div>
              </div>
            </div>
            <div className='rounded-lg  col-span-3 h-36 bg-[#AD65FF] relative shadow-lg shadow-[#AD65FF]/60'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#B97AFF"
                  fillOpacity={1}
                  d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                />
              </svg>
              <div className='absolute top-5 px-3'>
                <div className='flex justify-between'>
                  <p className='py-1 px-3 text-white text-[12px] bg-black/20 rounded-md'>
                    <BsFillFileEarmarkCheckFill  className='inline mr-2 font-bold'/>Completed</p>
                </div>

                <div className='mt-5 px-3'>
                  <p className='text-5xl font-bold text-white'>24</p>
                  <p className='text-sm text-white'>Completed projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 space-y-2'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-xl font-semibold'>Current Projects</h1>
              <p className='text-sm text-gray-500'>Projects that are currently in progress</p>
            </div>
            <div className='space-x-3 mr-4'>
              <button className='text-md font-semibold bg-white px-3 py-1 border rounded-md'>Filter<FaFilter className='inline ml-2'/></button>
              <button className='text-md font-semibold bg-white px-1 py-1 border rounded-md'><BsThreeDotsVertical className='inline'/></button>
            </div>
          </div>

          <Swiper navigation={true} modules={[Navigation]} spaceBetween={50}
            slidesPerView={2.5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className ="py-4">
              {
                currentProjects.map((pro, i) => {
                  return(
                    <SwiperSlide key={i} className="space-y-1 py-1 px-4 rounded-md border shadow-sm border-slate-100">
                      <h2 className='text-lg font-bold'>{pro.name}</h2>
                      <p className='text-sm text-gray-500'>{pro.propertyName}</p>
                      <div className='flex justify-around py-3 items-center'>
                        <p className='text-sm font-semibold'>
                          <FaDollarSign className="inline mr-2"/>{pro.rate}</p>
                        <p className='text-sm font-bold'>
                          <IoMdCalendar className='inline mr-2'/>Deadline - {pro.deadline}</p>
                      </div>


                      <div className="w-full bg-gray-200 rounded-sm">
                        <div
                          className="bg-[#14A9F9] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-sm"
                          style={{ width: "75%" }}
                        >
                          {" "}
                          75%
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 py-3">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={pro.venderPic}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-500 truncate dark:text-black">
                            {pro.venderName}
                          </p>
                        </div>
                        <button className="inline-flex text-sm items-center bg-[#14A9F9] font-semibold text-white dark:text-black rounded-md px-2 py-1">
                          View
                        </button>
                      </div>
                    </SwiperSlide>
                  )})
              }
          </Swiper>
        </div>
        
        <div className='my-2 space-y-2'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-xl font-semibold'>Pending Invoice</h1>
              <p className='text-sm text-gray-500'>Invoices that are currently pending</p>
            </div>
            <div className='space-x-3 mr-4'>
              <button className='text-md font-semibold bg-white px-1 py-1 border rounded-md'><BsThreeDotsVertical className='inline'/></button>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-4 space-y-1 py-2 px-4 rounded-md border shadow-sm border-slate-100'>
              <h1 className='text-xl font-bold my-2'>$137</h1>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold'>Amount</p>
                <p className='px-3 py-1 bg-[#15C15D] rounded-md text-sm text-white'>Approved</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 mb-4">
                  <p className="text-sm font-bold text-black truncate dark:text-black">
                    Neil Sims
                  </p>
                  <p className="text-sm text-black mr-2 font-semibold inline truncate dark:text-gray-400">
                    #5331
                  </p>
                  <p className="text-sm text-gray-500 truncate inline dark:text-gray-400">
                    Date:25 May
                  </p>
                </div>
              </div>

            </div>
            <div className='col-span-4 space-y-1 py-2 px-4 rounded-md border shadow-sm border-slate-100'>
              <h1 className='text-xl font-bold my-2'>$137</h1>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold'>Amount</p>
                <p className='px-3 py-1 bg-[#14A9F9] rounded-md text-sm text-white'>Pending</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 mb-4">
                  <p className="text-sm font-bold text-black truncate dark:text-black">
                    Neil Sims
                  </p>
                  <p className="text-sm text-black mr-2 font-semibold inline truncate dark:text-gray-400">
                    #5331
                  </p>
                  <p className="text-sm text-gray-500 truncate inline dark:text-gray-400">
                    Date:25 May
                  </p>
                </div>
              </div>

            </div>
            <div className='col-span-4 space-y-1 py-2 px-4 rounded-md border shadow-sm border-slate-100'>
              <h1 className='text-xl font-bold my-2'>$137</h1>
              <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold'>Amount</p>
                <p className='px-3 py-1 bg-[#14A9F9] rounded-md text-sm text-white'>Pending</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 mb-4">
                  <p className="text-sm font-bold text-black truncate dark:text-black">
                    Neil Sims
                  </p>
                  <p className="text-sm text-black mr-2 font-semibold inline truncate dark:text-gray-400">
                    #5331
                  </p>
                  <p className="text-sm text-gray-500 truncate inline dark:text-gray-400">
                    Date:25 May
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div className="col-span-3 px-6">
        <div className='py-3 my-4'>
          <div className='border-b border-slate-300 rounded-sm'>
            <div className="flex justify-around items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate dark:text-black">
                  Oliver Smith
                </p>
                <p className="text-sm text-black truncate dark:text-black">
                  Vendor
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <IoIosArrowForward className='inline text-xl'/>
              </div>
            </div>
            <div className='flex justify-between items-center my-5 '>
              <h1 className='text-xl text-gray-900 font-bold'>Upcoming Meeting</h1>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className='flex justify-between items-center my-4'>
            <h1 className='text-md text-gray-900 font-semibold'>Today's Meetings</h1>
            <IoIosArrowDown />
          </div>
          <div className='space-y-5'>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#14A9F9] text-sm '>30 minute call with clients</h1>
                <BsThreeDotsVertical />
              </div>
              <h1 className='text-lg font-bold'>Project Discovery call</h1>
              <div className='flex justify-start space-x-3 py-1 items-center'>
                <p className='text-sm text-gray-500'>Due Soon</p>
                <p className='text-sm font-bold'>09:20 am</p>
              </div>
              <div className='flex justify-between space-x-3 py-1 items-center'>
              <div className='flex relative'>
                <img
                      className="w-8 h-8 rounded-full z-40"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-30 absolute left-6"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-10 absolute left-10"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-0 absolute left-14"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt="Neil image"
                    />
              </div>
                <button className='text-md px-3 py-1 font-semibold text-white shadow-sm bg-[#14A9F9] rounded-md'>
                  <AiOutlinePlus className='inline mr-2 text-white'/>Invite</button>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <h1 className='text-[#14A9F9] text-sm '>30 minute call with clients</h1>
                <BsThreeDotsVertical />
              </div>
              <h1 className='text-lg font-bold'>Project Discovery call</h1>
              <div className='flex justify-start space-x-3 py-1 items-center'>
                <p className='text-sm text-gray-500'>Due Soon</p>
                <p className='text-sm font-bold'>09:20 am</p>
              </div>
              <div className='flex justify-between space-x-3 py-1 items-center'>
              <div className='flex relative'>
                <img
                      className="w-8 h-8 rounded-full z-40"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-30 absolute left-6"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-10 absolute left-10"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Neil image"
                    />
                <img
                      className="w-8 h-8 rounded-full z-0 absolute left-14"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt="Neil image"
                    />
              </div>
                <button className='text-md px-3 py-1 font-semibold text-white shadow-sm bg-[#14A9F9] rounded-md'>
                  <AiOutlinePlus className='inline mr-2 text-white'/>Invite</button>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-center my-2 border-b border-slate-300 rounded-sm py-4'>
            <h1 className='text-md text-gray-900 font-semibold'>Schedule Meetings</h1>
            <IoIosArrowUp />
          </div>
          <div className='flex justify-between items-center my-4'>
            <h1 className='text-slate-900 text-xl font-bold '>Recent Activity</h1>
            <BsThreeDotsVertical />
          </div>
          <div className='space-y-2'>
            <div className='border-b border-slate-300 rounded-sm'>
                <div className="flex justify-between items-center space-x-4 px-3 mb-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm my-2 font-bold text-black dark:text-black">
                      Thank you for booking with JJ.
                    </p>
                    <p className="text-sm text-black font-bold truncate dark:text-black">
                      Kevin dukkon
                    </p>
                    <p className="text-[12px] text-gray-500 truncate dark:text-gray-500">
                      June 14, 2021 at 5:30 PM
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      alt="Neil image"
                    />
                  </div>
                </div>
              </div>
            <div className='border-b border-slate-300 rounded-sm'>
              <div className="flex justify-between items-center space-x-4 px-3 mb-6">
                <div className="flex-1 min-w-0">
                  <p className="text-sm my-2 font-bold text-black dark:text-black">
                    You received message from Ashish.
                  </p>
                  <p className="text-sm text-black font-bold truncate dark:text-black">
                    Ashish Sharma
                  </p>
                  <p className="text-[12px] text-gray-500 truncate dark:text-gray-500">
                    June 14, 2021 at 5:30 PM
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Neil image"
                  />
                </div>
              </div>
            </div>
            <div className='border-b border-slate-300 rounded-sm'>
              <div className="flex justify-between items-center space-x-4 px-3 mb-6">
                <div className="flex-1 min-w-0">
                  <p className="text-sm my-2 font-bold text-black dark:text-black">
                    You received message from Ashish.
                  </p>
                  <p className="text-sm text-black font-bold truncate dark:text-black">
                    Ashish Sharma
                  </p>
                  <p className="text-[12px] text-gray-500 truncate dark:text-gray-500">
                    June 14, 2021 at 5:30 PM
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Neil image"
                  />
                </div>
              </div>
            </div>
            <div className='border-b border-slate-300 rounded-sm'>
              <div className="flex justify-between items-center space-x-4 px-3 mb-6">
                <div className="flex-1 min-w-0">
                  <p className="text-sm my-2 font-bold text-black dark:text-black">
                    You received message from Ashish.
                  </p>
                  <p className="text-sm text-black font-bold truncate dark:text-black">
                    Ashish Sharma
                  </p>
                  <p className="text-[12px] text-gray-500 truncate dark:text-gray-500">
                    June 14, 2021 at 5:30 PM
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Neil image"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default App

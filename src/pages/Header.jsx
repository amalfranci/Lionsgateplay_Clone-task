import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineBars3 } from 'react-icons/hi2';
// import MobileNav from '../MobileNav/MobileNav';

const Header = () => {
    return (
        <nav className='flex items-center bg-[#09262c91] h-16 md:h[4.895rem]'>
            <div className='container mx-auto flex justify-between items-center px-4 lg:px-12'>
                <div className='flex items-center space-x-8 lg:space-x-16'>

                    <img
                   
                        src='https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/web3/resources/images/channels/voucher-thankyou-page/rebrand-lionsgateplay.png'
                        alt='LOGO'
                        className='h-full object-contain w-[8rem]' />
                    
                    <ul className=' text-white hidden md:flex space-x-4 lg:space-x-8 font-bold'>

                        <li>HOME</li>
                        <li>SHOWS</li>
                        <li>MOVIES</li>
                    </ul>


                </div >

                <div className='hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-bold'>

                    <div className=' flex items-center space-x-2 lg:space-x-4'>
                        <CiSearch className='h-5 w-5' />
                        <span className='hidden lg:block '>SEARCH</span>

                    </div>
                    <button>LOG IN</button>
                    <button>SIGN UP</button>
                </div>




            </div>
      </nav>
    
  );
};

export default Header;

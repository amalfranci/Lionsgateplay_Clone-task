import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
      <footer className='  bottom-0 bg-[#021214] border-t-[0.1rem] border-t-gray-800 w-full py-6 '>
          <div className='container mx-auto px-4'>
              <ul className='flex flex-wrap items-center justify-center md:justify-start gap-y-3 text-xs lg:text-base text-center md:text-left'>
                  {['Help Center', 'Contact us', 'Terms & Conditions', 'Privacy Policy', 'About us', 'Account Deletion', 'Content Grievances'].map((item, index, array) => (
                        <React.Fragment key={index}>
                      <li >
                          <a
                              href='#'
                              className='block text-white antialiased font-normal leading-relaxed transition-colors hover:text-blue-500 focus:text-blue-500'>
                              {item}
                          </a>
                      </li>
                      {
                          index < array.length - 1 && (
                          <span className=' mx-2 text-white '>|</span>
                          )
                      }
                    </React.Fragment>
                  ))}
                  
              </ul>

          </div>
          <div className="container mx-auto mt-6 text-center md:text-left text-[#b5b5b5] text-xs md:text-base px-4">
        <p>Copyright © 2024 LIONSGATEPLAY. All rights reserved.</p>
          </div>
          <div className='container mx-auto flex flex-col md:flex-row items-center justify-between mt-6 px-4 gap-4' >
              <div className='flex flex-wrap gap-4 items-center'>
                  <div className='flex gap-4 justify-center md:justify-start items-center'>
                      {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" className="block text-white transition-opacity">
                <Icon className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            ))}
                      
                  </div>
                  <div className='flex gap-4 justify-center md:justify-start items-center'>
                      {['https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/images/store-apple.svg', 'https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/images/store-googleplay.svg'].map((src, index) => (
              <img
                key={index}
                className="border rounded-md w-28 md:w-32 h-8 md:h-10"
                src={src}
                alt="App Store"
              />
            ))}
                      
                  </div>
                  
              </div>
          </div>
          

           
    </footer>
  )
}

export default Footer
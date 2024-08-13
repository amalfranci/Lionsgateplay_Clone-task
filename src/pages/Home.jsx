import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainCarousel from '../components/MainCarousel'
import Category from '../components/Category'
import TopRank from '../components/TopRank'
import SpecialBanner from '../components/SpecialBanner'



function Home() {
  return (
      <div className='bg-[#033440] min-h-screen'>
          
          
          <div className='sticky z-20 top-0 left-0 right-0'>
              <Header/>
              
          </div >

           
          <div className='min-h-screen'>
              <MainCarousel />
              <Category title={'Premieres Of Lionsgate Play'} query={'boys'} />
              <Category title={'Debutants Showcase'} query={'girls'} />

              <TopRank title={'Top 10 in India'} query={'top'} />
              <Category title={'Watch Next'} query={'boys'} />
                    <Category title={'Creature Chronicles'} query={'boys'} />
              <Category title={'Trending This Week'} query={'boy'} />
              <SpecialBanner title={'Coming Soon on Lionsgate Play'} query={'girls'} />
              <Category title={'Big Guns Of Hollywood'} query={'boy'} />
              <Category title={'Sportsflix'} query={'boys'} />
              <Category title={'Women In Action'} query={'girls'} />
              <SpecialBanner title={'Dubbed For You'} query={'anime'} />
              
              <Category title={'Action'} query={'action'} />
              <Category title={'Thriller'} query={'thriller'} />
              <Category title={'House Of Horror'} query={'horror'} />
              <Category title={'Popular TV Shows'} query={'popular'} />
              <Category title={'Romance'} query={'romance'} />
              <Category title={'Shows You Cannot Miss'} query={'girls'} />
              <Category title={'Steamy & Seductive'} query={'seductive'} />
              <Category title={'Best Of Bollywood'} query={'best'} />
              <Category title={'Hollywood Blockbuster Franchise'} query={'girls'} />
              <Category title={'Back On Lionsgate Play'} query={'girls'} />
              <Category title={'Regional Movies'} query={'regional'} />
                  <Category title={'Short Stories'} query={'stories'} />
              
              
          </div>

    

          <div >
              <Footer/>
           
          </div>
         



          


    </div>
  )
}

export default Home

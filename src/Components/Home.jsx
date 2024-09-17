import React from 'react'
import landing from "../assets/LandingCollage.jpg"
import album from "../assets/AlbumCover.jpeg"
import single from "../assets/Single.jpg"
import career from "../assets/career.png"
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import data from "../Data.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className=' w-full bg-black '>
        <div className=' flex justify-between items-center bg-[#244709] rounded-md'>
            <div className=' md:pl-10 w-full'>
                <div className=' font-rhinegold text-[80px] text-[#ead151] md:text-[65px] text-center md:text-left'>OBSA</div>
            </div>

            <ul className=' md:flex lg:text-[30px] lg:gap-5 md:gap-4 md:text-[#ead151] lg:pr-10 md:pr-7 md:font-Poppins md:font-semibold hidden '>
                <li className='hover:bg-[#0f47af] hover:px-2 hover:rounded-lg'> <a href="#about">About</a></li>
                <li className='hover:bg-[#0f47af] hover:px-2 hover:rounded-lg'> <a href="#discography">Discograpgy</a></li>
                <li> <a href="#contact"> <button className=' hover:bg-[#0f47af] hover:px-2 hover:rounded-lg'>Contact</button></a></li>
            </ul>
        </div>

        <div className=' px-2 py-2 bg-black'>
            <img src={landing} alt="High Obsa Moments" />
        </div>

        <div className='bg-backinfo bg-cover md:bg-center bg-no-repeat xl:h-[800px]  md:h-[600px] h-[800px] mx-2 my-2 rounded-md font-Poppins'>
            <h2 id='about' className=' lg:text-[60px] text-[30px] font-bold lg:pl-6 md:pl-2 text-[#ead151] md:text-left text-center py-4'>BACKGROUND</h2>
            <p className=' md:flex xl:text-[23px] lg:text-[16px] md:text-[13px] lg:pl-6 md:pl-2 md:text-[#ead151] md:font-medium hidden'>Obsa hails from the geographical country of Ethiopia <br /> , lands of fresh air and colorful grounds, home to his oh <br /> so lively Africa. <br />
                An ever present connection to East Africa’s strong cultural <br /> thought, expression and innovation, music was a reflection <br /> hereof for Obsa.
                He started enjoying listening to music as a <br /> toddler, specifically the sweet rhythms of Bob Marley and <br /> the Wailers. <br /> 
                It didn’t take long before the message of reggae - speaking <br /> of truths and rights, life and hope, times of struggle - had <br /> found it’s way to his heart and soul.
                These are the roots for his <br /> love of Black Creation, Love and Liberation. <br />  Inspired to create music of upliftment and comfort,
                as well <br /> as to process tales of his own, his studio album African Soul <br /> is here, produced in Kenya’s Nairobi,  performed by <br /> the great
                 Sarabi band, as well as emerging musicians <br /> from the country,
                 adding their blend for a promising future <br /> that the world will witness.</p>
            <p className=' md:hidden text-[16px] px-3 text-[#ead151] font-medium'>Obsa hails from the geographical country of Ethiopia , lands of fresh air and colorful grounds, home to his oh so lively Africa.
                An ever present connection to East Africa’s strong cultural  thought, expression and innovation, music was a reflection hereof for Obsa.
                He started enjoying listening to music as a toddler, specifically the sweet rhythms of Bob Marley and  the Wailers.  
                It didn’t take long before the message of reggae - speaking  of truths and rights, life and hope, times of struggle - had  found it’s way to his heart and soul.
                These are the roots for his  love of Black Creation, Love and Liberation.   Inspired to create music of upliftment and comfort,
                as well  as to process tales of his own, his studio album African Soul  is here, produced in Kenya’s Nairobi,  performed by the great
                 Sarabi band, as well as emerging musicians from the country,
                 adding their blend for a promising future that the world will witness.</p>
        </div>

        <div className=' flex flex-col bg-discography bg-cover xl:bg-center bg-no-repeat h-[900px] mx-2 my-2 rounded-md font-Poppins relative px-4'>
            <h2 id='discography' className=' lg:text-[60px] text-[30px] font-bold lg:pl-6 md:pl-2 text-[#ead151] md:text-left text-center py-4 '>DISCOGRAPGHY</h2>
            <p className=' lg:text-[23px] text-[#ead151] font-medium lg:pl-6 md:pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a eaque tempore autem, mollitia placeat? Qui <br /> expedita asperiores illo odio, perspiciatis soluta natus quidem libero, fugiat obcaecati explicabo. Et, laborum?</p>
            <div className=' flex justify-center items-center pt-14 lg:gap-12 md:gap-6 gap-4 md:absolute xl:top-[350px] xl:right-[450px] lg:top-[350px] lg:right-[230px] md:top-[25%] md:right-[15%] top-[35%] right-[12%]'>
            <a href="https://orcd.co/ypnpkwn" target='_blank'><img className=' xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] w-[230px] :h-[230px] hover:border-4 hover:border-solid hover:border-[#0f47af] cursor-pointer' src={album} alt="African Soul" /></a>
            <a href="https://orcd.co/ypnpkwn" target='_blank'><img className=' xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] w-[230px] :h-[230px] hover:border-4 hover:border-solid hover:border-[#0f47af] cursor-pointer' src={single} alt="IF She Only Knew" /></a>
            </div>
            {/* <a href="https://orcd.co/ypnpkwn" target='_blank'><img className=' xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] w-[230px] :h-[230px] absolute xl:top-[350px] xl:right-[500px] lg:top-[350px] lg:right-[300px] md:top-[30%] md:right-[30%] top-[35%] right-[12%] hover:border-4 hover:border-solid hover:border-[#0f47af] cursor-pointer' src={album} alt="African Soul" /></a> */}
            <div className=' absolute flex md:flex-col gap-6 xl:gap-10 xl:top-[440px] xl:right-[150px] lg:top-[430px] lg:right-[90px] md:top-[60%] md:right-[8%] top-[64%] right-[20%]'>
                <a href="https://open.spotify.com/artist/6s1FUBYvRPz3U52Uc0ehzJ?si=w7mIN0UARrG65iztxLRnPQ" target='_blank'><FaSpotify className=' xl:w-[100px] xl:h-[100px] md:w-[70px] md:h-[70px] w-[80px] h-[80px] bg-[#ead151] rounded-[50%] hover:border-4 hover:border-solid hover:border-[#0f47af]' /></a>
                <a href="https://www.youtube.com/@obsaeikeland9371/featured" target='_blank' ><FaYoutubeSquare className=' xl:w-[100px] xl:h-[100px] md:w-[70px] md:h-[70px] w-[80px] h-[80px] bg-[#ead151] rounded-[20%] hover:border-4 hover:border-solid hover:border-[#0f47af]' /></a>
            </div>
        </div>

        <div className=' flex flex-col h-[1100px] md:h-[700px] mx-2 my-2 rounded-md font-Poppins bg-green-950'>
            <div className='h-[100px]'>
                <h2 className='lg:text-[60px] text-[30px] font-bold lg:pl-6 md:pl-2 text-[#ead151] md:text-left text-center md:pt-6 lg:pt-0 '>CAREEER HIGHLIGHTS</h2>
            </div>

           <div className=' flex  md:flex-row flex-col h-[1000px] gap-11 md:gap-4 md:h-[600px]'>
                <div className='md:w-1/2 bg-[#ead151] md:h-full h-[450px] rounded-xl flex flex-col md:gap-4 gap-3 items-center justify-start md:pt-6 pt-5 pb-6'>
                    <img className=' md:h-[400px] md:w-[300px] h-[250px] w-[250px] rounded-lg' src={career} alt="Vybz Studio interview" />
                    <p className=' mx-4 text-[14px] md:text-[16px] text-[#e20001]'>
                    A great and dynamic performer, Obsa has graced numerous stages and events including Alliance Francaise, Geco cafe, Waks tikitaka( Citizen Radio ), 
                    Vybez Radio, Tuliza FM, Kameme TV, The Rave TV, Inna Yard TV, One Love TV and TV 47.
                    </p>
                </div>

                <div className=' md:w-1/2 bg-[#e20001] md:h-full h-1/2  overflow-hidden rounded-xl'>
                    <div className="mt-4 md:mt-8 lg:mt-5 xl:mt-12 px-10 md:px-8">
                        <Slider {...settings}>
                            {data.map((data) => (
                                <div key={data.id} className='bg-white h-[450px] overflow-auto  md:h-[540px] lg:h-[560px] xl:h-[500px] md:w-[100px] w-[250px] md:px-6 px-2  text-black rounded-xl mx-auto pb-2'>
                                    <div className=' rounded-xl flex justify-center items-center'>
                                        <img className=' h-[200px] w-[200px] py-5' src={data.img} alt={data.name} />
                                    </div>

                                    <div className='text-[12px] md:text-[16px] xl:text-[18px] flex flex-col gap-2 lg:gap-1'>
                                        <p className=' text-[18px] md:text-[22px] lg:text-[24px] font-semibold'>{data.name}</p>
                                        <p>{data.review}</p>
                                    </div>
                                </div> 
                            ))}
                        </Slider>
                </div>


                </div>
           </div>

        </div>

        <div className=' h-[150px] bg-[#244709] flex justify-center items-center font-Poppins mx-2 my-2 rounded-md'>
            <button className=' flex items-center justify-center gap-3 bg-[#ead151] text-center text-[#e20001] w-[45%] h-[40%] md:h-[45%] md:w-[28%] lg:w-[20%] xl:w-[15%] text-[28px] pt-3 pb-3  rounded-md hover:cursor-pointer hover:bg-[#0f47af] hover:text-white font-semibold'><a href="https://www.ebay.com/" target='_blank'><FaCartShopping className=' h-8' /></a><a href="https://www.ebay.com/" target='_blank'><p>Merch</p></a></button>
        </div>

        <div id='contact' className=' flex justify-end font-Poppins bg-fin-notes bg-cover md:bg-center bg-no-repeat lg:h-[700px] md:h-[500px] h-[500px] mx-2 my-2 rounded-md'>
            <div className='xl:w-[42%] lg:w-[40%] md:w-[40%] md:px-0 px-2 flex flex-col-reverse md:flex-col'>
                <p className='text-[#ead151] pb-[130px] md:pb-[0px] pt-[20px] lg:text-[23px] md:text-[20px]'>With infinite possibillities ahead, <span className=' font-semibold'>Obsa</span> continues to captivate 
                audiences and make his mark in the world <span className='bg-red-600 font-bold md:hidden'>of music. Keep </span> and
                 eye out for this <span className='bg-green-600 font-bold md:hidden'>rising star as he takes </span>  his artistic journey to even greater heights.</p>
                 
                 <div className=' pb-5 md:pb-0'>
                 <h3 className='text-[#ead151] xl:text-[30px] md:text-[23px] font-semibold underline underline-offset-8 pb-12 lg:pt-[50px] md:pt-[20px]'>Contact</h3>
                 <a href="https://www.instagram.com/obsasabbona?igsh=Ym15ZHU4dXFuZDl6&utm_source=qr" target='_blank' ><FaInstagram className=' xl:w-[120px] xl:h-[120px] md:w-[100px] md:h-[100px] w-[80px] h-[80px] bg-[#ead151] rounded-[20%] hover:border-4 hover:border-solid hover:border-[#0f47af]' /></a>
                 </div>
                 
            </div>
        </div>

        <div className=' flex justify-center items-center bg-[#e20001] rounded-md' >
            <div className='flex justify-center items-center flex-col'>
                <div className=' font-rhinegold text-[80px] text-[#ead151]'>OBSA</div>
                <p className='text-[#ead151] font-Poppins text-[20px] pb-5'>©Tulitech inc 2024</p>
            </div>
        </div>
    </div>
  )
}


export default Home
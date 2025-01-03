import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faUpwork } from '@fortawesome/free-brands-svg-icons';
import Header from '@/components/Header';
import Image from 'next/image';



const Home = () => {
  return (
    <div className='xl:min-w-[1440px] sm:min-w-[375px]'>

      <Header />
      
      {/* Section 1 */}
      <div className='xl:p-[80px] flex xl:flex-row justify-between w-full items-center border-[#484848] border-b-[1px] sm:flex-col sm:gap-[30px] sm:px-[15px] sm:py-[50px]'>

        {/* Left */}
        <div className='flex flex-col gap-[20px] justify-center items-start xl:w-[630px] xl:max-w-[630px] sm:min-w-[343px] sm:max-w-[400px]'>
          <h1 className='text-white xl:text-[101px] bebas leading-[90%] sm:text-[57px]'>HI, I AM <br /> MUHAMMAD SHARIQ.</h1>
          <p className='text-[#c7c7c7] xl:text-[18px] manrope sm:text-[16px]'>Passionate learner striving to grow in Cloud Applied Generative AI and Full Stack Web Development.</p>
          <div className='flex justify-start items-center xl:gap-[16px] sm:gap-[10px]'>
            <Link href='mailto:shariqfazal123@gmail.com' target='_blank'><button type='button' className='bg-[#D3E97A]  manrope rounded-[50px] px-[24px] py-[20px] font-bold text-black sm:text-[14px] xl:text-[16px]'>CONTACT ME <FontAwesomeIcon icon={faCircle} className='xl:size-[12px] inline-flex ml-[15px] sm:size-[10px]' /> </button></Link>
            <Link href='https://www.upwork.com/freelancers/~01d1e47120d0918186' target='_blank' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faUpwork} className='size-[26px] text-[#D3E97A]' /></Link>
            <Link href='https://github.com/shariq001' target='_blank' className='bg-[#222222] rounded-[50px] p-[20px]'><FontAwesomeIcon icon={faGithub} className='size-[26px] text-[#D3E97A]' /></Link>
          </div>
        </div>

        {/* Right */}
        <div className='xl:w-[600px] xl:h-[700px] bg-[#1a1a1a] rounded-[10px] sm:w-[343px]  sm:h-[400px] xl:px-[100px] xl:py-[80px] flex justify-center items-center'>
          <Image src='/images/my-pic.jpeg' width={600} height={800} alt='My Pic' />
        </div>
      </div>

      {/* Section 2 */}
      <div id='work' className='xl:p-[80px] border-[#484848] border-b-[1px] sm:px-[15px] sm:py-[50px] sm:flex sm:flex-col sm:items-center xl:items-start'>
        <h1 className='xl:text-[78px] bebas text-[#c7c7c7] sm:text-[57px] sm:leading-[90%]'>FEATURED PROJECTS</h1>
        <p className='text-[#c7c7c7] xl:text-[18px] manrope xl:max-w-[600px] sm:text-[16px] sm:min-w-[343px] sm:max-w-[400px]'>Here are some of the selected projects that showcase my passion for front-end development.</p>

        {/* 1 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px]'>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[80px]'>
            <Image src='/images/project-1.png' width={600} height={600} alt='Project 1' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Craft Your Future, One Resume at a Time!</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[14px]'>Build, edit, and share your perfect resume effortlessly with our dynamic resume builder. Designed for all professionals, it combines simplicity, customization, and responsiveness to help you stand out. Take charge of your career story and make every application unforgettable!</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] xl:w-[576px] sm:w-[343px]'>
              <Link href='https://shariq-resume-builder-giaic.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/GIAIC-Hackathon-1.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB <FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px]'>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[90px]'>
            <Image src='/images/project-2.png' width={600} height={600} alt='Project 2' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Designed Clean and Seamless Login & Signup Page</h1>
            <p className=' xl:text-[18px] sm:text-[14px] text-[#c7c7c7] leading-[150%]'>This project features beautifully designed login and signup pages with a focus on simplicity and functionality. The pages are interlinked for a smooth user experience, offering an intuitive and responsive design. Ideal for providing users with a hassle-free account creation and access process.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Web Designer</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A] xl:w-[576px] sm:w-[343px]'>
              <Link href='https://3-assignment-nine.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB <FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] sm:py-[60px] flex justify-center items-center'>
            <Image src='/images/project-3.png' width={600} height={600} alt='Project 3' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>A Desktop Showcase of Creativity</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>This project is a portfolio webpage designed exclusively for desktop view, highlighting a clean and visually engaging layout. It serves as a platform to showcase skills, projects, and achievements in a professional and organized manner. Focused on desktop users, the design ensures an optimal browsing experience with polished aesthetics and functionality.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://9-assignment.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[60px]'>
            <Image src='/images/project-4.png' width={500} height={600} alt='Project 4' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Whitepace: Elegance in Simplicity, Designed for All</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>Whitepace is an exceptional fully responsive website project crafted to provide a flawless browsing experience on any device. With its sleek design and user-friendly layout, it emphasizes clarity and usability, allowing your content to shine. This project encapsulates the true spirit of minimalism, masterfully merging visual appeal with practical functionality to offer users an engaging and accessible interface that enhances every interaction.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://6-assignment-eight.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[60px]'>
            <Image src='/images/project-5.png' width={500} height={600} alt='Project 5' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Smart Counting Made Simple</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>Discover the power of our Counter project, featuring an intuitive increment and decrement system that perfectly integrates with a shopping cart. As you effortlessly adjust the counter, watch as updates are dynamically reflected in the cart, providing an engaging and clear user experience. Crafted with a focus on simplicity and functionality, this project emphasizes efficient interactivity and delivers clean visual feedback, ensuring that managing your selections is not only easy but enjoyable. Experience a seamless interface that elevates your shopping experience today!</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://8-assignment-omega.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className='flex xl:flex-row justify-between w-full items-center my-[50px] sm:flex-col sm:gap-[30px] '>

          {/* Left */}
          <div className='xl:w-[600px] bg-[#1a1a1a] xl:h-[600px] rounded-[10px] sm:w-[343px] sm:h-[400px] xl:p-[0px] flex justify-center items-center sm:py-[60px]'>
            <Image src='/images/project-6.png' width={400} height={600} alt='Project 5' className='xl:w-[600px] xl:h-[500px] rounded-[10px]'/>
          </div>

          {/* Right */}
          <div className='xl:p-[50px] xl:max-w-[600px] flex flex-col gap-[20px] manrope sm:px-[10px] sm:min-w-[343px] sm:max-w-[500px]'>
            <h1 className='text-white xl:text-[32px] sm:text-[24px] leading-[140%] font-medium'>Showcasing Simplicity, Built for Mobile and Desktop Screens</h1>
            <p className=' xl:text-[18px] text-[#c7c7c7] leading-[150%] sm:text-[16px]'>This portfolio website stands out for its simplicity and clean design, featuring a dedicated About page that shares personal insights and builds a connection with visitors. Fully responsive for mobile devices, it guarantees a flawless experience on any screen size. With its minimalist layout, this project not only highlights content with striking clarity but also combines elegance with practical functionality, making it an exceptional choice for anyone seeking an impactful online presence.</p>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px] xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>PROJECT INFO</h3>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Year</h3>
              <p className='text-[#c7c7c7] '>2024</p>
            </div>
            <div className='flex justify-between items-center border-[#c7c7c7] border-b-[1px]  xl:w-[576px] sm:min-w-[343px]'>
              <h3 className='font-semibold  text-white py-[10px]'>Role</h3>
              <p className='text-[#c7c7c7] '>Front-end Developement</p>
            </div>
            <div className='flex justify-start items-center gap-[24px] text-[#D3E97A]  xl:w-[576px] sm:w-[343px]'>
              <Link href='https://4-assignment-six.vercel.app' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>LIVE DEMO <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
              <Link href='https://github.com/shariq001/q2-assignments.git' target='_blank' className='font-bold py-[5px] border-[#D3E97A] border-b-[2px] xl:text-[16px] sm:text-[14px]'>SEE ON GITHUB<FontAwesomeIcon icon={faGithub} className='size-[15px] inline-flex items-start ml-[8px] '/></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id='about-sec' className='xl:p-[80px] flex xl:flex-row xl:justify-between items-center w-full border-[#484848] border-b-[1px] xl:h-[500px] sm:px-[15px] sm:py-[50px] sm:flex-col sm:gap-[30px] sm:justify-start sm:h-[550px]'>
        <h1 className='bebas xl:text-[101px] sm:text-[43px]'>ABOUT ME</h1>
        <div className='manrope xl:max-w-[704px] flex flex-col gap-[20px] sm:min-w-[343px] sm:max-w-[500px]'>
          <h2 className='xl:text-[32px] leading-[140%] sm:text-[24px]'>Aspiring Generative AI Engineer focused on growth and innovation.</h2>
          <p>I&apos;m Muhammad Shariq, a passionate learner with a keen interest in technology and problem-solving. Aspiring to become a Generative AI Engineer, I focus on mastering modern tools and building innovative solutions. I strive to grow both personally and professionally by taking on challenges that push my limits, aiming to make a meaningful impact through my work.</p>

          <Link href='/About' className='text-[#D3E97A] font-bold underline '>MORE ABOUT ME</Link>
        </div>
      </div>

      
    </div>
  )
}

export default Home
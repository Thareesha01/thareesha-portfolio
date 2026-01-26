import Contact from "./components/Contact"
import Nav from "./components/Nav"
import TechStack from "./components/TechStack"
import Testimonials from "./components/Testimonials"



function App() {


  return (
    <>
    <Nav />
     
{/* home section */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center bg-black text-white px-4"
>
  <div
    className="
      grid grid-cols-1 
      md:grid-cols-2 
      gap-8 
      items-center 
      max-w-6xl 
      w-full 
      mt-10
    "
  >
    {/* LEFT CONTENT */}
    <div className="space-y-4 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-white">
        Thareesha Deepthaka
      </h1>

      <p className="text-sm text-[#9C9C9C] max-w-xl mx-auto md:mx-0">
        I’m a <b>Frontend Developer</b> focused on building clean, responsive, and user-friendly web interfaces. I enjoy turning complex ideas into intuitive digital experiences using modern frontend technologies.

      </p>

      <a
        href="/cv.pdf"
        download="Tharisha_Deepthaka_CV.pdf"
        className="
          inline-flex items-center justify-center gap-2
          bg-[#62BA1B] text-[#FFF6E9]
          px-5 py-2 mt-4
          rounded-sm
          hover:opacity-90 transition
        "
      >
        Download CV
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
          />
        </svg>
      </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center">
      <div
        className="
          bg-[url('/src/assets/img.png')]
          bg-cover bg-center
          w-[220px] h-[220px]
          sm:w-[280px] sm:h-[280px]
          md:w-[350px] md:h-[350px]
        "
      ></div>
    </div>
  </div>
</section>


{/* case study section */}
<section
  id="case-studies"
  className="bg-white text-white px-4"
>
  {/* HEADER */}
  <div className="flex flex-col items-center text-center pt-20">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#080808]">
      Projects
    </h1>
    <p className="mt-4 max-w-xl text-[#9C9C9C]">
     I’ve worked on multiple academic and personal projects focused on solving real user and business problems through clean UI design, responsive layouts, and functional web solutions.

    </p>
  </div>

  {/* CASE STUDY 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mt-14">
    <div className="space-y-3 text-center md:text-left">
      <span className="inline-block text-[#FFA217] bg-[#FFF6E9] px-3 py-1 rounded-full text-sm">
        E-commerce
      </span>
      <h2 className="text-xl font-extrabold text-[#080808]">
        Food Delivery App
      </h2>
      <p className="text-sm text-[#9C9C9C]">
        A web-based food ordering system built to streamline online orders for restaurants. Users can browse menus, add items to cart, and place orders easily. The system includes a simple admin panel to manage menu items and track orders.
      </p>

  <button className="inline-flex items-center gap-2 bg-[#FFA217] text-[#FFF6E9] px-4 py-2 rounded-sm
  transition transform duration-300
  hover:bg-[#ffb84d] hover:scale-105"
>
  View On GitHub
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 5 7 7-7 7"
    />
  </svg>
</button>

    </div>

    <div className="flex justify-center">
      <div className="bg-[url('/src/assets/Mask-group.png')] bg-cover bg-center w-full max-w-[420px] h-[240px] sm:h-[300px]" />
    </div>
  </div>

  {/* CASE STUDY 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mt-20">
    <div className="flex justify-center md:order-1 order-2">
      <div className="bg-[url('/src/assets/3.png')] bg-cover bg-center w-full max-w-[420px] h-[240px] sm:h-[300px]" />
    </div>

    <div className="space-y-3 text-center md:text-left md:order-2 order-1">
      <span className="inline-block text-[#000AFF] bg-[#D0E6FF] px-3 py-1 rounded-full text-sm">
        Career Crafter
      </span>
      <h2 className="text-xl font-extrabold text-[#080808]">
        Job Portal Application
      </h2>
      <p className="text-sm text-[#9C9C9C]">
        Developed a full-stack job portal for undergraduates, enabling seamless job search, application tracking, and profile management with a secure database system.
      </p>
      <button className="inline-flex items-center gap-2 bg-[#000AFF] text-[#FFF6E9] px-4 py-2 rounded-sm
  transition transform duration-300
  hover:bg-[#1a2bff] hover:scale-105"
>
  View On GitHub
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 5 7 7-7 7"
    />
  </svg>
</button>

    </div>
  </div>

  {/* CASE STUDY 3 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mt-20 mb-24">
    <div className="space-y-3 text-center md:text-left">
      <span className="inline-block text-[#2AB090] bg-[#E0FFF8] px-3 py-1 rounded-full text-sm">
         E-commerce
      </span>
      <h2 className="text-xl font-extrabold text-[#080808]">
        Photography Portfolio Website
      </h2>
      <p className="text-sm text-[#9C9C9C]">
        A clean and responsive website designed to showcase photography work with a focus on visual quality, smooth navigation, and an engaging user experience across all devices.
      </p>
   <button className="inline-flex items-center gap-2 bg-[#2AB090] text-[#FFF6E9] px-4 py-2 rounded-sm
  transition transform duration-300
  hover:bg-[#239c80] hover:scale-105"
>
  View case study
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 5 7 7-7 7"
    />
  </svg>
</button>

    </div>

    <div className="flex justify-center">
      <div className="bg-[url('/src/assets/2.png')] bg-cover bg-center w-full max-w-[420px] h-[240px] sm:h-[300px]" />
    </div>
  </div>
</section>


{/* Testimonials section */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-black text-white">
        <Testimonials />
      </section>

{/* Recent Work section */}
      <section id="recent-work" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <TechStack />
      </section>

{/* get in touch section */}
      <section id="contact" className="min-h-screen items-center justify-center bg-black text-white">
        
  <div className="first items-center justify-center flex flex-col px-4 text-center pt-20">
    <h1 className="text-4xl text-[#FFFFFF] font-extrabold">
  Get In Touch
</h1>
    <p className="mt-4 max-w-xl text-center text-[#9C9C9C]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
    </p>
  </div>

<div className="mt-10 flex justify-center items-center w-full max-w-3xl mx-auto px-4">
  <Contact />
</div>






      </section>

    </>
  )
}

export default App

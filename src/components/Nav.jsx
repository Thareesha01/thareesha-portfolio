import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV BAR */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between md:justify-center h-[60px] md:h-[70px] w-[90%] md:w-[80%] bg-[#1B1B1B] rounded-full px-5 md:px-0">
        
        {/* LOGO / NAME */}
        <span className="md:hidden text-white font-semibold">
          TD
        </span>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-16 text-[#9C9C9C]">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#case-studies" className="hover:text-white transition">Projects</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#recent-work" className="hover:text-white transition">Tech Stacks And Tools</a>
          <a href="#contact" className="hover:text-white transition">Get In Touch</a>

          {/* SOCIALS */}
          <div className="flex items-center space-x-3">
            {/* GitHub */}
            <a href=" https://github.com/Thareesha01" target="_blank" rel="noopener noreferrer">  <svg className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
            </svg></a>
          

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/thareesha-deepthaka/" target="_blank" rel="noopener noreferrer"> <svg className="w-5 h-5 text-gray-400 hover:text-white transition cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg></a>
           
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%] bg-[#1B1B1B] rounded-2xl py-6 flex flex-col items-center space-y-5 text-[#9C9C9C]">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-white">Home</a>
          <a href="#case-studies" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-white">Testimonials</a>
          <a href="#recent-work" onClick={() => setOpen(false)} className="hover:text-white">Tech Stacks And Tools</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Get In Touch</a>
        </div>
      )}
    </>
  );
}

export default Nav;

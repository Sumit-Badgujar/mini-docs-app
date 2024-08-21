import React, { useRef, useState } from 'react';
import Card from './Card';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import Sidebar from './Sidebar';
import NotesFrom from './NotesFrom';

function Foreground() {
  const ref = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); 


  const data = [
    {
      desc: "This is the description of the notes taking app made by SJB.",
      filesize: "5.4 mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagcolor: "green"
      },
    },
    {
      desc: "Tum haar ke dil apana , meri jit amar kar do Hothon se chulo tum, mera geet amar kr do !.",
      filesize: "6.9 mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagcolor: "blue"
      },
    },
    {
      desc: "Abhi na jaao chod kr, ke dil abhi bhara nahi..",
      filesize: "7.3 mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagcolor: "blue"
      },
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openForm = () => setIsFormOpen(true); 
  const closeForm = () => setIsFormOpen(false); 

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full p-5 flex gap-5 flex-wrap'>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} openForm={openForm}  />

      <HiArrowSmRight 
        onClick={toggleSidebar}
        className={`fixed bg-slate-100 rounded-full top-5 left-5 z-[4] cursor-pointer text-4xl transform ${ isSidebarOpen ? 'rotate-180' : '' } transition-transform duration-300 ease-in-out`}
      />

      {
        isFormOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]'>
            <NotesFrom onClose={closeForm} />
          </div>
        )
      }

      {data.map((items, index) => (
        <Card key={index} data={items} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;

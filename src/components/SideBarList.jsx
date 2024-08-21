import React from 'react'
import { HiArrowSmRight ,HiHome, HiDocumentAdd } from "react-icons/hi";
import SideBarOneElement from './SideBarOneElement';


function SideBarList({openForm}) {
  return (
      <div>
            <ul className="space-y-4">

                <SideBarOneElement icon={HiHome}  label="Home" /> 
              <SideBarOneElement icon={HiDocumentAdd} label="Create Notes" onClick={ openForm } /> 
                        
                {/* Add more items here as needed */}
            </ul>
    </div>
  )
}

export default SideBarList
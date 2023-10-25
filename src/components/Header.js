
// import { Disclosure,  } from "@headlessui/react";

// export default function Headero() {

//     const  bg= {
//     backgroundColor:"#100040"
//     }
//     const color ={
//         color:"#6c41ec"
//     }
    
//   return (
//     <Disclosure as="nav" className="bg-gray-800 w-full"  style={bg}>
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-center text-center ">
//               <h1 className="text-white  text-[1.83rem] font-medium font-sans ">
//                 Ja<span className="innerheading" style={color}>mmm</span>
//                 ing
//               </h1>
//             </div>
//           </div>
//         </>
//       )}
//     </Disclosure>
//   );
// }

import React from "react";


const bgColor= {
  backgroundColor: "#010c3f"
  
}
const TextColor= {
    color :"#8600ef"
}

const Header = () => {
   
  return (
    <div style={bgColor}>
      <h1 className="text-white font-bold py-1 capitalize text-center text-[1.88rem] font-medium font-sans">
        ja<span className="inner" style={TextColor}>mmm</span>ing
      </h1>
    </div>
  );
};

export default Header;
import './App.css'
import { useState } from 'react';

export default function Navbar() {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDown = () =>{
        setIsDropDownOpen((prev) => !prev)
    }
    return(
    <>
       <nav>
        <div className="navbar">
            <div className="logo"><a href="">Melarc</a></div>
            <ul className='links'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="">Portfolio</a></li>  
                <li><a href="#contact">Contact</a></li>  
            </ul>

            <a href="" className="action-btn">Download CV</a>
            <div className="btn-toggle">
                <i className="fa-solid fa-bars" onClick={toggleDropDown}></i>
            </div>
        </div>

        <div className={`dropdown-menu ${isDropDownOpen ? 'open' : ''}`}>
           <li><a href="">Home</a></li>   
           <li><a href="">About</a></li>
           <li><a href="">Services</a></li>
           <li><a href="">Contact</a></li>
        </div>
       </nav>
    </>
    )
}


// import { useState } from 'react';
// import './App.css';
// import { useEffect, useRef } from 'react';

// export default function Navbar() {
//     const [isDropDownOpen, setIsDropDownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropDown = () => {
//         setIsDropDownOpen((prev) => !prev);
//     };

//     const closeDropdown = () => {
//         setIsDropDownOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropDownOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             <nav>
//                 <div className="navbar">
//                     <div className="logo"><a href="">Melarc</a></div>
//                     <ul className="links">
//                         <li><a href="">Home</a></li>
//                         <li><a href="">About</a></li>
//                         <li><a href="">Services</a></li>
//                         <li><a href="">Portfolio</a></li>
//                         <li><a href="">Contact</a></li>
//                     </ul>

//                     <a href="" className="action-btn">Download CV</a>
//                     <div className="btn-toggle" onClick={toggleDropDown}>
//                         <i className={`fa-solid ${isDropDownOpen ? 'fa-times' : 'fa-bars'}`}></i>
//                     </div>
//                 </div>

//                 <div
//                     className={`dropdown-menu ${isDropDownOpen ? 'open' : ''}`}
//                     ref={dropdownRef}
//                 >
//                     <li><a href="" onClick={closeDropdown}>Home</a></li>
//                     <li><a href="" onClick={closeDropdown}>About</a></li>
//                     <li><a href="" onClick={closeDropdown}>Services</a></li>
//                     <li><a href="" onClick={closeDropdown}>Contact</a></li>
//                 </div>
//             </nav>
//         </>
//     );
// }

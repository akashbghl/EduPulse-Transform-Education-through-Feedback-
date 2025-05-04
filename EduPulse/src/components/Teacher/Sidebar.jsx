import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; 
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Sidebar({ btndata, onTabSelect, selectedTab }) {
    const navigate = useNavigate();
    const logOut = ()=>{
        localStorage.removeItem('currentUser');
        alert('Logged Out successfully')
        navigate('/')
    }
    return (
        <div className='w-[18%] bg-[#FAFAFA] shadow fixed left-0 top-0 h-screen '>
            <div className="logo flex items-center gap-4 m-2">
                <div className='w-[3vw] h-[7vh] overflow-hidden rounded-full'>
                    <img className='object-contain object-center' src={logo} alt="logo" />
                </div>
                <Link to='/' className='font-bold text-2xl text-[#696969]'>EduPulse</Link>
            </div>
            {
                btndata.map((data, index) => (
                    <li
                        key={index}
                        onClick={() => onTabSelect(data.key)}
                        className={`cursor-pointer list-none my-1 mx-2 py-1 px-2 rounded-md hover:bg-[#e6e6e6] ${
                            selectedTab === data.key ? 'bg-[#e7e5e5]' : ''
                        }`}
                    >
                        <span> {data.icon} </span> {data.btntext}
                    </li>
                ))
            }
            <div className='flex-col absolute bottom-0 w-full '>
                <li className='cursor-pointer list-none bg-[#f7f5f5] my-1 mx-2 py-1 px-2 rounded-md hover:bg-[#e6e6e6]'><span>⚙️ </span>Settings</li>
                <li 
                onClick={
                    ()=>(logOut())
                }
                className='flex items-center gap-1 ml-3 bg-[#f7f5f5] cursor-pointer list-none my-1 mx-2 py-1 px-2 rounded-md hover:bg-[#e6e6e6]'><span><IoIosLogOut /> </span>Log out</li>
            </div>
        </div>
    );
}

export default Sidebar;

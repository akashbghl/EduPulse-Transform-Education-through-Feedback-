import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) setCurrentUser(user);
    else setCurrentUser(null);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setShowProfileMenu(false);
    navigate('/login');
  };

  const isDashboard = currentUser && location.pathname.match('/dashboard');

  return (
    <div className={`bg-white sticky top-0 shadow-2xs gap-40 text-[15px] h-[10vh] flex text-xl font-semibold text-zinc-600 items-center ${isDashboard ? 'justify-between w-[82%] ml-auto' : 'w-full justify-around'}`}>
      
      {/* Logo */}
      <div className="logo flex justify-center items-center gap-4">
        <div className='w-[3vw] h-[7vh] overflow-hidden rounded-full '>
          <img className='object-contain object-center' src="images/logo.jpg" alt="" />
        </div>
        <Link to='/' className='text-bold text-2xl text-[#696969]'>EduPulse</Link>
      </div>

      {/* Menu */}
      <ul className="menu flex justify-center items-center gap-8">
        <Link to="/Features" className='hover:text-[#0a0a0a]'><li>Features</li></Link>
        <Link to='/pricing' className='hover:text-[#0a0a0a]'><li>Pricing</li></Link>
        <Link to='/About' className='hover:text-[#0a0a0a]'><li>About</li></Link>
        <Link to='/Contacts' className='hover:text-[#0a0a0a]'><li>Contact</li></Link>
      </ul>

      {/* Buttons / Profile */}
      {
        !currentUser ? (
          <div className="nav-buttons flex justify-center items-center gap-1">
            <Link to='/Login' className="btn px-5 py-2.5 rounded-md">Log in</Link>
            <Link to="/Signup" className="btn text-white bg-black px-5 py-2.5 rounded-md font-semibold hover:bg-slate-700">Sign up</Link>
          </div>
        ) : (
          <div className="relative" ref={profileRef}>
            
            <div
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className='mr-8 text-4xl p-1 mx-1 border border-[#ebebeb] rounded-full shadow hover:bg-slate-50 cursor-pointer'
            >
              <CgProfile />
            </div>

            {showProfileMenu && (
              <div className="absolute right-0 top-14 w-48 bg-white shadow-md rounded-md py-2 z-50">
                <Link to="/dashboard/profile" className="block px-4 py-2 text-sm hover:bg-gray-100">👤 Profile</Link>
                <Link to="/dashboard/settings" className="block px-4 py-2 text-sm hover:bg-gray-100">⚙️ Settings</Link>
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">🚪 Logout</button>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
}

import React from 'react';
import { Routes, Route ,BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Navbar from './components/Navbar'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts';
import Tdashboard from './components/Teacher/Tdashboard';
import Feature from './components/Features/Feature';
import Sdashboard from './components/Student/Sdashboard';
import Demo from './components/Demo';
import TeachersRatingRank from './components/TeachersRatingRank';
import Pricing from './components/Pricing';

function App() {
  const teachersData = [
    { id: 1, name: "Mr. Aakash Sharma", rating: 4.8 },
    { id: 2, name: "Ms. Priya Singh", rating: 4.5 },
    { id: 3, name: "Dr. Karan Patel", rating: 4.2 },
    { id: 4, name: "Mrs. Anjali Mehra", rating: 3.9 },
    { id: 5, name: "Mr. Rohit Yadav", rating: 4.0 },
  ];
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/student/dashboard' element={<Sdashboard  />}/>
        <Route path='/Teacher/dashboard' element={<Tdashboard/>}/>  
        <Route path='/demo' element={<Demo/>}/>  
        <Route path='/pricing' element={<Pricing/>}/>  
        <Route path='/rank' element={<TeachersRatingRank teachersData={teachersData}/>}/>  
        <Route path="/" element={<Home />} />
        <Route path='/Features' element={<Feature/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/Contacts' element={<Contacts/>} />  
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;


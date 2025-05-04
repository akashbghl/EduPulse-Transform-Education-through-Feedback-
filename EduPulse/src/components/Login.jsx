import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Form() {
  const [isStudent, setStudent] = useState('true');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill All Fields");
      return
    }

    let storedData = JSON.parse(localStorage.getItem('users')) || [];

    if (storedData.length === 0) {
      alert("No user found. Please sign up first.");
      return;
    }
    const foundUser = storedData.find(user =>
      user.email === email &&
      user.password === password &&
      user.role === (isStudent ? 'student' : 'teacher')
    );

    if (foundUser){
      localStorage.setItem('currentUser',JSON.stringify(foundUser));

      setTimeout(() => {
        if (foundUser.role === 'student') {
          navigate('/student/dashboard')
        }
        else if (foundUser.role === 'teacher') {
          navigate('/teacher/dashboard')
        }
      }, 1000);
    }
    else
      alert('Invalid Credentials ❌');
  }
  
  //   console.log(storedData.email);
  //   console.log(storedData.password);
  //   if(isStudent && storedData.role === 'student' && storedData.email === email && storedData.password === password)
  //     navigate('/student/dashboard');
  //   else if(!isStudent && storedData.role === 'teacher' && storedData.email === email && storedData.password === password)
  //     navigate('/teacher/dashboard');
  //   else {
  //     alert("Invalid credentials ❌");
  //   }
  // }

  return (
    <div>
      <div className=' flex items-center justify-center mt-10 mb-8 gap-2'>
        <img className='w-[3vw] h-[7vh] overflow-hidden rounded-full object-contain object-center' src="images/logo.jpg" alt="" />
        <h2 className='font-semibold text-2xl'>EduPulse</h2>
      </div>
      <div className='h-fit w-[28vw] p-6 shadow border-[#e2e0e0] border-1 rounded-md text-center m-auto'>
        <h2 className='font-bold text-2xl'>Welcome back</h2>
        <p className='text-[#67676a]'>Log in to your account to continue</p>
        <div className='w-full flex p-1 bg-[#f6f3f3] gap-1 my-5 rounded-md'>
          <button className={isStudent ? 'p-1 shadow bg-white w-full rounded-md cursor-pointer' : 'cursor-pointer w-full rounded-md'} onClick={() => setStudent(true)}>Student</button>
          <button className={!isStudent ? 'p-1 shadow bg-white w-full rounded-md cursor-pointer' : 'cursor-pointer w-full rounded-md'} onClick={() => setStudent(false)}>Teacher</button>
        </div >

        <form onSubmit={handleLogin}>
          <div className="text-left">
            <label htmlFor="Email" >Email</label><br />
            <input type="email" value={email} placeholder={isStudent ? "Student@unversity.edu" : "Teacher@unversity.edu"}
              onChange={(e) => setEmail(e.target.value)}
              className="border-1 border-[#e2e0e0] w-full p-2 rounded-md shadow my-2" /> <br />
            <label htmlFor="password">Password</label><br />
            <input type="password" value={password} className="border-1 border-[#e2e0e0] w-full p-2 rounded-md shadow my-2"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit"
              className={` my-2 w-full bg-black text-white  py-2 rounded-md cursor-pointer hover:bg-[#464646] transition`}>
              {isStudent ? 'Log in as Student' : 'Log in as Teacher'}
            </button>
            <p className='text-center my-2'>
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form

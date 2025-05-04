import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [student, setStudent] = useState('true');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const submitUserData = (e) => {

        e.preventDefault();
        if (!email || !password || !name) {
            alert('Please fill all fields');
            return;
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = {
            name,
            email,
            password,
            role: student ? 'student' : 'teacher',
            rating: 0,
            ratingCount: 0, // ⭐️ Needed for accurate average
          };
          
        // checking existing user
        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Email already exist ! please login');
            navigate('/login');
        }
        else {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('You are Successfully Siged up, go login =>');
            navigate('/login');
        }

        // const user = {
        //     name,
        //     email,
        //     password,
        //     role: student ? 'student' : 'teacher',
        // }
        // localStorage.setItem('user', JSON.stringify(user));
        // alert('You are successfully signed up, You can Login now->');
    }
    return (
        <div>
            <div className=' flex items-center justify-center mt-10 mb-8 gap-2'>
                <img className='w-[3vw] h-[7vh] overflow-hidden rounded-full object-contain object-center' src="images/logo.jpg" alt="" />
                <h2 className='font-semibold text-2xl'>EduPulse</h2>
            </div>
            <div className='h-fit w-[28vw] p-6 shadow border-[#e2e0e0] border-1 rounded-md text-center m-auto'>
                <h2 className='font-bold text-2xl'>Create an account</h2>
                <p className='text-[#67676a]'>Sign up to get started with EduPulse</p>
                <div className='w-full flex p-1 bg-[#f6f3f3] gap-1 my-5 rounded-md'>
                    <button className={student ? 'p-1 bg-white w-full rounded-md cursor-pointer' : 'cursor-pointer w-full rounded-md'} onClick={() => setStudent(true)}>student</button>
                    <button className={!student ? 'p-1  bg-white w-full rounded-md cursor-pointer' : 'cursor-pointer w-full rounded-md'} onClick={() => setStudent(false)}>Teacher</button>
                </div >

                <form className="text-left" onSubmit={submitUserData}>
                    <div className='flex gap-4'>
                        <div>
                            <label htmlFor="f-name">First Name</label><br />
                            <input type="text" value={name} className="border-1 w-[12vw] border-[#e2e0e0] p-2 rounded-md shadow my-2"
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="l-name">Last Name</label><br />
                            <input type="text" className="w-[12vw] border-1 border-[#e2e0e0] p-2 rounded-md shadow my-2" />
                        </div>
                    </div>
                    <label htmlFor="Email" >Email</label><br />
                    <input type="email" value={email} placeholder={student ? 'student@unversity.edu' : 'teacher@unversity.edu'}
                        className="border-1 border-[#e2e0e0] w-full p-2 rounded-md shadow my-2"
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" value={password} className="border-1 border-[#e2e0e0] w-full p-2 rounded-md shadow my-2"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="department">Department</label>
                    <select name="" id="" className="border-1 border-[#e2e0e0] w-full p-2 rounded-md shadow my-2">
                        <option value="" >Computer Science</option>
                        <option value="" >BBA</option>
                        <option value="" >MBA</option>
                        <option value="" >BCA</option>
                        <option value="" >MCA</option>
                    </select>
                    <div className="flex items-center gap-2 my-4">
                        <input type="checkbox" id="terms" className="w-4 h-4" required/>
                        <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                        </label>
                    </div>

                    <button
                        className={` my-2 w-full bg-black text-white  py-2 rounded-md cursor-pointer hover:bg-[#464646] transition`}>
                        {student ? 'Sign up as Student' : 'Sign up as Teacher'}
                    </button>
                    <p className='text-center my-2'>
                        Already have an account? <Link to="/Login">Log in</Link>
                    </p>
                </form>

            </div>
        </div>
    )
}

export default SignUp

import React from 'react'

function T_Feedback() {
    let data = [
        {
            head: "Overall Rating",
            title: "Average across all feedback",
            rate: "4.7",
            out: "out of 6"
        },
        {
            head: "Response Rate",
            title: "Students who provided feedback",
            rate: "85%",
            out: "of students"
        }
    ]
    let feedbacks = [
        {
            stars: "111",
            date: "May 16, 2023",
            para: "The examples used in class really helped me understand the complex concepts. I appreciate how the professor takes time to answer all questions."
        },
        {
            stars: "111",
            date: "May 15, 2023",
            para: "Good lecture overall, but I think we could use more practical examples. The theoretical parts were well explained."
        },
        {
            stars: "111",
            date: "May 15, 2023",
            para: "One of the best lectures so far. The pace was perfect and the content was very relevant to our coursework."
        },
        {
            stars: "111",
            date: "May 14, 2023",
            para: "The pace was a bit too fast for me. I had trouble keeping up with some of the more complex topics. Could we slow down a bit?"
        },
        {
            stars: "111",
            date: "May 13, 2023",
            para: "I really enjoyed the group discussion part of the lecture. It helped me understand different perspectives on the topic."
        }
    ]
    return (
        <>
            <div className='wrapper h-fit flex justify-center items-center flex-col p-2 gap-4 bg-[#F8F8F9]'>
                <div className="list w-full h-fit flex justify-between items-center">
                    <div className="left flex items-center flex-col gap-1">
                        <h1 className='font-bold text-3xl'>Feedback Analytics</h1>
                        <p className='text-zinc-500'>Review and analyze student feedback</p>
                    </div>
                    <div className="right flex items-center gap-2">
                        <select name="subject" className='w-full p-2 border-1 border-zinc-300 rounded-lg' required>
                            <option value="">All Courses</option>
                            <option value="feedback">Advanced Database System</option>
                            <option value="support">Introduction to SQL</option>
                            <option value="inquiry">Data Warehousing</option>
                        </select>
                        <select name="subject" className='w-full p-2 border-1 border-zinc-300 rounded-lg' required>
                            <option value="">This Semester</option>
                            <option value="feedback">Last Week</option>
                            <option value="support">Last Month</option>
                            <option value="inquiry">This Year</option>
                        </select>
                    </div>
                </div>
                <div className="rating w-full h-fit flex justify-center gap-4 items-center">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="one w-[33%] h-fit flex items-start gap-8 bg-white flex-col p-6 border-2 border-zinc-300 rounded-lg">
                                <div className="title">
                                    <h1 className='font-semibold text-2xl'>{item.head}</h1>
                                    <p className='text-zinc-500'>{item.title}</p>
                                </div>
                                <div className="rate w-full flex justify-center items-center">
                                    <div className='w-36 h-36 text-5xl font-bold border-4 border-zinc-500 rounded-full flex justify-center items-center flex-col'>{item.rate} <br /> <span className='text-lg text-zinc-400'>{item.out}</span></div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="one w-[32%] bg-white h-fit flex items-start flex-col p-5 gap-15 border-2 border-zinc-300 rounded-lg">
                        <div className="title">
                            <h1 className='font-semibold text-2xl'>Improvement Areas</h1>
                            <p className='text-zinc-500'>Based on student feedback</p>
                        </div>
                        <div className="rate w-full flex flex-col gap-2 justify-center items-center">
                            <div className="progress w-full flex flex-col">
                                <div className="origin flex justify-between items-center">
                                    <h1 className=''>More practical examples</h1>
                                    <p>42%</p>
                                </div>
                                <div className="percentage w-full h-3 flex justify-start items-center rounded-full overflow-hidden bg-[#F8F8F9]">
                                    <div className="inner w-[42%] h-3 rounded-full bg-black"></div>
                                </div>
                            </div>
                            <div className="progress w-full flex flex-col">
                                <div className="origin flex justify-between items-center">
                                    <h1 className=''>Slower pace</h1>
                                    <p>35%</p>
                                </div>
                                <div className="percentage w-full h-3 flex justify-start items-center rounded-full overflow-hidden bg-[#F8F8F9]">
                                    <div className="inner w-[35%] h-3 rounded-full bg-black"></div>
                                </div>
                            </div>
                            <div className="progress w-full flex flex-col">
                                <div className="origin flex justify-between items-center">
                                    <h1 className=''>More interactive sessions</h1>
                                    <p>28%</p>
                                </div>
                                <div className="percentage w-full h-3 flex justify-start items-center rounded-full overflow-hidden bg-[#F8F8F9]">
                                    <div className="inner w-[28%] h-3 rounded-full bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feedback w-full h-fit p-4 flex flex-col gap-6 bg-white border-2 border-zinc-300 rounded-lg">
                    <div className="title">
                        <h1 className='font-semibold text-3xl'>Recent Feedback</h1>
                        <p>Anonymous comments from students</p>
                    </div>
                    <div className="feedbacks flex flex-col justify-center items-center gap-4">
                        {feedbacks.map((item, index) => {
                            return (
                                <div key={index} className="info w-full flex flex-col gap-3 border-2 border-zinc-300 rounded-lg p-2">
                                    <div className="top flex justify-between items-center">
                                        <div className="stars">{item.stars}</div>
                                        <div className="date">{item.date}</div>
                                    </div>
                                    <div className="para font-semibold">{item.para}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn w-full">
                        <button className='w-full p-2 border-2 border-zinc-300 rounded-lg font-semibold'>Load More Feedback</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default T_Feedback
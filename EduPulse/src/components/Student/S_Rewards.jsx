import React from 'react';
import SimpleCard from '../simple_ReusableComponents/SimpleCard';

const rewardsData = [
    {
        title: "Cafeteria Voucher",
        description: "Free meal at the college cafeteria",
        points: 200,
        isRedeemable: true,
    },
    {
        title: "Bookstore Discount",
        description: "15% off at the college bookstore",
        points: 300,
        isRedeemable: true,
    },
    {
        title: "Library Extension",
        description: "Extended borrowing period for library books",
        points: 400,
        isRedeemable: true,
    },
    {
        title: "College Merchandise",
        description: "College branded t-shirt or mug",
        points: 500,
        isRedeemable: true,
    },
    {
        title: "Workshop Access",
        description: "Free access to premium workshop",
        points: 750,
        isRedeemable: true,
    },
    {
        title: "Certificate Course",
        description: "Free enrollment in a certificate course",
        points: 1000,
        isRedeemable: false,
    }
];

function S_Rewards() {
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold mb-4'>Available Rewards</h1>
            <div className='flex flex-col gap-4'>
                {rewardsData.map((reward, index) => (
                    <SimpleCard key={index} cardContent={
                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <h2 className='text-lg text-left'>{reward.title}</h2>
                                <p className='text-sm text-gray-600'>{reward.description}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='text-sm font-bold'>{reward.points} pts</span>
                                <button
                                    className={`px-4 py-1 rounded cursor-pointer text-white text-sm font-medium ${
                                        reward.isRedeemable ? 'bg-black hover:bg-gray-800' : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                                    disabled={!reward.isRedeemable}
                                >
                                    {reward.isRedeemable ? 'Redeem' : 'Not Enough Points'}
                                </button>
                            </div>
                        </div>
                    } />
                ))}
            </div>
        </div>
    );
}

export default S_Rewards;

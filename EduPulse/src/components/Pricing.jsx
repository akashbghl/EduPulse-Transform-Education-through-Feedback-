import { useState } from "react";
import React from 'react';
import SimpleCard from "./simple_ReusableComponents/SimpleCard";

function Pricing() {
    const [activeTab, setActiveTab] = useState('monthly');

    const freePlan = {
        icon: '🎓',
        head: 'Free Plan',
        price: '₹0/month',
        features: [
            'Up to 10 students',
            'Basic dashboards',
            'Community support',
            'Limited feedback analytics',
        ],
    };

    const monthlyPlans = [
        {
            icon: '🚀',
            head: 'Starter Plan',
            price: '₹499/month',
            features: [
                'Up to 50 students',
                'Interactive dashboards',
                'Basic analytics',
                'Feedback charts',
                'Standard redemption limit',
            ],
        },
        {
            icon: '⚡',
            head: 'Pro Plan',
            price: '₹999/month',
            features: [
                'Up to 200 students',
                'Advanced dashboards',
                'Detailed analytics & graphs',
                'Custom feedback charts',
                'Higher redemption limits',
            ],
        },
        {
            icon: '🏢',
            head: 'Enterprise Plan',
            price: '₹1999/month',
            features: [
                'Unlimited students',
                'AI-powered dashboards',
                'Real-time analytics',
                'Dynamic feedback graphs',
                'Maximum redemption limits',
            ],
        }
    ];

    const annualPlans = [
        {
            icon: '🚀',
            head: 'Starter Plan',
            price: '₹4990/year',
            features: [
                'Up to 50 students',
                'Interactive dashboards',
                'Basic analytics',
                'Feedback charts',
                'Standard redemption limit',
            ],
        },
        {
            icon: '⚡',
            head: 'Pro Plan',
            price: '₹9990/year',
            features: [
                'Up to 200 students',
                'Advanced dashboards',
                'Detailed analytics & graphs',
                'Custom feedback charts',
                'Higher redemption limits',
            ],
        },
        {
            icon: '🏢',
            head: 'Enterprise Plan',
            price: '₹19990/year',
            features: [
                'Unlimited students',
                'AI-powered dashboards',
                'Real-time analytics',
                'Dynamic feedback graphs',
                'Maximum redemption limits',
            ],
        }
    ];

    const plansToDisplay = activeTab === 'monthly' ? monthlyPlans : annualPlans;

    return (
        <>
            {/* Header */}
            <div>
                <h1 className='font-bold text-5xl text-center mt-10 text-gray-700'>
                    Invest in Your Future with EduPulse
                </h1>
                <p className='text-center my-4 text-xl text-gray-500'>
                    Choose the perfect plan for your educational institution
                </p>
            </div>

            {/* Billing Tab Toggle */}
            <div className='w-[90%] md:w-[35%] flex px-1 m-auto py-2 bg-[#f6f3f3] gap-2 my-5 rounded-md items-center text-center'>
                <button
                    onClick={() => setActiveTab('monthly')}
                    className={`cursor-pointer w-full rounded-md font-medium transition-all duration-200 ${activeTab === 'monthly' ? 'bg-white py-2 shadow text-blue-600' : 'text-gray-600'}`}>
                    Monthly Billing
                </button>
                <button
                    onClick={() => setActiveTab('annual')}
                    className={`cursor-pointer w-full rounded-md font-medium transition-all duration-200 ${activeTab === 'annual' ? 'bg-white py-2 shadow text-blue-600' : 'text-gray-600'}`}>
                    Annual Billing
                </button>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-10 py-8">
                {/* Free Plan */}
                <SimpleCard
                    cardContent={
                        <div className="p-4 text-center border border-dashed border-green-400 bg-white rounded-md shadow-sm">
                            <div className="text-4xl mb-2">{freePlan.icon}</div>
                            <h2 className="text-2xl font-semibold text-gray-700">{freePlan.head}</h2>
                            <p className="text-xl font-bold text-green-600 my-2">{freePlan.price}</p>
                            <ul className="text-gray-600 text-sm mt-4 space-y-2">
                                {freePlan.features.map((feature, idx) => (
                                    <li key={idx}>✅ {feature}</li>
                                ))}
                            </ul>
                            <button className="mt-5 px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600">
                                Join Free
                            </button>
                        </div>
                    }
                />

                {/* Paid Plans */}
                {plansToDisplay.map((plan, index) => (
                    <SimpleCard
                        key={index}
                        cardContent={
                            <div className="p-4 text-center bg-white rounded-md shadow-sm">
                                <div className="text-4xl mb-2">{plan.icon}</div>
                                <h2 className="text-2xl font-semibold text-gray-700">{plan.head}</h2>
                                <p className="text-xl font-bold text-blue-600 my-2">{plan.price}</p>
                                <ul className="text-gray-600 text-sm mt-4 space-y-2">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>✅ {feature}</li>
                                    ))}
                                </ul>
                                <button className="mt-5 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                                    Purchase
                                </button>
                            </div>
                        }
                    />
                ))}
            </div>

            {/* Compare Plan Features Section */}
            <section className="px-5 md:px-10 py-10 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
                    Compare Plan Features
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 text-left">
                                <th className="border border-gray-200 p-3">Features</th>
                                <th className="border border-gray-200 p-3 text-center">Free</th>
                                <th className="border border-gray-200 p-3 text-center">Starter</th>
                                <th className="border border-gray-200 p-3 text-center">Pro</th>
                                <th className="border border-gray-200 p-3 text-center">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Student Limit", "10", "50", "200", "Unlimited"],
                                ["Dashboards", "Basic", "Interactive", "Advanced", "AI-powered"],
                                ["Analytics", "Limited", "Basic", "Detailed", "Real-time"],
                                ["Feedback Charts", "Limited", "Included", "Custom", "Dynamic"],
                                ["Graphs", "❌", "✅", "✅", "✅"],
                                ["Redemption Limit", "Low", "Standard", "High", "Maximum"],
                                ["Support", "Community", "Email", "Priority", "24/7 Dedicated"],
                            ].map(([feature, free, starter, pro, enterprise], i) => (
                                <tr key={i} className="border-t border-gray-200">
                                    <td className="p-3 font-medium text-gray-700">{feature}</td>
                                    <td className="p-3 text-center">{free}</td>
                                    <td className="p-3 text-center">{starter}</td>
                                    <td className="p-3 text-center">{pro}</td>
                                    <td className="p-3 text-center">{enterprise}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="bg-white py-12 px-5 md:px-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Anjali Verma",
                            feedback: "EduPulse made it super easy to track student progress and helped us engage them better.",
                        },
                        {
                            name: "Rakesh Mehta",
                            feedback: "Their customer service is excellent, and our teachers love the platform.",
                        },
                        {
                            name: "Priya Nair",
                            feedback: "The analytics dashboard gave us insights we never had before. Highly recommended!",
                        },
                    ].map((user, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-5 shadow-md">
                            <p className="italic text-gray-700">“{user.feedback}”</p>
                            <p className="mt-3 font-semibold text-right text-blue-600">— {user.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs Section */}
            <section className="bg-gray-50 py-12 px-5 md:px-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {[
                        {
                            question: "Is there a free trial for paid plans?",
                            answer: "Yes! Every paid plan comes with a 14-day free trial.",
                        },
                        {
                            question: "Can I cancel my subscription anytime?",
                            answer: "Absolutely. You can cancel or downgrade anytime from your dashboard.",
                        },
                        {
                            question: "Do you offer custom solutions for large institutions?",
                            answer: "Yes. Our Enterprise plan is customizable to suit your institutional needs.",
                        },
                    ].map((faq, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Pricing;

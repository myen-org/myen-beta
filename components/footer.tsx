'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Section - Navigation Links */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {/* First Column */}
                        <div className="space-y-4">
                            <Link
                                href="/join-our-clubs"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Join our clubs
                            </Link>
                            <Link
                                href="/library"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                myen Library
                            </Link>
                            <Link
                                href="/about"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                About us
                            </Link>
                            <Link
                                href="/volunteering"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Volunteering
                            </Link>
                            <Link
                                href="/chapter"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Chapter
                            </Link>
                            <Link
                                href="/donation"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Donation
                            </Link>
                        </div>

                        {/* Second Column */}
                        <div className="space-y-4">
                            <Link
                                href="/about"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                About us
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/partnership"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Partnership
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/contact"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Contact us
                            </Link>
                        </div>

                        {/* Third Column */}
                        <div className="space-y-4">
                            <Link
                                href="/mission"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Mission
                            </Link>
                            <Link
                                href="/impact"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Impact
                            </Link>
                            <Link
                                href="/finances"
                                className="block Freight-med text-xl hover:text-Oamber transition-colors duration-200"
                            >
                                Finances
                            </Link>
                        </div>
                    </div>

                    {/* Right Section - Newsletter Signup */}
                    <div className="lg:pl-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-light italic lg:text-5xl Freight-light">
                                Get last news and projects in<br />
                                your inbox <i className='isax isax-sms-tracking text-3xl'></i>
                            </h2>

                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    placeholder="Your E-mail Address"
                                    className="flex-1 rounded-full border border-gray-300 px-6 py-3 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-Pindigo px-8 py-3 text-white hover:shadow-lg hover:shadow-Pindigo/40 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2"
                                >
                                    <span>Send</span>
                                    <i className='isax isax-send-2 text-xl text-white'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Logo and Copyright */}
                <div className="mt-16 flex flex-col items-start space-y-4 border-t border-gray-200 pt-8 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="73" height="24" viewBox="0 0 95 31" fill="none" >
                        <path
                            d="M26.88 22.576C26.368 22.576 25.584 22.288 24.528 21.712C23.504 21.104 22.992 20.592 22.992 20.176C22.992 19.952 24.064 17.056 26.208 11.488C26.432 10.88 26.768 10.064 27.216 9.04C27.664 8.016 28 7.216 28.224 6.64C28.448 6.032 28.56 5.616 28.56 5.392C28.56 5.008 28.288 4.64 27.744 4.288C27.232 3.936 26.72 3.76 26.208 3.76C24.864 3.76 22.032 8.368 17.712 17.584L16.032 22.144L11.52 21.904L13.728 15.328C14.112 14.176 14.608 12.8 15.216 11.2C15.856 9.568 16.368 8.256 16.752 7.264C17.136 6.272 17.328 5.664 17.328 5.44C17.328 5.024 17.12 4.64 16.704 4.288C16.288 3.936 15.824 3.76 15.312 3.76C13.936 3.76 11.072 8.368 6.72 17.584L4.992 22.144L0.528 21.904L3.264 13.984L6.336 3.616L3.984 3.424L0.912 8.416L0.624 8.272C1.744 5.84 2.864 3.984 3.984 2.704C5.136 1.424 6.176 0.783998 7.104 0.783998C7.616 0.783998 8.304 1.184 9.168 1.984C10.064 2.784 10.512 3.536 10.512 4.24C10.512 5.744 9.344 9.312 7.008 14.944L7.296 15.04C10.848 8.064 13.248 3.952 14.496 2.704C15.008 2.192 15.616 1.76 16.32 1.408C17.024 1.056 17.616 0.879999 18.096 0.879999C19.152 0.879999 20.016 1.232 20.688 1.936C21.392 2.64 21.744 3.424 21.744 4.288C21.744 5.472 20.512 9.024 18.048 14.944L18.288 15.04C21.904 7.936 24.272 3.824 25.392 2.704C26.608 1.488 27.792 0.879999 28.944 0.879999C30 0.879999 30.928 1.184 31.728 1.792C32.56 2.4 32.976 3.056 32.976 3.76C32.976 4.976 32.176 7.552 30.576 11.488L27.264 19.744L29.76 20.032L33.024 14.992L33.312 15.136C32.16 17.504 30.992 19.344 29.808 20.656C28.624 21.936 27.648 22.576 26.88 22.576ZM31.9684 30.736C30.4964 30.736 29.4084 30.432 28.7044 29.824C27.9684 29.248 27.6004 28.464 27.6004 27.472C27.6004 26.768 27.8724 26.176 28.4164 25.696C28.9284 25.216 29.5364 24.976 30.2404 24.976C31.2964 24.976 32.0484 25.408 32.4964 26.272C32.9124 27.168 32.7844 28.208 32.1124 29.392L33.9364 29.968C36.6884 29.392 39.5844 27.552 42.6244 24.448C42.6884 16.8 42.3844 11.344 41.7124 8.08C41.0724 4.816 40.0004 3.184 38.4964 3.184H37.8244L34.9444 8.416L34.6084 8.272C36.0804 5.136 37.0724 3.216 37.5844 2.512C38.4484 1.392 39.5524 0.831999 40.8964 0.831999C42.3684 0.831999 43.5204 1.44 44.3524 2.656C45.2164 3.84 45.8404 5.824 46.2244 8.608C46.6084 11.392 46.7524 15.168 46.6564 19.936L46.7524 19.984C50.5604 14.288 52.5764 9.168 52.8004 4.624C51.6484 5.52 50.5764 5.744 49.5844 5.296C48.6244 4.816 48.1124 4.112 48.0484 3.184C48.0164 2.448 48.2244 1.84 48.6724 1.36C49.1524 0.848 49.7924 0.592 50.5924 0.592C51.3924 0.592 52.0804 0.911999 52.6564 1.552C53.2324 2.192 53.5204 3.088 53.5204 4.24C53.5204 7.344 52.5124 10.848 50.4964 14.752C48.5124 18.656 46.0324 22.048 43.0564 24.928C39.1844 28.8 35.4884 30.736 31.9684 30.736ZM60.8606 22.576C59.0686 22.576 57.5646 21.92 56.3486 20.608C55.1646 19.264 54.5726 17.632 54.5726 15.712C54.5726 13.44 55.1486 11.152 56.3006 8.848C57.4846 6.544 59.0366 4.64 60.9566 3.136C62.9086 1.6 64.9086 0.831999 66.9566 0.831999C68.4926 0.831999 69.7406 1.184 70.7006 1.888C71.6606 2.56 72.1406 3.472 72.1406 4.624C72.1406 7.6 68.0606 9.712 59.9006 10.96C59.5486 12.368 59.3726 13.712 59.3726 14.992C59.3726 18.256 60.6526 19.888 63.2126 19.888C64.4286 19.888 65.5006 19.536 66.4286 18.832C67.3566 18.096 68.3806 16.784 69.5006 14.896L69.8846 15.04C68.6686 17.312 67.2766 19.136 65.7086 20.512C64.1406 21.888 62.5246 22.576 60.8606 22.576ZM60.0926 10.576C62.8126 10 64.8286 9.2 66.1406 8.176C67.4846 7.152 68.1566 5.808 68.1566 4.144C68.1566 2.352 67.5646 1.456 66.3806 1.456C65.6446 1.456 64.8446 1.888 63.9806 2.752C62.2846 4.448 60.9566 7.04 59.9966 10.528L60.0926 10.576ZM88.2285 22.576C87.7165 22.576 86.9325 22.288 85.8765 21.712C84.8205 21.104 84.2925 20.592 84.2925 20.176C84.2925 19.856 85.3805 16.96 87.5565 11.488C87.7805 10.944 88.1165 10.144 88.5645 9.088C89.0125 8 89.3325 7.168 89.5245 6.592C89.7485 6.016 89.8605 5.616 89.8605 5.392C89.8605 5.008 89.6045 4.64 89.0925 4.288C88.5805 3.936 88.0685 3.76 87.5565 3.76C86.8525 3.76 85.6845 4.992 84.0525 7.456C82.4205 9.888 80.5965 13.264 78.5805 17.584L76.8525 22.144L72.3405 21.904L75.0765 13.984L78.1485 3.616L75.7965 3.424L72.7245 8.416L72.4365 8.272C73.5565 5.872 74.7085 4.032 75.8925 2.752C77.0765 1.44 78.1485 0.783998 79.1085 0.783998C79.6205 0.783998 80.2925 1.184 81.1245 1.984C81.9565 2.784 82.3725 3.536 82.3725 4.24C82.3725 5.904 81.2365 9.472 78.9645 14.944L79.1565 15.04C82.4525 8.576 84.9805 4.464 86.7405 2.704C87.9565 1.488 89.1405 0.879999 90.2925 0.879999C91.3485 0.879999 92.2765 1.184 93.0765 1.792C93.9085 2.4 94.3245 3.056 94.3245 3.76C94.3245 4.976 93.5245 7.552 91.9245 11.488L88.6125 19.744L91.1085 20.032L94.3245 14.992L94.6125 15.136C93.4925 17.472 92.3405 19.296 91.1565 20.608C89.9725 21.92 88.9965 22.576 88.2285 22.576Z"
                            className="fill-[#7A78FF] dark:fill-white"
                        />
                    </svg>
                    <div className="text-xl Freight-med">
                    © 2025 MYEN Moroccan Youth Empowerment Network. Not-Profit Organization.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
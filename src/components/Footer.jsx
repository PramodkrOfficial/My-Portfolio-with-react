import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4 cursor-pointer'>
                            <FaGithub size={30} />
                            <FaSquareFacebook size={30} />
                            <FaLinkedin size={30} />
                            <FaSquareInstagram size={30} />
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>&copy; 2024 Your Company. All copyrights reserved.</p>
                            <p className='text-sm'>Supportive Partner Surya</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
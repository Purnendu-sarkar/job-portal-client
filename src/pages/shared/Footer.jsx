import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 py-10">
            <div className="container mx-auto px-5 md:px-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
                    {/* Logo and About */}
                    <div className="w-full md:w-1/3 text-center md:text-left">
                        <img src={logo} alt="Job Portal Logo" className="w-36 mx-auto md:mx-0 mb-4" />
                        <p className="text-sm leading-relaxed">
                            <strong>Job Portal Ltd.</strong>
                            <br />
                            Empowering careers worldwide since 1992.
                        </p>
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Services */}
                        <div>
                            <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Branding</a></li>
                                <li><a href="#" className="hover:text-white transition">Design</a></li>
                                <li><a href="#" className="hover:text-white transition">Marketing</a></li>
                                <li><a href="#" className="hover:text-white transition">Advertisement</a></li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div>
                            <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition">Jobs</a></li>
                                <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div>
                            <h6 className="text-lg font-semibold mb-4 text-white">Legal</h6>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
                                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} <strong>Job Portal Ltd.</strong> | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

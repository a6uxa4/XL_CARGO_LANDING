import React from 'react';
import {FaInstagram} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import {MdAddIcCall} from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#0b3c26]">
            <div className="flex justify-around p-7 items-center sm:flex-col sm:gap-6 lg:flex-row">
                <img src="/logo.svg" alt="" className="w-[250px]"/>

                <nav className="flex gap-10 text-white sm:items-center">

                    <a href="https://2gis.kg/bishkek/search/%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0%2010%D0%91%2C%20%D0%B1%D1%83%D1%82%D0%B8%D0%BA%206/geo/70030076179389929/74.657966%2C42.855389?m=74.657954%2C42.855057%2F17.54"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-center text-[25px] flex flex-col leading-none cursor-pointer sm:text-[18px] xl:text-[25px]">
                        Кыргызстан, Бишкек
                        <span className="text-[18px] sm:text-[15px]">Анкара 10Б</span>
                    </a>
                    <a href="https://2gis.kg/bishkek/search/%D0%90%D0%BD%D0%BA%D0%B0%D1%80%D0%B0%2010%D0%91%2C%20%D0%B1%D1%83%D1%82%D0%B8%D0%BA%206/geo/70030076179389929/74.657966%2C42.855389?m=74.657954%2C42.855057%2F17.54"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-center text-[25px] flex flex-col leading-none cursor-pointer sm:text-[18px] xl:text-[25px]">
                        Кыргызстан, Ош
                        <span className="text-[18px]">-----</span>
                    </a>

                    <div className="hidden sm:block lg:hidden">
                        <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer "><MdAddIcCall/> <span>996 225 905 055</span></h1>
                        <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer "><MdAddIcCall/> <span>996 997 905 055</span></h1>
                        <span>12:00-18:00</span>
                    </div>


                </nav>
                <nav className="flex gap-4 text-[30px] cursor-pointer">
                    <a href="https://t.me/+Yn4OkYESMvU5Mjky" className="text-white">
                        <FaTelegram />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=996225905055&text&type=phone_number&app_absent=0" className="text-white">
                        <IoMdCall />
                    </a>
                    <a href="https://www.instagram.com/ades_express_cargo/?igshid=NzZlODBkYWE4Ng%3D%3D" className="text-white">
                        <FaInstagram />
                    </a>

                </nav>

            </div>
        </div>
    );
};

export default Footer;
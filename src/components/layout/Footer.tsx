import React from 'react';
import {FaInstagram} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {IoMdCall} from "react-icons/io";
import Container from "@/components/Container/page";

const Footer = () => {
    return (
        <div className="bg-[#0b3c26]">
            <Container>
                <div className="flex justify-around p-5 items-center sm:flex-col lg:flex-row">
                    <img src="/logoo.png" alt="" className="w-[150px]"/>

                    <nav className="flex items-center gap-10 text-white sm:py-4 lg:py-0">

                        <a href="https://2gis.kg/bishkek/geo/70000001098544593"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-center text-[25px] flex flex-col leading-none cursor-pointer ">
                            Кыргызстан, Бишкек
                            <span className="text-[18px] ">Анкара 10Б</span>
                        </a>
                        <a
                            href="https://2gis.kg/bishkek/geo/70000001098544593"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center text-[25px] flex flex-col leading-none cursor-pointer ">
                            Кыргызстан, Ош
                            <span className="text-[18px]">-----</span>
                        </a>

                    </nav>
                    <nav className="flex gap-4 text-[30px] cursor-pointer">
                        <a href="https://t.me/+Yn4OkYESMvU5Mjky" className="text-white">
                            <FaTelegram/>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=996225905055&text&type=phone_number&app_absent=0"
                           className="text-white">
                            <IoMdCall/>
                        </a>
                        <a href="https://www.instagram.com/ades_express_cargo/?igshid=NzZlODBkYWE4Ng%3D%3D"
                           className="text-white">
                            <FaInstagram/>
                        </a>

                    </nav>

                </div>
            </Container>

        </div>
    );
};

export default Footer;
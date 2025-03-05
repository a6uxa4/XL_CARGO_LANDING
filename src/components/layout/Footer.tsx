import React from 'react';
import {FaInstagram} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {IoMdCall} from "react-icons/io";
import Container from "@/components/Container/page";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#004190]">
            <Container>
            <div className="flex justify-between md:p-5 items-center sm:flex-col lg:flex-row sm:p-2 xs:flex-col">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <nav className="flex items-center gap-10 text-white sm:py-5 lg:py-0 sm:leading-none md:leading-5">

                    <a href="https://2gis.kg/bishkek/geo/70000001098544593"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-center text-[25px] flex flex-col  cursor-pointer font-sans">
                        Кыргызстан, Бишкек
                        <span className="text-[15px] ">Барпы Алыкулова, 40Б/1</span>
                    </a>

                </nav>
                <nav className="flex gap-4 text-[30px] cursor-pointer">
                    <a href="https://t.me/semeteevnurs" className="text-white">
                        <FaTelegram/>
                    </a>
                    <a href="https://wa.me/996702155255"
                       className="text-white">
                        <IoMdCall/>
                    </a>
                    <a href="https://www.instagram.com/xlcargo.kg/"
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
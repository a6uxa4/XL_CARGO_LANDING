import {MdAddIcCall} from "react-icons/md";
import {FaClock} from "react-icons/fa6";
import Container from "@/components/Container/page";
import React from "react";
import Image from "next/image";
const Header = () => {
    return (
        <div className="bg-[#004190]">
            <Container>
                    <div className="flex justify-between p-3 items-center ">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={150}
                                height={100}
                            />
                        <nav className="flex gap-4  text-white font-bold xs:flex-col sm:flex-row">
                            <a href="https://wa.me/996702155255" className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer
                         ">
                                <MdAddIcCall/> <span>996 702 155 255</span></a>

                            <div className="flex items-center gap-4  ">
                                <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer xs:ml-9 sm:ml-0">
                                    <FaClock/>
                                    <span>12:00-18:00</span></h1>
                            </div>
                        </nav>
                    </div>
            </Container>
        </div>
    );
};

export default Header;
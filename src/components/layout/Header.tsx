import {MdAddIcCall} from "react-icons/md";
import {FaClock} from "react-icons/fa6";
import Container from "@/components/Container/page";

const Header = () => {
    return (
        <div className="bg-[#0b3c26]">
            <Container>


                <div className="flex justify-between p-3 items-center ">
                    <div>
                        <img src="/logoo.png" alt="logo" className="w-[120px]"/>
                    </div>

                    <nav className="flex gap-4 mr-10 text-white font-bold float-end ">
                        <a href="https://wa.me/996702155255" className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer ">
                            <MdAddIcCall/> <span>996 702 155 255</span></a>

                        <div className="flex items-center gap-4 ml-4 ">
                            <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer">
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
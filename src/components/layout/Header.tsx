import {MdAddIcCall} from "react-icons/md";
import {FaClock} from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-[#0b3c26]">

            <div className="flex justify-between p-7 items-center ">
                <div>
                    <img src="/logo.svg" alt="" className="w-[250px] lg:w-[150px]"/>
                </div>

                <nav className="flex gap-4 mr-10 text-white font-bold float-end sm:mr-[-20px] lg:mr-[-0px] " >
                    <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer sm:hidden lg:block lg:flex lg:text-[15px]"><MdAddIcCall/> <span>996 225 905 055</span></h1>
                    <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer sm:hidden lg:block lg:flex lg:text-[15px]"><MdAddIcCall/> <span>996 997 905 055</span></h1>
                    <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer sm:hidden lg:block lg:flex lg:text-[15px]"><MdAddIcCall/> <span>996 705 905 055</span></h1>

                    <div className="flex items-center gap-4 ml-4 sm:flex sm:flex-col lg:flex-row lg:ml-0" >
                        <h1 className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer sm:hidden lg:block lg:text-[15px] lg:flex"><FaClock/>
                            <span>12:00-18:00</span></h1>
                         <p className="sm:hidden lg:block">|</p>
                        <Link
                            href="/sign-in"
                            className="flex items-center gap-1 hover:underline hover:translate-y-[-2px] sm:mr-[-100px] lg:mr-0 hover:transition-all cursor-pointer lg:text-[15px]">Войти</Link>
                        <Link
                            href="/sign-up"
                            className="hover:underline hover:translate-y-[-2px] hover:transition-all cursor-pointer lg:text-[15px]" >Зарегистрироваться</Link>
                    </div>
                </nav>

            </div>

        </div>
    );
};

export default Header;
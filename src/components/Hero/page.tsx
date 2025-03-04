import React from 'react';
import Container from "@/components/Container/page";

const Hero = () => {
    return (
        <div>

            <div className="relative p-20 bg-cover bg-[center_70%] after:absolute after:inset-0 after:bg-black/50" style={{backgroundImage: `url('/cargoxl.jpg')`}}>
                <Container>
                    <div className="absolute inset-0 bg-black/20"></div>

                    <h1 className="text-center leading-none font-extrabold text-white z-10 relative
                    sm:text-[25px] md:text-[26px] lg:text-[33px] xl:text-[50px] ">ДОСТАВКА ТОВАРОВ ИЗ КИТАЯ ПО
                        САМЫМ <br/> БЫСТРЫМ СРОКАМ</h1>

                    <p className="text-white text-center font-normal z-10 relative my-10
                    sm:text-[16px] sm:my-5 md:text-[20px]  lg:text-[27px] lg:my-10 xl:text-[30px]
                    xs:text-[10px] xs:w-40 xs:ml-10 xs:my-3 sm:w-full">
                        Регистрируйся и получи свой код склада в Китае. Выкупай <br/>
                        товары Оптом и Розницу самостоятельно или с помощью <br/>
                        нашей компании, отслеживай их по трек номеру. Мы доставим <br/>
                        ваши товары в Кыргызстан безопасно за самый короткий срок!
                    </p>

                    <div className="text-center z-10 relative">
                        <a href="https://wa.me/996702155255"
                           className="md:py-[20px] md:px-[70px] rounded-[50px] bg-white md:text-[20px] lg:text-[35px] font-bold text-blue-600
                           hover:text-white hover:bg-blue-600 hover:transition-all sm:text-[16px] sm:py-3 sm:px-5 " >связываться с менеджером
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
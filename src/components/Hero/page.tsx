import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className=" p-20 bg-cover" style={{backgroundImage:`url('/express.png')`}}>
                <h1 className="text-[60px] text-center leading-1 font-semibold text-white
                sm:text-[30px]">ДОСТАВКА ТОВАРОВ ИЗ КИТАЯ ПО
                    САМЫМ <br/> БЫСТРЫМ СРОКАМ</h1>

                <p className="text-white text-center text-[40px] font-normal mt-5 sm:text-[20px]">
                    Регистрируйся и получи свой код склада в Китае. Выкупай <br/>
                    товары Оптом и Розницу самостоятельно или с помощью <br/>
                    нашей компании, отслеживай их по трек номеру. Мы доставим <br/>
                    ваши товары в Кыргызстан безопасно за самый короткий срок!
                </p>

                <div className="text-center mt-[20px]">
                    <button className="py-[15px] px-[70px] rounded-[50px] bg-white text-[35px] font-bold text-green-900
                    hover:text-white hover:bg-green-900 hover:transition-all sm:text-[25px]">ОТСЛЕЖИВАНИЕ</button>
                </div>

            </div>
        </div>
    );
};

export default Hero;
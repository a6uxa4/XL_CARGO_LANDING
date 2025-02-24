import React from 'react';
import {BiTimer} from "react-icons/bi";
import {FaBoxOpen} from "react-icons/fa";

const Redemption = () => {
    return (
        <div className="bg-[#0b3c26] p-10 sm:p-5">
            <div className="bg-[#0b3c26] p-10 border rounded-lg items-center shadow-2xl shadow-black border-none ">
                <h1 className="text-white text-[55px] font-extrabold font-sans">
                    Выкуп товара с китайских сайтов</h1>
                <p className="text-white text-[17px]">Работаем со всеми известными китайскими маркетплейсами</p>

                <nav className="text-white text-[50px] font-semibold">
                    <h1> — Pinduoduo</h1>
                    <h1> — Poizon</h1>
                    <h1> — Taobao</h1>
                    <h1> — 1688 и.д.</h1>
                </nav>

                <h1 className="text-white text-[25px] font-normal my-10">Поможем зарегистрироваться на нужном сайте , найти
                    товар у проверенного поставщика, <br/>
                    оформить заказ и произвести оплату.</h1>


                <div className="flex justify-between sm:flex sm:flex-col sm:text-center sm:gap-3
                lg:flex-row lg:items-center">
                    <div className="flex items-center leading-none gap-10 sm:flex-col  lg:flex-row lg:text-left lg:mt-12">
                        <img src="/box2.svg" alt="svg" className="w-[200px] text-white lg:w-[150px]" />
                        <div>
                            <h1 className="text-white text-[30px] font-semibold mb-2 lg:text-[25px]">Без знания китайского</h1>
                            <p className="text-white font-normal font-sans text-[18px] sm:text-[15px]">Поможем оформить заказ.
                                заполнить <br/>
                                правильно адрес склада, сохранив ваши <br/>
                                силы и время</p>
                        </div>

                    </div>
                    <div className="flex items-center leading-none gap-10 sm:flex-col sm:text-center sm:mt-12 sm:gap-3
                    lg:flex-row lg:text-left">
                        <img src="/clock.svg" alt="svg" className="w-[200px] text-white lg:w-[150px]"/>
                        <div>
                            <h1 className="text-white text-[30px] font-semibold mb-2 lg:text-[25px]">Доставим за 7-12 дней <br/>
                                со дня поступления на склад в Китае</h1>
                            <p className="text-white font-normal font-sans text-[18px] sm:text-[15px]">Более 90 % клиентов имеют проблемы со <br/>
                                сроками доставки, но наше карго <br/>
                                поможет получить ваши товары <br/>
                                безопасно и быстро</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Redemption;
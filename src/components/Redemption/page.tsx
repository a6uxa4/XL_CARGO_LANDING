import React from 'react';
import Container from "@/components/Container/page";
import Image from "next/image";
const Redemption = () => {
    return (
        <div className="bg-[#004190] p-10 sm:p-5 xs:p-4">
            <Container>

                <div className="bg-[#004190] p-10 border rounded-lg items-center shadow-2xl shadow-black border-none xs:py-4 sm:p-10">
                    <h1 className="text-white text-[55px] font-extrabold font-sans xs:text-[20px] sm:text-[55px] uppercase ">
                        Выкуп товара с китайских сайтов</h1>
                    <p className="text-white text-[17px] xs:text-[15px] sm:text-[17px]">Работаем со всеми известными китайскими маркетплейсами</p>

                    <nav className="text-white text-[50px] font-semibold xs:text-[25px] sm:text-[50px]">
                        <h1> — Pinduoduo</h1>
                        <h1> — Poizon</h1>
                        <h1> — Taobao</h1>
                        <h1> — 1688 и.д.</h1>
                    </nav>

                    <h1 className="text-white sm:text-[25px] font-normal sm:my-10 xs:text-[15px] xs:my-5">Поможем зарегистрироваться на нужном сайте
                        , найти
                        товар у проверенного поставщика, <br/>
                        оформить заказ и произвести оплату.</h1>


                    <div className="flex justify-between sm:flex-col sm:text-center sm:gap-3
                    lg:flex-row lg:items-center xs:flex-col xs:gap-6">
                        <div
                            className="flex items-center leading-none gap-10 sm:flex-col  lg:flex-row lg:text-left lg:mt-12
                            sm:gap-3 xs:flex-col xs:text-center xs:gap-1">

                            <Image
                                src="/box2.svg"
                                alt="svg"
                                className="text-white lg:w-[150px] xs:w-[100px] sm:w-[150px]"
                                width={150}
                                height={150}
                            />
                            <div>
                                <h1 className="text-white text-[30px] font-semibold mb-2 lg:text-[25px] xs:text-[20px] sm:text-[30px]">Без знания
                                    китайского</h1>
                                <p className="text-white font-normal font-sans text-[18px] sm:text-[15px] xs:text-[13px]">Поможем
                                    оформить заказ.
                                    заполнить <br/>
                                    правильно адрес склада, сохранив ваши <br/>
                                    силы и время</p>
                            </div>

                        </div>
                        <div className="flex items-center leading-none gap-10 sm:flex-col sm:text-center sm:mt-12 sm:gap-3
                    lg:flex-row lg:text-left xs:flex-col xs:text-center xs:gap-1">
                            <Image
                                src="/clock.svg"
                                alt="svg"
                                className="text-white lg:w-[150px] xs:w-[130px] sm:w-[150px]"
                                width={150}
                                height={150}
                            />                            <div>
                                <h1 className="text-white text-[30px] font-semibold mb-2 lg:text-[25px] xs:text-[20px]">Доставим за
                                    7-12 дней <br/>
                                    со дня поступления на склад в Китае</h1>
                                <p className="text-white font-normal font-sans text-[18px] sm:text-[15px] xs:text-[13px]">Более 90 %
                                    клиентов имеют проблемы со <br/>
                                    сроками доставки, но наше карго <br/>
                                    поможет получить ваши товары <br/>
                                    безопасно и быстро</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Redemption;
import React from 'react';
import Container from "@/components/Container/page";

const AboutUs = () => {

    const cards = [
        {
            title: "Обрешетка хрупкого товара",
            svg: "/cargo.svg",
            p: "По запросу у нас есть услугу обрешетки товара для защиты хрупких и габаритных товаров. В конце вес считается вместе."
        }, {
            title: "Переупаковка и объединение",
            svg: "/repackaging.svg",
            p: "Мы соберем все ваши посылки и объединим, для удобного и рационального использования объема"
        }, {
            title: "Страхование груза",
            svg: "/Insurance.svg",
            p: "Если ваш товар поступит без вашего личного кода или не на тот код, то она не потеряется, в нашем телеграмм канале вы сможете найти свой груз"
        }, {
            title: "Собственный склад в Китае",
            svg: "/warehouse.svg",
            p: "Позволяет хранить неограчниенное количество заказов клиентов"
        }, {
            title: "Привезем любой ваш груз в самые быстрые сроки и выгодные цены",
            svg: "/box.svg",
            p: "Стоимость рассчитывается в зависимости от обьема и веса груза. Оптовый вес считаем от 50 кг считаем еще ниже!"
        }, {
            title: "Отслеживание товара",
            svg: "/time.svg",
            p: "Вы всегда можете отследить место- нахождение вашего товара по трек-номеру"
        },
    ]

    return (
        <div>
            <Container>

                <div className="">
                    <h1 className="text-green-900 text-center font-extrabold font-sans mt-5 sm:text-[35px] md:text-[40px] lg:text-[60px]">Почему
                        стоит выбрать нас ?</h1>
                    <p className="text-gray-700 xl:text-[27px] font-serif text-center mb-10 sm:text-[16px] md:text-[19px] lg:text-[25px]  ">Если вы уже
                        работаете или планируете работать с маркетплейсами данная <br/>
                        услуга именно для вас. ADES CARGO EXPRESS доставят любой ваш груз в любом <br/>
                        размере и количестве. Взять на себя всю работу начиная с проверки товара, <br/>
                        обрешетки по желанию клиента, таможенного оформления документов и <br/>
                        сертификатов, до доставки товара в Кыргызстан, его переупаковки, хранения и <br/>
                        создания поставок на наш склад в Бишкеке.
                    </p>

                        <img src="/xlcargo.jpg" alt="img" className="rounded-2xl text-center sm:px-5 md:px-5 lg:px-5 xl:px-5 "/>

                    <div
                        className="grid p-[70px] gap-10 gap-x-[150px] sm:grid-cols-1 xl:grid-cols-2 ">
                        {cards.map((card, index) => (
                            <div key={index} className="">
                                <div className="flex items-center gap-4 leading-none sm:flex-col sm:text-center md:flex-row md:text-left lg:justify-center xl:justify-normal
                               ">
                                    <img src={card.svg} alt={card.title} className="w-16 h-16"/>
                                    <div>
                                        <h2 className="text-green-900 text-2xl font-sans font-semibold w-[500px] leading-none mb-1">{card.title}</h2>
                                        <p className="text-black text-sm w-[500px]">{card.p}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default AboutUs;
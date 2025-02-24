import React from 'react';

const AboutUs = () => {

    const cards = [
        {
            title: "Обрешетка хрупкого товара",
            svg: "/cargo.svg",
            p: "По запросу у нас есть услугу обрешетки товара для защиты хрупких и габаритных товаров. В конце вес считается вместе."
        },  {
            title: "Переупаковка и объединение",
            svg: "/repackaging.svg",
            p: "Мы соберем все ваши посылки и объединим, для удобного и рационального использования объема"
        }, {
            title: "Страхование груза",
            svg: "/Insurance.svg",
            p: "Если ваш товар поступит без вашего личного кода или не на тот код, то она не потеряется, в нашем телеграмм канале вы сможете найти свой груз"
        },{
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
            <div className="">
                <h1 className="text-green-900 text-[60px] text-center font-extrabold font-sans mt-5 sm:text-[35px]">Почему стоит выбрать нас ?</h1>
                <p className="text-gray-700 text-[27px] font-serif text-center sm:text-[17px] sm:p-5">Если вы уже работаете или планируете работать с маркетплейсами данная <br/>
                    услуга именно для вас. ADES CARGO EXPRESS доставят любой ваш груз в любом <br/>
                    размере и количестве. Взять на себя всю работу начиная с проверки товара, <br/>
                    обрешетки по желанию клиента, таможенного оформления документов и <br/>
                    сертификатов, до доставки товара в Кыргызстан, его переупаковки, хранения и <br/>
                    создания поставок на наш склад в Бишкеке.
                </p>


                <div className="pl-[140px] my-10 sm:text-center sm:p-5 ">
                    <img src="/des.png" alt="" className="rounded-2xl"/>
                </div>


                <div className="grid grid-cols-2 p-20 gap-10 ml-40 sm:grid-cols-1 sm:p-10 sm:m-0 lg:ml-[170px] xl:ml-[30px] xl:grid-cols-2">
                    {cards.map((card, index) => (
                        <div key={index} className="">
                            <div className="flex items-center gap-4 leading-none sm:flex-col sm:text-center sm:p-5
                            lg:flex-row lg:text-left">
                                <img src={card.svg} alt={card.title} className="w-16 h-16" />
                                <div>
                                    <h2 className="text-green-900 text-2xl font-sans font-semibold w-[500px] leading-none mb-1">{card.title}</h2>
                                    <p className="text-black text-sm w-[500px]">{card.p}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
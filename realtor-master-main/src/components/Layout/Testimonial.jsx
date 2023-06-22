import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

import Client1 from "../../assets/Client1.jpg";
import Client2 from "../../assets/Client2.jpg";
import Client3 from "../../assets/Client3.jpg";
import Client4 from "../../assets/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "Я коли встрів цих ровних тіпів, то спочатку впав ...з не очікування, так. Ну от на вулиці 41 чи 43 не пам'ятаю, але холодно ууу, повторюся  зима, беру мобіляку тай клацаю по сайтех тих, наклацав, живу в Бердочив Плаза!",
    name: "Борис Джонсонович",
    image: Client2,
  },
  {
    id: "p2",
    text: "Файні хлопци та дивчата, я приїхати з села, при Кийові, місто Демир то є файно , зняти хату на 3 місяці і 2 корови. Все мене влаштовує, тай сказати біше немає чого!",
    name: "Бритні Штрікс",
    image: Client1,
  },
  {
    id: "p3",
    text: "Все чудово, рекомендую. Сервіс просто чудовий, усім залишилося задоволена. Вам нараховано 40 гривень, перед публікацією видаліть останнє речення!",
    name: "Голька Борчиха",
    image: Client3,
  },
  {
    id: "p4",
    text: "В Газонюхія немати такого сервісу, просити добавити партнерську програму, брати, розвивати та вкладати гроши. Такого кайфу від міста та хати не отримувати в житті. Яке місто, О БЕРДИЧІВ, БЕРДИЧЕВЕ МІЙ. Які пейзажі, хата гарна, а Бритні, а ніколи не забуду її, сфотографував на все життя, таке гарне портмане. Контора гарна, питання кашлянули вирішили, пше сірник не догорів. Рекомендуююююю!",
    name: "Норман Шльопцик фон Штампьовлик",
    image: Client4,
  },
];

const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              Що глаголять наші <span className="text-blue">клієнти</span>
            </h1>
            <p className="text-left text-ash">
              Глаголити - слово кацапське, вибачаємося. <br/>
              Що кашляють наші клієнти
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;

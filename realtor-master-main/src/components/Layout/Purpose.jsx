import React, { Fragment } from "react";
import PurposeItem from "../Data/PurposeItem";

import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const Purpose = () => {
  const purposeData = [
    {
      id: "p1",
      icon: <HiOutlineHome />,
      title: "Купи будинок",
      description: "Допоможемо купити, що завгодно. Скільки буде 2+2? ",
    },
    {
      id: "p2",
      icon: <FiKey />,
      title: "Здай хату",
      description: "Здаємо хати усім, окрім моїх боржників та москалів.",
    },
    {
      id: "p3",
      icon: <FaHandshake />,
      title: "Продай будинок",
      description: "Продамо ваш будинок будь-якого кольору та віросповідання",
    },
  ];

  const mappedList = purposeData.map((purpose) => {
    return (
      <PurposeItem
        key={purpose.id}
        id={purpose.id}
        icon={purpose.icon}
        title={purpose.title}
        description={purpose.description}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Наш головний <span className="text-blue">фокус</span>
          </h1>
          <p className="text-center text-ash">
           Тільки досвід та спритність рук, ніякого шахрайства.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row my-6">{mappedList}</ul>
      </section>
    </Fragment>
  );
};

export default Purpose;

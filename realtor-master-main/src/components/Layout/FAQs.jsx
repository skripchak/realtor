import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "Хто ви такі будете?",
    ans: "Ми самий рівний толкально-барижний колектив 'Рівняк', якшо хати, то тільки в 'Рівняк'",
  },
  {
    id: "q2",
    que: "Які послуги ми надаємо? ",
    ans: "З понеділка по п'ятницю ми рієлтори, а про вихідні я промовчу, в участкового можете запитати ",
  },
  {
    id: "q3",
    que: "Що мені робити, коли мене кинув рієлтор ? ",
    ans: "Ну ти живучий, виліз падло",
  },
  {
    id: "q4",
    que: "Розкажіть історію утворення сервісу?",
    ans: "Все починається з 0.5, ВСЕ!!!! Життя збірка планованого та незапланованого. Живуть лише ті, хто приймає життя та робить його цікавим й наповненим моментами.",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Відповіді на часті <span className="text-blue">запитання</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;

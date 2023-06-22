import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropertiesItem from "../Data/PropertiesItem";

import { useGetProperyListQuery } from "../../redux/services/bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

const Properties = () => {
  const { data, isFetching, error } = useGetProperyListQuery();

  console.log(data?.hits);
  const propertiesData = data?.slice(0, 4);

  const mappedList = propertiesData?.map((property) => {
    return (
      <PropertiesItem
        key={property?.premisses_id}
        id={property?.premisses_id}
        numOfBed={property?.floor}
        numOfBath={"1"}
        size={property?.square}
        price={property?.price}
        address={property?.address}
        image={property?.coverPhoto?.url || "https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"}
        state={property?.state}
        rentType={property?.renttype}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32 mb-6">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Найбільш популярні <span className="text-blue">пропозиції</span>
          </h1>
          <p className="text-center text-ash">
            Так скільки буде 2 + 2 ? Ааа? 4? ХАХАХА. Правильна відповідь: А скільки Вам треба ? Весь бізнес будується на цих словах.
          </p>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row lg:justify-between ">
          {isFetching && <Loader />}
          {!isFetching && !error && mappedList}
          {!isFetching && mappedList?.length === 0 && <Error />}
        </ul>
        <div className="flex items-center  justify-center px-4 pb-3 pt-5">
          <Link to="/listings">
            <button className="font-Poppins bg-silverLite border-2 border-blue text-blue font-medium text-base px-8 py-2 rounded-md shadow-lg hover:bg-blue hover:text-white">
              Глянути всі
            </button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;

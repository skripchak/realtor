import React, { Fragment } from "react";
import PropertiesItem from "../Data/PropertiesItem";

import { bayutApi, useGetProperyListQuery } from "../../redux/services/bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

const Properties = () => {
  const { data, isFetching, error } = useGetProperyListQuery();
  console.log(bayutApi);

  const propertiesData = data;

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
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            Список <span className="text-blue">пропозицій</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && <Error />}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;

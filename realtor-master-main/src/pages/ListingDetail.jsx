import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";
import PropertyDetailItems from "../components/Data/PropertyDetailItems";

import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";

import { useGetProperyDetailsQuery } from "../redux/services/bayut";

const ListingDetail = () => {
  const params = useParams();
  const { listingId } = params;
  console.log(listingId);
  const divRef = useRef();

  const { data, isFetching, error } = useGetProperyDetailsQuery(listingId);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Fragment>
      <section
        ref={divRef}
        className="mx-auto bg-silver px-2 md:px-16 lg:px-20 py-20 pt-20 md:py-16"
      >
        <div className="my-20">
          {!isFetching && !error && (
            <PropertyDetailItems
              key={data?.premisses_id}
              premisses_id={data?.premisses_id}
              premisses_type_id={data?.premisses_type_id}
              realtor_id={data?.realtor_id}
              name={data?.name}
              renttype={data?.renttype}
              description={data?.description}
              address={data?.address}
              room_number={data?.room_number}
              floor={data?.floor}
              square={data?.square}
              area_description={data.area_description}
              posting_date={data?.posting_date}
              price={data?.price}
              isposted={data?.isposted}
              available={data?.available}
            // id={data?.premisses_id}
            // numOfBed={data?.rooms}
            // numOfBath={data?.baths}
            // size={data?.area}
            // price={data?.price}
            // address={data?.title}
            // image={data?.coverPhoto || "https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"}
            // state={data?.state}
            // rentType={data?.rentFrequency}
            // description={data?.description}
            // amenities={data?.amenities}
            // photos={data?.photos}
            // phoneNumber={data?.phoneNumber}
            // agencyName={data?.agency?.name}
            // contactName={data?.contactName}
            // logo={data?.agency?.logo?.url}
            // premisses_id={data?.premisses_id}
            // premisses_type_id = {data?.premisses_type_id}
            />
          )}
          {isFetching && <Loader />}
          {/* {!isFetching && data.length === 0 && <Error />} */}
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;

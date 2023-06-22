import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Layout/Footer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAddPostMutation } from '../redux/services/bayut';


const AddPost = () => {
    const divRef = useRef();

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });


    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const history = useHistory();

    const [addPost] = useAddPostMutation();

    const nameInputRef = useRef();
    const locationInputRef = useRef();
    const descInputRef = useRef();
    const roleInputRef = useRef();
    const roomInputRef = useRef();
    const floorInputRef = useRef();
    const sqInputRef = useRef();
    const adInputRef = useRef();
    const priceInputRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);



        const enteredname = nameInputRef.current.value;
        const enteredlocation = locationInputRef.current.value;
        const entereddesc = descInputRef.current.value;
        const enteredRentType = roleInputRef.current.value;
        const enteredroom = roomInputRef.current.value;
        const enteredfloor = floorInputRef.current.value;
        const enteredsq = sqInputRef.current.value;
        const enteredad = adInputRef.current.value;
        const enteredprice = priceInputRef.current.value;

        const formData = {
            realtor_id: 1,
            premisses_type_id: 1,
            name: enteredname,
            renttype: enteredRentType,
            description: entereddesc,
            address: enteredlocation,
            room_number: +enteredroom,
            floor: +enteredfloor,
            square: +enteredsq,
            area_description: enteredad,
            price: +enteredprice,
            isposted: true,
            available: true,
            is_verificated: true
        };

        try {
            const user = await addPost(formData).unwrap();
            if (!user) {
                throw new Error("Adding Failed!");
            }
            history.replace("/panel");
        } catch (error) {
            const message = error?.data?.message;
            setErrorMessage(message);
            console.log(error?.data?.message);
        }
        setIsLoading(false);
    };

    const content = isLoading ? "Send data..." : "Додати";
    return (
        <>
            <section className="bg-silver pt-[9rem] min-h-[90vh] px-6" ref={divRef}>
                <div className="font-Poppins py-10 flex justify-center px-4 md:px-16 lg:px-20">
                    <div className="bg-white px-4 md:px-7 py-10  w-1/2 rounded-[30px] shadow-md lg:shadow">
                        {errorMessage && (
                            <div className="text-black mb-8 text-sm p-4 bg-[#f7cfcf] border-[#dc2626] border rounded-lg">
                                {" "}
                                <p className="text-center text-sm">{errorMessage}</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-5">
                                <label className="text-ash pb-2 text-lg" htmlFor="email">
                                    Ім'я <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="name"
                                    type="name"
                                    ref={nameInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-5">
                                <label className="text-ash text-lg" htmlFor="email">
                                    Виберіть тип <span className="text-[#dc2626]">*</span>
                                </label>
                                <select name="pets" id="pet-select" defaultValue={1}
                                    ref={roleInputRef}
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                >
                                    <option value="1">House</option>
                                    <option value="2">Apartment</option>

                                </select>
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Адреса <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={locationInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Опис <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={descInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Кількість кімнат <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={roomInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Поверх <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={floorInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Площа <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={sqInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Опис околиць <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={adInputRef}
                                />
                            </div>

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Ціна <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={priceInputRef}
                                />
                            </div>
                            <button className="bg-blue font-medium w-full text-white py-3 rounded-lg">
                                {content}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AddPost
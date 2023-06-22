import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Layout/Footer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAddRieltorMutation } from '../redux/services/bayut';


const AddHimself = () => {
    const divRef = useRef();

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });


    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const nameInputRef = useRef();
    const locationInputRef = useRef();
    const phoneInputRef = useRef();
    const history = useHistory();

    const [addRieltor] = useAddRieltorMutation();


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const enteredname = nameInputRef.current.value;
        const enteredlocation = locationInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const formData = {
            name: enteredname,
            location: enteredlocation,
            phone_number: enteredPhone,
        };

        try {
            const user = await addRieltor(formData).unwrap();
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

                            <div className="flex flex-col mb-12">
                                <label className="text-ash text-lg" htmlFor="password">
                                    Локація <span className="text-[#dc2626]">*</span>
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
                                    Номер телефону <span className="text-[#dc2626]">*</span>
                                </label>
                                <input
                                    className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                                    id="location"
                                    type="location"
                                    ref={phoneInputRef}
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

export default AddHimself
import React, { useEffect, useRef } from 'react'
import Footer from '../components/Layout/Footer';
import { NavLink } from 'react-router-dom';

const Panel = () => {
    const divRef = useRef();

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <>
            <section className="bg-silver pt-[9rem] min-h-[90vh] px-6" ref={divRef}>
                <div className='flex, items-center, justify-center flex-wrap'>
                    <NavLink to="/addhimself">
                        <button className=" bg-blue text-white font-bold text-xs p-3 px-7 rounded-lg mr-6 shadow-lg">
                            Додати себе до списку рієлторів
                        </button>
                    </NavLink>
                    <NavLink to="/createpost">
                        <button className=" bg-blue text-white font-bold text-xs p-3 px-7 rounded-lg mr-6 shadow-lg">
                            Свторити оголошення
                        </button>
                    </NavLink>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Panel
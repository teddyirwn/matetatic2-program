"use client";

import React, { useState } from 'react'
import From from './form'
import { aritmatika } from '@/lib/deret_aritmatika';
import HasilComponent from './hasil';

export default function DeretAritmatika() {

    type item = { label: string, nilai: string }

    const [data, setData] = useState<item[]>([]);
    const [langkah, setLangkah] = useState<item[]>([]);
    const [isSubmit, setSubmit] = useState(false);

    const [form, setForm] = useState({
        n1: 0,
        u1: 0,
        n2: 0,
        u2: 0,
        un: 0,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: Number(e.target.value) })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setData(aritmatika(form).hasil)
        setLangkah(aritmatika(form).langkah)
        setSubmit(true);
    }
    return (
        <div className='min-h-screen min-w-full p-5'>
            <h1 className='text-3xl font-extrabold text-center font-mono'>Barisan dan Deret Aritmatika</h1>
            <div className={` rounded-md shadow max-w-full mx-auto p-6 flex justify-center mt-10 flex-col md:flex-row   gap-8 md:gap-0  ${!isSubmit ? 'w-80' : "w-80 md:w-4/5 duration-100 ease-in-out"}  `}>
                <From handleChange={handleChange} handleSubmit={handleSubmit} />


                <hr className={` ${!isSubmit ? "hidden" : "md:rotate-90  md:w-20 border-t border-gray-400 my-auto "}`} />
                <div className={`${!isSubmit ? "hidden" : "block   "} `}>
                    <HasilComponent data={data} langkah={langkah} />
                </div>

            </div>
        </div>
    )
}

"use client"
import { geometriLengkap } from '@/lib/deret_geometri';
import React, { useState } from 'react'
import FormComponent from './form';
import HasilComponent from './hasil';

export default function DeretGeometri() {

    type item = { label: string, nilai: string }

    const [input, setInput] = useState({
        u1: '', n1: '', u2: '', n2: '', nTarget: ''
    });
    const [isSubmit, setSubmit] = useState(false);
    const [langkah, setLangkah] = useState<item[]>([]);
    const [hasil, setHasil] = useState<item[]>([]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { langkah, hasil } = geometriLengkap({
                u1: input.u1,
                n1: Number(input.n1),
                u2: input.u2,
                n2: Number(input.n2),
                nTarget: Number(input.nTarget)
            });

            setLangkah(langkah);
            setHasil(hasil);
            setSubmit(true);
        } catch (error) {
            // alert("Error: " + error.message);
        }
    }

    return (
        <div className='min-h-screen min-w-full p-5'>
            <h1 className='text-3xl font-extrabold text-center font-mono'>Barisan dan Deret Geometri</h1>
            <div className={`rounded-md shadow max-w-full mx-auto p-6 flex flex-col gap-8 md:flex-row justify-center mt-10 ${!isSubmit ? 'w-80' : "w-full md:w-4/5 duration-100 ease-in-out"}`}>
                <FormComponent handleChange={handleChange} handleSubmit={handleSubmit} />
                <hr className={`${!isSubmit ? "hidden" : "md:rotate-90 md:w-20 border-t border-gray-400 my-auto"}`} />
                <div className={`${!isSubmit ? "hidden" : "block"}`}>
                    <HasilComponent langkah={langkah} hasil={hasil} />
                </div>
            </div>
        </div>
    )
}

"use client"
import { takhingga } from "@/lib/deret_takhingga";
import React, { useState } from "react";
import From from "../deret-tak-hingga/form";
import Hasil from "./hasil";

type Item = { label: string; nilai: string };

export default function DeretTakHingga() {
    const [input, setInput] = useState({ u1: "", n1: 0, u2: "", n2: 0 });
    const [isSubmit, setSubmit] = useState(false);
    const [langkah, setLangkah] = useState<Item[]>([]);
    const [hasil, setHasil] = useState<Item[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLangkah(takhingga(input).langkah);
        setHasil(takhingga(input).hasil);
        setSubmit(true);

    };

    return (
        <div className='min-h-screen min-w-full p-5'>
            <h1 className='text-3xl font-extrabold text-center font-mono'> Deret Tak Hingga
            </h1>
            <div className={`rounded-md shadow max-w-full mx-auto p-6 flex flex-col md:flex-row gap-8 justify-center mt-10 ${!isSubmit ? 'w-80' : "w-full md:w-4/5 duration-100 ease-in-out"}`}>
                <From
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <hr className={`${!isSubmit ? "hidden" : "md:rotate-90 md:w-20 border-t border-gray-400 my-auto"}`} />

                <div className={`${!isSubmit ? "hidden" : "block "} md:ml-6`}>
                    <Hasil langkah={langkah} hasil={hasil} />
                </div>
            </div>
        </div>
    );
}

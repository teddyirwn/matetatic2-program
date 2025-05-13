'use client';

import { pangkat1, pangkat2, pangkat3 } from '@/lib/deret_pangkat_asli';
import React, { useState } from 'react'
import Hpangkat2 from './components/Hpangkat2';
import Hpangkat1 from './components/Hpangka1';
import Hpangkat3 from './components/Hpangkat3';
import FormComponent from './components/form';

export default function DeretPangkat() {

    interface Langkah {
        label: string;
        nilai: string;
    }
    const [n, setN] = useState(0);
    const [pangkat, setPangkat] = useState(0);
    const [hasil, setHasil] = useState<Langkah[]>([]);
    const [isSubmit, setSubmit] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let hasil: Langkah[] = [];

        switch (pangkat) {
            case 1:
                hasil = pangkat1(n);
                break;
            case 2:
                hasil = pangkat2(n);
                break;
            case 3:
                hasil = pangkat3(n);
                break;

            default:
                break;
        }
        setHasil(hasil);
        setSubmit(true);

    }

    return (

        <div className='min-h-screen min-w-full p-5'>
            <h1 className='text-3xl font-extrabold text-center font-mono'>Deret Pangkat dari Bilangan Asli
            </h1>
            <div className={` rounded-md shadow max-w-4/5 mx-auto  p-5 md:p-16  flex flex-col md:flex-row gap-8 mt-10  ${!isSubmit ? 'w-80' : "w-full md:w-4/5 duration-600 ease-in-out"}  `}>
                <FormComponent
                    handleSubmit={handleSubmit}

                    setN={setN}
                    pangkat={pangkat}
                    setPangkat={setPangkat}
                />

                <hr className="md:rotate-90 md:w-32 border-t border-gray-400 my-auto mx-5" />
                <div className={`${!isSubmit ? "hidden" : "block duration-1000 ease-in-out"} `}>
                    {pangkat === 1 && <Hpangkat1 hasil={hasil} />}
                    {pangkat === 2 && <Hpangkat2 hasil={hasil} />}
                    {pangkat === 3 && <Hpangkat3 hasil={hasil} />}
                </div>

            </div>
        </div>
    )
}

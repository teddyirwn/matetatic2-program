import { useRouter } from 'next/navigation';
import React from 'react'

export default function From({ handleChange, handleSubmit }: { handleChange: React.ChangeEventHandler, handleSubmit: React.FormEventHandler }) {
    const router = useRouter();

    const form = [

        { label: "Suku ke-", name: "n1" },
        { label: "Nilai Suku ke-", name: "u1" },
        { label: "Suku ke-", name: "n2", },
        { label: "Nilai Suku ke-", name: "u2" },
        { label: "Ingin mencari suku ke-", name: "un" },

    ];

    return (
        <form onSubmit={handleSubmit} className=' w-full md:w-80   font-semibold'>
            {form.map((e, i) => (
                <div className="mb-3" key={i}>
                    <label htmlFor="m" className='block'>{e.label}</label>
                    <input
                        onChange={handleChange}
                        placeholder={
                            e.name === 'text'
                                ? 'contoh: 1/64 atau 8'
                                : 'contoh: 4, 10, 100'
                        }
                        type={e.name}
                        name={e.name}
                        className='border-gray-300 border rounded-md p-2 focus:outline-0 w-full' required />
                </div>
            ))}



            <button type='submit' className='p-2 w-full bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 duration-200 ease-in-out mb-3'>Hitung</button>
            <button onClick={() => router.back()} className='p-2 w-full bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 duration-200 ease-in-out'>Kembali</button>
        </form>
    )
}

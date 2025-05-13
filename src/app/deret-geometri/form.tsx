import { useRouter } from 'next/navigation';
import React from 'react'

export default function FormComponent({ handleChange, handleSubmit }: { handleChange: React.ChangeEventHandler, handleSubmit: React.FormEventHandler }) {
    const router = useRouter();
    const form = [
        { label: "Suku ke-", name: "n1", type: "number" },
        { label: "Nilai Suku ke-", name: "u1", type: "text" },
        { label: "Suku ke-", name: "n2", type: "number" },
        { label: "Nilai Suku ke-", name: "u2", type: "text" },
        { label: "Ingin mencari suku ke-", name: "nTarget", type: "number" },
    ];

    return (
        <form onSubmit={handleSubmit}>
            {form.map((item, i) => (
                <div key={i} className="mb-3">
                    <label>{item.label}</label>
                    <input
                        type={item.type}
                        name={item.name}
                        onChange={handleChange}
                        className='border-gray-300 border rounded-md p-2 focus:outline-0 w-full'
                        placeholder={
                            item.type === 'text'
                                ? 'contoh: 1/64 atau 8'
                                : 'contoh: 4, 10, 100'
                        }
                    />
                </div>
            ))}
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md cursor-pointer'>Hitung</button>
            <button onClick={() => router.back()} className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-md mt-4 cursor-pointer'>Kembali</button>
        </form>
    )
}

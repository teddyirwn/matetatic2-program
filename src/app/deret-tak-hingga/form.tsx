import { useRouter } from 'next/navigation';
import React from 'react'

export default function Form({ handleChange, handleSubmit, }: { handleChange: React.ChangeEventHandler, handleSubmit: React.FormEventHandler }) {

    const router = useRouter();
    const form = [
        { label: "Suku ke...  (1)", name: "n1" },
        { label: "Nilai suku ke... (1)", name: "u1" },
        { label: "Suku ke-", name: "n2" },
        { label: "Nilai suku ke (2)..", name: "u2" },
    ];
    return (
        <form onSubmit={handleSubmit}>
            {form.map((item, index) => (
                <div key={index} className="mb-3">
                    <label htmlFor={item.name} className="block mb-1 font-medium">
                        {item.label}
                    </label>
                    <input
                        type={item.name.startsWith("n") ? "number" : "text"}
                        name={item.name}
                        onChange={handleChange}
                        placeholder={
                            item.name.startsWith("u") ? "Contoh: 4/625 atau -1.5" : ""
                        }
                        className="border-gray-300  w-full border rounded-md p-2 focus:outline-0 w- bg"
                    />
                </div>
            ))}
            <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold">
                Hitung
            </button>
            <button
                onClick={() => router.back()}
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold mt-3">
                Kembali
            </button>
        </form>
    )
}

import React from 'react'


type Item = {
    label: string;
    nilai: string;
}

export default function Hasil({ hasil, langkah }: { hasil: Item[], langkah: Item[] }) {
    return (
        <>
            <h1 className="font-bold text-2xl mb-2">Hasil Perhitungan</h1>
            {hasil.map((d, i) => (
                <p key={i} className="text-lg font-mono">
                    {d.label} : {d.nilai}
                </p>
            ))}
            <div className="bg-gray-50 rounded-md p-4 text-xs md:text-base inset-shadow-sm mt-4">
                {langkah.map((e, i) => (
                    <div key={i} className="mb-3">
                        <p className="text-md font-semibold">{e.label} :</p>
                        <p>{e.nilai}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

import React from 'react'

type item = { label: string, nilai: string };

export default function HasilComponent({ hasil, langkah }: { hasil: item[], langkah: item[] }) {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-2'>Hasil Perhitungan</h1>
            {hasil.map((d, i) => (<p key={i} className='text-lg font-mono'>{d.label} : {d.nilai}</p>))}
            <div className='bg-gray-50 rounded-md p-4 mt-4 inset-shadow-sm'>
                {langkah.map((e, i) => (
                    <div key={i}>
                        <p className='text-lg font-normal'>{e.label}:</p>
                        <p className='mb-2'>{e.nilai}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

import React from 'react'

type item = { label: string, nilai: string }

export default function HasilComponent({ data, langkah }: { data: item[], langkah: item[] }) {
    return (
        <div>
            <h1 className='font-bold text-xl mb-2'>Hasil Perhitungan</h1>
            {data.map((d, i) => (<p key={i} className='text-lg font-mono'>{d.label} : {d.nilai}</p>))}
            {langkah.map((e, i) => (
                <div className='bg-gray-50 rounded-md p-4 inset-shadow-sm ' key={i}>
                    <p className='text-lg font-normal'>{e.label} : </p>
                    <p>{e.nilai}</p>

                </div>
            ))}
        </div>
    )
}

import React from 'react'

interface langkah {
    label: string;
    nilai: string;
}

export default function Hpangkat1({ n, hasil }: { n: number, hasil: langkah[] }) {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-2">Hasil:</h1>


            <ul className="list-disc list-inside space-y-1">
                {hasil.map((item, index) => (
                    <li key={index}>{item.label}: {item.nilai}</li>
                ))}
            </ul>

        </div>
    )
}

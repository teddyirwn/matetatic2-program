import React from 'react'

interface Langkah {
    label: string;
    nilai: string;
}

export default function Hpangkat2({ n, hasil }: { n: number, hasil: Langkah[] }) {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-2">Hasil:</h1>
            <ul className="list-disc list-inside space-y-1">
                {hasil.map((i, e) => (
                    <li key={e}>{i.label}: {i.nilai}</li>))}
            </ul>
        </div>
    )
}

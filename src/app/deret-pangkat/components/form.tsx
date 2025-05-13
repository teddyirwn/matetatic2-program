import { useRouter } from 'next/navigation';
import React from 'react'

export default function FormComponent({ handleSubmit, setN, pangkat, setPangkat }:
    { handleSubmit: React.FormEventHandler, setN: any, pangkat: number, setPangkat: any }) {

    const router = useRouter();

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="m" className='block'>Input Nilai N</label>
                <input
                    type="number"
                    name='n'

                    onChange={(e) => setN(parseInt(e.target.value))}
                    className='border-gray-300 border w-full rounded-md p-2 focus:outline-0' required />
            </div>
            <div className="mb-3">
                <label htmlFor="" className='block'>Pilih Pangkat</label>
                <select name="pangkat" id="" value={pangkat} onChange={(e) => setPangkat(parseInt(e.target.value))} className='border-gray-300 border rounded-md p-2  focus:outline-0 w-full'>
                    <option value="-">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <button type='submit'
                className='p-2 bg-blue-500 rounded-md text-white w-full cursor-pointer hover:bg-blue-600 duration-200 ease-in-out'>Hitung</button>
            <button onClick={() => router.back()}
                className='p-2 bg-blue-500 rounded-md text-white  mt-4 w-full cursor-pointer hover:bg-blue-600 duration-200 ease-in-out'
            >Kembali</button>
        </form>
    )
}

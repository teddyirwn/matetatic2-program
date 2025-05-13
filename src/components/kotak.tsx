import Link from 'next/link'
import React from 'react'

export default function KotakComponent({ text, href, color }: { text: string, href: string, color?: string }) {
    return (
        <Link href={href}>
            <div className="rounded-md shadow p-2 w-40 h-40 text-center py-10 hover:scale-105 duration-300 ">
                <p className="text-xl font-semibold">{text}</p>
            </div>
        </Link>
    )
}

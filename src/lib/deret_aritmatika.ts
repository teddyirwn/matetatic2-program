interface type {
    u1: number;
    n1: number;
    u2: number;
    n2: number;
    un: number;
}

export function aritmatika({ n1, u1, n2, u2, un }: type) {
    // Menghitung beda (b)
    const b = (u2 - u1) / (n2 - n1);

    // Menghitung suku pertama (a)
    const a = u1 - (n1 - 1) * b;

    // Menghitung suku ke-un (Un)
    const Un = a + (un - 1) * b;

    // Menghitung jumlah n suku pertama (Sn)
    const Sn = (un / 2) * (2 * a + (un - 1) * b);

    const hasil = [
        { label: "Suku pertama (a)", nilai: `${a}` },
        { label: "Beda (b)", nilai: `${b}` },
        { label: `Suku ke-${un}`, nilai: `${Un}` },
        { label: `Jumlah ${un} suku pertama (Sn)`, nilai: `${Sn}` },
    ];

    const langkah = [
        {
            label: "Langkah hitung a (Suku pertama)",
            nilai: `a = u1 - (n1 - 1) * b = ${u1} - (${n1} - 1) * ${b} = ${a}`
        },
        {
            label: "Langkah hitung b (Beda antar suku)",
            nilai: `b = (u2 - u1) / (n2 - n1) = (${u2} - ${u1}) / (${n2} - ${n1}) = ${b}`
        },
        {
            label: `Langkah hitung Un (Suku ke-${un})`,
            nilai: `Un = a + (un - 1) * b = ${a} + (${un} - 1) * ${b} = ${Un}`
        },
        {
            label: `Langkah hitung Sn (Jumlah ${un} suku pertama)`,
            nilai: `Sn = un / 2 * (2a + (un - 1) * b) = ${un} / 2 * (2 * ${a} + (${un} - 1) * ${b}) = ${Sn}`
        }
    ];

    return { hasil, langkah };
}

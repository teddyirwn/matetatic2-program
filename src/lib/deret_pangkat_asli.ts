// Jumlah pangkat 1: 1 + 2 + 3 + ... + n
export function pangkat1(n: number) {
    const hasil = (n * (n + 1)) / 2;
    const data = [
        { label: 'Rumus', nilai: 'Jumlah = (n × (n + 1)) / 2' },
        { label: 'Substitusi', nilai: `= (${n} × (${n} + 1)) / 2` },
        { label: 'Langkah 1', nilai: `= (${n} × ${n + 1}) / 2` },
        { label: 'Langkah 2', nilai: `= ${n * (n + 1)} / 2` },
        { label: 'Langkah 3', nilai: `= ${hasil}` },
        { label: 'Hasil', nilai: `Jumlah ${n} bilangan asli pertama adalah ${hasil}` },
    ];
    return data;
}

// Jumlah pangkat 2: 1² + 2² + 3² + ... + n²
export function pangkat2(n: number) {
    const hasil = (n * (n + 1) * (2 * n + 1)) / 6;
    const data = [
        { label: 'Rumus', nilai: 'Jumlah = (n × (n + 1) × (2n + 1)) / 6' },
        { label: 'Substitusi', nilai: `= (${n} × (${n} + 1) × (2 × ${n} + 1)) / 6` },
        { label: 'Langkah 1', nilai: `= (${n} × ${n + 1} × ${2 * n + 1}) / 6` },
        { label: 'Langkah 2', nilai: `= ${(n * (n + 1))} × ${2 * n + 1} = ${(n * (n + 1)) * (2 * n + 1)}` },
        { label: 'Langkah 3', nilai: `= ${(n * (n + 1) * (2 * n + 1))} / 6` },
        { label: 'Langkah 4', nilai: `= ${hasil}` },
        { label: 'Hasil', nilai: `Jumlah kuadrat dari ${n} bilangan asli pertama adalah ${hasil}` },
    ];
    return data;
}

export function pangkat3(n: number) {
    const bagianDalam = (n * (n + 1)) / 2;
    const hasil = bagianDalam ** 2;

    const data = [
        { label: 'Rumus', nilai: 'Jumlah = ((n × (n + 1)) / 2)²' },
        { label: 'Substitusi', nilai: `= ((${n} × (${n} + 1)) / 2)²` },
        { label: 'Langkah 1', nilai: `= (${n} × ${n + 1}) / 2 = ${n * (n + 1)} / 2` },
        { label: 'Langkah 2', nilai: `= ${bagianDalam} → kuadratkan hasilnya` },
        { label: 'Langkah 3', nilai: `= (${bagianDalam})² = ${hasil}` },
        { label: 'Hasil', nilai: `Jumlah kubik dari ${n} bilangan asli pertama adalah ${hasil}` },
    ];
    return data;
}

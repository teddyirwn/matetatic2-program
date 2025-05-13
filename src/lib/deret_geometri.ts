interface GeometriInput {
    u1: string;
    n1: number;
    u2: string;
    n2: number;
    nTarget: number;
    nMulai?: number;
    nAkhir?: number;
}

interface HasilItem {
    label: string;
    nilai: string;
}

export function geometriLengkap({
    u1, n1, u2, n2, nTarget, nMulai, nAkhir
}: GeometriInput): { hasil: HasilItem[], langkah: HasilItem[] } {
    // Fungsi untuk mengonversi pecahan ke dalam bentuk angka
    const parseFraction = (value: string): number => {
        value = value.trim();
        if (value.includes("/")) {
            const [numStr, denStr] = value.split("/");
            const num = parseFloat(numStr);
            const den = parseFloat(denStr);
            if (!isNaN(num) && !isNaN(den) && den !== 0) {
                return num / den;
            } else throw new Error("Pecahan tidak valid");
        }
        const parsed = parseFloat(value);
        if (isNaN(parsed)) throw new Error("Angka tidak valid");
        return parsed;
    };

    // Parsing nilai u1 dan u2
    const _u1 = parseFraction(u1);
    const _u2 = parseFraction(u2);

    // Menghitung rasio (r) dengan rumus
    const pangkatR = n2 - n1;
    const r = Math.pow(_u2 / _u1, 1 / pangkatR);

    // Menghitung suku pertama (a)
    const a = _u1 / Math.pow(r, n1 - 1);

    // Menghitung suku ke-nTarget (Un)
    const Un = a * Math.pow(r, nTarget - 1);

    // Menghitung jumlah n suku pertama (Sn)
    const Sn = a * (1 - Math.pow(r, nTarget)) / (1 - r);

    // Menyusun hasil
    const hasil: HasilItem[] = [
        { label: "Suku pertama (a)", nilai: `${a}` },
        { label: "Rasio (r)", nilai: `${r}` },
        { label: `Suku ke-${nTarget}`, nilai: `${Un}` },
        { label: `Jumlah ${nTarget} suku pertama (Sn)`, nilai: `${Sn}` }
    ];

    // Menyusun langkah-langkah perhitungan
    const langkah: HasilItem[] = [
        {
            label: "Langkah hitung r (Rasio)",
            nilai: `r = (${_u2} / ${_u1})^(1 / (${n2} - ${n1})) = ${r}`
        },
        {
            label: "Langkah hitung a (Suku pertama)",
            nilai: `a = ${_u1} / (${r}^(${n1 - 1})) = ${a}`
        },
        {
            label: `Langkah hitung Un (Suku ke-${nTarget})`,
            nilai: `Un = a * r^(${nTarget - 1}) = ${a} * ${r}^${nTarget - 1} = ${Un}`
        },
        {
            label: `Langkah hitung Sn (Jumlah ${nTarget} suku pertama)`,
            nilai: `Sn = a * (1 - r^n) / (1 - r) = ${a} * (1 - ${Math.pow(r, nTarget)}) / (1 - ${r}) = ${Sn}`
        }
    ];

    // Menghitung jumlah suku dari nMulai hingga nAkhir jika diberikan
    if (nMulai !== undefined && nAkhir !== undefined) {
        const S_awalMinus1 = a * (1 - Math.pow(r, nMulai - 1)) / (1 - r);
        const S_akhir = a * (1 - Math.pow(r, nAkhir)) / (1 - r);
        const jumlahRange = S_akhir - S_awalMinus1;

        hasil.push({ label: `Jumlah suku ke-${nMulai} s/d ke-${nAkhir}`, nilai: `${jumlahRange}` });

        langkah.push({
            label: `Jumlah suku ke-${nMulai} s/d ke-${nAkhir}`,
            nilai: `S${nAkhir} - S${nMulai - 1} = ${S_akhir} - ${S_awalMinus1} = ${jumlahRange}`
        });
    }

    return { hasil, langkah };
}

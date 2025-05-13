export interface TakHinggaInput {
    u1: string;
    u2: string;
    n1: number;
    n2: number;
}

export function takhingga({ u1, u2, n1, n2 }: TakHinggaInput) {
    const parseFraction = (value: string): number => {
        value = value.trim();
        if (value.includes("/")) {
            const [numStr, denStr] = value.split("/");
            const num = parseFloat(numStr);
            const den = parseFloat(denStr);
            if (!isNaN(num) && !isNaN(den) && den !== 0) {
                return num / den;
            } else {
                throw new Error("Pecahan tidak valid");
            }
        }
        const parsed = parseFloat(value);
        if (isNaN(parsed)) throw new Error("Angka tidak valid");
        return parsed;
    };

    try {
        const u1num = parseFraction(u1);
        const u2num = parseFraction(u2);
        const n1num = Number(n1);
        const n2num = Number(n2);

        const pangkatR = n2num - n1num;
        const r = Math.pow(u2num / u1num, 1 / pangkatR);

        if (r <= -1 || r >= 1) {
            return {
                hasil: [
                    {
                        label: "Hasil",
                        nilai: "Rasio r tidak memenuhi syarat (-1 < r < 1)",
                    },
                ],
                langkah: [],
            };
        }

        const a = u1num / Math.pow(r, n1num - 1);
        const S_infinity = a / (1 - r);

        const hasil = [
            { label: "Suku pertama (a)", nilai: `${a}` },
            { label: "Rasio (r)", nilai: `${r}` },
            { label: "Jumlah tak hingga (S∞)", nilai: `${S_infinity}` },
        ];

        const langkah = [
            {
                label: "Langkah 1 - Menentukan Rasio (r)",
                nilai: `Gunakan rumus r = (U₂ / U₁)^(1 / (n₂ - n₁))\n⇒ r = (${u2num} / ${u1num})^(1 / (${n2num} - ${n1num})) = ${r}`,
            },
            {
                label: "Langkah 2 - Menghitung Suku Pertama (a)",
                nilai: `Gunakan rumus Uₙ = a × rⁿ⁻¹ ⇒ a = Uₙ / rⁿ⁻¹\n⇒ a = ${u1num} / (${r})^(${n1num - 1}) = ${a}`,
            },
            {
                label: "Langkah 3 - Menghitung Jumlah Tak Hingga (S∞)",
                nilai: `Gunakan rumus S∞ = a / (1 - r)\n⇒ S∞ = ${a} / (1 - ${r}) = ${S_infinity}`,
            },

        ];

        return { hasil, langkah };
    } catch (err) {
        const message = err instanceof Error ? err.message : "Terjadi kesalahan";
        return {
            hasil: [{ label: "Error", nilai: message }],
            langkah: [],
        };
    }
}

import KotakComponent from "@/components/kotak";

export default function Home() {
  const kotak = [
    {
      text: "Deret Aritmatika",
      href: "/deret-aritmatika",
    },
    {
      text: "Deret Geometri",
      href: "/deret-geometri",
    },
    {
      text: "Deret Pangkat dari Bilangan Asli",
      href: "/deret-pangkat",
    },
    {
      text: "Deret Tak Hingga",
      href: "/deret-tak-hingga",
    },
  ]

  return (

    <div className=" max-w-full  h-screen flex items-center justify-center flex-col ">
      <h1 className="text-4xl md:text-5xl font-extrabold w-1/2  text-center font-mono">Kalkulator Matematika</h1>
      <div className="grid grid-cols-2 gap-4  mt-8">
        {kotak.map((e, i) => (
          <KotakComponent key={i} text={e.text} href={e.href} />
        ))}

      </div>
    </div>
  );
}

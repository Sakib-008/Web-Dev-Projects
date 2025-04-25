import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="px-32 text-center">
            This is the most straightforward URL Shortner in the world. Most of the URL shortner will track you or ask you to give yours details for login. We understands your needs and hence we have created this URL shortner
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="An image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}

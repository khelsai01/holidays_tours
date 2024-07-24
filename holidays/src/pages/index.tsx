/* eslint-disable @next/next/no-img-element */

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <nav className="flex flex-row justify-between items-center p-2 h-16 shadow-lg ">
        <h2 className="p-2 text-2xl sm:text-4xl  font-bold text-blue-800 hover:text-blue-300 hover:scale-105 duration-500">
          Holidays
        </h2>
        <div >
          <button className="bg-violet-400 p-2 px-4 rounded-lg text-xl font-semibold text-white hover:text-blue-200 hover:scale-105 duration-500">
            {"Login"}
          </button>
        </div>
      </nav>
      <div
        className={`flex min-h-screen flex-col items-center 
      justify-center p-2 ${inter.className}`}
      >
        <Link
          href={"/tours"}
          className="relative group overflow-hidden cursor-pointer"
        >
          <img
            src="https://d3iso9mq9tb10q.cloudfront.net/wysiwyg/newyork/01-city-landing/New-York-Skyline-Big-Bus-Tours-Dec-2016.jpg"
            alt="holidays"
            className="border-8 border-violet-200 rounded-lg"
          />
          

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-lg border-8 border-orange-400">
            <div className="text-center text-white">
              <h2 className="text-xl sm:text-3xl font-bold">
                Holidays package
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

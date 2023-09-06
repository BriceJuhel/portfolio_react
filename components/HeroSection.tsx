"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Bonjour :)</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
           Je suis{" "}
            <span className="font-semibold text-teal-600">
              développeur web{" "}
            </span>
            et actuellement à la recherche d&apos;un nouveau poste, en front-end et/ou en back-end. Vous trouverez sur cette page les différents projets sur lesquels j&apos;ai travaillé, j&apos;espère que vous les apprécierez :)
          </p>
          <a
            href="/cv-brice-juhel.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:cursor-pointer"
            download="CV Brice Juhel.pdf"
          >
            Téléchargez mon CV
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={50} />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

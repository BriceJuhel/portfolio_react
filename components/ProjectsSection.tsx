import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Breizh Littoral",
    description:
      "Projet de fin d'étude réalisé en équipe, un site qui recense les spots de sports nautiques en Bretagne. Réalisé avec React pour le front et Symfony pour le back.",
    image: "/bzhlittoral.png",
    github: "https://github.com/orgs/O-clock-Photon-Proton-Apotheose/teams/team-16-breizh-littoral/repositories",
    link: "http://breizh-littoral.surge.sh/",
  },
  {
    name: "Pokédex",
    description:
      "Pokédex réalisé avec React, NextJS, et Tailwind CSS. L'API utilisée est Pokebuild. J'ai également ajouté un jeu où l'on doit deviner des pokémons choisis aléatoirement.",
    image: "/pokedex.png",
    github: "https://github.com/BriceJuhel/pokedex",
    link: "https://bricejuhel-pokedex.vercel.app/",
  },
  {
    name: "App Météo",
    description:
      "App météo en cours de construction, elle permet pour le moment de voir le temps qu'il fait en ce moment dans la ville recherchée. Réalisé avec React et l'API Open Weather.",
    image: "/app-meteo.png",
    github: "https://github.com/BriceJuhel/app-meteo",
    link: "https://bricejuhel-app-meteo.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projets
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1500}
                        height={1500}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection

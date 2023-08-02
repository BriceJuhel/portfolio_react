import React from "react"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Bootstrap" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.JS" },
  { skill: "PHP" },
  { skill: "Symfony" },  
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Mon parcours
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">

            <p>
              Après une expérience de 12 années dans le commerce et le management, ma passion pour l&apos;informatique m&apos;a rattrapée et j&apos;ai décidé de me reconvertir depuis septembre 2022.
              </p>
              <br />
            <p>
              Grâce à une transition professionnelle, j&apos;ai effectué une formation intense de 6 mois avec l&apos;école O&apos;Clock, ce qui m&apos;a permis d&apos;acquérir des bases solides en HTML/CSS, JavaScript et PHP.
              Pendant cette formation, je me suis spécialisé sur le framework Symfony.
              </p>
              <p>
              Lors du dernier mois de cette formation nous avons réalisé par équipe de cinq un projet de A à Z. Le notre s&apos;appelle Breizh Littoral et vous pouvez trouver le lien dans mes projets. J&apos;ai d&apos;ailleurs eu le rôle de Scrum Master tout au long de ce projet.
            </p>
            <p>
              Pour finir, j&apos;ai passé l&apos;examen du titre professionnel de développeur web et web mobile fin juillet 2023 et je suis en attente des résultats.
            </p>
            <br />
            <p>
              Depuis je continue chaque jour à apprendre pour approfondir mes connaissances et je recherche activement un nouveau poste sur Nantes, Angers, ou en full-remote. Je suis disponible dès que possible.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mes technos</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

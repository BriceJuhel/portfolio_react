import {
    AiOutlineGithub,
    AiOutlineLinkedin,
  } from "react-icons/ai"

const ProjectsSection = () => {
    return (
      <section id="contact">
        <h1 className="my-20 text-center font-bold text-4xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
    <div>
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-neutral-400">Adresse Email</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-neutral-400" >juhel.brice@gmail.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-neutral-400">Numéro de téléphone</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-neutral-400">06 68 75 29 19</dd>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">            
            <a  href="https://www.linkedin.com/in/brice-juhel" rel="noreferrer" target="_blank">
                <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={100}
                />
            </a>
            <a href="https://github.com/BriceJuhel" rel="noreferrer" target="_blank">
                <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={100}
                />
            </a>
            </div>
            </dl>
        </div>
    </div>
      </section>
    )
  }
  
  export default ProjectsSection

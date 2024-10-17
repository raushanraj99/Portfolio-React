import { Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectsData from "./Project data/project.json";
import profileImage from "@/assets/profile-img.jpeg";
import Particles from "@/components/ui/particles";
import { achievementData, SkillsData, slugsHome } from "@/Constants/Constant";
import WordPullUp from "@/components/ui/word-pull-up";
import aboutImage from "@/assets/aboutimage.png";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import IconCloud from "@/components/ui/icon-cloud";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1F2531] text-gray-200">
    
      <main className="container-fluid mx-auto py-8">
        {/* Home Section */}
        <Particles
          className="absolute inset-0"
          quantity={120}
          ease={80}
          color="#C0DB11"
          size={1.4}
          refresh
        />
        
        <section
          id="home"
          className="mb-16 flex flex-col md:flex-row items-center justify-between md:min-h-[80vh]"
        >
          <div className="md:w-1/2">
            <img
              src={profileImage}
              alt="Raushan Raj"
              className="rounded-full h-[65%] md:h-[50%] w-[65%] md:w-[50%]  mx-auto border-2 border-y-[#C0DB11] outline-dotted shadow-md mt-10"
            />
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="md:text-[5vw] text-4xl font-bold mb-4 text-white md:mt-0 mt-8 text-center md:text-left">
              Raushan Raj
            </h2>
            <p className="md:text-[2vw] text-xl leading-tight md:w-[60%] w-full tracking-widest pt-2 mb-4 text-[#C0DB11] text-center md:text-left">
              MERN STACK || PYTHON <br />
              Software Developer
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mb-16 md:pt-10 pt-2 flex md:flex-row flex-col"
        >
          <Card className="bg-[#1F2531] border-[#1F2531] md:w-1/2 w-full border-none shadow-none">
            <CardContent className="p-6">
              <h2 className="md:text-6xl text-4xl font-bold mb-4 text-white">
                About me
              </h2>
              <p className="mb-4 md:pt-8 pt-3 leading-relaxed text-white text-xl text-justify">
                I'm a student passionate about web development and Python,
                currently studying at Haldia Institute of Technology for a
                B.Tech in Computer Science. I love working on various projects.
                From making coffee orders with hand gestures to leading a team
                in building a cool web app, I enjoy blending creativity with
                tech skills. I've won in the Lakshya bot race and participated
                in overnight hackathons in the college fest. Let's explore the
                fun side of coding and creativity together!
              </p>
              <a href="https://drive.google.com/file/d/1uIQGzUa7fsrXD6SXwpBIFuyUDLFI5X8d" className="w-1/3 min-w-max" target="_blank">
              <Button className="bg-[#C0DB11] text-black font-normal rounded-none py-7 px-8 text-lg md:mt-8 mt-0 hover:bg-[#c4d841] hover:scale-105 shadow-md transition-all ease-in-out duration-700 hover:shadow-[#C0DB11] hover:text-black ">
                Download Resume
              </Button>
              </a>
            </CardContent>
          </Card>

          <Card className=" bg-[#1F2531] border-none md:w-1/2 w-full flex justify-center items-center align-middle shadow-none">
            <img
              src={aboutImage}
              alt="Raushan Raj"
              className=" h-[90%] border-b-2 border-[#C0DB11] drop-shadow-[0_0px_2px_rgba(196,216,65,0.5)]"
            />
          </Card>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="mb-16 md:pt-10 pt-2 flex md:flex-row flex-col shadow-none"
        >
          <Card className="bg-[#1F2531]  border-none md:w-1/2 w-full shadow-none ">
            <CardContent className="p-6">
              <WordPullUp
                className="md:text-6xl text-4xl font-bold mb-4 text-white text-left shadow-none"
                words="Skills"
              />
              {SkillsData.map((category, index) => (
                <div key={index} className="mb-6 last:mb-0 md:ms-8 ms-0">
                  <li className="text-2xl font-semibold mb-2 text-white">
                    {category.title}
                  </li>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-[#C0DB11] px-[2%] text-black font-medium py-2 hover:bg-[#92a131]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className=" bg-[#1F2531] border-none md:w-1/2 w-full shadow-none">
            <IconCloud iconSlugs={slugsHome} />
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <Card className="bg-[#1F2531] border-none ">
            <CardContent className="p-6">
              <WordPullUp
                className="md:text-6xl text-4xl font-bold mb-4 text-white text-left"
                words="Projects"
              />
                  
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:mt-10 mt-5">
                {projectsData.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-[#2A3441] border-gray-600 rounded-none flex flex-col justify-between"
                  >
                    <CardHeader>
                      <a href={project.liveUrl}>
                        {/*replace the url with live url  */}

                        <CardTitle className="text-white flex flex-row justify-between outline-none">
                        <HoverCard>
                    <HoverCardTrigger>
                      
                      {project.title}
                    </HoverCardTrigger>
                    <HoverCardContent className="w-72 h-96 bg-gray-700">
                      <iframe
                        className="h-full w-full"
                        src={project.liveUrl}
                      ></iframe>
                    </HoverCardContent>
                  </HoverCard>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            title={`${project.live ? `Live` : "See GitHub"}`}
                            className={`h-3 w-3 ${
                              project.live ? `bg-green-500` : `bg-red-500`
                            }  outline-none rounded-lg `}
                          ></a>
                        </CardTitle>
                      </a>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4  outline-none">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="outline-none bg-[#191f28] text-[#9ec534] hover:bg-[#0f132b] cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <a href={project.githubUrl} target="_blank">
                        <Button
                          variant="outline"
                          className="w-full bg-[#C0DB11] text-[#0c0c2a] border-[#C0DB11] hover:bg-[#a4b333] hover:text-[#101025] before:ease relative h-12 overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-72"
                        >
                          <Github className="mr-2 h-4 w-4" /> View on GitHub
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="mb-8 leading-relaxed text-gray-300 md:text-center md:w-[80%] w-full text-justify mx-auto mt-10">
                My journey in web development began during my first year of
                college, where I initially explored the MERN stack through
                structured courses. However, I soon realized that with the
                constant updates and deprecations in the tech landscape,
                documentation became my primary learning tool. I believe that
                staying up-to-date through official documentation is the most
                reliable way to master web development. Along the way, I refined
                my MERN stack expertise, deepened my Python skills through NPTEL
                courses, and gained significant Linux proficiency through
                training with Linux World Pvt. Ltd. This approach has allowed me
                to continuously evolve as a developer, combining formal
                education with self-driven exploration.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Achievement Section */}
        <section id="achievement" className="mb-16 ">
          <h2 className="text-3xl font-bold mb-4 text-white">Achievement</h2>
          <Card className="bg-[#2A3441] border-gray-700">
            <CardContent className="p-6">
              <ul className="space-y-4 ">
                {achievementData.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start flex-row justify-between"
                  >
                    <span className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-[#C0DB11]  mt-1" />
                      <div className="text-gray-300">{achievement.content}</div>
                    </span>
                    <span className="flex items-end text-gray-300">
                      {achievement.year}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/achievements">
                <Button
                  variant="link"
                  className="mt-4 text-[#C0DB11] hover:text-blue-300 "
                >
                  See in details <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Internship Section */}
        <section id="internship" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Internship</h2>
          <Card className="bg-[#2A3441] border-gray-700">
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  "Full stack Intern at anamarhs Web Solution.",
                  "Cloud Computing Training and Internship at Linux world PVT LTD.",
                  "PWC Online Cloud and Digital Launchpad Programm for 5 months"
                ].map((internship, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-[#C0DB11] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{internship}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

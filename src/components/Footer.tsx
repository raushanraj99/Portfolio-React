import { contactIcon } from "@/Constants/Constant";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";
interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
}

const username: string = "raushanraj99";

function Footer() {
  const [repos, setRepos] = useState<Repo[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repo[] = await response.json(); 
        setRepos(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []); 

  const totalStars = repos.reduce(
    (acc, repo) => acc + repo.stargazers_count,
    0
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <footer className="bg-[#2A3441] text-white py-10 rounded-xl p-3">
      <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-0">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="self-center text-2xl text-[#C0DB11] font-semibold whitespace-nowrap dark:text-white">
                PORTFOLIO
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#dad9d9] uppercase">
                Follow me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <a
                        target="_blank"
                        href="https://github.com/raushanraj99"
                        className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                      >
                        Github
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-gray-700">
                      <div className="text-[#C0DB11]">
                        <h1 className="font-bold text-center ">GitHub Info</h1>
                        <h1>Username: {username}</h1>
                        <p>Total Repos: {repos.length}</p>
                        <p>Total Stars: {totalStars}</p>
                      </div>
                     
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                    <HoverCard>
                      <HoverCardTrigger>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/__raushan_raj"
                          className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                        >
                          Instagram
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-72 h-96 bg-gray-700">
                        <iframe
                          className="h-full w-full"
                          src="https://www.instagram.com/__raushan_raj/embed/"
                        ></iframe>
                      </HoverCardContent>
                    </HoverCard>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#dad9d9] uppercase">
                Checkout
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                  target="_blank"
                    href="https://medium.com/@raushanraj9950"
                    className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/raushan-raj-devp/"
                    className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#dad9d9] uppercase">
                Connect me
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="mailto:raushanraj9950@gmail.com"
                    className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                  >
                    Gmail
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://wa.me/8540959950"
                    className="hover:underline hover:underline-offset-2 decoration-[#C0DB11]"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-xl text-gray-500 sm:text-center text-center md:mt-0 mt-3 place-items-center dark:text-gray-400  font-light ">
            raushanraj9950@gmail.com
          </div>
          <div className="flex flex-row mt-4 sm:justify-center justify-center items-center align-middle sm:mt-0">
            {contactIcon.map((Icon, index) => (
              <a
                key={index}
                href={Icon.url}
                target="_blank"
                className="text-[#c0db11d7] w-4 h-4 hover:text-[#c0db11d7] transition-colors duration-200 dark:hover:text-white mx-4"
              >
                <Icon.icons />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    // </footer>
  );
}

export default Footer;

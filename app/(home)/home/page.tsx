"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { register } from "module";
import toast from "react-hot-toast";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation("common");

  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const response = await axios.get("/api/clubs");
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    }

    fetchClubs();
  }, []);

  console.log("the clubs are ", clubs);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  console.log("the events are ", events);

  return (
    <div>
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg lg:mx-12 lg:order-2">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {t("Technical Club Nit Uk")}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Welcome to [College Name] Tech Clubs! We are a vibrant community
              of students passionate about technology and innovation. Our club
              aims to foster creativity, collaboration, and learning
              opportunities in various fields of technology.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
              >
                Explore the clubs now.
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="/tech2.png"
            alt="apple watch photo"
          />
        </div>
      </div>

      <section>
        <h1 className="font-extrabold text-gray-700 md:text-3xl text-center lg:text-6xl pt-16 ">
          Explore the Clubs Now !
        </h1>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {clubs.map((club) => (
              <div className="p-6">
                <img
                  className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src={club?.image || "/web.webp"}
                  alt="blog"
                />
                <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  {club.name}
                </h2>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl ">
                  {club.description.substr(0, 100)}...
                </h1>

                <div className="mt-4">
                  <Button>Register</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h1 className="font-extrabold text-gray-700 md:text-3xl text-center lg:text-6xl pt-16 ">
          Explore the Events Now !
        </h1>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {events.map((club) => (
              <div className="p-6">
                <img
                  className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src="/mobile.jpg"
                  alt="blog"
                />
                <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  {club.name}
                </h2>
                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl ">
                  {club.description.substr(0, 100)}...
                </h1>

                <div className="mt-4">
                  <Button>Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Hero /> */}
    </div>
  );
}

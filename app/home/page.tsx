import { InitialProfile } from "@/lib/initial-profile";
import { redirectToSignIn } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "../components/hero";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export default async function Home() {

    const user = await currentProfile();

    if(!user){
        return redirectToSignIn()
    }


    const register = async (event: any) => {
        await db.user.update({
            where: {
                userId: user.id
            },
            data: {
                clubName: event
            }
        })

        console.log('Registered for the club')
    // toast.success('Registered for the club')
    }


  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center p-6 mx-auto">
            <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
              <a
                href=""
                className="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6"
              >
                home
              </a>

              <a
                href="/about"
                className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
              >
                about
              </a>
              <a
                href="#"
                className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"
              >
                contact
              </a>
            </div>
          </div>
        </nav>

        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Technical Club Nit Uk
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
              src="/tech.jpg"
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>

      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src="/about.avif"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Web Development Club
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                : Focuses on building websites, including frontend and backend
                development, web design principles, and web technologies like
                HTML, CSS, JavaScript, and frameworks like React, Angular, or
                Vue.js.
              </h1>

              <div className="mt-4">
                <button onClick={register} className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    Register
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src="/about.avif"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                Mobile App Development Club
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Concentrates on creating mobile applications for iOS, Android,
                or cross-platform using technologies such as Swift, Kotlin,
                Java, Flutter, or React Native.
              </h1>

              <div className="mt-4">
                <button onClick={register} className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    Register
                </button>
              </div>
            </div>
            <div className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src="/about.avif"
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                UI/UX Design Club:
              </h2>
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Explores user interface (UI) and user experience (UX) design
                principles, tools like Adobe XD, Figma, or Sketch, and conducts
                workshops on wireframing, prototyping, and usability testing.
              </h1>

              <div className="mt-4">
                <button onClick={register} className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600">
                    Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Hero /> */}
    </div>
  );
}
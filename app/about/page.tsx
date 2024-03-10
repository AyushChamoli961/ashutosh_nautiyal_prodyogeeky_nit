import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div>
        <main>
          <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh",
            }}
          >
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/about.avif')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-center">
                  <div className="md:pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Welcome to Nit uk Tech Club!
                    </h1>
                    <p className="mt-4 text-xl   text-gray-300">
                      We are a vibrant community of students passionate about
                      technology and innovation. Our club aims to foster
                      creativity, collaboration, and learning opportunities in
                      various fields of technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>

          <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black bg-purple-100 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full font-bold ">
                        <h1>1</h1>
                      </div>
                      <h6 className="text-xl font-semibold">Our Vision</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Established with the mission to empower students with
                        practical skills and knowledge, our club hosts a diverse
                        range of activities, including workshops, hackathons,
                        coding competitions, tech talks, and networking events.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="font-bold p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-100 ">
                        2
                      </div>
                      <h6 className="text-xl font-semibold">Our Mission</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        Whether youre a seasoned developer or just starting
                        your journey in the tech world, theres something for
                        everyone at [College Name] Tech Clubs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg ">
                    <div className="px-4 py-5 flex-auto">
                      <div className="font-bold  p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-100">
                        3
                      </div>
                      <h6 className="text-xl font-semibold">Our Values</h6>
                      <p className="mt-2 mb-4 text-gray-600">
                        We are committed to transparency and honesty, creating a
                        safe space for students to share their experiences and
                        insights. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Deleniti incidunt ration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center mt-32">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <h3 className="text-3xl  text-gray-700 mb-2 font-semibold leading-normal">
                    Who are we ?
                  </h3>

                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    Our dedicated team of volunteers, comprised of students from
                    different majors and backgrounds, work tirelessly to
                    organize engaging events and provide resources to support
                    your learning and growth. We believe in the power of
                    community and strive to create an inclusive environment
                    where everyone feels welcome to explore and innovate. Join
                    us on this exciting journey as we explore the latest trends
                    in technology, collaborate on projects, and connect with
                    like-minded individuals. Together, lets make a difference
                    and shape the future of technology!
                  </p>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <img
                    alt="..."
                    src="/about.avif"
                    className="w-full align-middle rounded-t-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;

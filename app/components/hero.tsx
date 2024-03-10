import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <>
      <Container className=" w-[90%] flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl text font-bold leading-snug tracking-tight text-[#EE8A27] lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              Welcome to Blissful Life : Nurturing Holistic Well-Being
            </h1>

            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Blissful Life is a radiant facet of the Sadhguru Sri Sivananda
              Nandanam Foundation, a non-profit organization dedicated to
              fostering holistic health, education, and training. Our mission is
              simple yet profound: to guide individuals towards lives filled
              with tranquility, vitality, and enduring well-being.
              <br />
              <br />
              <span className="text-[#EE8A27]  font-semibold">
                Our Commitment:
              </span>{" "}
              At Blissful Life, we have made it our purpose to help you find
              balance in a world often filled with chaos. We offer a diverse
              spectrum of services in holistic health, education, and training,
              each designed to enrich your mind, body, and spirit.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#EE8A27] rounded-md "
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={"/img1.jpg"}
              width="616"
              height="617"
              className={"object-cover "}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;

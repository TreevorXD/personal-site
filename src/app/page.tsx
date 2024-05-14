'use client'
import React from "react";
import { Spacer, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Card, CardHeader, CardBody } from "@nextui-org/react";

// particles
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fffff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
if (init) {
  return (
    
    <main className="w-full">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <p className="font-bold text-inherit">Trevor</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="#projects">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="">Resume</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="block sm:hidden text-center py-4">
        <Link href="#projects">Projects</Link> |
        <Link href="#" aria-current="page">
          Customers
        </Link>{" "}
        | <Link href="#">Resume</Link>
      </div>

      <div
        style={{ fontFamily: "'Lexend', sans-serif", fontWeight: 800 }}
        className="pt-20 flex flex-col items-center text-center overflow-x-auto"
      >
        
        <div className="overflow-hidden w-2/3 rounded-lg" style={{ overflowX: "auto" }}>
          <h1 className="text-5xl pb-3">Articles</h1>
          <div className="flex w-2/3">
            <div className="flex-shrink-0 p-1 drop-shadow-2xl">
              <Card className="py-4 rounded-md outline-dashed hover:outline outline-offset-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Article Title</p>
                  <small className="text-default-500">Written By</small>
                  <h4 className="font-bold text-large">Article Author</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
            <Spacer x={4} />
            <div className="flex-shrink-0 p-1">
              <Card className="py-4 rounded-md outline-dashed hover:outline outline-offset-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Article Title</p>
                  <small className="text-default-500">Written By</small>
                  <h4 className="font-bold text-large">Article Author</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
            <Spacer x={4} />
            <div className="flex-shrink-0 p-1">
              <Card className="py-4 rounded-md outline-dashed hover:outline outline-offset-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Article Title</p>
                  <small className="text-default-500">Written By</small>
                  <h4 className="font-bold text-large">Article Author</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
            <Spacer x={4} />
            <div className="flex-shrink-0 p-1">
              <Card className="py-4 rounded-md outline-dashed hover:outline outline-offset-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Article Title</p>
                  <small className="text-default-500">Written By</small>
                  <h4 className="font-bold text-large">Article Author</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
            <Spacer x={4} />
            <div className="flex-shrink-0 p-1">
              <Card className="py-4 rounded-md outline-dashed hover:outline outline-offset-0">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Article Title</p>
                  <small className="text-default-500">Written By</small>
                  <h4 className="font-bold text-large">Article Author</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={270}
                  />
                </CardBody>
              </Card>
            </div>
            <Spacer x={4} />
          </div>

        </div>

        <div></div>
      </div>
    </main>
  );
}
}

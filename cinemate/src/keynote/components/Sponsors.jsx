import Image from "next/image";

import { Button, ButtonLink } from "./Button";
import { Container } from "./Container";
import backgroundImage from "../Imgs/background.jpg";

// import { Container } from '@/components/Container'
import logoLaravel from "../Imgs/logos/laravel.svg";
import logoMirage from "../Imgs/logos/laravel.svg";
import logoStatamic from "../Imgs/logos/laravel.svg";
import logoStaticKit from "../Imgs/logos/laravel.svg";
import logoTransistor from "../Imgs/logos/laravel.svg";
import logoTuple from "../Imgs/logos/laravel.svg";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-20 sm:py-32"
    >
      <h2 id="sponsors-title" className="sr-only">
        Sponsors
      </h2>
      <Container>
        <p className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsorships for our workshops and speakers.
        </p>
        <ul className="mt-20 flex flex-col items-center justify-center space-y-12 sm:flex-row sm:space-x-12 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-12">
          <li>
            <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">
              <li className="flex">
                <Image
                  src={logoTransistor}
                  alt="Transistor"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />
              </li>
              <li className="flex">
                <Image
                  src={logoStaticKit}
                  alt="StaticKit"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center space-y-12 sm:space-y-12 md:flex-row md:space-y-0 md:space-x-16 lg:space-x-32">
              <li className="flex">
                <Image
                  src={logoMirage}
                  alt="Mirage"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src={logoLaravel}
                  alt="Laravel"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src={logoStatamic}
                  alt="Statamic"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  );
}

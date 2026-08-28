"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const clients = [
  { name: "Dharma Nugraha", logo: "/LOGO DHARMA NUGRAHA.png" },
  { name: "Darra Medika", logo: "/LOGO DARRA MEDIKA PNG.png" }
];

const filledClients = Array.from({ length: 8 }, () => clients).flat();

export default function ClientsSection({ title }: { title: string }) {
  return (
    <section
      id="clients"
      className="overflow-hidden bg-white py-12 sm:py-16 md:py-20"
    >
      <Marquee
        speed={50}
        gradient
        gradientColor="white"
        gradientWidth={80}
        pauseOnHover
      >
        {filledClients.map((client, i) => (
          <div
            key={i}
            className="relative mx-6 h-16 w-40 sm:mx-12 sm:h-20 sm:w-48"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
              sizes="192px"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}

import { Metadata } from "next";

import { ExternalLink } from "@/components/ExternalLink";

import { DeskSetup } from "@/shared/content/setup/desk-setup";
import { SoftwareSetup } from "@/shared/content/setup/software";
import { TechnologySetup } from "@/shared/content/setup/technologies";

export const metadata: Metadata = {
  title: "Jon Deaves' setup and tech",
  description:
    "Jon Deaves is a Web Developer who makes things, usually with code and this is how he does it",
};

export default function Setup() {
  return (
    <>
      <h1>My setup</h1>

      <p className="lead">
        This is the hardware, comforts and technologies that I use.
      </p>

      <DeskSetup />
      <SoftwareSetup />
      <TechnologySetup />

      <p className="small spaced">
        This page was last updated on 7th February 2024 and was inspired by the
        person who made{" "}
        <ExternalLink href="https://nownownow.com/about" label="nownownow" />,
        see{" "}
        <ExternalLink href="https://sive.rs/uses" label="Derek Sivers page" />.
      </p>
    </>
  );
}

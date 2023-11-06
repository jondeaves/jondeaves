import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExperienceBlock from "./ExperienceBlock";
import { Experience } from "../../shared/types/Experience";

export default {
  title: "Components/ExperienceBlock",
  component: ExperienceBlock,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    experience: {
      description: "Object containg the Experience information",
      name: "Experience",
    },
  },
} as ComponentMeta<typeof ExperienceBlock>;

const experienceWithEndDateMock: Experience = {
  title: "Senior Software Engineer",
  company: "Company Inc",
  location: "Remote",
  startDate: "2011-01-01",
  endDate: "2021-12-31",
  highlights: [
    "Working with technology such as React, Storybook, Cypress and BuildKite",
    "Making pages of the web app look and function amazingly",
    "Putting particular focus within the area of accessibility",
  ],
  technologies: ["HTML", "CSS", "JavaScript", "React"],
};

const experienceWithoutEndDateMock = {
  ...experienceWithEndDateMock,
  endDate: undefined,
};

const experienceWithUrlMock = {
  ...experienceWithEndDateMock,
  url: "https://google.co.uk",
};

const experienceWithNoteMock = {
  ...experienceWithEndDateMock,
  note: "This is a note about the experience item",
};

const Template: ComponentStory<typeof ExperienceBlock> = (args) => (
  <ExperienceBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  experience: experienceWithEndDateMock,
};

export const WithoutEndDate = Template.bind({});
WithoutEndDate.args = {
  experience: experienceWithoutEndDateMock,
};

export const WithUrl = Template.bind({});
WithUrl.args = {
  experience: experienceWithUrlMock,
};

export const WithNote = Template.bind({});
WithNote.args = {
  experience: experienceWithNoteMock,
};

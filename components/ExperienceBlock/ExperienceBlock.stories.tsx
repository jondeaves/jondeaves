import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExperienceBlock from "./ExperienceBlock";

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

const experienceWithEndDateMock = {
  title: "Senior Software Engineer",
  company: "Company Inc",
  startDate: "2011-01-01",
  endDate: "2021-12-31",
  highlights: [
    "Working with technology such as React, Storybook, Cypress and BuildKite",
    "Making pages of the web app look and function amazingly",
    "Putting particular focus within the area of accessibility",
  ],
};

const experienceWithoutEndDateMock = {
  ...experienceWithEndDateMock,
  endDate: undefined,
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

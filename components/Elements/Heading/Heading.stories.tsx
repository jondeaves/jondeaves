import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "Elements/Heading",
  component: Heading,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    level: {
      description: "Level of heading from 1-6",
      name: "Level",
      options: [1, 2, 3, 4, 5, 6],
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  level: 3,
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      description: "Content that can be expanded/collapsed by the accordion",
      name: "Children",
    },
    summary: {
      description:
        "The title that can be clicked to expand/collapse the Children",
      name: "Summary",
    },
  },
} as ComponentMeta<typeof Accordion>;

const accordionContent = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc ipsum,
      tempus a quam at, congue dapibus nunc. Sed luctus rutrum mi vitae semper.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc ipsum,
      tempus a quam at, congue dapibus nunc. Sed luctus rutrum mi vitae semper.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc ipsum,
      tempus a quam at, congue dapibus nunc. Sed luctus rutrum mi vitae semper.
    </p>
  </div>
);

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  summary: "This is a summary",
  children: accordionContent,
};

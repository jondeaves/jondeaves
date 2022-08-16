import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExternalLink from "./ExternalLink";

export default {
  title: "Components/ExternalLink",
  component: ExternalLink,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    href: {
      description: "The URL being linked to",
      name: "Href",
    },
    label: {
      description: "The text that becomes interactable",
      name: "Label",
    },
  },
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "https://google.co.uk",
  label: "Google",
};

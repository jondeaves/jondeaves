import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BackToHomeLink from "./BackToHomeLink";

export default {
  title: "Components/BackToHomeLink",
  component: BackToHomeLink,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BackToHomeLink>;

const Template: ComponentStory<typeof BackToHomeLink> = () => (
  <BackToHomeLink />
);

export const Default = Template.bind({});

import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SkipToContent from "./SkipToContent";
import { within } from "@storybook/testing-library";

export default {
  title: "Components/SkipToContent",
  component: SkipToContent,
  parameters: {
    layout: "fullscreen",
    actions: {
      handles: ["click a"],
    },
  },
  argTypes: {
    label: {
      description: "The link text",
      name: "Label",
    },
    target: {
      description: "The link href value",
      name: "Target",
    },
  },
  decorators: [
    (Story) => {
      const [clicks, setClicks] = useState(0);
      return (
        <>
          <div
            onClick={(e) => {
              setClicks(clicks + 1);
              e.preventDefault();
            }}
          >
            <Story />
          </div>

          <p>Clicked Skip to content {clicks} times.</p>

          <p>
            To activate the skip to content module, ensure the inner canvas is
            active (click inside) and press the tab key, this will be done
            automatically on first load of the story.
          </p>
        </>
      );
    },
  ],
} as ComponentMeta<typeof SkipToContent>;

const Template: ComponentStory<typeof SkipToContent> = (args) => (
  <SkipToContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Skip to content",
  target: "#main",
};

Default.play = ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const skipToMainElement = canvas.getByText(args.label);
  skipToMainElement.focus();
};

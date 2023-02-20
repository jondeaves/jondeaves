import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <div>
      <h3>Item 1</h3>
      <p>This is the first item in the grid</p>
    </div>
    <div>
      <h3>Item 2</h3>
      <p>This is the second item in the grid</p>
    </div>
    <div>
      <h3>Item 3</h3>
      <p>This is the third item in the grid</p>
    </div>
    <div>
      <h3>Item 4</h3>
      <p>This is the fourth item in the grid</p>
    </div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};

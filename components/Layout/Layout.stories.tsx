import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isHomepage: {
      control: "boolean",
      description: "If true, the homepage variant will provide more text",
      name: "Homepage",
    },
  },
} as ComponentMeta<typeof Layout>;

const SampleContent = (
  <>
    <p>
      Porta lorem mollis aliquam ut porttitor leo a. Ornare quam viverra orci
      sagittis eu volutpat. Suspendisse interdum consectetur libero id faucibus.
      Dictumst quisque sagittis purus sit amet. At imperdiet dui accumsan sit.
      Vel facilisis volutpat est velit egestas dui id ornare. In nulla posuere
      sollicitudin aliquam ultrices sagittis orci a. Tempor commodo ullamcorper
      a lacus vestibulum sed arcu. In nibh mauris cursus mattis molestie a.
      Ultrices neque ornare aenean euismod elementum nisi. Ultrices sagittis
      orci a scelerisque purus semper eget duis. Nunc id cursus metus aliquam
      eleifend mi. Facilisis mauris sit amet massa vitae tortor condimentum
      lacinia. Curabitur vitae nunc sed velit dignissim sodales ut. Enim ut
      tellus elementum sagittis vitae et leo.
    </p>

    <p>
      Non quam lacus suspendisse faucibus. Pretium nibh ipsum consequat nisl vel
      pretium lectus quam. Amet nisl suscipit adipiscing bibendum est ultricies.
      Enim neque volutpat ac tincidunt vitae semper quis. Egestas fringilla
      phasellus faucibus scelerisque eleifend. Nibh cras pulvinar mattis nunc
      sed blandit. Blandit volutpat maecenas volutpat blandit aliquam. Amet
      risus nullam eget felis eget nunc. Eu ultrices vitae auctor eu augue ut
      lectus arcu bibendum. Turpis massa sed elementum tempus egestas sed sed.
      Imperdiet nulla malesuada pellentesque elit eget.
    </p>
  </>
);

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>{SampleContent}</Layout>
);

export const Default = Template.bind({});
Default.args = {
  isHomepage: false,
};


export const HomePage = Template.bind({});
HomePage.args = {
  isHomepage: true,
};

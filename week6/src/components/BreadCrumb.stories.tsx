import {ComponentMeta, ComponentStory} from "@storybook/react";
import BreadCrumb from "./BreadCrumb";

export default {
  title: "BreadCrumb",
  component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
  <BreadCrumb {...args} />
);

export const Primary = Template.bind({});
Primary.args = {label: "Home"};

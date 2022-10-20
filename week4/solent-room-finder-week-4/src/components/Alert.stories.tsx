import PlusIcon from "@heroicons/react/outline/PlusIcon";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Success",
  text: "Item has been added to cart",
};

export const Error = Template.bind({});
Error.args = {
  title: "Holy smokes!",
  text: "Something seriously bad happened.",
  alertType: "error",
};

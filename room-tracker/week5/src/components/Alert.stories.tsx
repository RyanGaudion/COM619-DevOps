import {ComponentMeta, ComponentStory} from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  label: "This seems to have gone a little wrong",
  variant: "warning",
};

export const Success = Template.bind({});
Success.args = {
  label: "All good in the hood",
  variant: "success",
};

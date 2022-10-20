import PlusIcon from "@heroicons/react/outline/PlusIcon";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Click Me",
  icon: <PlusIcon className="h-5 w-5 mr-2" />,
  onClick: () => console.log("clicked"),
};

export const ButtonNoIcon = Template.bind({});
ButtonNoIcon.args = {...Primary.args, icon: null};

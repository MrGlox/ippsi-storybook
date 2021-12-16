import { Link } from "./Link";

export default {
  title: "Atom/Link",
  component: Link,
};

const Template = (args) => <Link href="#" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Mon lien",
};

export const Active = Template.bind({});
Active.args = {
  label: "Mon lien",
};

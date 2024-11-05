import type {  Meta, StoryObj } from '@storybook/react';

import { AllIcons, type IconName } from './all-icons';
import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Icon name',
      control: 'select',
      options: Object.keys(AllIcons),
    },
  },
  args: {
    name: 'chevron-left',
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
	args: {
		name: "chevron-left",
	},
};

export const Catalog: Story = {
  render: () => {
    const iconNames = Object.keys(AllIcons) as IconName[];
    return (
      <div className="grid grid-cols-5 gap-4">
        {iconNames.map((name) => (
          <div className="flex flex-col items-center justify-center" key={name}>
            <Icon name={name} className="size-12 text-strong" />
            <p className="text-xs text-center">{name}</p>
          </div>
        ))}
      </div>
    );
  },
};

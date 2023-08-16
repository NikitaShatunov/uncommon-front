import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';

const meta = {
  title: 'uncommon/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    links: { control: 'object' },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const standart: Story = {
  args: {
    links: ["home", "catalog", "bag", "account"],
    size: 'large',
    location: 'catalog'
  },
};


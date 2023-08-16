import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer';

const meta = {
  title: 'uncommon/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    links: { control: 'object' },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const standart: Story = {
  args: {
    links: ['instagram', 'terms of use', 'privacy & policy', 'about us', 'shipping' ],
    size: 'large',
  },
};


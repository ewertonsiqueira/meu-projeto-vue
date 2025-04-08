import { fn } from '@storybook/test';

import RButton from '../components/RButton.vue';

export default {
  title: 'Componentes/RButton',
  component: RButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'] },
      backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Salvar',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button small',
  },
};

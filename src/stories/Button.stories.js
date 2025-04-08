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
    label: 'Botão',
  },
};

export const Secondary = {
  args: {
    label: 'Botão',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Botão grande',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Botão pequeno',
  }
};

export const Disabled = {
  args: {
    label: 'Botão desabilitado',
    disabled: true
  }
};


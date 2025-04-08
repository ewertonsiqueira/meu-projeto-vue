import { userEvent, within, expect } from '@storybook/test';

import LoginForm from '../views/Form.vue';

export default {
  component: LoginForm
};

export const EmptyForm = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
};

export const EmptyFormError = {
    render: () => ({
      components: { LoginForm },
      template: `<LoginForm />`,
    }),
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      await userEvent.click(canvas.getByTestId('button'));
  
      await expect(
        canvas.getByText(
            'A senha deve ter pelo menos 6 caracteres.'
        ),
        canvas.getByText(
            'O login é obrigatório.'
        )
      ).toBeInTheDocument();
    },
  };

export const FilledForm = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Enter credentials', async () => {
        await userEvent.type(canvas.getByTestId('login'), 'ZezaoDoSantanaAazul');
        await userEvent.type(canvas.getByTestId('password'), 'turbina@123');
    })

    await step('Submit form', async () => {
        await userEvent.click(canvas.getByTestId('button'));
    })

    await expect(
      canvas.getByText(
        'Logado com sucesso!',
      ),
    ).toBeInTheDocument();
  },
};

export const LoginError = {
    render: () => ({
      components: { LoginForm },
      template: `<LoginForm />`,
    }),
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      await userEvent.type(canvas.getByTestId('password'), 'turbina@123');
  
      await userEvent.click(canvas.getByTestId('button'));
  
      await expect(
        canvas.getByText(
          'O login é obrigatório.',
        ),
      ).toBeInTheDocument();
    },
  };

export const PasswordError = {
    render: () => ({
      components: { LoginForm },
      template: `<LoginForm />`,
    }),
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      await userEvent.type(canvas.getByTestId('login'), 'ZezaoDoSantanaAazul');
  
      await userEvent.type(canvas.getByTestId('password'), 'turbi');
  
      await userEvent.click(canvas.getByTestId('button'));
  
      await expect(
        canvas.getByText(
          'A senha deve ter pelo menos 6 caracteres.',
        ),
      ).toBeInTheDocument();
    },
  };
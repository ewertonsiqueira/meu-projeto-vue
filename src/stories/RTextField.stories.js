
import TextField from '../components/RTextField.vue'
import { ref } from 'vue'

export default {
  title: 'Componentes/RTextField',
  component: TextField,
}

const Template = (args) => ({
  components: { TextField },
  setup() {
    const value = ref('')
    return { args, value }
  },
  template: `
    <RTextField v-bind="args" v-model="value" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Nome',
  placeholder: 'Digite seu nome',
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Email',
  placeholder: 'Digite seu email',
  error: 'Email inválido',
}

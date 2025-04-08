<template>
  <div class="textfield-wrapper">
    <label v-if="label" :for="id" class="textfield-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
      :readonly="readonly"
      class="textfield-input"
    />
    <p
      v-if="error"
      class="textfield-error">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
  },
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.textfield-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.textfield-label {
  color: #374151;
  font-weight: 600;
  font-size: 14px;
}

.textfield-input {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.textfield-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  outline: none;
}

.textfield-input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.textfield-error {
  color: #ef4444;
  font-size: 12px;
}
</style>

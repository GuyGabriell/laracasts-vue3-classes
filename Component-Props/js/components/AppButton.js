export default {
  template: `
    <button 
    
    :class="{
    'px-4 py-2 rounded border disabled:cursor-not-allowed' : true,
    'bg-green-200 hover:bg-gray-400' : type === 'primary',
    'bg-blue-200 hover:bg-blue-400' : type === 'secondary',
    'bg-red-200 hover:bg-red-400' : type === 'muted',
    'is-loading' : processing,
    }" 
    :disabled="processing">
    
      <slot />
    </button>
  `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },

};

export default {
  shape: {
    label: { margin: { bottom: 4 } },
    input: { borderRadius: 4, borderStyle: 'solid', borderWidth: 2 },
  },
  sizes: {
    small: {
      label: { fontSize: 14, fontWeight: 400 },
      input: {
        fontSize: 16,
        padding: { top: 6, right: 8, bottom: 6, left: 8 },
      },
    },
    medium: {
      label: { fontSize: 14, fontWeight: 500 },
      input: {
        fontSize: 16,
        padding: { top: 8, right: 8, bottom: 8, left: 8 },
      },
    },
    large: {
      label: { fontSize: 16, fontWeight: 500 },
      input: {
        fontSize: 18,
        padding: { top: 12, right: 10, bottom: 12, left: 10 },
      },
    },
  },
  types: {
    default: {
      normal: {
        label: { font: { type: 'fixed', color: 'black', shade: 'base' } },
        input: {
          font: { type: 'fixed', color: 'black', shade: 'base' },
          background: { type: 'fixed', color: 'white', shade: 'base' },
          border: { type: 'fixed', color: 'gray', shade: 'base' },
        },
      },
      focus: {
        label: { font: { type: 'fixed', color: 'info', shade: 'base' } },
        input: {
          font: { type: 'fixed', color: 'black', shade: 'base' },
          background: { type: 'fixed', color: 'white', shade: 'base' },
          border: { type: 'fixed', color: 'info', shade: 'base' },
        },
      },
      disabled: {
        label: { font: { type: 'fixed', color: 'gray', shade: 'base' } },
        input: {
          font: { type: 'fixed', color: 'gray', shade: 'light' },
          background: { type: 'fixed', color: 'gray', shade: 'lightest' },
          border: { type: 'fixed', color: 'gray', shade: 'light' },
        },
      },
      error: {
        label: { font: { type: 'fixed', color: 'danger', shade: 'base' } },
        input: {
          font: { type: 'fixed', color: 'black', shade: 'base' },
          background: { type: 'fixed', color: 'danger', shade: 'lightest' },
          border: { type: 'fixed', color: 'danger', shade: 'base' },
        },
      },
    },
  },
};

export default {
  shape: {
    label: {
      margin: { bottom: 4 },
    },
    input: {
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
    },
  },
  sizes: {
    small: {
      label: {
        fontSize: 12,
        fontWeight: 500,
      },
      input: {
        fontSize: 14,
        padding: { top: 8, right: 12, bottom: 8, left: 12 },
      },
    },
    medium: {
      label: {
        fontSize: 14,
        fontWeight: 600,
      },
      input: {
        fontSize: 16,
        padding: { top: 8, right: 12, bottom: 8, left: 12 },
      },
    },
    large: {
      label: {
        fontSize: 14,
        fontWeight: 700,
      },
      input: {
        fontSize: 18,
        padding: { top: 8, right: 12, bottom: 8, left: 12 },
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
        label: { font: { type: 'fixed', color: 'gray', shade: 'light' } },
        input: {
          font: { type: 'fixed', color: 'gray', shade: 'lightest' },
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

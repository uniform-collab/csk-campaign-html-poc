import { registerUniformComponent } from '@uniformdev/canvas-react';

// ToDo: it is temporary solution https://linear.app/uniform/issue/MET-1337/%F0%9F%92%8E-pattern-preview-unknown-component
registerUniformComponent({
  type: '_empty_composition_type',
  component: () => null,
});

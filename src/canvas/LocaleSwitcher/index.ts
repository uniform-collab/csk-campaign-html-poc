import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { LocaleSwitcher } from './LocaleSwitcher';

type Styles = {
  link?: string;
  login?: {
    container?: string;
  };
};

export type LocaleSwitcherProps = ComponentProps<{
  styles?: Styles;
}>;

registerUniformComponent({
  type: 'localeSwitcher',
  component: LocaleSwitcher,
});

export default LocaleSwitcher;

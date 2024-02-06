import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { NavigationSection } from './NavigationSection';

export type NavigationSectionProps = ComponentProps<{ title: string }>;

registerUniformComponent({
  type: 'navigationSection',
  component: NavigationSection,
});

export default NavigationSection;

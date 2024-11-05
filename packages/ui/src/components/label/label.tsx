import React, { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/classes';

export type LabelProps = ComponentPropsWithoutRef<'label'> & {
  required?: boolean;
  htmlFor?: string;
};
export type LabelTextProps = ComponentPropsWithoutRef<'p'> & {
  required?: boolean;
};

const LabelText = React.forwardRef<HTMLParagraphElement, LabelTextProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
        <span
          className={cn([className, 'group', 'text-pure', 'inline', 'text-sm'])}
          data-required={required}
        >
          {children}
          <span className='ml-1 hidden text-feedback-alert-accent group-data-[required=true]:inline-flex'>
            *
          </span>
        </span>
      </span>
    );
  }
);

const LabelRoot = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, htmlFor, ...props }, ref) => {
    const formatChildren = () => {
      const arrayChildren = React.Children.toArray(children);

      if (React.Children.count(arrayChildren) === 1) {
        if (typeof arrayChildren[0] !== 'string')
          throw new Error('Invalid children, should be a single string');
        return <LabelText {...(props as LabelTextProps)}>{children}</LabelText>;
      }

      if (React.Children.count(arrayChildren) > 1)
        return React.Children.map(arrayChildren, (child) =>
          React.cloneElement(child as React.ReactElement, props)
        );
    };

    return (
      <label
        className={cn(['flex', 'flex-col'], className)}
        htmlFor={htmlFor}
        ref={ref}
      >
        {formatChildren()}
      </label>
    );
  }
);

LabelRoot.displayName = 'Label';

LabelText.displayName = 'Label.Text';

const LabelHintText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children }, ref) => (
  <span className={cn([className, 'text-smooth', 'text-xs'])} ref={ref}>
    {children}
  </span>
));

LabelHintText.displayName = 'Label.HintText';

const Label = Object.assign(LabelRoot, {
  Text: LabelText,
  HintText: LabelHintText,
});

export { Label, LabelText, LabelHintText };

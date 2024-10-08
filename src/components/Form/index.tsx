import { twMerge } from 'tailwind-merge';
import {
  FormField,
  FormLabel,
  FormProps,
  FormSubmit,
  FormTextarea,
} from './form';
import { forwardRef } from 'react';

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form
      {...props}
      className={twMerge(
        'flex flex-col gap-5 p-4 bg-white rounded-lg',
        className
      )}
    >
      {children}
    </form>
  );
};

export const Field = forwardRef<HTMLInputElement, FormField>(
  ({ helperText, ...props }: FormField, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={twMerge(
          'w-full p-4 rounded-[0.25rem] bg-neutral-100 text-neutral-950 font-normal placeholder:text-neutral-400 outline-none',
          helperText && 'border border-solid border-red-400 placeholder:text-red-600'
        )}
      />
    );
  }
);

export const TextArea = forwardRef<HTMLTextAreaElement, FormTextarea>(
  ({ helperText, ...props }: FormTextarea, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={twMerge(
          "w-full p-4 rounded-[0.25rem] bg-neutral-100 text-neutral-950 font-normal placeholder:text-neutral-400 h-[7.5rem] resize-none outline-none",
          helperText && 'border border-solid border-red-400 placeholder:text-red-600'
        )}
      />
    );
  }
);

export const Label = ({ children, ...props }: FormLabel) => {
  return (
    <label
      {...props}
      className="w-full flex flex-col gap-2 font-semibold text-neutral-950"
    >
      {children}
    </label>
  );
};

export const Submit = ({ children, ...props }: FormSubmit) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center w-full p-4 rounded-lg bg-neutral-950 text-neutral-50 font-semibold  "
    >
      {children}
    </button>
  );
};

Form.Field = Field;
Form.Textarea = TextArea;
Form.Label = Label;
Form.Submit = Submit;

export { Form };

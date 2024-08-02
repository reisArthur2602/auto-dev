import { twMerge } from 'tailwind-merge';
import { FormField, FormLabel, FormProps, FormSubmit } from './form';

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

export const Field = ({ ...props }: FormField) => {
  return (
    <input
      className="w-full p-4 rounded-[0.25rem] bg-neutral-100 text-neutral-400 font-normal"
      {...props}
    />
  );
};

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
Form.Label = Label;
Form.Submit = Submit;

export { Form };
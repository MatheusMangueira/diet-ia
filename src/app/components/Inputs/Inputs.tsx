type IInputTextProps = {
  InputType?: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
type IInputSelectProps = {} & React.InputHTMLAttributes<HTMLSelectElement>;

export const Input = ({ label, InputType, ...rest }: IInputTextProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label
        className="text-zinc-700 text-sm font-bold        
      "
      >
        {label}
      </label>
      <input
        onKeyDown={(event) => {
          const key = event.key;
          if (InputType === "number") {
            if (
              !/\d/.test(key) &&
              key !== "Backspace" &&
              key !== "Delete" &&
              key !== "ArrowLeft" &&
              key !== "ArrowRight" &&
              key !== "Tab"&&
              key !== "Enter"
            ) {
              event.preventDefault();
            }
          }
        }}
        {...rest}
        className="py-2 px-4  text-zinc-700 text-sm border border-zinc-700 rounded-md hover:border-zinc-800 transition duration-300 ease-in-out w-full shadow-sm hover:shadow-lg "
      />
    </div>
  );
};

export const InputSelect = ({ ...rest }: IInputSelectProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label
        className="text-zinc-700 text-sm font-bold        
      "
      >
        {rest.placeholder}
      </label>
      <select
        {...rest}
        className="py-2 px-4  text-zinc-700 text-sm border border-zinc-700 rounded-md hover:border-zinc-800 transition duration-300 ease-in-out w-full shadow-sm hover:shadow-lg "
      >
        {rest.children}
      </select>
    </div>
  );
};

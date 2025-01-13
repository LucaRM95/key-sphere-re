"use client";

interface Props {
  name?: string;
  className?: string;
  onChange?: any;
  title: string;
  required?: boolean;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  labelColor?: string;
}

export const KSphereInput = ({
  name="",
  className = "",
  onChange = () => {},
  title,
  required = false,
  type,
  placeholder = "",
  defaultValue = "",
  labelColor = "text-ks-dark",
}: Props) => {
  return (
    <div className={`${className} flex justify-center flex-col gap-3`}>
      <label className={`text-lg ${labelColor} font-semibold`} htmlFor={name}>
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      {type === "description" ? (
        <textarea
          name={name}
          onChange={onChange}
          className="text-ks-dark p-2 rounded-lg"
          placeholder="...Lorem Ipsum"
          defaultValue={defaultValue}
        ></textarea>
      ) : (
        <input
          name={name}
          onChange={onChange}
          className="p-3 rounded-lg text-ks-dark"
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

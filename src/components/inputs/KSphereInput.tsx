"use client"

interface Props {
  className?: string;
  onChange?: any;
  title: string;
  required?: boolean;
  type: string;
  placeholder?: string;
  defaultValue?: string;
}

export const KSphereInput = ({
  className = "",
  onChange = () => {},
  title,
  required = false,
  type,
  placeholder = "",
  defaultValue = ""
}: Props) => {
  return (
    <div className={`${className} flex justify-center flex-col gap-3`}>
      <label className="text-lg text-ks-dark font-semibold" htmlFor="title">
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      {type === "description" ? (
        <textarea
          onChange={onChange}
          className="text-ks-dark p-2 rounded-lg"
          placeholder="...Lorem Ipsum"
          defaultValue={defaultValue}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          className="p-2 rounded-lg text-ks-dark"
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

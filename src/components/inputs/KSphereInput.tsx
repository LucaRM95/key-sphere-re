import React from "react";

interface Props {
  title: string;
  required?: boolean;
  type: string;
  placeholder?: string;
}

export const KSphereInput = ({ title, required = false, type, placeholder= "" }: Props) => {
  return (
    <div className="flex justify-center flex-col gap-3">
      <label className="text-lg text-gray-400 font-semibold" htmlFor="title">
        {title} {required && <span className="text-red-600">*</span>}
      </label>
      {type === 'description' ? (
        <textarea></textarea>
      ) : (

          <input 
          className="p-2 rounded-xl text-ks-grey"
          type={type}
            placeholder={placeholder}
            required={required}
          />
      )}
    </div>
  );
};

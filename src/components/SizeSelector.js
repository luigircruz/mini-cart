import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const SizeSelector = ({ size, setSize }) => {
  return (
    <div className="mt-8">
      <div className="uppercase">
        Size<span className="text-red-star">*</span>
        <span className="font-bold"> {size}</span>
      </div>
      <RadioGroup
        value={size}
        onChange={setSize}
        className="mt-4 flex space-x-2"
      >
        <RadioGroup.Option value="S">
          {({ checked }) => (
            <span
              className={`cursor-pointer border-2 border-border-light px-4 py-3 text-secondary hover:border-border-dark ${
                checked ? "border-border-dark" : ""
              }`}
            >
              S
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="M">
          {({ checked }) => (
            <span
              className={`cursor-pointer border-2 border-border-light px-4 py-3 text-secondary hover:border-border-dark ${
                checked ? "border-border-dark" : ""
              }`}
            >
              M
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="L">
          {({ checked }) => (
            <span
              className={`cursor-pointer border-2 border-border-light px-4 py-3 text-secondary hover:border-border-dark ${
                checked ? "border-border-dark" : ""
              }`}
            >
              L
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
};

export default SizeSelector;

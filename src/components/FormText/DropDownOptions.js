import React from "react";

export default ({
  input: { value },
  meta,
  handlePushField,
  options,
  ...rest
}) => {
  return (
    <div>
      {value !== "" && (
        <div style={{ border: "1px solid #1ff" }}>
          <p>DropDown Options</p>
          {options.filter(op => op.label.includes(value)).map((op, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePushField(op)}
            >
              {op.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

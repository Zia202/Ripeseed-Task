import React from "react";
import styled from "styled-components";
const CustomInput = styled.input`
  display: inline-flex;
  border-radius: 20px;
  box-shadow: 0px 2px 8px rgba(22, 68, 94, 0.12);
  border: 1px solid rgba(22, 68, 94, 0.1);
  color: #16445e;
  width: 400px;
  height: 48px;
  font-weight: bold !important;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  ::placeholder {
    color: #849ba8;
    opacity: 1;
  }

  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.5rem"
        : props.size === "lg"
        ? "2rem"
        : "1.1rem"};
  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)"
      : props.variant === "secondary"
      ? "transparent"
      : "#E5E5E5"};
`;

const CustomInputField = ({
  type,
  name,
  variant,
  size,
  className,
  children,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <CustomInput
      type={type || "text"}
      name={name}
      variant={variant}
      size={size}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </CustomInput>
  );
};

export default CustomInputField;

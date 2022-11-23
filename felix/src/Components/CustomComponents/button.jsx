import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  border-radius: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border: 1px solid transparent !important;
  cursor: pointer;
  height: 48px;
  font-weight: bold !important;
  outline: none !important;
  text-align: center !important;
  color: ${(props) =>
    props.color === "light"
      ? "#ffffff"
      : props.color === "dark"
      ? "#16445E"
      : "#16445E"};
  width: ${(props) =>
    props.size === "sm"
      ? "60px"
      : props.size === "md"
      ? "95px"
      : props.size === "lg"
      ? "130px"
      : props.size === "xl"
      ? "437px"
      : "1.1rem"};
  background: ${(props) =>
    props.variant === "primary"
      ? "linear-gradient(180deg, #FF545C 0%, #E61E27 50.52%, #CE1921 100%)"
      : props.variant === "secondary"
      ? "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)"
      : "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)"};
`;
const Button = ({
  variant,
  type,
  size,
  onClick,
  className,
  children,
  color,
  disabled,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component${className}` : "btn-component"}
      onClick={onClick}
      size={size}
      color={color}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;

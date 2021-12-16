import React from "react";
import PropTypes from "prop-types";

import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #1ea7fd;
  font-size: 14px;
  padding: 11px 20px;

  ${({ outline }) =>
    outline &&
    css`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 3em;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 12px;
      padding: 10px 16px;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 16px;
      padding: 12px 24px;
    `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }) => (
  <StyledButton
    type="button"
    style={backgroundColor && { backgroundColor }}
    {...props}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

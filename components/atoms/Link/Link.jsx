import styled from "styled-components";

const StyledLink = styled.a``;

export const Link = ({ label, ...props }) => (
  <StyledLink {...props}>{label}</StyledLink>
);

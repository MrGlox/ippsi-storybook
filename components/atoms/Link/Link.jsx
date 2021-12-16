import { Link } from "next";

import styled from "styled-components";

const StyledLink = styled(Link)``;

export const Link = ({ label, ...props }) => (
  <StyledLink {...props}>{label}</StyledLink>
);

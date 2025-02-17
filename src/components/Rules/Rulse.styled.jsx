import { Link, Paper, styled, Typography } from "@mui/material";

export const AccordionWrapper = styled(Paper)`
  width: 100%;
`;

export const RulesWrapper = styled(Paper)`
  :first-of-type {
    padding: 10px 0;
  }
`;
export const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.info.dark};

    svg {
      color: ${({ theme }) => theme.palette.info.dark};
    }
  }
`;

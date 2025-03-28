import React, { FC } from "react";
import {
  LinkProps,
  Link as MuiLink,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const theme = createTheme({
  components: {
    // Name of the component
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          minWidth: "64px",
          color: "inherit",
          fontWeight: "500",
          fontSize: "1rem",
          textDecoration: "none",
          "&:hover": {
            // textDecoration: "none",
          },
        },
      },
    },
  },
});

const Link: FC<LinkProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
    </ThemeProvider>
  );
};

export default Link;

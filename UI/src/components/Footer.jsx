import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box className="footer">
      <Typography variant="body1" align="center">
        Desenvolvido por{" "}
        <Link
          href="https://github.com/JhowRodrigues2"
          target="_blank"
          rel="noopener"
        >
          Jhow Rodrigues
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;

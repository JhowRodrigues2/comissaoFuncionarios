import React from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="header-container">
      <TabContext value={value}>
        <Box className="tab-container">
          <TabList
            onChange={handleChange}
            aria-label="navigation tabs"
            className="tab-list"
          >
            <Tab label="Home" value="1" component={Link} to="/home" />
            <Tab
              label="Funcionários"
              value="2"
              component={Link}
              to="/funcionarios"
            />
            <Tab label="Vendas" value="3" component={Link} to="/vendas" />
            <Tab label="Comissões" value="4" component={Link} to="/comissoes" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Header;

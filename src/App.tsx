import React from "react";
import "./styles/global.css";
import MainLayout from "./components/MainLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme";
import "@reach/combobox/styles.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;

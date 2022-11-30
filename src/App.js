import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { color } from "@mui/system";
import { useState } from "react";
import MediaCard from "./MediaCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "dark",
    },
  });
  console.log(darkMode);

  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>
      <Switch onClick={() => setDarkMode(!darkMode)}></Switch>
      <div>
        <Button color="secondary">Material</Button>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
          color = "secondary";
        }}
      >
        Click me
      </Button>

      <Box
        sx={{
          height: "100vh",
          width: "100vh",
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CssBaseline></CssBaseline>
        <MediaCard></MediaCard>
      </Box>
    </ThemeProvider>
  );
}

export default App;

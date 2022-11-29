import { Box, Button, CssBaseline } from "@mui/material";
import { color } from "@mui/system";
import MediaCard from "./MediaCard";

function App() {
  return (
    <div className="App">
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
          height: "30vh",
          width: "30vh",
          bgcolor: "primary.main",
        }}
      >
        <CssBaseline></CssBaseline>
      </Box>
      <MediaCard></MediaCard>
    </div>
  );
}

export default App;

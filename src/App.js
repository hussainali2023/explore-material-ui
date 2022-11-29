import { Button } from "@mui/material";
import { color } from "@mui/system";

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
    </div>
  );
}

export default App;

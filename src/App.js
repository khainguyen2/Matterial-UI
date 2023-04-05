import React from 'react';
import Authen from './router/authen';
import { makeStyles ,createTheme, MuiThemeProvider} from "@material-ui/core/styles";
let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 950,
        lg: 1200,
        xl: 1536,
      },
    },
  });
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Authen />
    </div>
    </MuiThemeProvider>
  );
}

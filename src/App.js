import { createGlobalStyle } from "styled-components";
import { Main } from "./Main";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:"Plus Jakarta Sans", sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;

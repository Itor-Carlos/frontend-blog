import { GlobalStyle } from "./app/components/Global/globalStyle"
import { Header } from "./app/components/Header"
import { Post } from "./app/components/Post"

function App() {
  return (
    <GlobalStyle>
      <Header/>
      <Post/>
    </GlobalStyle>
  )
}

export default App

import{Route,Routes} from "react-router-dom"
import {Container} from "react-bootstrap"
import { About} from "./pages/About"
import {Home} from "./pages/Home"
import {Store} from "./pages/Store"

function App() {


  return (
    <Container>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/store" element={<Store/>}/>
        <Route path= "/About" element={<About/>}/>

      </Routes>
       </Container>
  )
}

export default App

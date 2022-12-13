import{Route,Routes} from "react-router-dom"
import {Container} from "react-bootstrap"
import { About} from "./pages/About"

import {Store} from "./pages/Store"
import {Navbar} from "./components/Navbar"
import{ShoopingCartProvider} from "./context/ShoppingCartContext"
import { StoreItem } from "./components/StoreItem"

function App() {
  return (
    <ShoopingCartProvider>
   <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path= "/" element={<Store/>}/>
        <Route path= "/store" element={<Store/>}/>
        <Route path= "/About" element={<About/>}/>
      </Routes>
       </Container>
       
       </ShoopingCartProvider>
  )
}

export default App

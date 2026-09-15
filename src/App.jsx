
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Products from "./pages/ProductsPage/Products"

function App() {
  return (
    
<div className="app">
  <Navbar />

      <main className="content pt-20">
        <Products />
      </main>
      
<Footer />
</div>
    
  )
}

export default App

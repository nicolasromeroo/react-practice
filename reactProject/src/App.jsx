// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './assets/styles/styles.css'
// import NavBar from './Components/NavBar'
// import ItemListContainer from './Components/ItemListContainer'
// import Body from './Components/Body'
// import PieDePagina from './Components/PieDePagina'
// // import CompUseEffect from './Components/CompUseEffect'
// // import Contador from './Components/Contador'
// // import Props from './Components/Props'
// // import States from './Components/States'
// // import CartWidget from './Components/CartWidget'
// // import CompUseRef from './Components/CompUseRef'
// // import ComponenteChildren from './Components/ComponenteChildren'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Vuelos from './Components/Vuelos'
// import BannerAvion from './Components/BannerAvion'
// import Eventos from './Components/Eventos'
// // import Contexto from './Components/Contexto'
// import ContextoDeReservas from './Components/Contexto'


// function App() {
//   return (
//     <>
//     <ContextoDeReservas>

//       <BrowserRouter>
//         <NavBar />
//         <Eventos></Eventos>
//         <Routes>
//           <Route path={"/"} element={<Body />} />
//           <Route path={"/vuelos"} element={<Vuelos />} />
//           <Route path={"/pais/:idPais"} element={<Vuelos />} />
//         </Routes>
//         <PieDePagina />
//       </BrowserRouter>
//     </ContextoDeReservas>
      
//       {/* <CompUseEffect></CompUseEffect> */}
//       {/* <ComponenteChildren texto={"NR Viajes"}>
//         <h3>Subtitulo del componente children</h3>
//         <p>parrafo Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum. Nesciunt blanditiis deserunt sunt, aliquid, earum atque corrupti dignissimos amet minus cupiditate quae doloremque explicabo illo eius velit maiores iusto!</p>
//       </ComponenteChildren> */}
//       {/* <CompUseRef></CompUseRef> */}
//       {/* <ItemListContainer titulo="Special Travel" subtitulo="Encontrá tu próximo destino" parrafo="Consultá fechas disponibles"/> */}
//       {/* <Contador></Contador> */}
//       {/* <Body /> */}
//       {/* <Props titulo={"Special Travel"} logo={"https://img.freepik.com/fotos-premium/fondo-viajes-turismo-extranjero-ai-generado_538866-1011.jpg"}/> */}
//       {/* <States /> */}
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import PieDePagina from './Components/PieDePagina';
import Vuelos from './Components/Vuelos';
import Eventos from './Components/Eventos';
import ContextoDeReservas from './Components/Contexto';

function App() {
  return (
    <ContextoDeReservas>
      <BrowserRouter>
        <NavBar />
        <Eventos />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/vuelos" element={<Vuelos />} />
          <Route path="/pais/:idPais" element={<Vuelos />} />
        </Routes>
        <PieDePagina />
      </BrowserRouter>
    </ContextoDeReservas>
  );
}

export default App;

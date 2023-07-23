import React, {useState} from "react";
import "./index.css";
import Arkaplan from "./Bilesenler/Arkaplan";
import Arama from "./Bilesenler/Arama/AramaCubugu";
import Sonuc from "./Bilesenler/Sonuc";

function App() {

/* arama çubuğunda her arama yapıldığında o kelimeyi yakalamak için import ettiğimiz usestate'nin parametresini çağırdık ve bu parametreyi belirtmek için ayrı bir parametre gerekiyor.
 json yani object şeklinde geleceği için süslü parantez kullandık.*/

const [havaDurumu, belirtHavaDurumu] = useState("{}");
    
  
  return (
  <section className="uygulama">
    <Arkaplan arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
   <div id="baslik">Weather App</div> 
   <Arama belirtHavaDurumu = {belirtHavaDurumu} />
   <Sonuc hava={havaDurumu} />
  </section>
  );
}
 
export default App;

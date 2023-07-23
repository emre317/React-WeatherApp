import yagmurlu from "../../Resimler/cloud.jpg"
import gunesli from "../../Resimler/günes.jpg";
import karli from "../../Resimler/karli.jpg";
import yagmurluu from "../../Resimler/rainy.jpg";
import firtinali from "../../Resimler/storm.png";
import hava from "../../Resimler/hava.jpg";

 

/* APIden gelen weatherin içerisindeki mainden gelen sonuçlar */
function ResimCek({durum}) {
    switch (durum) {
        case "Rain":
            return <img className="arkaplan-resim" src={yagmurluu} alt="yagmurluu" />
    
    
        case "Clear":
            return <img className="arkaplan-resim" src={gunesli} alt="gunesli" /> 
    
    
        case "Clouds":
            return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />
    
        case "Storm":
            return <img className="arkaplan-resim" src={firtinali} alt="firtinali" />
    
        case "Snow":
            return <img className="arkaplan-resim" src={karli} alt="karli" />
        
            default:
                return <img className="arkaplan-resim" src={hava} alt="hava" />
    
        }
}
console.log("durum");
export default ResimCek;
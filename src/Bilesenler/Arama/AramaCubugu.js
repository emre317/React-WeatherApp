import React, {useState} from "react";

function AramaCubugu({belirtHavaDurumu}) {
    const api = {
        key: "dc340128be8eae100ad22ca25ccf834b",
        base: "https://api.openweathermap.org/data/2.5/weather",
    };
    /* arama çubuğunda her arama yapıldığında o kelimeyi yakalamak için import ettiğimiz usestate'nin parametresini çağırdık ve bu parametreyi belirtmek için ayrı bir parametre gerekiyor. */
    const [araParametre, belirtAraParametre] = useState("");
    
    /* veri çekme kodu ve enter tuşunu atama kısmı
    her tuşa basıldığında bu fonksiyon çalışıcak */
    const ara = (e) => {
        if ( e.key === "Enter" ) {
            fetch(`${api.base}?q=${araParametre}&units=metric&lang=tr&appid=${api.key}`)
            /* gelen veriyi json formatına dönüştürme */
            .then((veri) => veri.json())
            .then((sonuc) => {
            /* arama yapılan şehir ekrana bastırıldıktan sonra arama çubuğu temizlenir */
            belirtAraParametre("");
            belirtHavaDurumu(sonuc);
        })
        }
    }
    
    
    
    
    return (
        /* arama çubuğunu tasarlıyoruz. */
        <div className="arama">
            <input
             className="arama-input" 
             type="text" 
             placeholder="Şehir" 
             /* stateyi her tuşa bastığımızda değiştirmemiz gerek
             klavyeden bastığımız tuşları almak için event ekliyoruz.
             klavyede bastığımız harfleri parametremize (state) belirtmek için inputun içerisindeki valueyi alıp parametremize belirtiyoruz*/
             onChange={(e)=> belirtAraParametre(e.target.value)}
             value={araParametre}
             onKeyPress={ara}
             />
        </div>
    ); 
}

export default AramaCubugu;
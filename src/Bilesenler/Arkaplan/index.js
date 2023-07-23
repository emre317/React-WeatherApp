/* projede kullanacağım resimleri dosya yolunu belirterek import ettim.
img src isimli kısımda import ettiğim ismi yazıyorum. html'den farkı */

import ResimCek from "./ResimCek";
function index ({arkaplan}) {
    return (
        <div className="arkaplan">
            <div className ="overlay"></div>
            <ResimCek durum={arkaplan} />
            </div>
    );
}
// fonksiyonun yani js dosyasının dışarıda çalışmasını sağlıyor.
export default index;
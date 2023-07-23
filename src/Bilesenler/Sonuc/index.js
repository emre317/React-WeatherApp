/* API'den çekilen veriyi iletiyoruz */

function index({hava}) {
    console.log(hava);
    return (
        /* girilen şehrin kontrolünü yapıyoruz. */
        <>
        {typeof hava.main != "undefined" && (
            <div className="sonuc">
                <div className="sehir">{hava.name}, {hava.sys.country}</div>
                <div className="detay">
                    <div className="derece">{Math.round(hava.main.temp)}°C</div>
                    <div className="statu">{hava.weather[0].description}</div>
                    <div className="minmax">Min: {Math.round(hava.main.temp_min)}°C</div>
                    <div className="minmax">Max: {Math.round(hava.main.temp_max)}°C</div>
                </div>
            </div>
        ) }
        </>
    );
}

export default index;
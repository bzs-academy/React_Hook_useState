import React, {useState} from 'react'



function HookObject03() {

    const [ kisi, setKisi ] = useState({ isim : 'Ahmet', soyisim : 'Mersinli'})


    return (
        <div className="App">
            <form>
                Isim : <input type="text"
                              value = {kisi.isim} 
                              onChange = { e =>  setKisi({ ...kisi, isim : e.target.value}) }
                            />
                <br/>
                Soyisim : <input type="text"
                                 value= {kisi.soyisim}
                                 onChange = { e =>  setKisi({ ...kisi, soyisim : e.target.value}) }
                            />
            </form>
            <h2>Isminiz : {kisi.isim} </h2>
            <h2>Soyisminiz : {kisi.soyisim} </h2>
            <h3>{JSON.stringify(kisi)}</h3>
            
        </div>
    )
}



export default HookObject03;






import React, { useState, useEffect } from 'react';
import Suv from './Components/Suv';


const getDatafromLS=()=>{
  const data = localStorage.getItem('data');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const Araclar = () => {
  
   const [menuOpen, setMenuOpen] = useState(false);

   const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
   };
  
  
  const [data, setData] = useState(getDatafromLS());
  const [marka, setMarka] = useState('');
  const [model, setModel] = useState('');
  const [stok, setStok] = useState('');
  const [fiyat, setFiyat] = useState('');
  const [resimURL, setResimURL] = useState('');

 


  const handleMarkaChange = (e) => {
    setMarka(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };
  const handleStokChange = (e) => {
    setStok(e.target.value);
  };

  const handleFiyatChange = (e) => {
    setFiyat(e.target.value);
  };
  const handleResimURLChange = (e) => {
   const file = e.target.files[0];
   const reader = new FileReader();
   reader.onloadend = () => {
    setResimURL(reader.result);
   };
   if(file) {
    reader.readAsDataURL(file);
   }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const yeniAraba = { marka, model, stok, fiyat, resimURL };
    setData([...data, yeniAraba]);
    setMarka('');
    setModel('');
    setStok('');
    setFiyat('');
    setResimURL('');
  };

  const deleteCar=(index)=>{
    const filteredData=data.filter((_,i) => i !== index);
     
   
    setData(filteredData);
  };


  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data));
  },[data])

  

  return (
    <div>
    <button class="btn btn-primary btn-sm" onClick={handleMenuToggle}>Araç Ekle</button>
    {menuOpen && ( <div className="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={marka}
              onChange={handleMarkaChange}
              placeholder="Marka"
            />
            <input
              type="text"
              value={model}
              onChange={handleModelChange}
              placeholder="Model"
            />
            <input
              type="text"
              value={stok}
              onChange={handleStokChange}
              placeholder="Stok"
            />
            <input
              type="text"
              value={fiyat}
              onChange={handleFiyatChange}
              placeholder="Fiyat"
            />
            <input
              type="file"
              onChange={handleResimURLChange}
              accept='image/*'
             
            />
            <button type="submit" class="btn btn-primary btn-sm">Ekle</button>
            <button class="btn btn-danger btn-sm" onClick={()=>setData([])}>Remove All</button>
          </form>
        </li>
      </ul>
    </div>)}
  
   
  
    <Suv data={data} deleteCar={deleteCar}/>

  </div>
  );
};

export default Araclar;
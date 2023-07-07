import React, { useState, useEffect } from 'react';

import "./suv.css"

const getDataFromLS = () => {
  const data = localStorage.getItem('suvData');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Suv = () => {
  const [data, setData] = useState(getDataFromLS());
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
    if (file) {
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

  const deleteCar = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  useEffect(() => {
    localStorage.setItem('suvData', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Suv Arabalar</h2>
        <hr />
        <input type="text" value={marka} onChange={handleMarkaChange} placeholder="Marka" />
        <input type="text" value={model} onChange={handleModelChange} placeholder="Model" />
        <input type="text" value={stok} onChange={handleStokChange} placeholder="Stok" />
        <input type="text" value={fiyat} onChange={handleFiyatChange} placeholder="Fiyat" />
        <input type="file" onChange={handleResimURLChange} accept="image/*" />
        <button type="submit" className="btn btn-primary btn-sm">
          Ekle
        </button>
      </form>

      <ul>
        {data.map((araba, index) => (
          <li key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={araba.resimURL} alt={`${araba.marka} ${araba.model}`} />
                </div>
                <div className="flip-card-back">
                  <div className="card-back-content">
                    <ul className="card-back-list">
                      <li className="bilgi">
                        <strong>Marka:</strong> {araba.marka}
                      </li>
                      <li className="bilgi">
                        <strong>Model:</strong> {araba.model}
                      </li>
                      <li className="bilgi">
                        <strong>Stok:</strong> {araba.stok}
                      </li>
                      <li className="bilgi">
                        <strong>Fiyat:</strong> {araba.fiyat}/Gün
                      </li>
                      <li className="bilgi">
                        <button className="btn btn-danger btn-sm" onClick={() => deleteCar(index)}>
                          Sil
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suv;
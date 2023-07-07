import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';




import Layout from './Components/layout';
import Anasayfa from './Components/Anasayfa';

import Klasik from './Components/Klasik';
import Suv from './Components/Suv';
import Sedan from './Components/Sedan';
import Spor from './Components/Spor';






class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' element={<Anasayfa />} />
                            <Route path='/suv' element={<Suv />} />
                            <Route path='/klasik' element={<Klasik />} />
                            <Route path='/sedan' element={<Sedan />} />
                            <Route path='/spor' element={<Spor />} />

                        </Route>
                    </Routes>
                </BrowserRouter>





            </div>
        )
    }
}

export default App;

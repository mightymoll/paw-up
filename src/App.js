import './index.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/HomePage/Home';

// User, Auth routes
import Inscription from './components/User/Inscription';
import Login from './components/User/Login';

// import to use reactRouter for page routing
import { Routes, Route } from 'react-router-dom';

// styled component
import { AppContainer } from './components/AppContainer.style'
import { ContentContainer } from './components/ContentContainer.style'

function App() {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        {/* routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Inscription />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;

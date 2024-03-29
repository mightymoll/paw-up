import './index.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/HomePage/Home';

// User, Auth routes
import Inscription from './components/User/Inscription';
import Login from './components/User/Login';
import AdminHome from './components/Admin/AdminHome';
import AnimalForm from './components/Animal/AnimalForm';
import EditAnimalForm from './components/Animal/EditAnimalForm';
import AdminAccessList from './components/Admin/AdminAccessList';
import AdminContactList from './components/Admin/AdminContactList'
import NewAssoForm from './components/Admin/NewAssoForm'
import EditAssoForm from './components/Admin/EditAssoForm'
import AnimalPage from './components/Animal/AnimalPage'
import AllAnimals from './components/Animal/AllAnimals'

// import to use reactRouter for page routing
import { Routes, Route } from 'react-router-dom';

// styled component
import { AppContainer } from './components/AppContainer.style'

function App() {
  return (
    <AppContainer>
      <Header />
      <div className="content">
        {/* routes*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Inscription />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/ajouterAnimal' element={<AnimalForm />} />
          <Route path='/modifierAnimal/:id' element={<EditAnimalForm />} />
          <Route path='/accessList' element={<AdminAccessList />} />
          <Route path='/contacts' element={<AdminContactList />} />
          <Route path='/newAsso' element={<NewAssoForm />} />
          <Route path='/editAsso' element={<EditAssoForm />} />
          <Route path='/animals/:id' element={<AnimalPage />} />
          <Route path='/animals' element={<AllAnimals />} />
        </Routes>
      </div>
      <Footer />
    </AppContainer>
  );
}

export default App;

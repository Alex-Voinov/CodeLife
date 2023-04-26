import AuthorizationPage from './Routes/Authorization/AuthorizationPage';
import MainPage from './Routes/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalAccount from './Routes/PersonalAccount';
import NonExistentPage from './Routes/NonExistentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="*" element={<NonExistentPage />} />
        <Route path='personal_account' element={<PersonalAccount />} />
        <Route path="authorization" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

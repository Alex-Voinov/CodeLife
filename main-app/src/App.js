import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/start_page/StartPage';
import NonExistentPage from './pages/non_existent_page/NonExistentPage';
import PersonalPage from './pages/personal_page/PersonalPage';
import AuthorizationPage from './pages/authorization_page/AuthorizationPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<StartPage />} />
        <Route path="*" element={<NonExistentPage />} />
        <Route path="personal_account" element={<PersonalPage />} />
        <Route path="authorization" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
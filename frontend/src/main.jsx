import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { GlobalProvider } from './components/GlobalContext';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.css';
import './styles/styles.css';

const SearchPage = lazy(() => import('./components/SearchPage'));
const ShopPage = lazy(() => import('./components/ShopPage'));

createRoot(document.getElementById('root')).render(
  // GLOBAL STORAGE | TO STORE DATA THAT CAN BE ACCESSIBLE FROM EVERY COMPONENT
  // GLOBAL STORAGE | PER GESTIRE I DATI CHE SARANNO ACCESSIBILI DA QUALUNQUE COMPONENTE NELL APP
  <GlobalProvider>
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES | AVAILABLE FOR ALL USERS */}
        {/* ROTTE PUBBLICHE ACCESSIBILI DA TUTTI GLI UTENTI */}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <SearchPage />
            </Suspense>
          }
          errorElement={<ErrorBoundary />}
        />
        <Route
          path="/shop/:sID"
          element={
            <Suspense fallback={<Loader isLoading={true} />}>
              <ShopPage />
            </Suspense>
          }
          errorElement={<ErrorBoundary />}
        />

        {/* PROTECTED ROUTES | ONLY FOR LOGGED IN USERS */}
        {/* ROTTE PRIVATE ACCESSIBILI SOLAMENTE AD UTENTI REGISTRATI E LOGGATI */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader isLoading={true} />}>
                <div>sezione per utenti loggati</div>
              </Suspense>
            }
            errorElement={<ErrorBoundary />}
          />
        </Route>

        {/* CATCH ALL NOT DEFINED ROUTES */}
        {/* CATTURA TUTTE LE ROTTE CHE NON ESISITONO E REINDIRIZZA LUTENTE SU QUESTA PAGINA */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </GlobalProvider>,
);

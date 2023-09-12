import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import HomePage from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage';
import DashboardPage from '../Pages/DashboardPage';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<HomePage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='register' element={<RegisterPage />} />
                    <Route path='dashboard' element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>} />
                </Route>
            </Routes>

        </>
    );

}
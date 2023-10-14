import { Routes, Route } from 'react-router-dom';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import ListQuiz from './components/User/ListQuiz';
import DetailQuiz from './components/User/DetailQuiz';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz';
import Questions from './components/Admin/Content/Question/Questions';
import PrivateRoute from './routes/PrivateRoute';
import React, { Suspense } from 'react';
import TrafficSigns from './components/TrafficSigns/TrafficSigns';
import Shape from './components/Shape/Shape';
import ListQuiz2 from './components/TrafficSigns/ListQuiz2';
import DetailQuiz2 from './components/TrafficSigns/DetailQuiz2';
import ParalysisPoint from './components/ParalysisPoint/ParalysisPoint';
import Culture from './components/Culture/Culture';
import ListQuiz3 from './components/Shape/ListQuiz3';
import DetailQuiz3 from './components/Shape/DetailQuiz3';
import ListQuiz4 from './components/Culture/ListQuiz4';
import DetailQuiz4 from './components/Culture/DetailQuiz4';
import ListQuiz5 from './components/ParalysisPoint/ListQuiz5';
import DetailQuiz5 from './components/ParalysisPoint/DetailQuiz5';


const NotFound = () => {
    return (
        <div className='container alert alert-danger'>
            404 Not Found
        </div>
    )
}

const Layout = (props) => {
    return (
        <Suspense fallback={<div>Đang tải chờ chút...</div>}>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="baithi"
                        element={
                            <PrivateRoute>
                                <ListQuiz />
                            </PrivateRoute>
                        }
                    />

                    <Route path="bienbao"
                        element={
                            <PrivateRoute>
                                <ListQuiz2 />
                            </PrivateRoute>
                        }
                    />

                    <Route path="sahinh"
                        element={
                            <PrivateRoute>
                                <ListQuiz3 />
                            </PrivateRoute>
                        }
                    />

                    <Route path="vanhoa"
                        element={
                            <PrivateRoute>
                                <ListQuiz4 />
                            </PrivateRoute>
                        }
                    />

                    <Route path="diemliet"
                        element={
                            <PrivateRoute>
                                <ListQuiz5 />
                            </PrivateRoute>
                        }
                    />

                </Route>

                <Route path="/quiz/:id" element={<DetailQuiz />} />
                <Route path="/quiz/:id" element={<DetailQuiz2 />} />
                <Route path="/quiz/:id" element={<DetailQuiz3 />} />
                <Route path="/quiz/:id" element={<DetailQuiz4 />} />
                <Route path="/quiz/:id" element={<DetailQuiz5 />} />

                <Route path="/admin"
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                    <Route path="manage-quizzes" element={<ManageQuiz />} />
                    <Route path="manage-questions" element={<Questions />} />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </Suspense>
    )
}

export default Layout;
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { useEffect } from "react"


export const ApplicationViews = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, [navigate]);
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList rocks={rocksState} fetchRocks={fetchRocksFromAPI} showAll={true} />} />
                <Route path="/singlebook" element={<RockList rocks={rocksState} fetchRocks={fetchRocksFromAPI} showAll={true} />} />
                <Route path="/createreview" element={<RockForm fetchRocks={fetchRocksFromAPI} />} />
                <Route path="/createbook" element={<RockList rocks={rocksState} fetchRocks={fetchRocksFromAPI} showAll={false} />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
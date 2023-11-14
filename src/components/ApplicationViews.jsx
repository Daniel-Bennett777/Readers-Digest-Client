import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { useEffect,useState } from "react"
import { BookList } from "./BookList.jsx"
import { MyBooks } from "./MyBooks.jsx"
import { Review } from "./Review.jsx"
import { BookForm } from "./BookForm.jsx"


export const ApplicationViews = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookList/>} />
                <Route path="/singlebook" element={<MyBooks/>} />
                <Route path="/createreview" element={<Review/>} />
                <Route path="/createbook" element={<BookForm/>} />
            </Route>
        </Routes>
    </BrowserRouter>
}
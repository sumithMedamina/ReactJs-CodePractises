import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProduct } from "./fakestore-product";
import { FakeStoreProductDetails } from "./fakestore-prod-details";

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <nav>
                <Link to="home">Home</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<FakestoreHome/>}/>
                    <Route path="home" element={<FakestoreHome/>}/>
                    <Route path="products/:catName/*" element={<FakestoreProduct/>}>
                                <Route path="details/:prodId" element={<FakeStoreProductDetails/>}/>
                    </Route>
                    <Route path="*" element={<h2>Not Found</h2>}></Route>
                </Routes>
            </main>
            </BrowserRouter>
        </div>
    )
}
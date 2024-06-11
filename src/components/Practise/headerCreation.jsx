export function Header(){
    return(
        <div className="container-fluid p-0">
            
            <header className="d-flex justify-content-between bg-black text-white">
                <h2>Header</h2>
                <div className="mt-2">
                    <span className="me-2">Home</span>
                    <span className="me-2">Mens clothing</span>
                    <span className="me-2">Womens clothing</span>
                </div>
            </header>
            <div className="d-flex">
            <nav className="col-2 bg-danger min-vh-100 d-flex justify-content-center align-items-center">
                <h2 className="mt-9">Nav</h2>

            </nav>
            <main className="col-10 bg-info vh-100 ms-2 d-flex justify-content-center align-items-center">
                <h2>Main</h2>
            </main>
            </div>
           
        </div>
    )
}
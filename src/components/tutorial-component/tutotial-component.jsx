import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function TutorialComponent(){
    var now = new Date();
    return(
            <div className="container-fluid">
               <BrowserRouter>
               <h2>Tutorial Home - Page Requested on {now.toLocaleTimeString()}</h2>
                <ol>
                    <li><Link to="html">HTML</Link></li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="js">Java Script</Link></li>
                </ol>
               <hr size="10"/>
               <Routes>
                        <Route path="html" element={
                            <div>
                                <h2>HTML</h2>
                                <p>It is a Hyper Text Mark Up Language.</p>
                            </div>
                        }/>

                        <Route path="css" element={
                            <div>
                                <h2>CSS</h2>
                                <p>It defines styles for html.</p>
                            </div>
                        }/>

                        <Route path="js" element={
                            <div>
                                <h2>Javascript</h2>
                                <p>It is a Language to manipulate Dom.</p>
                            </div>
                        }/>

                        <Route path="/" element={
                            <div>
                                <h2>Welcome</h2>
                                <p>Welcome to Home Tutorial.</p>
                            </div>
                        }/>

                        <Route path="*" element={
                            <div>
                                <h2>Not Found</h2>
                                <code>Tutorial You Requested Not Found.
                                </code>
                            </div>
                        }/>
               </Routes>
               </BrowserRouter>
        </div>
    )
}
import React from 'react'
import { a } from 'react-router-dom';

function Navbar(props) {
    
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-a" href="/a">a</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-dark d-flex mx-2" onClick={props.togglemodeDark}>{props.buttonText}</button>
                        <button type="button" className="btn btn-success d-flex mx-2" onClick={props.togglemodeContrast}>{props.buttonText}</button>
                        <button type="button" className="btn btn-danger d-flex mx-2" onClick={props.togglemodeJoy}>{props.buttonText}</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;



// const [darkmode,setDarkMode]=useState({
//     backgroundColor:'black'
// });
// const toggleDarkMode =()=>{
//     if(darkmode.color==='black'){
//         setDarkMode({
//             color: 'white',
//             backgroundColor:'black',
//         })
//     }
//     else{
//         setDarkMode({
//             color: 'black',
//             backgroundColor:'grey',
//         })
//     }
// }
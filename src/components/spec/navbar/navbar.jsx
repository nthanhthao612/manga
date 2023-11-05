import LGSearchBar from "../../common/search-bar/lg-search-bar"
import NavbarButtons from "./navbar-buttons"
import LGLogo from "../../common/logo/lg-logo"
import "../../../css/spec/navbar.css"

let image = "https://i.imgur.com/At1AH20.png"
let value = "manga"
export default function NavBar(){
    return <div className="navbar">
        <LGLogo image={image} value={value}/>
        <LGSearchBar/>
        <NavbarButtons/>
    </div>
}
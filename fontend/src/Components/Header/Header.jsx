import "../../Assets/css/Header/Header.css";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const Header = () =>{
	const [menuClicked, setMenuClicked] = useState(false);
	const handleMenuClick = () =>{
		setMenuClicked(!menuClicked);
	}

	//const

	return(
		<div className={"header-container"}>
			<div className={"components-container"}>
				<div className={"logo"}>
					<h2>Ourzone</h2>
				</div>
				<div className= {menuClicked?"menu change":"menu"}
				onClick={handleMenuClick}>
					<div className={"bar1"}></div>
					<div className={"bar2"}></div>
					<div className={"bar3"}></div>
				</div>
				<div className={menuClicked?"navbar":"navbar hideNavbar"}>
					<ul>
						<li>
							<NavLink
								to={"/"}
								className={"nav-items"}
								onClick={handleMenuClick}>Home</NavLink>
						</li>
						<li>
							<NavLink
								to={"/menu"}
								className={"nav-items"}
								onClick={handleMenuClick}>Menu</NavLink>
						</li>
						<li>
							<NavLink
								to={"/contact"}
								className={"nav-items"}
								onClick={handleMenuClick}>Contact</NavLink>
						</li>
					</ul>
				</div>

			</div>
			<div></div>
		</div>

	);
}

export default Header;
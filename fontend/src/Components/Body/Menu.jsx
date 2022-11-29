import "../../Assets/css/Body/Menu.css";
import {Bag} from "react-bootstrap-icons"
import Card from "./Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosConnect} from "../../axios";

const Menu = () =>{
	const [dishes, setDishes] = useState(null);

	useEffect(() => {
		let isCancelled = false;
		const fetchAllDishes = async () =>{
			try{
				if(!isCancelled){
					const response = await axiosConnect.get('/dishes');
					setDishes(response.data);

				}

			}catch(err){
				console.log(err);
			}
		}

		fetchAllDishes();
		return () => {
			isCancelled = true;
		};

	}, []);
	

	return(
		<div className={"menu-container"}>
			<div className={"info-bar"}>
				<span>Pick Up Only(30 mins)</span>
				<Bag className={"bag-icon"}/>
			</div>
			<div className={"cards-container"}>
				{dishes && dishes.map((dish)=>(
					<Card
						key={dish.id}
						dishID={dish.id}
						dishTitle={dish.title}
						dishDesc={dish.description}
						dishPrice={dish.price}
						dishImg={dish.image}
					/>
				))}

			</div>
		</div>
	)
}

export default Menu;
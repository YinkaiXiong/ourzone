import "../../Assets/css/Body/Admin.css"
import {useEffect, useState} from "react";
import {PencilSquare, PlusCircleFill, Trash3} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {axiosConnect} from "../../axios";

const Admin = () =>{

	const [dishes, setDishes] = useState([]);
	const navigate = useNavigate();


	useEffect(()=>{
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
	},[]);

	const handleDelete = async (id)=>{
		try{
			await axiosConnect.delete("/dish/"+id);
			window.location.reload();
		}catch(err){
			console.log(err);
		}

	}

	const editDish = (id)=>{
		navigate("/update/"+id);
	}

	return(
		<div className={"admin-container"}>
			<table className={"admin-table"}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Dish Name</th>
						{/*<th>Dish Desc</th>*/}
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{dishes && dishes.map((dish)=>(
						<tr key={dish.id}>
							<td>{dish.id}</td>
							<td>{dish.title}</td>
							<td>${dish.price}</td>
							<td>
								<button onClick={()=>{handleDelete(dish.id)}}><Trash3 /></button>
								<button onClick={()=>{editDish(dish.id)}}><PencilSquare /></button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<button onClick={()=>{navigate("/add-dish")}}><PlusCircleFill /></button>
			</div>

		</div>
	)
}

export default Admin;
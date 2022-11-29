import {useState} from "react";
import "../../Assets/css/Body/UpdateDish.css"
import {useLocation, useNavigate} from "react-router-dom";
import {axiosConnect} from "../../axios";

const UpdateDish = () =>{
	const [dish, setDish] = useState({
		title:"",
		description:"",
		price:null,
		image:"",
	});

	const navigate = useNavigate();
	const location = useLocation();
	const bookID = location.pathname.split("/")[2];

	const handleChange = (e) =>{
		setDish((prev)=>({
			...prev,
			[e.target.name] : e.target.value
		}));
	};

	const handleClick = async (e) =>{
		e.preventDefault();
		try{
			await axiosConnect.post("/dish/"+bookID,dish);
			navigate("/admin");
		}catch(err){
			console.log(err);
		}
	}


	return(
		<div className={"updateDish-container"}>
			<div className={"updateDishForm"}>
				<h1>Update dish</h1>
				<input
					type="text"
					placeholder={"Enter dish name."}
					name={"title"}
					onChange={handleChange}/>
				<input
					type="text"
					placeholder={"Enter dish description."}
					name={"desc"}
					onChange={handleChange}/>
				<input
					type="number"
					placeholder={"Enter dish price"}
					name={"price"}
					onChange={handleChange}/>
				<input
					type="text"
					placeholder={"Enter image name"}
					name={"image"}
					onChange={handleChange}
				/>
				<button id={"formSubmitBtn"} onClick={handleClick}>Update</button>
			</div>
		</div>
	)
}

export default UpdateDish;
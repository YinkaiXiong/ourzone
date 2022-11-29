import {useState} from "react";
import "../../Assets/css/Body/AddDish.css"
import {useNavigate} from "react-router-dom";
import {axiosConnect} from "../../axios";

const AddDish = () =>{
	const [dish, setDish] = useState({
		title:"",
		description:"",
		price:null,
		image:"",
	});

	const navigate = useNavigate();

	const handleChange = (e) =>{
		setDish((prev)=>({
			...prev,
			[e.target.name] : e.target.value
		}));
	};

	const handleClick = async (e) =>{
		e.preventDefault();
		try{
			await axiosConnect.post("/addDish",dish);
			navigate("/menu");
		}catch(err){
			console.log(err);
		}
	}


	return(
		<div className={"addDish-container"}>
			<div className={"addDishForm"}>
				<h1>Add a dish</h1>

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
				<button id={"formSubmitBtn"} onClick={handleClick}>Add</button>
			</div>
		</div>
	)
}

export default AddDish;
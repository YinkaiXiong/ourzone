import "../../Assets/css/Body/Card.css";
import {PlusCircleFill} from "react-bootstrap-icons";

const Card = (props) =>{

	return(
		<div className={"card-container"}>
			<div className={"card-left"}>
				{props.dishImg === "Null"
					? <img src={"images/placeholder.jpg"} alt="dish"/>
					: <img src={"images/"+props.dishImg} alt="dish"/>
				}

			</div>
			<div className={"card-right"}>
				<h4>{props.dishTitle}</h4>
				<p>{props.dishDesc}</p>
				<p>$ {props.dishPrice}</p>
				<button onClick={()=>{
					console.log("clicked");}} className={"add-bag-BTN"}>
					<PlusCircleFill  style={{marginTop: "0.3em"}}/>
				</button>
			</div>
		</div>
	)

}

export default Card;
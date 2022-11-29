import "../../Assets/css/Body/Home.css"

const Home = () =>{

	return(
		<div className={"body-container"}>
			<img src={"images/logo.jpg"} alt="" id={"img-logo"}/>
			<h2 id={"title"}>Sichuan Restaurant</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consectetur corporis distinctio doloribus eum excepturi explicabo hic illo ipsam, neque odit, quaerat qui quod reiciendis rem saepe sapiente tenetur!</p>
			<div className={"image-container"}>
				<img src={"images/menu_dish1.webp"} alt="demo1"/>
				<img src={"images/menu_dish2.webp"} alt="demo2"/>
				<img src={"images/menu_dish3.webp"} alt="demo3"/>
				<img src={"images/menu_dish4.webp"} alt="demo4"/>
				<img src={"images/menu_dish5.webp"} alt="demo5"/>
				<img src={"images/menu_dish6.webp"} alt="demo6"/>
				<img src={"images/menu_dish7.webp"} alt="demo7"/>

			</div>

		</div>
	)
}

export default Home;
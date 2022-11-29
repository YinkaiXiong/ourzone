import "../../Assets/css/Body/Contact.css"

const Contact = () =>{

	return(
		<div className={"contact-container"}>

			<div className={"contactInfo-container"}>
				<h1>Contact Us</h1>
				<h3>Contact Information</h3>
				<p><span>Email: </span>ourzone1583@gmail.com</p>
				<p><span>Phone: </span>617-789-3688</p>
				<p><span>Address: </span>1583 Commonwealth Ave,</p>
				<p>Boston, MA 02135</p>

			</div>

			<div className={"emailForm-container"}>
				<h3>Send Email</h3>
				<form>
					<div className={"input-boxes"}>
						<input
							type="text"
							name={"name"}
							placeholder={"Enter Your Name."}
							required={true}/>
					</div>

					<div className={"input-boxes"}>
						<input
							type="text"
							name={"email"}
							placeholder={"Enter Your Email."}
							required={true}/>

					</div>

					<div className={"input-boxes"}>
						<textarea
							name="message"
							placeholder={"Enter Your Message."}
							required></textarea>
					</div>

					<div className={"input-boxes"}>
						<button
							type={"submit"}
							id={"formSubmitBtn"}>Submit</button>
					</div>

				</form>
			</div>
		</div>

	)
}

export default Contact;
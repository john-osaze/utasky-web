import { Link } from "react-router-dom"

const Button_Major = ({destination, btnText}) => {
	return (
		<Link to="/signup">
			<button className="btn-major">
				{btnText}
			</button>
		</Link>
	)
}

export default Button_Major
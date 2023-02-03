const Button_Major = ({destination, btnText}) => {
	return (
		<a href={destination}>
			<button className="btn-major">
				{btnText}
			</button>
		</a>
	)
}

export default Button_Major
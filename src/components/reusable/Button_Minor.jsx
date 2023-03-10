import { Link } from "react-router-dom"

const Button_Minor = ({ destination, style }) => {
    return (
        <Link to="/login">
            <button className="btn-minor" style={style}>
                Learn more <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" style={{display: "inline"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                </span>
            </button>
        </Link>
    )
}

export default Button_Minor
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Join from "../components/Join"
import Process from "../components/Process"
import Product from "../components/Product"
// import Subscribe from "../components/Subscribe"
import Promo from "../components/Promo"


const Home = () => {
    return (
        <>
            <Hero />
            <Process />
            <Promo />
            <Product />
            <Join />
            <Footer/>
        </>
    )
}

export default Home
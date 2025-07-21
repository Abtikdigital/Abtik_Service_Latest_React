import Navbar from "./Navbar"
import Footer from "./Footer"

const Mainlayout = (props: any) => {
    return (<>
        <Navbar />
        {props.children}
        <Footer />
    </>)
}


export default Mainlayout
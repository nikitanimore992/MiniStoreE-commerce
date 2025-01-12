import { Outlet } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>

            <div style={{margin:"0px 30px 0px 30px"}}>
            
                    <TopMenu />

                    <Outlet />

                    <Footer />
                    </div>     

        </>
    )
}

export default Layout;
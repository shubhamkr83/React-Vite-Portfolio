import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const MainHeader = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainHeader
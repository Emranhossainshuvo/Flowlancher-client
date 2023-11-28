import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="font-custom">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
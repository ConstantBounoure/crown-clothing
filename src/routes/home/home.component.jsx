import { Outlet } from "react-router-dom";

import CategoriesList from "../../components/categories-list/categories-list.component";

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <CategoriesList></CategoriesList>;
        </div>
    );
};

export default Home;

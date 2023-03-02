import { Outlet } from "react-router-dom";

import CategoriesList from "../../components/categories-list/categories-list.component";

import CATEGORIES from "../../mock/categories.json";

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <CategoriesList categories={CATEGORIES}></CategoriesList>;
        </div>
    );
};

export default Home;

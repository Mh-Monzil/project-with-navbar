import { useLoaderData } from "react-router-dom";
import User from "./User";


const Users = () => {

    const Users = useLoaderData();

    return (
        <div>
            <h1 className="text-center py-5 font-semibold text-3xl">Our Users : {Users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4">
                {
                    Users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;

import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website,email,username,phone} = user;
    console.log(user,name, website);
    return (
        <div className=" w-full md:w-96 mx-auto bg-base-100 shadow-xl border text-center m-4 rounded-2xl">
            <div className="card-body flex flex-col ">
                <h2 className="text-2xl font-bold pt-4">Name: {name}</h2>
                <div className='font-semibold text-lg'>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>UserName: {username}</p>
                <p>Website: {website}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
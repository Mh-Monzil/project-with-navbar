import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name,id} = user;
    const navigate = useNavigate();
    return (
        <div className="card w-full md:w-96 mx-auto bg-base-100 shadow-xl border ">
            <div className="card-body flex flex-col">
                <h2 className="text-2xl font-semibold pt-4">{name}</h2>
                <div className="card-actions justify-end pt-8">
                    <button onClick={() => navigate(`/user-details/${id}`)} className="btn btn-error text-white text-lg w-full">See Details</button>
                </div>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;
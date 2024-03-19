import { FaCheck } from "react-icons/fa";
import PropTypes from 'prop-types'

const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-2">
            <FaCheck className="text-green-500"/>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}

export default Feature;
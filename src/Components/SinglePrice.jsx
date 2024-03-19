import PropTypes from 'prop-types'
import Feature from './Feature';

const SinglePrice = ({card}) => {
    const {name, price, features} = card; 
    return (
        <div className="card w-full md:w-96 mx-auto bg-base-100 shadow-xl border">
            <div className="card-body flex flex-col">
                <h2 className='text-4xl font-semibold text-center text-rose-500'>${price}/<span className='text-black text-xl'>month</span></h2>
                <h2 className="text-2xl font-semibold pt-4">{name}</h2>
                <div className='flex-grow'>
                    {
                        features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                    }
                </div>
                <div className="card-actions justify-end pt-8">
                    <button className="btn btn-error text-white text-lg w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

SinglePrice.propTypes = {
    card : PropTypes.object,
}

export default SinglePrice;
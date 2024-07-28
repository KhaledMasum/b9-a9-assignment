import PropTypes from 'prop-types';
import { FaDollarSign, FaChartArea } from "react-icons/fa";

const Estate = ({ estate }) => {
    const { image, estate_title, description, area, price, status } = estate;
    console.log(estate_title);
    return (
        <div className="card glass hover:scale-95 transition duration-500">
            <figure>
                <img
                    src={image}
                    alt="car!" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p className='text-justify'>{description.length >= 100 ? description.slice(0, 100) : description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center text-sm">
                        <FaChartArea />
                        <span>{area}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <FaDollarSign />
                        <span>{price}</span>
                    </div>
                </div>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <div className="card-actions justify-between items-center">
                    <p className='text-md font-medium'>Status: {status}</p>
                    <button className="btn btn-outline btn-primary">View Property</button>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object,
}

export default Estate;
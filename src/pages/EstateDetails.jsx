import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estateData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estateData.find(estate => estate.id === idInt);

    return (
        <div className="card grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-xl rounded-none lg:rounded-2xl max-w-6xl mx-auto sm:my-10">
            <figure><img src={estate.image} className="h-full" alt="Album" /></figure>
            <div className="card-body p-4">
                <h2 className="card-title">{estate.estate_title}</h2>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <p className="text-sm"><span className="font-medium">Segment:</span> {estate.segment_name}</p>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <p className="text-sm text-justify"><span className="font-medium">Description:</span> {estate.description}</p>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <div className="grid grid-cols-2">
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-sm font-medium">Price:</p>
                            <p>{estate.price}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-sm font-medium">Status:</p>
                            <p>{estate.status}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-sm font-medium">Area:</p>
                            <p>{estate.area}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-sm font-medium">Location:</p>
                            <p>{estate.location}</p>
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <h4 className="font-medium">Facilities</h4>
                        <div className='flex flex-col gap-1'>
                            {
                                estate.facilities.map((facility, id) => <li key={id} className="text-sm">Facility {facility}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
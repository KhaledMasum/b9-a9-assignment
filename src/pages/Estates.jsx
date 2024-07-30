import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="font-semibold text-4xl text-center my-4">Estates List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:px-0 pt-0">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }

            </div>
        </div>
    );
};

export default Estates;
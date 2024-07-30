import { useContext } from 'react';
import aboutUs from '../assets/about-us.jpg'
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const AboutUs = () => {
    const { DocumentTitle } = useContext(AuthContext);
    DocumentTitle("About Us");
    return (
        <div className="card grid lg:grid-cols-2 lg:card-side bg-base-100 shadow-xl rounded-none lg:rounded-2xl max-w-6xl mx-auto lg:my-10">
            <figure><img src={aboutUs} className="h-full" alt="Album" /></figure>
            <div className="card-body p-4">
                <h2 className="card-title">About Us</h2>
                <hr className="border-t-1 border-dashed border-slate-400" />
                <p className="text-sm text-justify">Skyline Residences is more than just a real estate company; we are your partners in crafting the perfect living space. Our mission is to elevate the concept of homeownership by providing exceptional properties that not only meet but exceed your expectations.
                    With a keen eye for design and a deep understanding of the market, we curate a diverse portfolio of residential and commercial properties. Whether you are seeking a cozy apartment, a spacious family home, or a thriving business location, Skyline Residences has the ideal property to suit your lifestyle.
                    Our commitment to excellence extends beyond property acquisition. We believe in building lasting relationships with our clients, offering personalized service and expert guidance every step of the way. From property search to closing the deal and beyond, our dedicated team is committed to making your real estate journey as smooth and rewarding as possible.
                    At Skyline Residences, we are passionate about creating vibrant communities and enriching lives. We strive to develop properties that not only enhance the cityscape but also contribute positively to the neighborhoods they reside in.
                    Discover the Skyline difference. Let us help you find your perfect space today.</p>
                <hr className="border-t-1 border-dashed border-slate-400" />
            </div>
        </div>
    );
};

export default AboutUs;
import './feature.css'

const Feature = () => {
    return (
        <div className="bg-gray-400 border-slate-300 pt-4 border brdr mb-16 pb-10 max-w-4xl rounded-md mx-auto">
            <div className="w-[90%] mx-auto py-3 ">
                <h3 className="text-4xl text-white mb-5 font-semibold">5 Important feature of this website</h3>
                <ol className="text-white ps-5 list-decimal">
                    <li className="pb-1">Sigle Page Application</li>
                    <li className="pb-1">Authentication with Firebase</li>
                    <li className="pb-1">Connected to MongoDB</li>
                    <li className="pb-1">Dynamic website</li>
                    <li className="pb-1">Backend Admin</li>
                </ol>
            </div>
        </div>
    );
};

export default Feature;
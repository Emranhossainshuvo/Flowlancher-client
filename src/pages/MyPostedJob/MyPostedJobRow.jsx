import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPostedJobRow = ({ job, handleDelete }) => {

    const { _id, title, description, maximum, minimum, deadline, select } = job || {}





    return (
        <tr className=" border-b  dark:border-gray-700">
            <th scope="row" className="px-6 text-lg flex justify-between items-center py-4  text-white font-semibold whitespace-nowrap">
                {title}
                <button onClick={() => handleDelete(_id)} className="btn bg-white btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>

            <td className="px-6 text-lg py-4">
                ${minimum}
            </td>
            <td className="px-6 text-lg py-4">
                ${maximum}
            </td>
            <td className="px-6 text-lg py-4">
                {deadline}
            </td>
            <td className="px-6 text-lg py-4">
                <Link to={`/updatejob/${_id}`}>
                <button className="btn hover:btn-neutral">
                    Update
                </button>
                </Link>
            </td>
        </tr>
    );
};

export default MyPostedJobRow;
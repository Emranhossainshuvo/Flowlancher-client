import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MybidsCard = ({bid}) => {

    const {_id, title, email, deadline, price, select, buyer } = bid || {}

    return (
        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4  text-white font-semibold text-lg  whitespace-nowrap dark:text-white">
                {select}
            </th>
            <th scope="row" className="px-6 py-4  text-white font-semibold text-lg  whitespace-nowrap dark:text-white">
                {buyer}
            </th>
            {/* <td className="px-6  text-white font-semibold text-lg py-4">
                {email}
            </td> */}
            <td className="px-6 text-white font-semibold text-lg py-4">
                {deadline}
            </td>
            <td className="px-6 text-white font-semibold text-lg py-4">
                {price}
            </td>
        </tr>
    );
};

export default MybidsCard;
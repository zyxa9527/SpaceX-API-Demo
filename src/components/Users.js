import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USERS_INFO } from "./../graphql/queries";
import Loading from "./Loading";

export default function Users() {
  const [search, setSearch] = useState("");
  const { loading, error, data: queryData } = useQuery(GET_USERS_INFO);
  if (error) return <p>Error</p>;
  let filterData;
  if (queryData) filterData = queryData.users;
  if (search !== "")
    filterData = filterData.filter((e) => e.name.includes(search));

  return (
    <div className="p-10">
      <div className="flex  justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="h-10 relative outline-none rounded px-2 py-1 w-1/2   bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
          placeholder="search name"
        />
      </div>
      {loading ? (
        <div className="mt-5 w-full flex justify-center content-center">
          <Loading />
        </div>
      ) : filterData.length === 0 ? (
        <div className="mt-5 w-full flex justify-center content-center">
          no data
        </div>
      ) : (
        <div className="flex  flex-col mt-20">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block w-full flex justify-center sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="table-auto w-full">
                  <thead className="overflow-auto bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      ></th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        rocket
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        timestamp
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        twitter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterData.map((item, index) => (
                      <tr className="bg-gray-100 border-b" key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.rocket}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.timestamp}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.twitter}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

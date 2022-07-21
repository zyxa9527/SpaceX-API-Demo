import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_SPACE_MISSION } from "./../graphql/queries";
import ReactYoutube from "./../thirdParty/youtube";
import Loading from "./Loading";

export default function Rockets() {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const { loading, error, data: queryData } = useQuery(GET_SPACE_MISSION, {
    variables: { limit, search }
  });
  if (error) return <p>Error</p>;

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

      <div className="xl:p-10  flex flex-wrap">
        {loading ? (
          <div className="mt-5 w-full flex justify-center content-center">
            <Loading />
          </div>
        ) : queryData.launchesPast.length === 0 ? (
          <div className="mt-5 w-full flex justify-center content-center">
            no data
          </div>
        ) : (
          queryData.launchesPast.map((item) => (
            <div
              key={item.id}
              className="xl:p-10 xl:w-1/3 lg:p-5  lg:w-1/2 lg:mt-0 md:w-full md:mt-20 sm:w-full sm:mt-12 w-full mt-12 rounded overflow-hidden "
            >
              <ReactYoutube
                vedioId={item.links.video_link.split("https://youtu.be/")[1]}
              />
              <div className="bg-white px-6 py-4">
                <div className="font-bold text-xl text-black mb-2">
                  {item.mission_name}
                </div>
                <p className="text-gray-700 text-base">
                  {item.launch_site.site_name_long}
                </p>
              </div>
              <div className="bg-white px-6 pt-4 pb-2 rounded-b">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.launch_site.site_name}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {item.launch_date_local}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

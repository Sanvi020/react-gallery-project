import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );

    setuserdata(response.data);
  };

  useEffect(function () {
    getdata();
  }, [index]);

  let printuserdata = "No user available";

  if (userdata.length > 0) {
    printuserdata = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url}>
            <div className="h-40 w-44 overflow-hidden bg-white">
              <img
                className="h-full w-full rounded-xl object-cover"
                src={elem.download_url}
                alt={elem.author}
              />
            </div>

            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      


      <div className="flex flex-wrap gap-4 pt-12">
        {printuserdata}
      </div>

      <div className="flex items-center gap-6 justify-center p-4">
        
        <button
          onClick={() => setindex(index - 1)}
          disabled={index === 1}
          className="bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => setindex(index + 1)}
          className="bg-amber-400 text-black text-sm rounded px-4 py-2 font-semibold"
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default App;
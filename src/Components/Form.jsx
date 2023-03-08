import React, { useState } from "react";
import Result from "./Result";

const Form = () => {
  const data = (val) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c",
        "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
      },
    };
    let URL = `https://twitter154.p.rapidapi.com/user/details?username=${val}`;
    fetch(URL, options)
      // .then(response => response.json())
      .then((response) => response.json())
      .then((response) => setMaze(response));
  };
  const [value, setValue] = useState("");
  const [maze, setMaze] = useState([]);
  // const [confirm, setConfirm] = useState("Confirm Username");
  const [bool, setBool] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () => {
    // setConfirm("Confirmed! Click again");
    proceed();
    data(value);
  };
  const proceed = () => {
    setBool(true);
  };
  return (
    <>
      <div
        className="bg-[#151a21] w-[330px] flex flex-col justify-start text-white py-2 
    px-5 mb-10 rounded-md">
        <span className="text-sm mt-5">Enter Username</span>
        <input
          type="text"
          className="outline-none bg-[#0d1117] text-base h-4 py-4 pl-2 
      border-2 border-[#80808069] rounded-md my-2"
          onChange={handleChange} />
        <button
          className="bg-[#47d662] py-2 rounded-md hover:bg-[#339947] my-3 disabled:bg-slate-600"
          onClick={handleSubmit}
          disabled={bool ? true : false}
        >
          Confirm Username
        </button>
      </div>
      {maze.length === 0 ? (
        ""
      ) : (
        <Result
          des={maze.description}
          followers={maze.follower_count}
          following={maze.following_count}
          verified={maze.is_verified}
          name={maze.name}
          tweets={maze.number_of_tweets}
          banner={maze.profile_banner_url}
          profile={maze.profile_pic_url}
          username={maze.username}
        />
      )}
    </>
  );
};

export default Form;

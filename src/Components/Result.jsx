import React, { createRef } from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

const Result = ((props) => {
  const cardRef = createRef()
  return (
    <>
    <div  ref={cardRef} className="rounded-xl flex flex-col justify-center items-center text-black
     font-semibold bg-white mb-10">
      <div>
        <img
          src={props.banner}
          alt="banner"
          className="rounded-t-xl w-[350px] sm:w-[525px] border-b-4 border-[#0090ff]"
        />
      </div>
      <div className="relative top-[-40px]">
        <img
          src={props.profile.replace("_normal", "")}
          alt="pic"
          className="w-20 border-4 border-[#0090ff] rounded-full"
        />
      </div>
      <div className="relative top-[-25px] text-center">
        <div className="name">
          <span className="text-5xl">{props.name}</span>
        </div>
        <div className="username">
          <span>@{props.username}</span>
        </div>
      </div>
      <div className="des">
        <p className="w-[350px] sm:w-[460px] text-center">
         {props.des}
        </p>
      </div>
      <div className="stats flex justify-around w-full my-6">
        <div className="tweets flex flex-col text-center">
          <span className="text-3xl">{Intl.NumberFormat("en-US").format(props.tweets)}</span>
          <span className="uppercase text-xs">Tweets</span>
        </div>
        <div className="followers flex flex-col text-center">
          <span className="text-3xl">{Intl.NumberFormat("en-US").format(props.followers)}</span>
          <span className="uppercase text-xs">Followers</span>
        </div>
        <div className="following flex flex-col text-center">
          <span className="text-3xl">{Intl.NumberFormat("en-US").format(props.following)}</span>
          <span className="uppercase text-xs">Following</span>
        </div>
      </div>
    </div>
    <button onClick={() => exportComponentAsPNG(cardRef)} 
    className="bg-[#009cff] px-6 py-1 rounded-md text-white mt-10 hover:bg-[#0077c1]">Export Card</button>
    <button onClick={() => window.location.reload(false)}
     className="bg-[#009cff] px-6 py-1 rounded-md text-white my-10 hover:bg-[#0077c1]">Create more cards</button>
    </>
);
});

export default Result;

import React from "react";

const Profile = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Profile</legend>
        <div className="flex items-center ">
          <img
            className="rounded-full w-20 h-20"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <input type="file" className="file-input file-input-neutral ml-4" />
        </div>
        <p>Username</p>
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="Username"
          />
          <button className="btn join-item">update</button>
        </div>
        <p>First Name</p>
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="First Name"
          />
          <button className="btn join-item">update</button>
        </div>
        <p>Last Name</p>
        <div className="join">
          <input
            type="text"
            className="input join-item"
            placeholder="Username"
          />
          <button className="btn join-item">update</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Profile;

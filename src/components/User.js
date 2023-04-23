import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/auth";

const User = () => {
  const userDetails = useSelector((state) => state.auth);
  console.log("zzzz", userDetails);
  const dispatch = useDispatch();
  return (
    <>
      User
      <div>{userDetails.fname}</div>
      <button onClick={() => dispatch(setUser())}>Update User</button>
    </>
  );
};

export default User;

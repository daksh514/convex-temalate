"use client";

import React, { useState } from "react";
import { SignInFlow } from "../types";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

function AuthScreen() {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className=" items-center justify-center bg-[#5c3b58] h-full flex ">
      {
        state == "signIn" ? <SignInCard setState={setState}/> :
        <SignUpCard setState={setState}/>
      }
    </div>
  );
}

export default AuthScreen;

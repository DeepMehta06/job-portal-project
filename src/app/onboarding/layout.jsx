const { getAuthAccount } = require("@/lib/auth");
const { notFound } = require("next/navigation");
import React from "react";
import { checkOnboarding } from "../actions/onBoarding";

async function OnboardingLayout({children}){
    const session = await getAuthAccount();
    const userId = session?.user?.id
    if(!session) return notFound();

    const onboardingStatus = await checkOnboarding(session?.user?.id);
    console.log(onboardingStatus)
    if(onboardingStatus=='NOT_SET') console.log(true)
    return(
        <>
        React.cloneElement(children, {
            userId
        })
        </>
    )
}

export default OnboardingLayout;
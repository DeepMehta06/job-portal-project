const { getAuthAccount } = require("@/lib/auth");
import {notFound, redirect} from "next/navigation";
import React from "react";
import { checkOnboarding } from "../actions/onBoarding";
import OnboardingPage from "./page";

async function OnboardingLayout({ children }) {
    const session = await getAuthAccount();
    const userId = session?.user?.id
    if (!session) redirect('/sign-in');

    const onboardingStatus = await checkOnboarding(session?.user?.id);
    console.log(onboardingStatus)
    if (onboardingStatus == 'NOT_SET') return redirect('/jobs');
    return (
        <OnboardingPage userId = {userId} />
    )
}

export default OnboardingLayout;
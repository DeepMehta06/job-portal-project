"use server";

import { prisma } from "@/lib/prisma";
import { getAuthAccount } from '@/lib/auth';

export async function checkOnboarding(userId) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { role: true }
        })
        return user.role
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function onBoardingSubmission(user_role) {
    console.log("DEBUG: onBoardingSubmission called");
    const session = await getAuthAccount();
    console.log("DEBUG: Session retrieved", session);

    const userId = session?.user?.id;
    console.log("DEBUG: UserID resolved to:", userId);

    if (!userId) {
        console.log("User not authenticated");
        return false;
    }
    try {
        console.log("DEBUG: Attempting Prisma Update for ID:", userId);
        const onBoarding = await prisma.user.update({
            where: { id: userId },
            data: { role: user_role.requestedRole }
        })
        console.log("DEBUG: Update success");
        return onBoarding.role;
    } catch (error) {
        console.log("DEBUG: Error", error.message);
        return false;
    }
}
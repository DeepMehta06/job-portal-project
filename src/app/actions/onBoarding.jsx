"user server";

import { prisma } from "@/lib/prisma";

export async function checkOnboarding(userId){
    try {
        const user = await prisma.user.findUnique({
            where : {id : userId},
            select : {role : true}
        })
        return user.role        
    } catch (error) {
        console.log(error.message);
        return false;
    }
}

export async function onBoardingSubmission(role){
    
}
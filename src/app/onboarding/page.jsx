import { getAuthAccount } from "@/lib/auth";

export default async function Onboarding(){
    const session = await getAuthAccount();
    console.log(session);
    return(
        <div>
            onboarding page
        </div>
    )
}
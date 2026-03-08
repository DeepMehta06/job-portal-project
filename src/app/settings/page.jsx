import { getAuthAccount } from '@/lib/auth';
import React from 'react';
import { notFound, redirect } from 'next/navigation';
import CompanySettingForm from '@/components/pages/company-setting-page';
import UserSettingForm from '@/components/pages/user-setting-page';
import { prisma } from '@/lib/prisma';
async function SettingPage() {
    const session = await getAuthAccount();
    if (!session || !session.user) return notFound();
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
    })

    if (!user) return redirect('/sign-in');
    if (user.role == 'EMPLOYER') {
        return <CompanySettingForm />
    }
    else if (user.role === 'JOB_SEEKER') return <UserSettingForm />;
    else notFound();
    return (
        <>
        
        </>
    )
}
export default SettingPage;
//gjhjh

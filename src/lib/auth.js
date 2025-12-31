import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google"
import { getServerSession } from "next-auth";

export const authOption = {
    adapter: PrismaAdapter(prisma),
    session : {
        strategy : "jwt"  // Fixed typo: was "stratergy"
    },
    pages : {
        signIn : '/sign-in'
    },
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "select_account"
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}) {
            if(user){
                const dbUser = await prisma.user.findUnique({
                    where : {email:user.email},
                    select : {
                        name :true, 
                        email : true,
                        role : true,
                        image : true,
                        slug : true,
                        id : true
                    }
                })
                if(dbUser){
                    token.id = dbUser.id;
                    token.name = dbUser.name;
                    token.email = dbUser.email;
                    token.role = dbUser.role;
                    token.slug = dbUser.slug;
                    token.image = dbUser.image;
                }
                else {
                    const newUser = await prisma.user.create({
                        data : {
                            email : user.email,
                            name : user.name,
                            image : user.image,
                            role : 'JOB_SEEKER'
                        }
                    })
                    token.id = newUser.id;
                    token.name = newUser.name;
                    token.email = newUser.email;
                    token.role = newUser.role;
                    token.image = newUser.image;
                    token.slug = newUser.slug;
                }
            }
            return token;
        },
        async session({session, token}){
            if(token){
            session.user.id = token.id,
            session.user.name = token.name,
            session.user.email = token.email,
            session.user.image = token.image,
            session.user.role = token.role
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl + '/onboarding'
        }
    }
}

export const getAuthAccount = () => getServerSession(authOption)
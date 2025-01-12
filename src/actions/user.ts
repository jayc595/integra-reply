"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export const onCurrentUser = async () => {
    const user = await currentUser()
    if(!user) {
        //Redirect non logged in user back to sign in page.
        return redirect(`${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`)
    } 

    return user
}

export const onGetUserInfo = async () => {
    const currentUser = await onCurrentUser()
    try{
        const userProfile = await getUser(currentUser.id)
        if(userProfile){
            return { status: 200, data: userProfile }
        }
        return { status: 404 }
    } catch(error){
        return { status: 500 }
    }
}

export const userInitialization = async () => {
    const currentUser = await onCurrentUser();
    try {
        const user = await getUser(currentUser.id);
        if(user){
            //user exists return 201.
            return {
                status: 200,
                data: {
                    clerkId: user.clerkId,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            }
        } else {
            //user doesn't exist so create.
            const newUser = await createUser(
                currentUser.id,
                currentUser.firstName!,
                currentUser.lastName!,
                currentUser.emailAddresses[0].emailAddress
            )

            return { status: 201, data: newUser }
        }
    } catch(error){
        //@TODO: Add toast messaging and add more user friendly messaging.
        console.log(`User initialization failed. Reason: ${error}`)
        return { status: 500 }
    }
}

export const createUser = async (
    clerkId: string,
    firstname: string,
    lastname: string,
    email: string
) => {
    return await client.user.create({
        data : {
            clerkId,
            firstname,
            lastname,
            email,
            subscription: {
                create: {},
            }
        },
        select : {
            clerkId: true,
            firstname: true,
            lastname: true,
            email: true
        }
    })
}

export const getUser =  async (clerkId: string) => {
    return await client.user.findUnique({
        where: {
            clerkId
        },
        include: {
            subscription: true
        }
    })
}
import React from "react";
type Props = {
    username: string;
    name: string;
    surname: string;
}
export const Card = ({username, name, surname}: Props ) => {
    return (
        <div className="flex w-full px-8 md:py-5 md:w-1/4">
            <div className="flex flex-col items-start w-full space-y-1 truncate bg-white border border-pink-500 rounded-lg ">
                <h1 className="mx-3 mt-5 text-3xl font-medium text-pink-500 md:text-2xl">{username}</h1>
                <p className="pb-5 mx-3 text-base font-semibold">{name} {surname}</p>
            </div>
        </div>
    )
}
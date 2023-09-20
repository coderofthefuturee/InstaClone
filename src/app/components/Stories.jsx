"use client"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Story from "./Story";
// import { userState } from "../atom/userAtom"; from "./Story";
// import { userState } from "../atom/userAtom";

export default function Stories() {
    // const [storyUsers, setSoryUsers] = useState([]);
    // const [currentUser] = useRecoilState(userState)
    // useEffect(() => {
    //     const storyUsers = minifaker.array(20, (i) => ({
    //     username: minifaker.username({ locale: "en" }).toLowerCase(),
    //     img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
    //     id: i,
    //     }));
    //     setSoryUsers(storyUsers);
    //     console.log(storyUsers);
    // }, []);
    return (
        <div class="absolute overflow-x-scroll scrollbar-none sm:mt-2 lg:mt-5 md:mt-4 scale-125 lg:w-auto md:w-auto sm:w-4/5 left-1/2 transform -translate-x-1/2 opacity-90 top-24 flex justify-center items-center shadow-black shadow-lg bg-gradient-to-b from-gray-600 to-gray-900 rounded-full">
            <div className="flex cursor-pointer space-x-1 lg:space-x-1 md:space-x-1 sm:space-x-2 p-4 sm:p-3">
                <Story src="/ba12.jpg" id='1' />
                <Story src="/ba13.jpg" id='2' />
                <Story src="/ba5.png" id='3' />
                <Story src="/ba6.png" id='4' />
                <Story src="/ba1.png" id='5' />
                <Story src="/ba7.png" id='6' />
                <Story src="/ba8.png" id='7' />
                <Story src="/ba9.png" id='8' />
            </div>
        </div>
    )
}

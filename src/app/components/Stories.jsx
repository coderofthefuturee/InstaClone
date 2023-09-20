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
        <div class="absolute overflow-x-scroll scrollbar-none mt-2 scale-125 left-1/2 transform -translate-x-1/2 opacity-90 top-24 flex justify-center items-center shadow-black shadow-lg bg-gradient-to-b from-gray-600 to-gray-600 rounded-full">
            <div className="flex space-x-1 p-3">
                <Story src="/ba12.jpg" />
                <Story src="/ba13.jpg" />
                <Story src="/ba5.png" />
                <Story src="/ba6.png" />
                <Story src="/ba1.png" />
                <Story src="/ba7.png" />
                <Story src="/ba8.png" />
                <Story src="/ba9.png" />
            </div>
        </div>
    )
}

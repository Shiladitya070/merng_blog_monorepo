'use client'
import { userState } from "@/store/atoms/user"
import { useRecoilState } from "recoil"

export default () => {
    const [user, setUser] = useRecoilState(userState)

    return (
        <div className="h-[500px] col-span-4 bg-white rounded-lg shadow-md">
            {!user.user
                ? <>
                    <h1>Loading...</h1>
                </> : <>
                    <h1>{user.user.email}</h1>
                    <h1>{user.user.username}</h1>
                    <h1>{user.user.verified}</h1>
                </>}
        </div>
    )
}
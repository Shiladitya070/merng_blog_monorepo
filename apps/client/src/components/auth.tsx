import Link from "next/link"

export const Register = () => {
    return (
        <Link href="/register" className="text-white bg-amber-600 hover:bg-amber-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
    )
}

export const Login = () => {
    return (
        <Link href="/login" className="text-white border hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
    )

}
export const Logout = () => {
    return (
        <Link href="/logout" className="text-white border hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
    )
}
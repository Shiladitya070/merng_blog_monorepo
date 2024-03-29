import Link from "next/link"
import { Login, Register } from "./auth"

export default () => {
    return (
        <nav className="sticky shadow-md top-0 bg-amber-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href={"/"} className="text-white font-bold text-lg">Blog App</Link>
                    </div>
                    <div className="md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <a href="#" className="text-white hover:bg-amber-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-white hover:bg-amber-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            <div>
                                <Login />
                                <Register />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
}
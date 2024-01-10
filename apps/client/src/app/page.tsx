import UserCard from "@/components/UserCard";
import PostCard from "@/components/postCard";

export default async function Home() {

  return (
    <div>
      <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 items-start'>
        <div className="col-span-8 bg-red">
          <PostCard bannerUrl={"https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className={"my-2"} author={"test"} title={"this is a title"} description={"Hello their"} avatar={"https://api.dicebear.com/7.x/pixel-art/svg"} />
        </div>
        <UserCard />
      </div>
    </div>
  )
}
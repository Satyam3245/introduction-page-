export default function Portfolio({name , age,location,followers,likes,Postlike}){
    return <div className="">
        <div className="w-screen h-[210px] bg-teal-500"></div>
        <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1583195763986-0231686dcd43?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[170px] h-[150px] rounded-[85px] relative top-[-80px] " />
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
            <div className="text-[32px] font-semibold">{name}</div>
            <div className="text-gray-500">{location}</div>
            </div>
        </div>
        <hr  className="border-[1px] border-gray-400 my-12"/>
        <div className="flex justify-center">
            <div className="flex flex-col items-center mx-10 ">
                <div className="text-[20px] font-semibold">{followers}</div>
                <div className="text-gray-600 mt-[8px]">Followers</div>
            </div>

            <div className="flex flex-col items-center mx-10 ">
                <div className="text-[20px] font-semibold">{likes}</div>
                <div className="text-gray-600 mt-[8px]">Likes</div>
            </div>

            <div className="flex flex-col items-center mx-10 ">
                <div className="text-[20px] font-semibold">{Postlike}</div>
                <div className="text-gray-600 mt-[8px]">Photos</div>
            </div>
        </div>
    </div>
}
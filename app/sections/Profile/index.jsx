import { data } from "@/app/contents/skill&about";

const Profile = () =>{
    return (
        <div className="space-y-4">
            <div className="text-white mt-10">{data.subtitle2}</div>
            <div>
                <div>{data.name}</div>
                <div>{data.nickname}</div>
                <div>{data.address}</div>
                <div>{data.age}</div>
                <div>{data.email}</div>
                <div>{data.phone}</div>
                <div>{data.education}</div>
                <div>{data.gpa}</div>
            </div>
        </div>
    )
}
export default Profile;
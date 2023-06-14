import { useContext } from "react";
import { AuthContext } from "../Providers/Authpovider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data:isInstructors,isLoading:isInstructorsLoading} = useQuery({
        queryKey: ['isInstructors',user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`)
            console.log(res.data.instructors,'33')
            return res.data.instructors
        }
    })
    return[isInstructors,isInstructorsLoading]
}
export default useInstructors;

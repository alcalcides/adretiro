import post from "./interface/post";

export default async function createContribution({username, value}){
    return await post("/contributions", {username, value});
}
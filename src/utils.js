import {data} from "./data";

export const allCategories=()=>{
    const categorires= Array.from(new Set(data.map(obj=>obj.category)))
    return [...categorires,'all'].sort((a,b)=>a.localeCompare(b))   //tömb       
}
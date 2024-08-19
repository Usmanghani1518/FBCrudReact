import {db} from "@/firebaseConfig";
import { IPost } from "@/Types";
import { addDoc, collection } from "firebase/firestore";

const COLLECTION_NAME = "post";

export const createPost = (post:IPost)=>{
    return addDoc(collection(db,COLLECTION_NAME),post)
}
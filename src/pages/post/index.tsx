import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import  { useState } from 'react';
import '@uploadcare/react-uploader/core.css';
import { IPost, PhotoMeta } from "@/Types";
import FileUploader from "@/components/uploadCare";
import { useUserAuth } from "@/context/userAuthContext";


interface IPostProps {}

const Post: React.FC<IPostProps> = () => {
  const [files, setFiles] = useState<PhotoMeta[]>([]);
  const {user}= useUserAuth()

  const [post,setPost] = useState<IPost>({
    caption:'',
    date:new Date(),
    likes:0,
    photo:[],
    userId:"",
    userLikes:[]
  })


 const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  const newPost:IPost={
    ...post,
    photo:files,
    userId:user?.uid
  }
  console.log("post is ",newPost,user?.uid)
 }
 
  return (
    <div className="flex justify-center ">
      <div className="border max-w-3xl w-full">
        <h3 className="bg-slate-800 text-white  text-center text-lg p-2">
          Create Post
        </h3>
        <div className="p-8">
          <form  onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Label className="mb-4" htmlFor="caption">
                Photo Caption
              </Label>
              <Textarea
                className="mb-8"
                id="caption"
                placeholder="What's in your photo"
                onChange={(e)=>setPost({...post,caption:e.target.value})}
              />
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="photo">
                  Your Photo
                </Label>

                <FileUploader  onChange={setFiles} />
                
                <Button className="w-32 mt-8">Upload Photo</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Post;

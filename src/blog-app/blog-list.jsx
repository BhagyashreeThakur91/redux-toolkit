import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleDeleteBlog, handleInputChange, setBlogListOnInitialLoad, setCurrentEditedBlogId } from "../store/slices/blogSlice";

function BlogList() {
    const dispatch = useDispatch();
    const { blog } = useSelector((state)=>state);
    const { blogList } = blog;
    
    useEffect(()=>{
        dispatch(setBlogListOnInitialLoad({
            blogList : JSON.parse(localStorage.getItem('blogList')) || []
        }))
    },[])

    function onDeleteBlog(getCurrentBlogId) {
        dispatch(handleDeleteBlog({
            currentBlogId : getCurrentBlogId
        }))
    }

    function onEditBlog(getCurrentBlog) {
        dispatch(setCurrentEditedBlogId({
            currentBlogId : getCurrentBlog?.id
        }))
        dispatch(handleInputChange({
            title : getCurrentBlog?.title,
            description : getCurrentBlog?.description
        }))
    }

  return  (
    <ul>
        {
            blogList?.length > 0 ?
            blogList.map((singleBlogItem)=> <div
            className=" border border-red-300 bg-gray-300 p-5 mt-5"
             key={singleBlogItem?.id}>
                <h3>{singleBlogItem?.title}</h3>
                <h3>{singleBlogItem?.description}</h3>
                <div className="flex gap-3">
                <button
                 className="bg-blue-600 text-white"
                 onClick={()=>onEditBlog(singleBlogItem)}
                 >Edit Blog</button>
                <button 
                className="bg-red-500 text-white"
                onClick={()=>onDeleteBlog(singleBlogItem?.id)}
                >Delete Blog</button>
                </div>
            </div>)
            : <h1>No Blog Added! Please add one</h1>
        }
    </ul>
  )
}

export default BlogList
import { useDispatch, useSelector } from 'react-redux'
import { handleInputChange, handleAddTodo, handleEditBlog, setCurrentEditedBlogId } from '../store/slices/blogSlice';
function AddNewBlog() {

    const { blog } = useSelector((state) => state);
    const dispatch = useDispatch();
    const {currentEditedBlogId} = blog;
    
    function onChangeInput(event) {
        dispatch(
            handleInputChange({
            [event.target.name] : event.target.value,
        })
    );
    }
    

    function handleTodoSubmit(event) {
        event.preventDefault();
        if(currentEditedBlogId !== null ) dispatch(handleEditBlog())
            else dispatch(handleAddTodo());

        if(currentEditedBlogId !== null) dispatch(setCurrentEditedBlogId({
            currentBlogId : null
        }));

        dispatch(handleInputChange({
            title :'',
            description : ''
        }))
    }

    return (
        <div className='mt-10'>
            <form onSubmit={handleTodoSubmit}>
                <div>
                    <label htmlFor="title">Enter Blog title</label>
                    <input
                    className='border border-gray-700 m-5'
                    type="text"
                    name="title"
                    placeholder="Enter Blog title" 
                    id="title"
                    onChange={onChangeInput}
                    value={blog?.formData?.title}
                    />
                </div>
                <div>
                    <label htmlFor="description">Enter Blog Description</label>
                    <input
                    className='border border-gray-700 m-5'
                    type="text"
                    name="description"
                    placeholder="Enter Blog Description" 
                    id="description"
                    onChange={onChangeInput}
                    value={blog?.formData?.description}
                    />
                </div>
                <button
                 className='mt-5 bg-black text-white' type="submit">
                    { blog?.currentEditedBlogId ? 'Edit Blog' : 'Add New Blog'}
                </button>
            </form>
        </div>
    )
}
export default AddNewBlog
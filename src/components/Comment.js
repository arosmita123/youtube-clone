const Comment = ({ data }) => {
    const { name, text, replies } = data
    return (
        <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
            <img className="w-12 h-12" alt="user" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" />
           <div className="px-3">
           <p className="font-bold">{name}</p>
            <p>{text}</p>
           </div>
        </div>
    )
}
export default Comment
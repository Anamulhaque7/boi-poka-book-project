import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utilty/addToDb";

const BookDeatils = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)
    const book = data.find(book => book.bookId === id)

    const { bookId: curentBookId, image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = book;


    const handalMarksAsRed = (id) => {
        addToStoreReadList(id)
    }




    return (
        <div className="my-12 md:flex">
            <div className="bg-gray-300 p-6">
                <img className="max-w-[400px] mx-auto rounded-xl" src={image} alt="" />

            </div>
            <br />
            <div className="border p-8">
                <div>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p> Buy :  {author}</p>
                    <div className="border-t-2 my-2  border-dashed"></div>
                    <p>{category}</p>
                    <div className="border-t-2 my-2  border-dashed"></div>
                    <p><span className="font-bold">Review</span> :  {review}</p>
                    <div className="flex justify-around">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-600 "> #{tag} </button>)
                        }
                    </div>
                    <div className="border-t-2 my-2  border-dashed"></div>
                    <div className=" space-y-4 mb-5">
                        <div className="flex justify-between">
                            <p>Number of Pages </p>
                            {totalPages}
                        </div>
                        <div className="flex justify-between">
                            <p>Publish</p>
                            {publisher}
                        </div>
                        <div className="flex justify-between">
                            <p>Year of Publishing</p>
                            {yearOfPublishing}
                        </div>
                        <div className="flex justify-between">
                            <p>Rating</p>
                            {rating}
                        </div>
                    </div>
                </div>

                <button onClick={() => handalMarksAsRed(bookId)} className="btn btn-outline mr-4 btn-accent">Read</button>
                <button className="btn btn-accent">Wish List</button>
            </div>
        </div>
    );
};

export default BookDeatils;
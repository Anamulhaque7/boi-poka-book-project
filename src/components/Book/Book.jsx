import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, image, category, publisher, author, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96  shadow-xl p-6">
                <figure className="bg-blue-100 rounded-xl py-8">
                    <img className="h-[166px]"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-around">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-600 ">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-[12px]">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Bye : {author}</p>
                    <div className="border-t-2 my-2  border-dashed"></div>
                    <div className="card-actions justify-between ">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
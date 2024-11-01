import { useEffect, useState } from 'react';
import { redirect, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utilty/addToDb';
import Book from '../Book/Book';
const ListedBooks = () => {


    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData();
    useEffect(() => {
        const stroeReadList = getStoreReadList();
        const sroreReadList = stroeReadList.map(id => parseInt(id));
        console.log(stroeReadList, allBooks, sroreReadList)

        const redBokList = allBooks.filter(book => sroreReadList.includes(book.bookId))
        setReadList(redBokList)
    }, [])

    return (
        <div>
            <h3 className='text-3xl my-8 '> Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Bookls I read {readList.length} </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
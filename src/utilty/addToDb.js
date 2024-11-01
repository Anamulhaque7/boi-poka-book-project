import { toast } from "react-toastify";

const getStoreReadList = () => {
    const storeStr = localStorage.getItem('read-list')
    if (storeStr) {
        const storelist = JSON.parse(storeStr);
        return storelist;
    }
    else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storelist = getStoreReadList();
    if (storelist.includes(id)) {
        console.log(id, 'alredy exites in the read list')
        toast('This Book is added to your red list');

    }
    else {
        storelist.push(id);
        const storeList = JSON.stringify(storelist);
        localStorage.setItem('read-list', storeList);

    }
}

const getStoreWishList = () => {
    const storewedList = localStorage.getItem('wish-list');
    if (storewedList) {
        const stroeWishlist = JSON.parse(storewedList);
        return stroeWishlist;
    }
    else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storWishlist = getStoreWishList();
    if (storWishlist.includes(id)) {
        console.log('alredy exsit in the read')
    }
    else {
        storWishlist.push(id);
        const storeWishListrLis = JSON.stringify(storWishlist);
        localStorage.setItem('wish-list', storeWishListrLis);

    }
}




export { addToStoreReadList, addToStoreWishList, getStoreReadList }

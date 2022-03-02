
export const ajaxService = {
    getSearchVal
}

function getSearchVal(searchVal){
    const API_KEY = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchVal}`
    
    console.log(axios);
    return axios
        .get(API_KEY)
        .then((res) =>{
            // console.log(res);
            // console.log(res.data);
            // console.log(res.data.items);
            // console.log(res.data.items);
            var items = res.data.items
            var titles = items.map(item => {
                // console.log(item.volumeInfo.title);
                return item.volumeInfo.title
            });
            // console.log(titles);
            return {
                items,
                titles,
            }
            // return res.data

        })
}
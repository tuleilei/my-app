
export default (state = {
    // author: 'yao',
    // age: 18,
    // skill: ['ps', 'js', 'css'],
    // num: [1, 3, 5, 7, 9],
    // searchInputValue:'',
    // isShowGallery:false,
    // imgUrl:''
}, action) => {
    switch (action.type) {
        // case 'GETINPUTVALUE':
        //     return{
        //         ...state,
        //         searchInputValue:action.searchInputValue,
        //     }
        // case 'TOGGLEGALLERY':
        //     return{
        //         ...state,
        //         imgUrl:action.imgUrl,
        //         isShowGallery:action.isShowGallery
        //     }    
        default:
            return state
    }
}
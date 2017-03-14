/**
 *通过url来匹配不同的资源，比如/posts/:postId获取单篇文章，/user则获取用户信息 
 * @param {*} url 
 */
const getInitialData=(url)=>{
  let initialData={
      foo:{
        isFetching:false,
        status:false,
        errorMsg:"",
        data:[]
      }
    };

  return initialData;
  
}

export default getInitialData;


 
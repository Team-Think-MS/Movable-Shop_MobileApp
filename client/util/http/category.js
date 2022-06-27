import Axios from 'axios';

export async function fetchCategory() {
    const response = await Axios.get("http://localhost:3000/category/getallcategories");
  
    const categories = [];
  
    for (const key in response.data.data) {
      const expenseObj = {
        categoryId: response.data.data[key].categoryId,
        categoryName: response.data.data[key].categoryName,
        picture: response.data.data[key].picture
      };
      categories.push(expenseObj);
    }
   // console.log(categories)
    return categories;
    
  }
import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import MainList from '../components/3.MainList/MainList';
import ButtonBox from '../components/1.ButtonBox/ButtonBox';
import { testApi } from '../axios/productApi';

export default function App() {
  // 원본배열
  const [data, setData] = useState([]);

  const [filterCategory, setFilterCategory] = useState('all')
  
  const [menu, setMenu] = useState([]) 


  async function getCategory() {
    try {
      // const menuRes = await axios.get('products/categories');
      // const cateList = menuRes.data
      // console.log(cateList, 'CATELIST')
      const res = await testApi('products/categories')
      console.log(res, '!!!')
      setMenu(['all', ...res ])
      console.log('category Name');
    } catch (error) {
      console.error(error);
    }
  }


  const getData = async (filterCategory) => {
    
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      if(filterCategory !== 'all' ) {
        const filterData = data.filter(items => items.category === filterCategory)
        console.log('아이템?',filterData)
        setData(filterData); 
      } else {
        setData(data)
      }
      
    } catch(e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getData(filterCategory);
  }, [filterCategory]);

  useEffect(() => {   
    
    getCategory();
  }, []);

  const onMenu = ((item) => {
    console.log('onItem',item)
    // const menu1 = menu.target.textContent
    // console.log(menu1,'클릭')
    // setFilterCategory(menu1)
    // if(item === "all"){
    //   console.log(data)
      setFilterCategory(item)
    // }else{
    //   const filetrArr = data.filter(category => category.category === item)
    //   // setData()
    //   console.log(filetrArr,'이니?')
    //   setFilterCategory(filetrArr)

    // }
  })

  // 이전 수정전 내역
  // const getData = async () => {
  //   try {
  //     const { data } = await axios.get("https://fakestoreapi.com/products");
  //     setData(data); 
  //     setFilterCategory(data)
  //   } catch(e) {
  //     console.error(e)
  //   }
  // };


  // useEffect(() => {
  //   getData();
  // }, []);


//   console.log(data)

  return (
    <div className='container'>
    
      <ButtonBox menu={menu} onMenu={onMenu}/>
      <MainList data={data} filterCategory={filterCategory}/>
    </div>
  );
}


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button,Select,InputNumber} from 'antd'


function App() {
const [price,setPrice]= useState(null);
const [kol,setKol]= useState(null);
const [Res,setRes]= useState(null);
  const handleChange=(value)=>{
    setPrice(value);
   }
  const handleChange1=(value)=>{
  setKol(value);
  }
  const CalcClick= (value) =>{
  setRes(kol * price);
  }
  return (
    <>
    <h1>Расчитать стоимость товара: </h1>
    <div style={{display:"flex",gap:"5px"}}>
    <Select
        placeholder="Выберите тоовар"
        style={{ width: 200 }}
        onChange={handleChange}
        options={[
          { value: 40, label: 'Кирпич' },
          { value: 600, label: 'ДСП' },
          { value: 2300, label: 'Лист Металл' },
        ]}
      />
      <InputNumber 
        placeholder="Введите число" 
        style={{ width: "200" }}
        min={1}
        onChange={handleChange1}
      /> 
      <Button onClick={CalcClick}>Расчитать</Button>
       </div>
       <div style={{display:"flex"}}>
      <h3>Цена: {Res} руб.</h3>
      </div>
    </>
  )
}

export default App

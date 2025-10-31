import { useState } from 'react'
import './App.css'
import{Col,Row,Button} from 'antd'
import  flower from './assets/image.jpg'
function App() {
 let IsComputer = 1024;
  return (
    <>
{/*header*/}
<Row style={{width:'100vw'}}>
 <Col span={24} style={{backgroundColor:'#1c0a33', height:'90px', width:{IsComputer}?'1vw':"100%"}} >
                   <Row>
                   <Col span={2}>
                    <div style={{
                      width: '70px',
                      height: '60px',
                      background: '#7B42F6',
                      borderRadius: '50px',
                      display: 'flex',
                      aButtongnItems: 'center',
                      justifyContent: 'center',
                      alignItems:'center',
                      color: 'white',
                      fontWeight: 'bold',
                      margin:"5px 0 0 30px"
                    }}>
                      MyLogo
                    </div>
                  </Col>
                  <Col span={2} style={{ fontSize:'26px', margin:"30px 0 0 0"}}><center>MySite</center></Col>
                  <Col span={15}></Col>
                  <Col span={5}id ="nav1">
                  <div style={{backgroundColor:'#294040', height:'50px', borderRadius:"0 0 12px 12px"}}>
                    <Row>
                        <Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginLeft: '8px',
                  marginTop:'7px',
                  width:'30%'
                }}
              >
                <a href="#List">Список</a>
              </Button>
              <Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginLeft: '8px',
                   marginTop:'7px',
                  width:'30%'
                }}
              >
                 <a href="#tb">Таблица</a>
              </Button>
              <Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginLeft: '8px',
                   marginTop:'7px',
                  width:'30%'
                }}
              >
               <a href="#Zform">Форма</a>
              </Button>
                    </Row>
                  </div>
                  </Col>
                  </Row>
  </Col>   
</Row>

<Row style={{backgroundColor:'#2828b9'}}>
<Col span={4}></Col>
<Col span={16}>

<Row id="nav2">
    <Col span={24} style={{backgroundColor:'#294040',padding:'5px 7px 5px 7px'}}>

            <Row><Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                   marginTop:'7px',
                  width:'100%'
                }}
              >
                 <a href="#tb">Таблица</a>
              </Button></Row>
            <Row><Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                   marginTop:'7px',
                  width:'100%'
                }}
              >
                <a href="#List">Список</a>
              </Button></Row>
            <Row><Button 
                style={{ 
                  background: '#1a8068', 
                  border: 'none',
                  color: 'white',
                  borderRadius: '12px',
                   marginTop:'7px',
                  width:'100%'
                }}
              >
               <a href="#Zform">Форма</a>
              </Button></Row>
</Col>
</Row>
<Row id='List' style={{backgroundColor:"#bcb2cc",height:'932px'}}>
<Col span={24} style={{padding:'5px 7px 5px 7px'}}>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="http://kubsu.ru">(http)Кубгу</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="https://kubsu.ru">(https)Кубгу</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href ="https://kubsu.ru"><img src={flower} width= "50"/></a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="/dop">внутренняя страница</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="/">Главная страница</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="#fr">Ссылка на фрагмент текущей страницы</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="https://www.kubsu.ru/?id=234">ссылка с id</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="dop.html">Относительная</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="about/dop2.html">Относительная на страницу в каталоге about</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="https://www.kubsu.ru/index.php">Главная страница Кубгу</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="https://www.kubsu.ru/ru/sveden" rel = "notfollow">Запр. Поисковикам</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><a href="https://www.kubsu.ru/ru/sveden" rel = "noindex">Запр. индекс.</a></Button> </Row>
<Row><Button style={{width:'100%',background:'#aa95d0',height:'60px',padding:'10px',borderRadius:'12px', marginTop:'5px'}}><ol> 
  <sl><a href="https://www.kubsu.ru/ru/sveden"title="Сведения">1)ссылка</a></sl>
  <sl><a href="https://www.kubsu.ru/ru/university/history-tradition"title="История и традиции">2)ссылка</a></sl>
</ol></Button>  </Row>
</Col>
</Row>
<Row id="tb"  style={{backgroundColor:'#00f2f2',padding:'10px',justifyContent:'center'}}>
<table border="1px"  style={{color:'black'}}  >
<tr>
    <th>Колонка</th>
    <th>Колонка</th>
     <th>Колонка</th>
    <th>Колонка</th>
</tr>
<tr>
    <td colspan="2">ячейка</td>
     <td>ячейка</td>
    <td>ячейка</td>
</tr>
<tr>
    <td>ячейка</td>
    <td>ячейка</td>
     <td>ячейка</td>
    <td>ячейка</td>
</tr>
<tr>
    <td>ячейка</td>
    <td>ячейка</td>
     <td>ячейка</td>
    <td>ячейка</td>
</tr>
<tr>
    <td>ячейка</td>
    <td>ячейка</td>
     <td>ячейка</td>
    <td>ячейка</td>
</tr>
</table>
</Row>
<Row id="Zform" style={{backgroundColor:'#79f2c9',justifyContent:'center',height:'590px',padding:'10px'}}>
<form>
    <Row style={{backgroundColor:'#5fb1dc',borderRadius:'12px 12px 0 0',padding:'5px 5px 0 5px'}}>
<Row style={{backgroundColor:'#5fb1dc'}}>
  <label for="FIO">ФИО:</label>
  <input type="text" id="FIO" name="FIO" required/>
</Row>
 <Row>
<label for="phone">Телефон:</label>
<input type="tel" id="phone" name="phone" required pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}"/></Row>

        <div id = "mail">
            <label for="email">e-mail:</label>
            <input type="email" id="email" name="email" required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"/>
        </div>
</Row>
<Row style={{backgroundColor:'#5fb1dc' ,gap:'15px',justifyContent:'center',padding:'10px'}}>
        <div id ="brith">
            <label for="bdate">Дата рождения:</label>
            <input type="date" id="birthdate" name="bdate" required/>
        </div>

        <fieldset id="Gender">
            <text>Пол:</text>
            <label><input type="radio" name="gender" value="male"required/> Мужской</label>
            <label><input type="radio" name="gender" value="female"required/> Женский</label>
        </fieldset>
</Row>
        <Row style={{backgroundColor:'#5fb1dc', justifyContent:'center'}}>
            <label id = "lan" for="langs">Любимый язык программирования:</label>
            <select id="langs" name="langs" required multiple>
                <option value="pascal">Pascal</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="haskel">Haskel</option>
                <option value="clojure">Clojure</option>
                <option value="prolog">Prolog</option>
                <option value="scala">Scala</option>
            </select>
        </Row>

        <Row style={{backgroundColor:'#5fb1dc',justifyContent:'center'}}>
            <label for="bio">Биография:</label>
            <textarea id="bio" name="bio" style={{width:"90%",height:'295px'}} required></textarea>
        </Row>
        <Row style={{backgroundColor:'#5fb1dc',padding:'15px 0px 5px 0',borderRadius:' 0px 0px 12px 12px'}}>
            <Col span={20}><label>
                <input type="checkbox" name="agreement"required />
                С контрактом ознакомлен (а)
            </label></Col>
            <Col span={4}><button type="submit">Сохранить</button></Col>
        </Row>
    </form>
</Row>

</Col>
</Row>
<Row style={{backgroundColor:'#1c0a33',height:'90px'}}>
<autor style={{ margin:'40px 0 0 30px',fontSize:'24px'}}>(с) Марк Дикий</autor>
</Row>
    </>
  )
}

export default App

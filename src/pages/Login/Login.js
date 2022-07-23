import React, {useState} from 'react';
import '../../pages/Login/Login.css';
import Title from "./components/Title/Title"
import Label from "./components/Label/Label";
import Input from './components/Input/Input';
import Header from '../Login/components/Header/Header';
import UserService from '../../service/UserService';
import Home from '../Home/Home';


const Login= () => {

    const [cedula,setUser ]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState(false);
    const [isLogin,setIsLogin]=useState(false);
    const [hasError,setHasError]=useState(false);
    const [listUsers,setListUsers]=useState([]);
   
    function handleChange(name,value){
        if(name ==='cedula'){
            setUser(value)
        }else {
            if(value.length<6){
                setPasswordError(true);
            }else{
                setPasswordError(false);
                setPassword(value)
            }   
        }
    };

    function ifMatch(param){
        if(param.user.length>0 && param.password.length >0){
            if(param.user==='1010247478'&& param.passwrod === '123456'){
                const {cedula,password}=param;
                let ac ={cedula,password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account',account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        } else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
       if((cedula==='1010247478'&& password==='123456')||(cedula==='39557102'&&password==='123456')){
            console.log('usuario registrado')
        setHasError(true);  
       
        }; window.location = "/Home";
       
    }
    function handleonClick(){
        window.location = "/CreateUser";
    };
    
    
   
    return (
        <div className='login-container'>
            <Header />
            <div className='login-content'>
                <Title text='!Bienvenido!'/>
            
                <Label text='Usuario'/>
                <Input 
                    attribute={{
                        id:'cedula',
                        name:'cedula',
                        type:'text',
                        placeholder:'Ingrese su cedula'
                    }}
                    handleChange={handleChange}
                />
                <Label text='Contraseña'/>
                <Input 
                    attribute={{
                        id:'constraseña',
                        name:'contraseña',
                        type:'password',
                        placeholder:'Ingrese su constraseña'
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                { passwordError &&
                    <label className='label-error'>
                        Contraseña inválida o incompleta
                    </label>
                }
                <div onClick={handleSubmit} className="submit-button-container">
                    <button className='buttoningre'>Ingresar</button>
                </div> 
                <div onClick={handleonClick} className="bottomCreate">
                    <button className="btnCreate">Registrarse</button>
                </div>      
            </div>
        </div>
    )
};

export default Login;
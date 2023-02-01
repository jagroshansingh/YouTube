
class user{
    constructor(n,e,u,p,m,d){
        this.name=n;
        this.email=e;
        this.username=u;
        this.password=p;
        this.mobile=m;
        this.description=d;
    }

    

    async store(){    
        try{   
        const register_api='https://masai-api-mocker.herokuapp.com/auth/register'
        let ftch=await fetch(register_api,{
            method:'POST',
            body:JSON.stringify(this),
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(this)
        let data=await ftch.json();
        console.log('data: ', data);
        }
        catch(error){
            console.log('error: ', error);
            
        }
    }

    async login(u,p){
        try{
        let login_data={
            username:u,
            password:p,
        }
        const login_api='https://masai-api-mocker.herokuapp.com/auth/login'
        let ftch=await fetch(login_api,{
            method:'POST',
            body:JSON.stringify(login_data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        let data=await ftch.json();
        console.log('data: ', data);

        let token=data.token;
        console.log('token: ', token);
        this.showtime(token,login_data.username)
        }
        catch(error){
            console.log('error: ', error);

        }
    }

    async showtime(token,username){
        try{
        //console.log(token,username)
        let profile_api=`https://masai-api-mocker.herokuapp.com/user/${username}`;
        let ftch=await fetch(profile_api,{
            method:'GET',
            headers:{
                'Authorization': `Bearer ${token}` 
            }
        })
        let data=await ftch.json();
        console.log('data: ', data);

        let name=data.name;
        console.log('name: ', name);

        localStorage.setItem('name',name)
        window.location.replace('./video.html')
        }
        catch(error){
            console.log('error: ', error);

        }
    }
    
}

let use=new user()
let Register=()=>{
    //let reg=document.getElementById('register-form')
    
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    let mobile=document.getElementById('mobile').value
    let description=document.getElementById('description').value

    let use=new user(name,email,username,password,mobile,description)
    use.store()
}

let Login=()=>{
    let l_username=document.getElementById('login-username').value
    let l_password=document.getElementById('login-password').value
    new user().login(l_username,l_password)
}


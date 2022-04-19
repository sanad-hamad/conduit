const invalidLoginCase=[
    {
      email:"sanadH@gmail.com",
      loginBlankMsg:"password can't be blank",
      testCaseName:"Verify invalid login with a blank password"

    },
    {
      password:"Sanad",
      loginBlankMsg:"email can't be blank",
      testCaseName:"Verify invalid login with blank email",
    },
    {
     email:"san@gmail.com",
     password:"nad",
     loginBlankMsg:"email or password is invalid",
     testCaseName:"Verify login with invalid credential email,password"
    },
]

const validLoginCase=
                    {
                        email:"sanadH@gmail.com",
                        password:"Sanad",
                    }



const username="Sanad";

export{invalidLoginCase,validLoginCase,username}
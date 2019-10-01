const Login= {
    items: [
      {
        type: "Header",
        props: {
          label: "Login",
          horizontalAlign: "center",
          verticalAlign: "center"
        }
      },
      {
        type: "Card",
        props: {
          backgroundColor: "grey",
          horizontalAlign: "left"
        },
        children: {
          items: [
            {
              type: "TextField",
              props: {
                inputType: "text",
                label: "Name",
                name: "name"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "email",
                label: "Email",
                name: "email"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "number",
                label: "Mobile",
                name: "Message"
              }
            },
            {
              type: "RadioGroup",
              props: {
                label: "Gender",
                name: "gender",
                options: [
                  {
                    label: "Male"
                  },
                  {
                    label: "Female"
                  }
                ]
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "password",
                label: "Password",
                name: "password"
              }
            },
            {
              type: "TextField",
              props: {
                inputType: "password",
                label: "Confirm Password",
                name: "confirmPassword"
              }
            },
            {
              type: "Button",
              props: {
                label: "Login"
              }
            }
          ]
        }
      }
    ]
  }
export default Login;
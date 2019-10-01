
   const Home= {
    items: [
      {
        type: "Card",
        props: {
          label: "Good work labs",
          horizontalAlign: "left"
        }
      },
      {
        type: "Header",
        props: {
          label: "Technology",
          horizontalAlign: "left"
        }
      },
      {
        type: "Card",
        props: {
          color: "grey"
        },
        children: {
          items: [
            {
              type: "Cards",
              props: {
                cards: [
                  {
                    label: "Java",
                    horizontalAlign: "center",
                    verticalAlign: "center",
                    color: "orange"
                  },
                  {
                    label: "React",
                    horizontalAlign: "center",
                    verticalAlign: "center",
                    color: "blue"
                  },
                  {
                    label: "Node",
                    horizontalAlign: "center",
                    verticalAlign: "center",
                    color: "pink"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        type: "Header",
        props: {
          label: "Drop Message",
          horizontalAlign: "left"
        }
      },
      {
        type: "Card",
        props: {
          color: "grey",
          horizontalAlign: "center",
          verticalAlign: "center"
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
              type: "Button",
              props: {
                label: "Submit"
              }
            }
          ]
        }
      }
    ]
  }
export default Home;
 
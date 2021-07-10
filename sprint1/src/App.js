import { useState } from "react"
import "./Components/ImageVerify.css"
// import { useImage } from 'react-image'
import "./css/checkbox.css"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Form, FormGroup } from "react-bootstrap"

var usedImg = ["", "" , "" , "", "", "", "", "", ""];
var index = 1;

function ImgList() {
    
    //const keywords = ["Cat", "Pizza", "Car"];

    var images = [
        {keyword  : "Cat",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJVYJ3rT9KVeyvWltTFmfpv8C0CkhlQIQ4A&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zpMzK7G6HwXUPNRU-BA03jx_1oC4Gl0NUg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5woNyRoVaXNN_8rTxh9bmEGa0QxUCHqVsmg&usqp=CAU"  
         ]
        },

        {keyword  : "Pizza",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-eJmvQnM5YyC8UwvvIr56hMyQr0Wa6vppA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuIjca1eL6dRRtFlrrV-4JSOZzDVEzuqK7g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfs32OMWj9HaCk9mrdlbvYTWt0yCKWGP4EnQ&usqp=CAU" 
         ]
        },

        {keyword  : "Car",
         imglist  : [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci4ViVbKJW1HbRq0H9BlZEYdTqSUcFeSkQA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSI6p-YvPu4Sy_J-h_WfqcHudtYMr_pGoQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPvuyoxmr7oLHJzLhsioZXqmRI2G_F5WOXQ&usqp=CAU"
         ]
        }
    ]; 

     /*
    I am trying to use a nested loop with a while loop on repeat until the next most available spot in the array is reached.
    Inside the while loop is a for loop that compares the current keyword + image (using array indices, look at return())
    to each entry in the array up to index - 1. If the for loop finds a match then the loop stops and the while loop begins
    again with a new keyword + image. I have an if statement that stops the for loop and also sets the while loop to stop
    if the next most available spot in the array is reach (should be index - 1, [used][next][index]). For some reason the 
    nested loop causes my browser to freeze. I think there is an infinite loop, but it could be something else I.D.K.  
    */

    var exit = false;
    //while(exit == false) {

        var keyNum = Math.floor(Math.random() * 3); //Change this to return the Keyword String? images[Math.round(Math.random() * 3)].keyword.
        var imgNum = Math.floor(Math.random() * 3);
        
       /* for(var i = 0; i < index; i++) {
            var num = String(""+keyNum+""+imgNum).localeCompare(usedImg[i]);
            if(num === 0) {
                break;
            }

            if(i === index - 1) {
                usedImg[i] = String(""+keyNum+""+imgNum);
                index++;
                exit = true;
                console.log(usedImg[i]);
            }
        }*/

            
    //}

    return(
       
        images[keyNum].imglist[imgNum]     

    )
}

function AssignImages() {
  const imgs = {
    width: "84px",
    height: "84px",
  }

  //function I was creating to add images onto the grid

  return (
    <img style={imgs} className="imgs" src={ImgList()} alt="logo" />
  )
}

//function to set up grid
function Grid() {
  const [checked, setChecked] = useState(false)

  const square = {
    border: "1px solid white",
  }

  //when div is clicked it changes the state to checked if its not checked
  const handleChange = () => {
    setChecked(!checked)
    if (checked) {
      setChecked(false)
    }
  }

  return (
    //adding inline style/css to make the grid columns, rows, and cell sizes
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 84px)",
        gridTemplateRows: "repeat(3, 84px)",
      }}
    >
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="1"
          className="checkIMG"
          id="myCheckbox1"
        />

        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="2"
          className="checkIMG"
          id="myCheckbox2"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="3"
          className="checkIMG"
          id="myCheckbox3"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="4"
          className="checkIMG"
          id="myCheckbox4"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="5"
          className="checkIMG"
          id="myCheckbox5"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="6"
          className="checkIMG"
          id="myCheckbox6"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="7"
          className="checkIMG"
          id="myCheckbox7"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="8"
          className="checkIMG"
          id="myCheckbox8"
        />
        <AssignImages />
      </div>
      <div className="checkboxD" onClick={handleChange} style={square}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          value="9"
          className="checkIMG"
          id="myCheckbox9"
        />
        <AssignImages />
      </div>
    </div>
  )
}

function ImageVerify(props) {
  const popup = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const popupInner = {
    position: "relative",
    padding: "32px",
    width: "100%",
    maxWidth: "600px",
    backgroundColor: "#FFF",
    top: "16px",
    right: "16px",
  }

  return props.trigger ? (
    <div style={popup}>
      <div style={popupInner}>
        <button
          style={{ position: "absolute", top: "16px", right: "16px" }}
          onClick={() => props.setTrigger(false)}
        >
          x
        </button>
        {props.children}
        {/* <img src="https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png" alt="No Image" /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid />
        </div>
      </div>
    </div>
  ) : (
    ""
  ) //if props.trigger == true -> open "popup" div, else -> ""
}

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <div className="App">
      <main>
        <h1>Sign In</h1>
        <br></br>

        <Form>
          <FormGroup controlId="formUsername">
            <Form.Label>Username</Form.Label>{" "}
            <Form.Control
              id="username"
              type="text"
              placeholder="Username"
            ></Form.Control>
          </FormGroup>
          <br />
          <FormGroup controlId="formPassword">
            <Form.Label>Password</Form.Label>{" "}
            <Form.Control type="password" placeholder="Password"></Form.Control>
            <Form.Text>Feel safe logging in using our secure forms.</Form.Text>
          </FormGroup>
        </Form>
        <br></br>
        <Button
          variant="secondary"
          type="submit"
          onClick={() => setButtonPopup(true)}
        >
          {" "}
          Login
        </Button>
      </main>

      <ImageVerify trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Pop Up Message</h3>
      </ImageVerify>
    </div>
  )
}

export default App

import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Particles from "react-particles-js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Signin from "./components/SignIn/Signin";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import "./App.css";

const particlesOptions = {
  //customize this to your liking
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 850,
      },
    },
    color: {
      value: "#ffffff",
    },
  },
};

const intialState = {
  input: "",
  imageUrl: "",
  route: "Signin",
  isSignedIn: false,
  valuebox: [],
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = intialState;
  }

  calculateFaceLocation = (data) => {
    const clarifaiFaces = data.outputs[0].data.regions;
    const Faces_Num = Object.keys(clarifaiFaces).length;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    let totalFaces = [];
    for (let i = 0; i < Faces_Num; i++) {
      let face = clarifaiFaces[i].region_info.bounding_box;
      face.left_col = face.left_col * width;
      face.right_col = width - face.right_col * width;
      face.top_row = face.top_row * height;
      face.bottom_row = height - face.bottom_row * height;
      totalFaces.push(face);
    }
    return totalFaces;
  };

  displayFaceBox = (valuebox) => {
    this.setState({ valuebox: valuebox });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmittion = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://my-face-reco-api.herokuapp.com/imageurl", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch("https://my-face-reco-api.herokuapp.com/image", {
            method: "put",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => {
        alert(`U must Give a Link Input in jpg Format`);
        console.log(err, `U must Give a Link Input in jpg Format`);
      });
  };

  onButtonSubmit = () => {
    this.onSubmittion();
  };

  onLogoClick = () => {
    this.onSubmittion();
  };

  onRouteChange = (route) => {
    if (route === "Signout") {
      this.setState({ ...intialState });
      return;
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  render() {
    const { isSignedIn, route, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              user_name={this.state.user.name}
              user_entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={imageUrl}
              valuebox={this.state.valuebox}
            />
          </div>
        ) : route === "Signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;

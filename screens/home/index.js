import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Input, Button } from "react-native-elements";
import MultiSelect from "react-native-multiple-select";
const bgImage = require("../../assets/bg.png");
const { width, height } = Dimensions.get("window");

import { database } from "../../config";
const items = [
  {
    id: "Android Developer",
    name: "Android Developer",
  },
  {
    id: "Bookkeeper",
    name: "Bookkeeper",
  },
  {
    id: "Content Writer",
    name: "Content Writer",
  },
  {
    id: "Copywriter",
    name: "Copywriter",
  },
  {
    id: "Customer Service Representative",
    name: "Customer Service Representative",
  },
  {
    id: "Database Administrator",
    name: "Database Administrator",
  },
  {
    id: "Data Scientist",
    name: "Data Scientist",
  },
  {
    id: "Facebook Developer",
    name: "Facebook Developer",
  },
  {
    id: "Front-End Developer",
    name: "Front-End Developer",
  },
  {
    id: "Game Developer",
    name: "Game Developer",
  },
  {
    id: "Graphic Designer",
    name: "Graphic Designer",
  },
  {
    id: "Information Security Analyst",
    name: "Information Security Analyst",
  },
  {
    id: "iOS Developer",
    name: "iOS Developer",
  },
  {
    id: "Java Developer",
    name: "Java Developer",
  },
  {
    id: "JavaScript Developer",
    name: "JavaScript Developer",
  },
  {
    id: "Logo Designer",
    name: "Logo Designer",
  },
  {
    id: "Mobile App Developer",
    name: "Mobile App Developer",
  },
  {
    id: "PHP Developer",
    name: "PHP Developer",
  },
  {
    id: "Resume Developer",
    name: "Resume Developer",
  },
  {
    id: "Sales Consultant",
    name: "Sales Consultant",
  },
  {
    id: "SEO Expert",
    name: "SEO Expert",
  },
  {
    id: "Social Media Manager",
    name: "Social Media Manager",
  },
  {
    id: "Software Developer",
    name: "Software Developer",
  },
  {
    id: "Software Engineer",
    name: "Software Engineer",
  },
  {
    id: "UI Designer",
    name: "UI Designer",
  },
  {
    id: "UX Designer",
    name: "UX Designer",
  },
  {
    id: "Virtual Assistant",
    name: "Virtual Assistant",
  },
  {
    id: "Web Designer",
    name: "Web Designer",
  },
  {
    id: "Wordpress Developer",
    name: "Wordpress Developer",
  },
  {
    id: "Writer",
    name: "Writer",
  },
  {
    id: "Apple UIKit",
    name: "Apple UIKit",
  },
  {
    id: "Apple Xcode",
    name: "Apple Xcode",
  },
  {
    id: "Articulate storyline",
    name: "Articulate storyline",
  },
  {
    id: "Atlassian Confluence",
    name: "Atlassian Confluence",
  },
  {
    id: "Blockchain",
    name: "Blockchain",
  },
  {
    id: "Customer retention",
    name: "Customer retention",
  },
  {
    id: "eLearning",
    name: "eLearning",
  },
  {
    id: "Enterprise architecture",
    name: "Enterprise architecture",
  },
  {
    id: "GitLab",
    name: "GitLab",
  },
  {
    id: "Go development",
    name: "Go development",
  },
  {
    id: "Google App Engine API",
    name: "Google App Engine API",
  },
  {
    id: "Google Cloud Platform",
    name: "Google Cloud Platform",
  },
  {
    id: "NodeJS",
    name: "NodeJS",
  },
  {
    id: "Product photography",
    name: "Product photography",
  },
  {
    id: "Rapid prototyping",
    name: "Rapid prototyping",
  },
  {
    id: "Risk management",
    name: "Risk management",
  },
  {
    id: "Scala development",
    name: "Scala development",
  },
  {
    id: "SCORM",
    name: "SCORM",
  },
  {
    id: "Tensorflow",
    name: "Tensorflow",
  },
  {
    id: "Volusion",
    name: "Volusion",
  },
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      skills: "",
      linkedinProfile: "",
      githubURL: "",
      websiteURL: "",
      portfolioURL: "",
      imageURL: "",
      jobTitle: "",
      currentJob: "",
      education: "",
      datesAttendend: "",
      skills: [],
    };
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ skills: selectedItems });
  };

  handelFirstName = (value) => {
    this.setState({
      firstName: value,
    });
  };

  handelLastName = (value) => {
    this.setState({
      lastName: value,
    });
  };

  handelEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  handelLinkedIn = (value) => {
    this.setState({
      linkedinProfile: value,
    });
  };

  handelgithubURL = (value) => {
    this.setState({
      githubURL: value,
    });
  };

  handelwebsiteURL = (value) => {
    this.setState({
      websiteURL: value,
    });
  };

  handelportfolioURL = (value) => {
    this.setState({
      portfolioURL: value,
    });
  };

  handelimageURL = (value) => {
    this.setState({
      imageURL: value,
    });
  };

  handeljobTitle = (value) => {
    this.setState({
      jobTitle: value,
    });
  };

  handelcurrentJob = (value) => {
    this.setState({
      currentJob: value,
    });
  };

  handeleducation = (value) => {
    this.setState({
      education: value,
    });
  };

  handeldatesAttendend = (value) => {
    this.setState({
      datesAttendend: value,
    });
  };

  register = () => {
    let {
      firstName,
      lastName,
      email,
      skills,
      linkedinProfile,
      githubURL,
      websiteURL,
      portfolioURL,
      imageURL,
      jobTitle,
      currentJob,
      education,
      datesAttendend,
    } = this.state;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !linkedinProfile ||
      !githubURL ||
      !websiteURL ||
      !portfolioURL ||
      !imageURL ||
      !jobTitle ||
      !currentJob ||
      !education ||
      !skills ||
      skills.length == 0 ||
      !datesAttendend
    ) {
      alert("Please fill all feilds");
    } else {
      database
        .child("freelancers")
        .push(this.state)
        .then(() => {
          alert("data added");
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            skills: "",
            linkedinProfile: "",
            githubURL: "",
            websiteURL: "",
            portfolioURL: "",
            imageURL: "",
            jobTitle: "",
            currentJob: "",
            education: "",
            datesAttendend: "",
          });
        });
    }
  };

  render() {
    return (
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{ width: width, height: "100%" }}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.tilteConatiner}>
              <Text style={styles.title}>Freelancer Registration</Text>
            </View>
            <View style={styles.form}>
              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="firstName"
                type="text"
                placeholder="First  Name"
                value={this.state.firstName}
                onChangeText={(event) => this.handelFirstName(event)}
              />
              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="lastName"
                type="text"
                value={this.state.lastName}
                placeholder="Last  Name"
                onChangeText={(event) => this.handelLastName(event)}
              />
              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="email"
                type="email"
                value={this.state.email}
                placeholder="Email"
                onChangeText={(event) => this.handelEmail(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="linkedinProfile"
                type="text"
                value={this.state.linkedinProfile}
                placeholder="LinkedIn Profile"
                onChangeText={(event) => this.handelLinkedIn(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="githubURL"
                value={this.state.githubURL}
                type="text"
                placeholder="Github URL"
                onChangeText={(event) => this.handelgithubURL(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="websiteURL"
                type="text"
                value={this.state.websiteURL}
                placeholder="Website  URL"
                onChangeText={(event) => this.handelwebsiteURL(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="portfolioURL"
                type="text"
                value={this.state.portfolioURL}
                placeholder="Portfolio"
                onChangeText={(event) => this.handelportfolioURL(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="imageURL"
                type="text"
                value={this.state.imageURL}
                placeholder="URL to Profile Image"
                onChangeText={(event) => this.handelimageURL(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="jobTitle"
                type="text"
                value={this.state.jobTitle}
                placeholder="Job Title"
                onChangeText={(event) => this.handeljobTitle(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="currentJob"
                type="text"
                value={this.state.currentJob}
                placeholder="Current Job Description"
                onChangeText={(event) => this.handelcurrentJob(event)}
              />

              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="education"
                type="text"
                placeholder="Education"
                value={this.state.education}
                onChangeText={(event) => this.handeleducation(event)}
              />
              <Input
                inputContainerStyle={styles.nameInputContainerStyle}
                inputStyle={styles.namInputStyle}
                containerStyle={styles.inputContainer}
                name="datesAttendend"
                type="text"
                value={this.state.datesAttendend}
                placeholder="Dates Attended"
                onChangeText={(event) => this.handeldatesAttendend(event)}
              />
              <View style={styles.select}>
                <MultiSelect
                  items={items}
                  uniqueKey="id"
                  ref={(component) => {
                    this.multiSelect = component;
                  }}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={this.state.skills}
                  selectText="  Select Skills"
                  searchInputPlaceholderText="Search Skill..."
                  selectedItemTextColor="green"
                  selectedItemIconColor="green"
                  itemTextColor="#000"
                  displayKey="name"
                  submitButtonColor="blue"
                  submitButtonText="Submit"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  onPress={this.register}
                  title="REGISTER"
                  buttonStyle={styles.signinButton}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  tilteConatiner: {
    marginTop: 70,
  },
  nameInputContainerStyle: {
    backgroundColor: "#f1f2f6",
    padding: 5,
    paddingLeft: 10,
    borderBottomWidth: 0,
  },
  signinButton: {
    marginTop: 15,
    padding: 10,
  },
  namInputStyle: {
    fontSize: 15,

    color: "red",
  },
  inputContainer: {
    width: "100%",

    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 15,
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },

  select: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  nameContainerStyle: {
    width: "100%",
  },
  button: {
    width: 300,
  },
  buttonContainer: {
    padding: 10,
  },
});

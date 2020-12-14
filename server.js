const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var projects = [
    {
        routeName: "touristsimulator",
        title: "Tourist Simulator",
        link: "",
        github: "#",
        gif: "#",
        description: "#",
        challenges: "#",
        licences: "#",
    },
    {
        routeName: "passwordcreator",
        title: "Password Creator",
        link: "",
        github: "#",
        gif: "#",
        description: "#",
        challenges: "#",
        licences: "#",
    },
    {
        routeName: "readmecreator",
        title: "Readme Creator",
        link: "",
        github: "#",
        gif: "#",
        description: "#",
        challenges: "#",
        licences: "#",
    },
    {
        routeName: "photographyquiz",
        title: "Photography Quiz",
        link: "",
        github: "#",
        gif: "#",
        description: "#",
        challenges: "#",
        licences: "#",
    },
]

var PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello test World')
})
 
app.listen( PORT )
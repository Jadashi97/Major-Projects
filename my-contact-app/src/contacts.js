
//this is an array of contact objects 
const contacts = [

    {
        firstName: "Nyarji",
        lastName: "Jada",
        otherNames: "kose",
        birthDate: "7/4/1997",
        userName: "jadashi97",
        email: "kumbayas@hotmail.com",
        telNumber: "1234567878",

        // figure how to include this object in the contact list
        address:
            [{
                country : "South Sudan",
                City: "juba",
                state: "CE",
                Street: "123 gudele rd",
            }
            ]
    },
    {
        firstName: "Wani",
        lastName: "Jada",
        otherNames: "Ronald",
        birthDate: "5/20/2000",
        userName: "wycli",
        email: "kumadss@hotmail.com",
        telNumber: "123494570720",

        address:{
            country : "Uganda",
            City: "kampala",
            state: "NE",
            Street: "13463 kampala rd",
        }


    },
    {
        firstName: "Toni",
        lastName: "Roncales",
        otherNames: "Rose",
        birthDate: "2/15/1998",
        userName: "bb1234",
        email: "yaaasaayas@hotmail.com",
        telNumber: "1203475704373",

        address:{
            country : "USA",
            City: "minneapolis",
            state: "MN",
            Street: "4000 franc rd",
        }

    },
];

export default contacts; //this sends it so it is easily accessed and imported by App.jsx
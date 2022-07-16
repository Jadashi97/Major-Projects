
//this is an array of contact objects 
const contactsData = [

    {
        id :1,
        firstName: "Nyarji",
        lastName: "Jada",
        otherNames: "kose",
        birthDate: "7/4/1597",
        userName: "jadashi97",
        email: "kumbayas@hotmail.com",
        telNumber: "1234567878",

        // figure how to include this object in the contact list
        address: {country : "South Sudan",
                City: "juba",
                state: "CE",
                Street: "123 gudele rd",
        }

    },
    {
        id : 2,
        firstName: "Wani",
        lastName: "Jada",
        otherNames: "Ronald",
        birthDate: "9/92/1700",
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
        id: 3, 
        firstName: "Lemi",
        lastName: "Jada",
        otherNames: "Stephen",
        birthDate: "10/27/1807",
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
    {
        id: 3, 
        firstName: "Toni",
        lastName: "Jada",
        otherNames: "Jibbi",
        birthDate: "2/15/1998",
        userName: "bb1234",
        email: "yaaasaayas@hotmail.com",
        telNumber: "1203475704373",

        address:{
            country : "USA",
            City: "Mclean",
            state: "MN",
            Street: "4000 franc rd",
        }

    }
];

export default contactsData; //this sends it so it is easily accessed and imported by App.jsx
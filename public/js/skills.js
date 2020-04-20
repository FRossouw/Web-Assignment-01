var skill_professional = [
    {
        skill_name: "Adobe Photoshop",
        skill_rating: 3
    },
    {
        skill_name: "C# Programming",
        skill_rating: 4
    },
    {
        skill_name: "Web Programming",
        skill_rating: 4
    },
    {
        skill_name: "IBM Application Security Engineering",
        skill_rating: 3
    },
    {
        skill_name: "Javascript",
        skill_rating: 4
    },
    {
        skill_name: "MySQL Database",
        skill_rating: 4
    },
    {
        skill_name: "PHP",
        skill_rating: 3
    },
    {
        skill_name: "Unity Programing",
        skill_rating: 3
    }
];

var skill_personal = [
    {
        skill_name: "Communication",
        skill_rating: 4
    },
    {
        skill_name: "Team Work",
        skill_rating: 5
    },
    {
        skill_name: "Creativity",
        skill_rating: 4
    },
    {
        skill_name: "Leadership",
        skill_rating: 4
    },
    {
        skill_name: "Management",
        skill_rating: 3
    }
]

setInnerHTMLListItem(skill_professional, "skills-professional-list");
setInnerHTMLListItem(skill_personal, "skills-personal-list");

function setInnerHTMLListItem(array, innerHTML) {
    var stars_fill = "";
    var stars_no_fill = "";

    array.forEach(item => {
        for (let index = 0; index < item.skill_rating; index++) {
            stars_fill += "✪";
        }

        for (let index = item.skill_rating; index < 5; index++) {
            stars_no_fill += "✪";
        }

        document.getElementById(innerHTML).innerHTML += "<li>" + item.skill_name + "</li>" + "<span class='skill-rating-stars'>" + stars_fill + "</span><span class='skill-rating-stars-empty'>" + stars_no_fill + "</span>";
        stars_fill = "";
        stars_no_fill = "";
    }); //End of for each 
}
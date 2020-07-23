// ***************************************************************
// ALL OF THE SUSHI ROLLS
// ***************************************************************

var midoriRolls = [

    //HOUSE ROLLS (14)

    {name: "California Roll",
    ingredients: {
        meat: ["crab meat"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: false,
    price: 5.50},

    {name: "Tekka Maki (Tuna Roll)",
    ingredients: {
        meat: ["tuna"],
        veggies: [],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: true,
    price: 5.50},

    {name: "Spicy Tuna Roll",
    ingredients: {
        meat: ["spicy tuna"],
        veggies: ["cucumber", "radish sprout"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: true,
    raw: true,
    price: 7.50},

    {name: "Spicy Crunch Roll",
    ingredients: {
        meat: ["spicy crab meat"],
        veggies: ["cucumber"],
        wrapper: "seaweed",
        misc: ["tempura flakes"]
    },
    spicy: true,
    raw: true,
    price: 7.00},

    {name: "Yellowtail Roll",
    ingredients: {
        meat: ["yellowtail"],
        veggies: ["cucumber", "scallion"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: true,
    price: 7.50},
    
    {name: "Spicy Yellowtail Roll",
    ingredients: {
        meat: ["spicy yellowtail"],
        veggies: ["cucumber", "scallion", "radish sprout"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: true,
    raw: true,
    price: 8.00},

    {name: "Salmon Roll",
    ingredients: {
        meat: ["salmon"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: true,
    price: 7.00},

    {name: "Salmon Skin Roll",
    ingredients: {
        meat: ["salmon skin"],
        veggies: ["cucumber", "avocado", "gabo"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: false,
    price: 7.00},

    {name: "Dragon Roll",
    ingredients: {
        meat: ["eel", "crab meat"],
        veggies: ["cucumber", "avocado", "radish sprout"],
        wrapper: "seaweed",
        misc: ["eel sauce"]
    },
    spicy: false,
    raw: false,
    price: 10.50},

    {name: "Rainbow Roll",
    ingredients: {
        meat: ["crab meat", "salmon", "tuna"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: true,
    price: 10.50},

    {name: "Philadelphia Roll",
    ingredients: {
        meat: ["smoked salmon"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["cream cheese"]
    },
    spicy: false,
    raw: false,
    price: 8.00},

    {name: "Cucumber Roll",
    ingredients: {
        meat: [null],
        veggies: ["cucumber"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: false,
    price: 4.50},

    {name: "Vegetable Roll",
    ingredients: {
        meat: [null],
        veggies: ["cucumber", "avocado", "radish", "gobo", "gampyo"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: false,
    price: 5.50},

    {name: "Caterpillar Roll",
    ingredients: {
        meat: ["eel"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: [null]
    },
    spicy: false,
    raw: false,
    price: 13.00},

    //FRESH ROLLS (17)

    {name: "Let It Go Roll",
    ingredients: {
        meat: ["salmon", "tuna", "crab meat"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: ["ponzu sauce"]
    },
    spicy: false,
    raw: true,
    price: 14.95},

    {name: "Angry John's Roll",
    ingredients: {
        meat: ["salmon", "tuna", "spicy tuna"],
        veggies: ["cucumber", "radish sprout"],
        wrapper: "seaweed",
        misc: ["spicy mayo"]
    },
    spicy: true,
    raw: true,
    price: 15.95},

    {name: "Midori Roll",
    ingredients: {
        meat: ["spicy tuna", "crab meat", "salmon"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: ["house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 15.95},

    {name: "Crazy Horse Roll",
    ingredients: {
        meat: ["salmon", "tuna", "yellowtail"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["japanese mustard sauce"]
    },
    spicy: false,
    raw: true,
    price: 14.95},

    {name: "Dance with Salmon Roll",
    ingredients: {
        meat: ["salmon", "spicy crab meat"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: ["midori sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Cool River Roll",
    ingredients: {
        meat: ["escolar", " spicy tuna"],
        veggies: [],
        wrapper: "seaweed",
        misc: ["honey wasabi sauce", "tempura flakes"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Mango Fandago Roll",
    ingredients: {
        meat: ["smoked salmon"],
        veggies: ["mango", "avocado"],
        wrapper: "seaweed",
        misc: ["cream cheese"]
    },
    spicy: false,
    raw: false,
    price: 10.95},

    {name: "Paradise Roll",
    ingredients: {
        meat: ["tuna"],
        veggies: ["scallion", "avocado"],
        wrapper: "rice paper",
        misc: ["sweet wasabi sauce"]
    },
    spicy: false,
    raw: true,
    price: 13.95},

    {name: "Marilyn Monroe Roll",
    ingredients: {
        meat: ["salmon", "spicy tuna"],
        veggies: ["cucumber", "avocado", "radish sprout"],
        wrapper: "seaweed",
        misc: ["midori sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Cherry Blossom Roll",
    ingredients: {
        meat: ["salmon", "tuna"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["japanese mustard sauce"]
    },
    spicy: false,
    raw: true,
    price: 15.95},

    {name: "Tiger Shrimp Roll",
    ingredients: {
        meat: ["shrimp", "crab meat"],
        veggies: ["cucumber", "avocado"],
        wrapper: "seaweed",
        misc: ["spicy mayo"]
    },
    spicy: false,
    raw: false,
    price: 13.95},

    {name: "Superman Burrito",
    ingredients: {
        meat: ["salmon", "tuna", "crab meat", "yellowtail"],
        veggies: ["avocado"],
        wrapper: "soy paper",
        misc: ["spicy ponzu sauce", "spicy mayo", "sweet mayo"]
    },
    spicy: false,
    raw: true,
    price: 15.95},

    {name: "Heavenly Roll",
    ingredients: {
        meat: ["salmon", "tuna", "yellowtail", "shrimp"],
        veggies: ["cucumber"],
        wrapper: "cucumber",
        misc: ["ponzu sauce", "japanese mustard sauce"]
    },
    spicy: false,
    raw: true,
    price: 15.95},

    {name: "Candy Cane Roll",
    ingredients: {
        meat: ["tuna", "yellowtail", "crab meat"],
        veggies: ["avocado"],
        wrapper: "soy paper",
        misc: ["sweet mayo"]
    },
    spicy: false,
    raw: true,
    price: 14.95},

    {name: "Tsunami Roll",
    ingredients: {
        meat: ["salmon", "spicy tuna"],
        veggies: ["avocado", "cucumber", "radish sprout"],
        wrapper: "seaweed",
        misc: ["eel sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Sake Tower",
    ingredients: {
        meat: ["salmon", "spicy tuna", "crab meat"],
        veggies: ["avocado", "radish sprout"],
        wrapper: null,
        misc: ["house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 16.95},

    {name: "Ahi Tower",
    ingredients: {
        meat: ["tuna", "spicy tuna", "crab meat"],
        veggies: ["avocado", "radish sprout"],
        wrapper: null,
        misc: ["house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 16.95},

    //TEMPURA ROLLS (16)

    {name: "Phoenix Roll",
    ingredients: {
        meat: ["salmon", "red snapper", "tuna"],
        veggies: [],
        wrapper: "seaweed",
        misc: ["midori sauce"]
    },
    spicy: false,
    raw: false,
    price: 10.95},

    {name: "Spider Roll",
    ingredients: {
        meat: ["soft shell crab", "crab meat"],
        veggies: ["avocado", "cucumber", "carrot", "radish sprout"],
        wrapper: "seaweed",
        misc: ["eel sauce"]
    },
    spicy: false,
    raw: true,
    price: 12.95},

    {name: "Hot Night Roll",
    ingredients: {
        meat: ["shrimp", "crab meat", "spicy tuna"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["cream cheese", "tempura flakes", "house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Texas Roll",
    ingredients: {
        meat: ["shrimp"],
        veggies: ["avocado", "jalepano"],
        wrapper: "seaweed",
        misc: ["midori sauce"]
    },
    spicy: true,
    raw: false,
    price: 10.95},

    {name: "Hurricane Roll",
    ingredients: {
        meat: ["shrimp", "albacore", "spicy tuna"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["japanese mustard sauce", "eel sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Crunch Shrimp Tempura Roll",
    ingredients: {
        meat: ["shrimp", "crab meat"],
        veggies: ["avocado", "cucumber", "radish sprout"],
        wrapper: "seaweed",
        misc: ["eel sauce", "tempura flakes"]
    },
    spicy: false,
    raw: true,
    price: 11.95},

    {name: "Lion King Roll",
    ingredients: {
        meat: ["shrimp", "crab meat", "salmon", "eel"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["house special sauce"]
    },
    spicy: false,
    raw: true,
    price: 15.95},

    {name: "Tiger's Eye Roll",
    ingredients: {
        meat: ["smoked salmon"],
        veggies: ["jalepano"],
        wrapper: "soy paper",
        misc: ["cream cheese", "eel sauce"]
    },
    spicy: false,
    raw: false,
    price: 11.95},

    {name: "Popcorn Crawfish Roll",
    ingredients: {
        meat: ["crawfish", "spicy tuna"],
        veggies: ["cucumber", "radish sprout"],
        wrapper: "seaweed",
        misc: ["house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 15.95},

    {name: "Midori Boca Raton Roll",
    ingredients: {
        meat: ["smoked salmon", "crab meat"],
        veggies: [],
        wrapper: "seaweed",
        misc: ["cream cheese", "midori sauce"]
    },
    spicy: false,
    raw: false,
    price: 12.95},

    {name: "Sunset Roll",
    ingredients: {
        meat: ["shrimp", "crab meat", "eel"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["cream cheese", "eel sauce"]
    },
    spicy: false,
    raw: false,
    price: 15.95},

    {name: "Red Dragon Roll",
    ingredients: {
        meat: ["shrimp", "crab meat"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["eel sauce"]
    },
    spicy: true,
    raw: true,
    price: 13.95},

    {name: "Lone Star Roll",
    ingredients: {
        meat: ["crawfish", "crab meat"],
        veggies: ["avocado"],
        wrapper: "seaweed",
        misc: ["cream cheese", "house special sauce"]
    },
    spicy: true,
    raw: false,
    price: 15.95},

    {name: "Big Fire Roll",
    ingredients: {
        meat: ["shrimp", "spicy tuna"],
        veggies: ["avocado", "jalepano"],
        wrapper: "seaweed",
        misc: ["cream cheese", "midori sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Godzilla Roll",
    ingredients: {
        meat: ["crab meat", "spicy tuna"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["cream cheese", "tempura flakes", "house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 16.95},

    {name: "Spicy Murphy Roll",
    ingredients: {
        meat: ["salmon", "spicy tuna"],
        veggies: ["avocado", "cucumber", "jalepano"],
        wrapper: "seaweed",
        misc: ["tempura flakes", "house special sauce"]
    },
    spicy: true,
    raw: true,
    price: 15.95},

    //BAKED ROLLS (5)

    {name: "Baked Salmon Roll",
    ingredients: {
        meat: ["salmon", "crab meat"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["eel sauce", "midori sauce"]
    },
    spicy: false,
    raw: true,
    price: 12.95},

    {name: "Magma Roll",
    ingredients: {
        meat: ["scallop", "crab meat"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["midori sauce"]
    },
    spicy: false,
    raw: true,
    price: 14.95},

    {name: "Crazy Crawfish Roll",
    ingredients: {
        meat: ["crawfish", "crab meat"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["eel sauce", "midori sauce"]
    },
    spicy: false,
    raw: true,
    price: 14.95},

    {name: "Volcano Roll",
    ingredients: {
        meat: [ "salmon", "spicy tuna", "crab meat"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["eel sauce", "midori sauce"]
    },
    spicy: true,
    raw: true,
    price: 14.95},

    {name: "Dynamite Roll",
    ingredients: {
        meat: ["crawfish", "scallop", "crab meat"],
        veggies: ["avocado", "cucumber"],
        wrapper: "seaweed",
        misc: ["eel sauce", "midori sauce"]
    },
    spicy: false,
    raw: true,
    price: 14.95}

]

// ***************************************************************
//  GLOBAL VARIABLES
// ***************************************************************

var spicyRolls = [];
var nonSpicyRolls = [];
var objExclude = {
    meat: [],
    veggies: ["avocado"],
    wrapper: "",
    misc: []
};
// var objInclude = {veggies: "avocado"};
var suggestedRolls =[];
var arrRemoveRolls = [];
var arrKeeperRolls = [];

// ***************************************************************
// QUICK FILTER SEARCHES
// ***************************************************************

//Spicy Rolls
midoriRolls.forEach(function (roll) {
   
    if (roll.spicy === true) {
        spicyRolls.push(roll.name);
    } else {
        nonSpicyRolls.push(roll.name);
    }
    
});

// console.log(spicyRolls);
// console.log(nonSpicyRolls);

//Rolls that do not contain RAW ingredients


//Vegetarian Rolls


//Rolls ordered by price


// ***************************************************************
// EXCLUSION PREFERENCES
// ***************************************************************

function removeRolls(arr) {

    //Checks for meat preferences:
    arr.forEach(function (roll) {
        for(var i = 0; i < roll.ingredients.meat.length; i++){
            for(var j = 0; j < objExclude.meat.length; j++){
                if (objExclude.meat[j] == roll.ingredients.meat[i]){
                    arrRemoveRolls.push(roll.name)
                }
            }  
        }
    });

    //Checks for veggie preferences:
    arr.forEach(function (roll) {
        for(var i = 0; i < roll.ingredients.veggies.length; i++){
            for(var j = 0; j < objExclude.veggies.length; j++){
                if (objExclude.veggies[j] == roll.ingredients.veggies[i]){
                    arrRemoveRolls.push(roll.name)
                }
            }  
        }
    });

    //Checks for wrapper preferences:
    arr.forEach(function(roll) {
        if(objExclude.wrapper == roll.ingredients.wrapper){
            arrRemoveRolls.push(roll.name)
        }
    })


    //Checks for sauces preferences:
    arr.forEach(function (roll) {
        for(var i = 0; i < roll.ingredients.misc.length; i++){
            for(var j = 0; j < objExclude.misc.length; j++){
                if (objExclude.misc[j] == roll.ingredients.misc[i]){
                    arrRemoveRolls.push(roll.name)
                }
            }
        }
    })

    //Produce an array of Rolls to Suggest based on Preferences
    arr.forEach(function(roll) {
        var match = arrRemoveRolls.find(x => x === roll.name)
        if(!match){
            arrKeeperRolls.push(roll.name)
        }
    })
    
    console.log("Here are some rolls we think you would like: " + arrKeeperRolls)
}

removeRolls(midoriRolls);


// ***************************************************************
// INCLUSION PREFERENCES
// ***************************************************************
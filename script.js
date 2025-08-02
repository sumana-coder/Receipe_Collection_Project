const recipes = [
  {
    name: "Pasta Primavera",
    image: "images/pasta.jpg",
    description: "A delicious mix of pasta and fresh vegetables.",
    ingredients: [
      "Pasta",
      "Bell peppers",
      "Zucchini",
      "Olive oil",
      "Garlic",
      "Parmesan cheese"
    ],
    steps: [
      "Boil pasta until al dente.",
      "Sauté bell peppers and zucchini in olive oil.",
      "Add garlic and cook for 1 minute.",
      "Mix vegetables with pasta.",
      "Top with grated parmesan and serve."
    ]
  },
  {
    name: "Chocolate Cake",
    image: "images/chocolate_cake.jpg",
    description: "Rich and moist chocolate layered cake.",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Eggs",
      "Sugar",
      "Butter",
      "Baking powder"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Mix dry ingredients in a bowl.",
      "Add eggs, melted butter and mix well.",
      "Pour into a greased cake tin.",
      "Bake for 30 minutes and let it cool before serving."
    ]
  },
  {
    name: "Paneer Butter Masala",
    image: "images/paneer.jpg",
    description: "Creamy tomato-based curry with paneer cubes.",
    ingredients: [
      "Paneer cubes",
      "Tomatoes",
      "Butter",
      "Cream",
      "Garam masala",
      "Ginger-garlic paste"
    ],
    steps: [
      "Cook tomatoes with spices and blend into a paste.",
      "Add butter and ginger-garlic paste.",
      "Cook the paste and add paneer cubes.",
      "Pour in cream and simmer for 5 minutes.",
      "Serve hot with naan or rice."
    ]
  },
  {
    name: "Mango Smoothie",
    image: "images/mango.jpg",
    description: "Refreshing mango drink for hot days.",
    ingredients: [
      "Ripe mango",
      "Yogurt",
      "Honey",
      "Ice cubes"
    ],
    steps: [
      "Peel and chop the mango.",
      "Blend mango, yogurt, and honey until smooth.",
      "Add ice cubes and blend again.",
      "Pour into a glass and serve chilled."
    ]
  },
  {
    name: "Shukto",
    image: "images/shukto.jpg",
    description: "A traditional Bengali mixed vegetable dish with bitter gourd.",
    ingredients: [
      "Bitter gourd",
      "Potato",
      "Raw banana",
      "Drumstick",
      "Ridge gourd",
      "Mustard paste",
      "Milk",
      "Panch phoron"
    ],
    steps: [
      "Fry bitter gourd pieces separately.",
      "Sauté vegetables with panch phoron.",
      "Add mustard paste and water. Cook until vegetables soften.",
      "Add fried bitter gourd and milk.",
      "Simmer for 5 mins and serve with rice."
    ]
  },
  {
    name: "Doi Katla",
    image: "images/doi_katla.jpg",
    description: "Big fish cooked in rich Bengali yogurt-based gravy.",
    ingredients: [
      "Katla fish",
      "Curd",
      "Onion paste",
      "Ginger-garlic paste",
      "Mustard oil",
      "Turmeric and red chili powder"
    ],
    steps: [
      "Marinate fish with turmeric and salt, then fry lightly.",
      "Sauté onion and ginger-garlic paste.",
      "Add curd and spices, cook till oil separates.",
      "Add fish pieces and simmer for 10 mins.",
      "Garnish with coriander and serve hot."
    ]
  },
  {
    name: "Chili Chicken",
    image: "images/chili_chicken.jpg",
    description: "Spicy Indo-Chinese style chicken with a glossy sauce.",
    ingredients: [
      "Boneless chicken",
      "Soy sauce",
      "Cornflour",
      "Capsicum",
      "Onion",
      "Green chili",
      "Garlic and ginger"
    ],
    steps: [
      "Marinate chicken with soy sauce, cornflour, salt.",
      "Fry until golden and crispy.",
      "Sauté chopped garlic, onions, capsicum, and chili.",
      "Add sauces and toss the fried chicken.",
      "Serve hot with noodles or fried rice."
    ]
  },
  {
    name: "Fried Rice",
    image: "images/fried_rice.jpg",
    description: "Stir-fried rice with vegetables and soy sauce.",
    ingredients: [
      "Cooked rice",
      "Carrot",
      "Beans",
      "Capsicum",
      "Soy sauce",
      "Pepper",
      "Spring onions"
    ],
    steps: [
      "Heat oil and sauté all chopped vegetables.",
      "Add soy sauce, pepper, and mix well.",
      "Add cooked rice and stir-fry for 3–5 mins.",
      "Garnish with spring onions and serve."
    ]
  },
  {
    name: "Chicken Biryani",
    image: "images/biryani.jpg",
    description: "Fragrant rice and spicy chicken layered together.",
    ingredients: [
      "Basmati rice",
      "Chicken",
      "Yogurt",
      "Fried onions",
      "Biryani masala",
      "Saffron milk"
    ],
    steps: [
      "Marinate chicken with yogurt and spices.",
      "Cook basmati rice 70% and set aside.",
      "Layer chicken and rice with fried onions and saffron milk.",
      "Cover tightly and cook on low flame (dum) for 25 minutes.",
      "Serve hot with raita."
    ]
  },
  {
    name: "Rosogolla",
    image: "images/rosogolla.jpg",
    description: "Spongy white cheese balls soaked in sugar syrup.",
    ingredients: [
      "Chenna (fresh paneer)",
      "Water",
      "Sugar",
      "Cardamom"
    ],
    steps: [
      "Knead chenna until smooth and make small balls.",
      "Boil water with sugar to make syrup.",
      "Add balls and cook covered on high flame for 10 mins.",
      "Simmer for another 10 mins.",
      "Cool and serve chilled."
    ]
  },
  {
    name: "Chingri Macher Malaicurry",
    image: "images/chingri.jpg",
    description: "Prawns in a rich coconut milk curry.",
    ingredients: ["Prawns", "Coconut milk", "Onion paste", "Ginger", "Green chili", "Mustard oil"],
    steps: [
      "Marinate prawns with turmeric and salt.",
      "Fry lightly in mustard oil.",
      "Sauté onion paste, ginger, green chili.",
      "Add coconut milk and simmer.",
      "Add prawns and cook till done."
    ]
  },
  {
    name: "Dab Chingri",
    image: "images/dab_chingri.jpg",
    description: "Prawns cooked inside tender coconut.",
    ingredients: ["Prawns", "Coconut water", "Mustard paste", "Green chili", "Tender coconut flesh"],
    steps: [
      "Mix prawns with mustard paste and green chili.",
      "Stuff inside tender coconut.",
      "Steam for 15–20 mins.",
      "Serve hot with rice."
    ]
  },
  {
    name: "Aloo Posto",
    image: "images/aloo_posto.jpg",
    description: "Potatoes in poppy seed paste.",
    ingredients: ["Potatoes", "Poppy seeds", "Green chili", "Mustard oil"],
    steps: [
      "Soak and grind poppy seeds to paste.",
      "Fry potatoes in mustard oil.",
      "Add poppy paste and green chili.",
      "Cook till potatoes are soft."
    ]
  },
  {
    name: "Sorshe Ilish",
    image: "images/sorshe_ilish.jpg",
    description: "Hilsa fish in mustard gravy.",
    ingredients: ["Hilsa fish", "Mustard paste", "Green chili", "Mustard oil"],
    steps: [
      "Marinate fish with salt and turmeric.",
      "Make mustard paste with green chili.",
      "Cook fish with mustard paste in mustard oil.",
      "Simmer and serve with hot rice."
    ]
  },
  {
    name: "Cholar Dal",
    image: "images/cholar_dal.jpg",
    description: "Bengali-style chana dal with coconut.",
    ingredients: ["Chana dal", "Coconut pieces", "Bay leaf", "Cinnamon", "Ginger"],
    steps: [
      "Boil dal with turmeric and salt.",
      "Fry spices and coconut.",
      "Add dal and simmer."
    ]
  },
  {
    name: "Alur Dum",
    image: "images/alur_dum.jpg",
    description: "Spicy Bengali potato curry.",
    ingredients: ["Potatoes", "Tomatoes", "Cumin", "Garam masala", "Ginger paste"],
    steps: [
      "Boil and fry potatoes.",
      "Make masala with tomatoes, spices.",
      "Add potatoes and cook well."
    ]
  },
  {
    name: "Muri Ghonto",
    image: "images/muri_ghonto.jpg",
    description: "Fish head curry with rice.",
    ingredients: ["Fish head", "Gobindobhog rice", "Potato", "Spices"],
    steps: [
      "Fry fish head.",
      "Add rice, spices and water.",
      "Cook till soft and serve."
    ]
  },
  {
    name: "Egg Roll",
    image: "images/egg_roll.jpg",
    description: "Kolkata-style egg wrap with veggies.",
    ingredients: ["Paratha", "Eggs", "Onion", "Green chili", "Tomato ketchup"],
    steps: [
      "Make paratha and fry egg on it.",
      "Fill with onions and chili.",
      "Roll it and serve with ketchup."
    ]
  },
  {
    name: "Moglai Paratha",
    image: "images/moglai.jpg",
    description: "Stuffed paratha with minced meat and egg.",
    ingredients: ["Flour", "Eggs", "Minced meat", "Onion", "Green chili"],
    steps: [
      "Prepare dough and stuffing.",
      "Stuff meat and egg mix in paratha.",
      "Fry till golden."
    ]
  },
  {
    name: "Idli",
    image: "images/idli.jpg",
    description: "Steamed South Indian rice cakes.",
    ingredients: ["Idli rice", "Urad dal", "Salt"],
    steps: [
      "Soak and grind rice and dal.",
      "Ferment overnight.",
      "Steam in idli moulds."
    ]
  },
  {
    name: "Dosa",
    image: "images/dosa.jpg",
    description: "Crispy South Indian crepes.",
    ingredients: ["Dosa batter", "Oil", "Chutney"],
    steps: [
      "Heat pan and spread batter.",
      "Drizzle oil and cook crisp.",
      "Serve with chutney."
    ]
  },
  {
    name: "Chhanar Kofta",
    image: "images/chanar_kofta.jpg",
    description: "Paneer balls in tomato gravy.",
    ingredients: ["Paneer", "Cornflour", "Tomato", "Spices"],
    steps: [
      "Make paneer balls and fry.",
      "Prepare tomato gravy.",
      "Add balls and simmer."
    ]
  },
  {
    name: "Dhokar Dalna",
    image: "images/dhokar_dalna.jpg",
    description: "Lentil cakes in spicy gravy.",
    ingredients: ["Chana dal", "Tomatoes", "Spices"],
    steps: [
      "Prepare and steam lentil cakes.",
      "Fry and add to gravy.",
      "Simmer and serve."
    ]
  },
  {
    name: "Mishti Doi",
    image: "images/mishti_doi.jpg",
    description: "Sweet fermented yogurt.",
    ingredients: ["Milk", "Sugar", "Yogurt"],
    steps: [
      "Boil and reduce milk.",
      "Add caramelized sugar and yogurt.",
      "Set in pot overnight."
    ]
  },
  {
    name: "Patisapta",
    image: "images/patisapta.jpg",
    description: "Sweet crepes with coconut-jaggery filling.",
    ingredients: ["Flour", "Milk", "Coconut", "Jaggery"],
    steps: [
      "Make filling with coconut and jaggery.",
      "Prepare thin crepes.",
      "Stuff and fold."
    ]
  },
  {
    name: "Taler Bora",
    image: "images/taler_bora.jpg",
    description: "Palm fruit fritters.",
    ingredients: ["Palm pulp", "Flour", "Jaggery", "Coconut"],
    steps: [
      "Mix pulp, jaggery, flour.",
      "Add coconut and fry in oil."
    ]
  },
  {
    name: "Malpua",
    image: "images/malpua.jpg",
    description: "Sweet syrup-soaked pancakes.",
    ingredients: ["Flour", "Milk", "Sugar", "Fennel seeds"],
    steps: [
      "Prepare batter and fry pancakes.",
      "Dip in sugar syrup.",
      "Serve warm."
    ]
  }
];

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");

function displayRecipes(recipeList) {
  recipeContainer.innerHTML = "";
  recipeList.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    const ingredientsHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join("");
    const stepsHTML = recipe.steps.map((step, i) => `<li>Step ${i + 1}: ${step}</li>`).join("");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <button onclick="toggleDetails(${index})">View Details</button>
        <div id="details-${index}" class="details" style="display: none;">
          <h4>Ingredients:</h4>
          <ul>${ingredientsHTML}</ul>
          <h4>Steps:</h4>
          <ol>${stepsHTML}</ol>
        </div>
      </div>
    `;
    recipeContainer.appendChild(card);
  });
}

function toggleDetails(index) {
  const detailDiv = document.getElementById(`details-${index}`);
  detailDiv.style.display = detailDiv.style.display === "none" ? "block" : "none";
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)
  );
  displayRecipes(filtered);
});

displayRecipes(recipes);
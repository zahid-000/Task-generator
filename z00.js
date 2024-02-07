let btn = document.getElementById("btn");
let output = document.getElementById('output')
let Task = [

    ". Write a poem about your favorite season." ,
    ". Create a list of 10 things that make you smile.",
    ". Draw a doodle of a fantastical creature.",
    ". Learn a new dance move and perform it.",
    ". Cook a meal using ingredients you've never tried before.",
    ". Write a short story with a surprising twist ending.",
    ". Take a nature walk and photograph interesting things you find.",
    ". Learn a magic trick and amaze your friends.",
    ". Organize a small community cleanup in your neighborhood.",
    ". Practice a new language for 30 minutes.",
    ". Create a vision board with your goals for the year.",
    ". Try a new workout routine or exercise.",
    ". Design a unique outfit and sketch it out.",
    ". Volunteer at a local charity or organization.",
    ". Write a letter to a friend or family member you haven't spoken to in a while.",
    ". Create a playlist of songs that lift your spirits.",
    ". Learn a new card game or board game.",
    ". Start a journal and write about your day.",
    ". Research and try a new hobby, like gardening or painting.",
    ". Take a digital detox for a few hours and enjoy some quiet time.",
    ". Practice mindfulness meditation for 15 minutes.",
    ". Build a small DIY project with materials around your home.",
    ". Write a letter to your future self and seal it to read later.",
    ". Learn a few basic constellations and stargaze for an evening.",
    ". Create a bucket list of places you want to visit in your lifetime.",
    ". Try a new type of cuisine you've never had before.",
    ". Design a personalized logo or symbol that represents you.",
    ". Plan a themed movie night and invite friends or family.",
    ". Take a photography challenge: capture the beauty of your surroundings in 10 photos.",
    ". Research and share three interesting facts about a country you've never been to.",
    ". Learn a simple magic card trick and perform it for someone.",
    ". Volunteer at an animal shelter for a few hours.",
    ". Create a time capsule and bury it in your backyard.",
    ". Write a short play and ask friends to perform it with you.",
    ". Explore a nearby town or city you've never been to.",
    ". Learn a few basic origami designs and make paper creations.",
    ". Start a book club with friends and choose a book to read together.",
    ". Visit a museum or art gallery and appreciate the exhibits.",
    ". Write a list of 10 things you're grateful for in your life.",
    ". Take a day trip to a natural landmark or scenic spot."


];

btn.addEventListener('click',function(){
    var randomTask = Task[Math.floor(Math.random() * Task.length)]
    output.innerHTML = randomTask;
});

 
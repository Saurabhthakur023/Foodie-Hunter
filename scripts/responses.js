function getBotResponse(input) {
    //rock paper scissors
    if (input == "chl bhosdike") {
        return "bhadu";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Menu") {
        return "Paneer,Momo,Biryani,";
    } else {
        return "Try asking something else!";
    }
}
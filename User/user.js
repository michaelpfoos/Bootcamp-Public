//user class from the slides.  We will further this for this practice assignment.
class User {
    constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }
    makeWidthdrawl(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log(`${this.name}'s Account Balance: ${this.accountBalance}`);
    }
    transferBalance(to, amount) {
        this.accountBalance -= amount;
        to.makeDeposit(amount);
        console.log(`${this.name} has transferred ${amount} to ${to.name}'s account.`);
        this.displayBalance();
        to.displayBalance();
    }

}

//use the constructor to create your "users"
mike = new User("Mike", "mike@somewhere.com");
carl = new User("Carl", "carl@somehwere.com");
joe = new User("Joe", "joe@somewhere.edu");

//first user will make 3 deposits and 1 withdrawl then dispaly their balance
mike.makeDeposit(100);
mike.makeDeposit(100);
mike.makeDeposit(50);
mike.displayBalance();

//second user will make 2 deposits and 2 withdrawls and then display their balance
carl.makeDeposit(100);
carl.makeDeposit(100);
carl.makeWidthdrawl(10);
carl.makeWidthdrawl(20);
carl.displayBalance();


//third user will make 1 deposit and 3 withdrawls then display their balance
joe.makeDeposit(1000);
joe.makeWidthdrawl(100);
joe.makeWidthdrawl(100);
joe.makeWidthdrawl(200);
joe.displayBalance();

joe.transferBalance(mike, 100);


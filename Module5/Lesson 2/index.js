// class User {
//     constructor(parameters) {
//         this.email = parameters.email;
//         this.name = parameters.name;
//         this.password = parameters.password;
//     }

//     invitation() {
//         console.log(`Hello ${this.name}!`);
//     }
// }

// const alex = new User({
//     name: "Alex",
//     email: "alex@gmail.com",
//     password: "dfskjsenfbh3b42h3g6"
// })

// const nick = new User({
//     name: "Nick",
//     email: "nick@gmail.com",
//     password: "dfskjsenfbh3b42h3g6"
// })

// alex.invitation()
// console.log(nick);
// nick.invitation()


// =======================================
// class User {
//     constructor(userParameters) {
//         this.email = userParameters.email;
//         this.name = userParameters.name;
//         this.password = userParameters.password;
//     }

//     invitation() {
//         console.log(`Hello ${this.name}!`);
//     }
// }

// class Guest extends User {
//     constructor(guestParameters) {
//         super(guestParameters); //Hero.call(this, parameters)
//         this.term = guestParameters.term
//     }

//     invitation() {
//         super.invitation();
//         console.log(`You can use this account before ${this.term}`);
//     }
// }

// const user = new Guest({
//     name: "Nick",
//     email: "nick@gmail.com",
//     password: "dfskjsenfbh3b42h3g6", 
//     term: "30.04.2020"
// });

// user.invitation()

// ========================
// class User {
//     static type = "USER";
//     constructor(userParameters) {
//         this.email = userParameters.email;
//         this.name = userParameters.name;
//         this.password = userParameters.password;
//     }
//     invitation(word) {
//         console.log(`Hello ${word} ${this.name}!`);
//     }
// }

// class Guest extends User {
//     constructor(guestParameters) {
//         super(guestParameters); //Hero.call(this, parameters)
//         this.term = guestParameters.term
//     }
//     show(word) {
//         super.invitation(word);
//         console.log(`You can use this account before ${this.term}`);
//     }
//     get termInfo() {
//         return this.term
//     }
//     set termInfo(newTerm) {
//         this.term = newTerm;
//     }
//     get currentName() {
//         return this.name;
//     }
//     set currentName(newName) {
//         this.name = newName;  
//     }
// }

// const user = new Guest({
//     name: "Nick",
//     email: "nick@gmail.com",
//     password: "dfskjsenfbh3b42h3g6",
//     term: "30.04.2020"
// });
// // user.show("dear")
// // user.termInfo = '30.05.2020';
// // console.log(user.termInfo);
// // user.name = 'Alex';
// // console.log(user.currentName);
// // console.log(user);


// =================================
// class User {
//     static type = "USER";

//     constructor(userParameters) {
//         this.email = userParameters.email;
//         this.name = userParameters.name;
//         this.password = userParameters.password;
//     }
//     invitation(word = "dear") {
//         console.log(`Hello ${word} ${this.name}!`);
//     }
// }

// class Guest extends User {
//     static type = "GUEST";

//     constructor(guestParameters) {
//         super(guestParameters); //Hero.call(this, parameters)
//         this.term = guestParameters.term
//     }
//     show(word) {
//         super.invitation(word);
//         console.log(`You can use this account before ${this.term}`);
//     }
// }

// class Admin extends User {
//     static type = "ADMIN";

//     constructor(adminParameters) {
//         super(adminParameters);
//         this.term = adminParameters.term;
//     }
//     inviteAdmin() {
//         super.invitation();
//         console.log(`You have no term for use this account. Your term - ${this.term} `);
//     }
// }

// const user = new Admin({
//     name: "Nick",
//     email: "nick@gmail.com",
//     password: "dfskjsenfbh3b42h3g6",
//     term: "infinity"
// });

// user.inviteAdmin()






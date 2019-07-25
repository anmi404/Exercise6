
var ExerciseC6A = artifacts.require("ExerciseC6A");
var ExerciseC6B = artifacts.require("ExerciseC6B");
var ExerciseC6C = artifacts.require("ExerciseC6C");
var ExerciseC6CApp = artifacts.require("ExerciseC6CApp");


var Config = async function(accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x09ca62860d3a215e8999d9ed76306899ec0d42f5",
        "0x9c5073e861405c8f2c3afc9932bc026310012f41",
        "0x63a59dd1594f866ea763aff8ddc3101955a0df66",
        "0x28d1515a897bdc5212b79cd614c805740d02acf5",
        "0x9f7a40bfacab7665f1f7802955747ba86a6eb8fb",
        "0x0c08a91bcd655598a6dde428acdf40115da14666",
        "0x661b03327b7d27d535f82283fd07d083bf8fb9ff",
        "0x5fbe05ca0768533aa4e377ff8a242a5c2f18b20a",
        "0x5ac7c639f193dca7ee35d959de924ca63eb3462b",
        "0x1403a107a01f5dc11c29d1c57896b036528b84df"
    ];


    let owner = accounts[0];
    let exerciseC6A = await ExerciseC6A.new();
    let exerciseC6B = await ExerciseC6B.new();
    let exerciseC6C = await ExerciseC6C.new();
    let exerciseC6CApp = await ExerciseC6CApp.new(exerciseC6C.address);


    return {
        owner: owner,
        testAddresses: testAddresses,
        exerciseC6A: exerciseC6A,
        exerciseC6B: exerciseC6B,
        exerciseC6C: exerciseC6C,
        exerciseC6CApp: exerciseC6CApp,

    }
}

module.exports = {
    Config: Config
};
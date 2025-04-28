class Player {

    constructor(name, currentLocation = "Home", travelPlan = []) {
        this.name = name;
        this.currentLocation = currentLocation;
        this.travelPlan = travelPlan;
    }

    addDestinations(...places) {  // use spread operator to add multiple destinations
        this.travelPlan.push(...places);
    }

    get showSecretPlan() {
        return () => {
            console.log(`Player ${this.name} has a secret travel plan: ${this.travelPlan.join(` | `)}`);
        }
    }
}

function scheduleMatch(playerName, location, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Match scheduled for ${playerName} at ${location} time : ${time  = getRandomTime()} `);
            resolve(location);
        }, 2000);
    })
}

function getRandomTime() {
    const now = new Date();
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), randomHour, randomMinute);
}

const virat = new Player("Virat");
virat.addDestinations("Mumbai", "Chennai", "Delhi", "Bangalore", "Kolkata");
virat.showSecretPlan();

const dhoni = new Player("Dhoni");
dhoni.addDestinations("Chennai", "Mumbai", "Delhi", "Bangalore", "Kolkata");
dhoni.showSecretPlan();

const rohit = new Player("Rohit");
rohit.addDestinations("Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai");
rohit.showSecretPlan();



Promise.all([
    scheduleMatch(virat.name, virat.travelPlan[Math.floor(Math.random() * virat.travelPlan.length)], virat.time),
    scheduleMatch(dhoni.name, dhoni.travelPlan[Math.floor(Math.random() * dhoni.travelPlan.length)], dhoni),   
    scheduleMatch(rohit.name, rohit.travelPlan[Math.floor(Math.random() * rohit.travelPlan.length)], rohit.time)
]).then((locations) => {
    console.log(`All matches scheduled at: ${locations.join(", ")}`);
}).catch((error) => {
    console.error("Error scheduling matches:", error);
});

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if(this.type == "Space Debris"){
			console.log("space debris function is running and status is true")
			return true;
		} else {
			console.log("space debris function is running and status is false")
			return false;
		}
   }

}

// TODO 3a: fix isSpaceDebris check

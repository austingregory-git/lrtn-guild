const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'e7c6bd0f1525486f8564162de9b528b3';  
const clientSecret = 'V0Fd6R1lo477dROFXwBkNy49tYyHJdRo';  

module.exports = (async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);
   const data = await bnw.WowProfileData.getGuildRoster('kelthuzad', 'lemme-run-the-numbers').then(function(result) {
	   const json = JSON.stringify(result);
	   const obj = JSON.parse(json);
	   var names = obj.members.map(function (member) {
		   return member.character.name;
	   });
	   module.exports = name;
	   console.log(names);
	   /*var nonofficernames = obj.members.map(function (member) {
		   return member.character.name;
	   });
	   console.log(names);*/
	   //console.log(obj);
	   const guildmembers = obj.members;
	   //wowarmorylink
	   var armorylink = 'https://worldofwarcraft.com/en-us/character/us/kelthuzad/';
	   //console.log(guildmembers);
	   //console.log(Object.keys(obj));
	   var pclasses = 
	   {"1": "Warrior",
		"2": "Paladin",
		"3": "Hunter",
		"4": "Rogue",
		"5": "Priest",
		"6": "Death Knight",
		"7": "Shaman",
		"8": "Mage",
		"9": "Warlock",
		"10": "Monk",
		"11": "Druid",
		"12": "Demon Hunter"};
		
		var classcolors =
		{"Warrior": "#C79C6E",
		 "Paladin": "#F58CBA",
		 "Hunter": "#ABD473",
		 "Rogue": "#FFF569",
		 "Priest": "#FFFFFF",
		 "Death Knight": "#C41F3B",
		 "Shaman": "0070DE",
		 "Mage": "#69CCF0",
		 "Warlock": "#9482C9",
		 "Monk": "#00FF96",
		 "Druid": "#FF7D0A",
		 "Demon Hunter": "Strong Magenta"}
	   console.log("Officers:");
	   var onames = [];
	   for(var i in guildmembers) {
			var rank = obj.members[i].rank;
			var name = obj.members[i].character.name;
			var pclass = pclasses[Object.values(obj.members[i].character.playable_class)[1]];
			var armory = armorylink.concat(name);
			if(rank < 2) {
				var s = "name: " + name + " - " + pclass;
				console.log("name: " + name + " - " + pclass);
				onames.push(s);
				console.log("WoW armory link: " + armory);
				//console.log('%cclass: ' + pclass, 'color:' + classcolors[pclass] + '');
			}
	   }
	   console.log(onames);
	   exports.onames = onames;
   });
/* data.then(function(result) {
	const json = JSON.parse(response);
   });*/
   
}());




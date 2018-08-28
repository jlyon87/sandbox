const options = [
  { text: "Javascript", value: "Javascript"},
	{ text: "Salesforce", value: "Salesforce"},
	{ text: "Server", value: "Server"},
	{ text: "DevOps", value: "DevOps"},
	{ text: "Front-end" , value: "Front-end"},
	{ text: "Database", value: "Database"},
	{ text: "Other", value: "Other"},
];
const selected = [
  "Salesforce",
  "Javascript"
];
const skills = [
  { name: "Javascript", mastery: 9, masteryScale: 10,
		description: "I've found a great deal of enjoyment learning the ins and outs of ECMAScript over the past two years.",
		type: ["Javascript"]
	},
	{ name: "Node JS", mastery: 8, masteryScale: 10,
		description: "Node has been a fantastic experience building full stack applications in Javascript.",
		type: ["Javascript", "Server"]
	},
	{ name: "Salesforce", mastery: 10, masteryScale: 10,
		description: "Since 2014, I've been employed as a consultant developer - building on the Salesforce CRM Platform.",
		type: ["Salesforce"]
	},
	{ name: "Lightning", mastery: 10, masteryScale: 10,
		description: "Salesforce's Javascript Framework. This is how I got thrown into the deep end of Javascript.",
		type: ["Javascript", "Salesforce"]
	},
	{ name: "Apex", mastery: 10, masteryScale: 10,
		description: "When you are a Salesforce Developer, this is the first thing you learn. Salesforce's backend language based on Java JDK 6.",
		type: ["Salesforce", "Server"]
	},
	{ name: "SOQL", mastery: 10, masteryScale: 10,
		description: "This is Salesforce's proprietary query language. It's very similar to SQL, but has its own limitations.",
		type: ["Salesforce", "Server"]
	},
	{ name: "Visualforce", mastery: 9, masteryScale: 10,
		description: "Visualforce is a classic MVC templating framework, akin to JSPs.",
		type: ["Salesforce"]
	},
	{ name: "DataLoader", mastery: 10	, masteryScale: 10,
		description: "This is the standard Salesforce ETL tool for extracting and updating data.",
		type: ["Salesforce"]
	},
	{ name: "NGINX", mastery: 7, masteryScale: 10,
		description: "This is a web server. I use it to configure my DNS configurations to a Node Process - exposing a local host express server to the www for example.",
		type: ["DevOps"]
	},
	{ name: "Linux", mastery: 6, masteryScale: 10,
		description: "My web server runs on Ubuntu 16.04.",
		type: ["DevOps"]
	},
	{ name: "Vue JS", mastery: 9, masteryScale: 10,
		description: "This is my JS SPA Framework of Choice. Though I can be dangerous with Angular and React as well.",
		type: ["Javascript", "Front-end"]
	},
	{ name: "Vuetify JS", mastery: 9, masteryScale: 10,
		description: "This is a Material Design component library for Vue Js.",
		type: ["Javascript", "Front-end"]
	},
	{ name: "RethinkDB", mastery: 9, masteryScale: 10,
		description: "This is an ReQL document database.",
		type: ["Database"]
	},
	{ name: "MongoDB", mastery: 8, masteryScale: 10,
		description: "This is a NoSQL document database.",
		type: ["Database"]
	},
	{ name: "MySQL", mastery: 7, masteryScale: 10,
		description: "This is his JS SPA Framework of Choice. Though he can be dangerous with Angular and React as well.",
		type: ["Database"]
	},
	{ name: "SQL", mastery: 7, masteryScale: 10,
		description: "This is his JS SPA Framework of Choice. Though he can be dangerous with Angular and React as well.",
		type: ["Database"]
	},
	{ name: "Cooking", mastery: 2, masteryScale: 10,
		description: "I'm not a great cook. I can do pastas and ramen, and maybe something on the grill.",
		type: ["Other"]
	},
	{ name: "Express", mastery: 9, masteryScale: 10,
		description: "Express Server for Node JS.",
		type: ["Javascript"]
	},
	{ name: "Express Session", mastery: 9, masteryScale: 10,
		description: "Session management plugin for Express.",
		type: ["Javascript"]
	},
	{ name: "Webpack", mastery: 9, masteryScale: 10,
		description: "Node Build Tool.",
		type: ["Javascript", "DevOps"]
	},
	{ name: "Kicking with his left foot", mastery: 10, masteryScale: 10,
		description: "Being ambidextrous is useful in soccer!",
		type: ["Other"]
	},
	{ name: "Ant", mastery: 9, masteryScale: 10,
		description: "Working with Salesforce, this has been a very useful way to run deployments as part of my CI tool chain.",
		type: ["Devops", "Salesforce"]
	},
	{ name: "Git", mastery: 9, masteryScale: 10,
		description: "Version Control is great. Version Control is good. BitBucket Pipelines is awesome.",
		type: ["DevOps"]
	},
	{ name: "Jenkins", mastery: 7, masteryScale: 10,
		description: "Version Control is great. Version Control is good. BitBucket Pipelines is awesome.",
		type: ["DevOps"]
	},
];

const hasSelected = (sel, opt) => {
  if(selected.length === 0) return skills;

  const options = opt.map(o => o.value);
  const matches = skills.filter(sk => {
    return sk.type.reduce((acc, val) => selected.includes(val) || acc, false);
  });

  return matches;
};

const arrayCompare = f => ([x, ...xs]) => ([y, ...ys]) =>
  x === undefined && y === undefined
    ? true
    : Boolean(f(x)(y)) && arrayCompare(f)(xs)(ys);

const filteredSkills = hasSelected(selected, options);
console.log("filteredSkills", JSON.stringify(filteredSkills, null, 2));

const sortMap = {
  name: (a, b) => {

  },
  mastery: (a, b) => (a.mastery - b.mastery) * -1
};

console.log("skills by name", skills.sort((a, b) => sortMap.name(a, b)).map(s => s.name));
console.log("skills by mastery", skills.sort((a, b) => sortMap.mastery(a, b)).map(s => s.mastery));

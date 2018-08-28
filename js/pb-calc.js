const sources = [
  { id: "b0", name: "player's handbook", abbr: "phb" },
  { id: "b1", name: "volo's guide to monsters", abbr: "vgm" },
  { id: "b2", name: "mordenkainen's tome of foes", abbr: "mtf" }
];
const races = [
  { id: "r0", name: "dwarf" },
  { id: "r1", name: "dragonborn" },
  { id: "r2", name: "elf" },
  { id: "r3", name: "gnome" },
  { id: "r4", name: "halfling" },
  { id: "r5", name: "half-elf" },
  { id: "r6", name: "half-orc" },
  { id: "r7", name: "human" },
  { id: "r8", name: "tiefling" },
  { id: "r9", name: "aasimar" },
  { id: "r10", name: "bugbear" },
  { id: "r11", name: "firbolg" },
  { id: "r12", name: "goblin" },
  { id: "r13", name: "hobgoblin" },
  { id: "r14", name: "kenku" },
  { id: "r15", name: "kobold" },
  { id: "r16", name: "lizardfolk" },
  { id: "r17", name: "orc" },
  { id: "r18", name: "tabaxi" },
  { id: "r19", name: "triton" },
  { id: "r20", name: "yuan-ti pureblood" },
  { id: "r21", name: "gith" }
];
const subraces = [
  { id: "sr0", name: "hill", raceId: "r0" },
  { id: "sr1", name: "mountain", raceId: "r0" },
  { id: "sr2", name: "drow", raceId: "r2" },
  { id: "sr3", name: "high", raceId: "r2" },
  { id: "sr4", name: "wood", raceId: "r2" },
  { id: "sr5", name: "forest", raceId: "r3" },
  { id: "sr6", name: "rock", raceId: "r3" },
  { id: "sr7", name: "lightfoot", raceId: "r4" },
  { id: "sr8", name: "stout", raceId: "r4" },
  { id: "sr9", name: "normal", raceId: "r7" },
  { id: "sr10", name: "variant", raceId: "r7" },
  { id: "sr11", name: "protector", raceId: "r9" },
  { id: "sr12", name: "scourge", raceId: "r9" },
  { id: "sr13", name: "fallen", raceId: "r9" },
  { id: "sr14", name: "githyanki", raceId: "r21" },
  { id: "sr15", name: "githzerai", raceId: "r21" },
  { id: "sr16", name: "eladrin", raceId: "r2" },
  { id: "sr17", name: "sea elf", raceId: "r2" },
  { id: "sr18", name: "shadar-kai", raceId: "r2" },
  { id: "sr19", name: "duergar", raceId: "r0" },
  { id: "sr20", name: "deep", raceId: "r3" }
];
const bonuses = [
  { id: "bn0", parentId: "r0", name: "constitution", value: 2 },
  { id: "bn1", parentId: "r1", name: "strength", value: 2 },
  { id: "bn2", parentId: "r1", name: "charisma", value: 1 },
  { id: "bn3", parentId: "r2", name: "dexterity", value: 2 },
  { id: "bn4", parentId: "r3", name: "intelligence", value: 2 },
  { id: "bn5", parentId: "r4", name: "dexterity", value: 2 },
  { id: "bn6", parentId: "r6", name: "strength", value: 2 },
  { id: "bn7", parentId: "r6", name: "constitution", value: 1 },
  { id: "bn8", parentId: "r8", name: "intelligence", value: 1 },
  { id: "bn9", parentId: "r8", name: "charisma", value: 2 },
  { id: "bn10", parentId: "r9", name: "charisma", value: 2 },
  { id: "bn11", parentId: "r10", name: "strength", value: 2 },
  { id: "bn12", parentId: "r10", name: "dexterity", value: 1 },
  { id: "bn13", parentId: "r11", name: "strength", value: 1 },
  { id: "bn14", parentId: "r11", name: "wisdom", value: 2 },
  { id: "bn15", parentId: "r12", name: "dexterity", value: 2 },
  { id: "bn16", parentId: "r12", name: "constitution", value: 1 },
  { id: "bn17", parentId: "r13", name: "constitution", value: 2 },
  { id: "bn18", parentId: "r13", name: "intelligence", value: 1 },
  { id: "bn19", parentId: "r14", name: "dexterity", value: 2 },
  { id: "bn20", parentId: "r14", name: "wisdom", value: 1 },
  { id: "bn21", parentId: "r15", name: "strength", value: -2 },
  { id: "bn22", parentId: "r15", name: "dexterity", value: 2 },
  { id: "bn23", parentId: "r16", name: "constitution", value: 2 },
  { id: "bn24", parentId: "r16", name: "wisdom", value: 1 },
  { id: "bn25", parentId: "r17", name: "strength", value: 2 },
  { id: "bn26", parentId: "r17", name: "constitution", value: 1 },
  { id: "bn27", parentId: "r17", name: "intelligence", value: -2 },
  { id: "bn28", parentId: "r18", name: "dexterity", value: 2 },
  { id: "bn29", parentId: "r18", name: "charisma", value: 1 },
  { id: "bn30", parentId: "r19", name: "strength", value: 1 },
  { id: "bn31", parentId: "r19", name: "constitution", value: 1 },
  { id: "bn32", parentId: "r19", name: "charisma", value: 1 },
  { id: "bn33", parentId: "r20", name: "intelligence", value: 1 },
  { id: "bn34", parentId: "r20", name: "charisma", value: 2 },
  { id: "bn35", parentId: "r21", name: "intelligence", value: 1 },
  { id: "bn36", parentId: "sr9", name: "strength", value: 1 },
  { id: "bn37", parentId: "sr9", name: "dexterity", value: 1 },
  { id: "bn38", parentId: "sr9", name: "constitution", value: 1 },
  { id: "bn39", parentId: "sr9", name: "intelligence", value: 1 },
  { id: "bn40", parentId: "sr9", name: "wisdom", value: 1 },
  { id: "bn41", parentId: "sr9", name: "charisma", value: 1 },
  { id: "bn42", parentId: "sr0", name: "wisdom", value: 1 },
  { id: "bn43", parentId: "sr1", name: "strength", value: 2 },
  { id: "bn44", parentId: "sr2", name: "charisma", value: 1 },
  { id: "bn45", parentId: "sr3", name: "intelligence", value: 1 },
  { id: "bn46", parentId: "sr4", name: "wisdom", value: 1 },
  { id: "bn47", parentId: "sr5", name: "dexterity", value: 1 },
  { id: "bn48", parentId: "sr6", name: "constitution", value: 1 },
  { id: "bn49", parentId: "sr7", name: "charisma", value: 1 },
  { id: "bn50", parentId: "sr8", name: "constitution", value: 1 },
  { id: "bn51", parentId: "sr11", name: "wisdom", value: 1 },
  { id: "bn52", parentId: "sr12", name: "constitution", value: 1 },
  { id: "bn53", parentId: "sr13", name: "strength", value: 1 },
  { id: "bn54", parentId: "sr13", name: "strength", value: 1 },
  { id: "bn55", parentId: "sr14", name: "strength", value: 2 },
  { id: "bn56", parentId: "sr15", name: "wisdom", value: 2 },
  { id: "bn57", parentId: "sr16", name: "charisma", value: 1 },
  { id: "bn58", parentId: "sr17", name: "constitution", value: 1 },
  { id: "bn59", parentId: "sr18", name: "constitution", value: 1 },
  { id: "bn60", parentId: "sr19", name: "strength", value: 1 },
  { id: "bn61", parentId: "sr20", name: "dexterity", value: 1 }
];
const sourceShare = [
  { id: "ss0", raceId: "r0", sourceId: "b0" },
  { id: "ss1", raceId: "r1", sourceId: "b0" },
  { id: "ss2", raceId: "r2", sourceId: "b0" },
  { id: "ss3", raceId: "r3", sourceId: "b0" },
  { id: "ss4", raceId: "r4", sourceId: "b0" },
  { id: "ss5", raceId: "r5", sourceId: "b0" },
  { id: "ss6", raceId: "r6", sourceId: "b0" },
  { id: "ss7", raceId: "r7", sourceId: "b0" },
  { id: "ss8", raceId: "r8", sourceId: "b0" },
  { id: "ss9", raceId: "r9", sourceId: "b1" },
  { id: "ss10", raceId: "r10", sourceId: "b1" },
  { id: "ss11", raceId: "r11", sourceId: "b1" },
  { id: "ss12", raceId: "r12", sourceId: "b1" },
  { id: "ss13", raceId: "r13", sourceId: "b1" },
  { id: "ss14", raceId: "r14", sourceId: "b1" },
  { id: "ss15", raceId: "r15", sourceId: "b1" },
  { id: "ss16", raceId: "r16", sourceId: "b1" },
  { id: "ss17", raceId: "r17", sourceId: "b1" },
  { id: "ss18", raceId: "r18", sourceId: "b1" },
  { id: "ss19", raceId: "r19", sourceId: "b1" },
  { id: "ss20", raceId: "r20", sourceId: "b1" },
  { id: "ss21", raceId: "r21", sourceId: "b2" },
  { id: "ss22", raceId: "r2", sourceId: "b2" },
  { id: "ss23", raceId: "r0", sourceId: "b2" },
  { id: "ss24", raceId: "r3", sourceId: "b2" },
  { id: "ss25", subraceId: "sr0", sourceId: "b0" },
  { id: "ss26", subraceId: "sr1", sourceId: "b0" },
  { id: "ss27", subraceId: "sr2", sourceId: "b0" },
  { id: "ss28", subraceId: "sr3", sourceId: "b0" },
  { id: "ss29", subraceId: "sr4", sourceId: "b0" },
  { id: "ss30", subraceId: "sr5", sourceId: "b0" },
  { id: "ss31", subraceId: "sr6", sourceId: "b0" },
  { id: "ss32", subraceId: "sr7", sourceId: "b0" },
  { id: "ss33", subraceId: "sr8", sourceId: "b0" },
  { id: "ss34", subraceId: "sr9", sourceId: "b0" },
  { id: "ss35", subraceId: "sr10", sourceId: "b0" },
  { id: "ss36", subraceId: "sr11", sourceId: "b1" },
  { id: "ss37", subraceId: "sr12", sourceId: "b1" },
  { id: "ss38", subraceId: "sr13", sourceId: "b1" },
  { id: "ss39", subraceId: "sr14", sourceId: "b2" },
  { id: "ss40", subraceId: "sr15", sourceId: "b2" },
  { id: "ss41", subraceId: "sr16", sourceId: "b2" },
  { id: "ss42", subraceId: "sr17", sourceId: "b2" },
  { id: "ss43", subraceId: "sr18", sourceId: "b2" },
  { id: "ss44", subraceId: "sr19", sourceId: "b2" },
  { id: "ss45", subraceId: "sr20", sourceId: "b2" }
];

const getRacesByIds = ids => races.filter(r => ids.includes(r.id));
const getRaceIdsBySourceIds = ids => {
  return sourceShare
    .filter(ss => ids.includes(ss.sourceId) && ss.raceId)
    .map(ss => ss.raceId);
};
const getRacesBySourceIds = ids => {
  const raceIds = getRaceIdsBySourceIds(ids);
  return getRacesByIds(raceIds);
};

const sourceIds = ['b2'];
const raceResults = getRacesBySourceIds(sourceIds);
console.log("races", raceResults);


const getSubracesByIds = subraceIds => subraces.filter(sr => subraceIds.includes(sr.id));
const getSubraceIdsBySourceIds = (sourceIds) => {
  return sourceShare
    .filter(ss => sourceIds.includes(ss.sourceId) && ss.subraceId)
    .map(ss => ss.subraceId);
}
const getSubracesBySourceIds = (raceId, sourceIds) => {
  const subraceIds = getSubraceIdsBySourceIds(sourceIds);
  return getSubracesByIds(subraceIds).filter(sr => sr.raceId === raceId);
};

const raceId = 'r2';
const subraceResults = getSubracesBySourceIds(raceId, sourceIds);
console.log("subraces", subraceResults);

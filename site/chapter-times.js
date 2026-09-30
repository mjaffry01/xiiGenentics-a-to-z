const CHAPTERS = [
  [0, "Opening", "same-kind"],
  [19, "A mango seed", "same-kind"],
  [46, "Same family, not copies", "not-copies"],
  [79, "The message is not paint", "message"],
  [117, "Two copies", "two-copies"],
  [153, "The cross", "louder"],
  [191, "The quiet copy returns", "returns"],
  [231, "The test cross", "test"],
  [275, "Two characters", "sixteenths"],
  [321, "When neither copy simply wins", "not-louder"],
  [385, "Crossing over", "linked"],
  [444, "Who decides the sex", "sex"],
  [504, "Four letters", "ladder"],
  [565, "Three experiments", "proof"],
  [621, "The ladder copies", "copy"],
  [678, "Reading a protein", "read"],
  [765, "A chapter can stay shut", "shut"],
  [828, "A changed letter", "change"],
  [907, "Count the crowd", "crowd"],
  [968, "Why the count changes", "pushes"],
  [1031, "Deep time", "long-story"],
];

// Lessons without their own scene play the scene that covers them.
const SCENE_FOR = {
  back: "test",
  "two-traits": "sixteenths",
  "many-or-one": "not-louder",
  chromosomes: "linked",
  "map-genes": "linked",
  pedigree: "shut",
  extra: "change",
  almost: "change",
};

// Returns [start, end, label] in seconds for a lesson's part of the lecture.
function sceneFor(lessonId) {
  const id = SCENE_FOR[lessonId] || lessonId;
  const at = CHAPTERS.findIndex((row) => row[2] === id);
  if (at < 0) return null;
  const next = CHAPTERS[at + 1];
  return [CHAPTERS[at][0], next ? next[0] : null, CHAPTERS[at][1]];
}

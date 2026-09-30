const ONIONS = {
  "same-kind": {
    layers: [
      ["A mango seed grows a mango.", "The seed does not become a neem tree, and an elephant's baby is an elephant. The first fact of the subject is sameness of kind."],
      ["The young are therefore the same kind as the parents.", "Kind is not a guess about appearance. It is the class of living thing the parents belong to, passed to the offspring."],
      ["Passing a kind from parent to young is heredity.", "Heredity names the passing. Inheritance is the same idea said of characters: they move from parent to progeny."],
      ["What moves is the information for building that kind.", "It is not a tiny finished plant or animal hidden in the parent. The body is built from instructions."]
    ],
    core: "Genetics begins here: information keeps a kind, and the subject is the study of that information.",
    links: [["not-copies", "The young are still not copies"], ["message", "The information stays in pieces"]]
  },
  "not-copies": {
    layers: [
      ["The kind has been passed on.", "From the previous idea, a child is the same kind of living thing as the parents."],
      ["The child is still not a photocopy of either parent.", "Brothers and sisters share a kind and still differ in height, nose, and other characters."],
      ["A difference between parent and young is variation.", "Variation is the degree by which progeny differ from their parents. It is measured, not merely noticed."],
      ["Some of those differences can be passed on again.", "People kept seeds and calves they liked. That choosing is artificial selection. The Sahiwal cow is one result."]
    ],
    core: "Inheritance and variation arrive together: the kind is kept, and the details can change.",
    links: [["message", "The differences are carried as pieces"], ["pushes", "Later, nature chooses without a farmer"]]
  },
  "message": {
    layers: [
      ["A hidden character can disappear for one generation.", "In Mendel's peas the dwarf look vanished in the first generation of a tall-by-dwarf cross."],
      ["The same character can return, unchanged, in the next generation.", "The plants were tall or dwarf, never a blend. Paint would have made an in-between colour and lost the pure red."],
      ["So the message is kept in pieces that do not melt.", "Mendel called a piece a factor. We call it a gene: the information for a character."],
      ["He counted seven characters in fourteen true-breeding varieties, from 1856 to 1863.", "A true-breeding line keeps one trait after repeated self-pollination. Trichomes were not one of the seven characters."]
    ],
    core: "A gene is a piece of information that can be hidden and still come back whole.",
    links: [["two-copies", "Each piece arrives as two copies"], ["louder", "One copy can hide the other"]]
  },
  "two-copies": {
    layers: [
      ["A gene is information for one character.", "That was the previous result: the message stays in pieces."],
      ["You receive one copy from each parent, so you carry two.", "A body with two copies of each gene is diploid."],
      ["The two versions of one gene are alleles.", "If the two copies match, the body is homozygous. If they differ, it is heterozygous."],
      ["The letters are the genotype. The look is the phenotype.", "A tall plant may be TT or Tt. The look does not tell you the letters. Use one letter for one gene: T and t, never T and d."]
    ],
    core: "Every later ratio is a count of two letters, one from each parent.",
    links: [["louder", "What happens when the two letters disagree"], ["returns", "How the two letters separate"]]
  },
  "louder": {
    layers: [
      ["The two copies can disagree.", "One parent line was TT, true-breeding tall. The other was tt, true-breeding dwarf."],
      ["Every first-generation plant was tall.", "None were medium. The cross is written TT x tt, and the children are Tt."],
      ["The tall letter is expressed. The dwarf letter is silent.", "Tall is dominant. Dwarf is recessive. The dwarf letter is still in the plant."],
      ["Dominance explains only this: one of a pair shows in the heterozygote.", "Factors occur in pairs. One member dominates. Only one parental character shows in that first generation. The return of the dwarf is a later law."]
    ],
    core: "Dominance is which letter speaks when both are present. It is not the destruction of the quiet letter.",
    links: [["returns", "The quiet letter comes back"], ["not-louder", "Sometimes neither letter simply wins"]]
  },
  "returns": {
    layers: [
      ["The quiet letter is still inside the tall Tt plant.", "Dominance hid it. It did not remove it."],
      ["When that plant makes pollen or an egg, the two letters split.", "Half the gametes receive T and half receive t. This split is segregation, and it happens in meiosis."],
      ["Random meetings of those gametes rebuild TT, Tt, Tt, and tt.", "A Punnett square writes the gametes on two sides and fills the four meetings."],
      ["Three of the four look tall. One looks dwarf. The letters are 1, 2, 1.", "The look is the 3:1 phenotype. The letters are the 1:2:1 genotype. No plant is medium."]
    ],
    core: "Segregation is the split of a pair, so a hidden character can return whole.",
    links: [["test", "How to tell TT from Tt"], ["two-traits", "Two pairs splitting at once"]]
  },
  "test": {
    layers: [
      ["A tall plant may be TT or Tt.", "Both look tall, so the phenotype does not name the genotype."],
      ["Cross it with a dwarf plant, tt.", "The dwarf parent can donate only t."],
      ["If every child is tall, the unknown parent donated only T, so it was TT.", "All children are Tt. The recessive look never appears."],
      ["If about half the children are dwarf, the unknown parent was Tt.", "Half its gametes carried t, and those meetings are tt."]
    ],
    core: "A test cross reveals the hidden letter because the recessive parent adds no dominant letter of its own.",
    links: [["back", "How this differs from any cross with a parent"], ["returns", "The square this cross comes from"]]
  },
  "back": {
    layers: [
      ["The first generation can be crossed back to a parent.", "That cross, F1 with either parent, is a back cross."],
      ["One of those parents may be the recessive parent.", "In the height cross, the recessive parent is tt."],
      ["F1 crossed with that recessive parent is the test cross.", "So every such test cross is a back cross."],
      ["A back cross to the dominant parent is not a test cross.", "The dominant parent can donate a dominant letter, so the children no longer display the unknown gametes cleanly."]
    ],
    core: "Test cross is the special back cross that uses only the recessive parent.",
    links: [["test", "See the two results"], ["two-traits", "The same test, with two genes"]]
  },
  "two-traits": {
    layers: [
      ["One pair of letters already splits into two gametes.", "That was segregation of a single gene."],
      ["A second pair can split at the same time, without waiting.", "Yellow is dominant to green. Round is dominant to wrinkled."],
      ["A plant heterozygous for both therefore makes four gametes, equally.", "They are YR, Yr, yR, and yr."],
      ["The meetings give about 9 yellow round : 3 yellow wrinkled : 3 green round : 1 green wrinkled.", "Each character is still 3:1 on its own. The 9:3:3:1 is those two ratios multiplied. The genotype ratio is not 9:3:3:1."]
    ],
    core: "Independent assortment means each pair separates on its own, so the combinations multiply.",
    links: [["sixteenths", "Turn 9, 3, 3, 1 into percents"], ["linked", "When the pairs refuse to shuffle"]]
  },
  "sixteenths": {
    layers: [
      ["The dihybrid square has sixteen equal meetings.", "Each gamete pair is one box out of sixteen."],
      ["Nine boxes show both dominant looks.", "Nine sixteenths is 56.25 percent."],
      ["Each single-dominant class fills three boxes.", "Three sixteenths is 18.75 percent. One sixteenth is 6.25 percent."],
      ["Pod colour is a separate dominance from seed colour.", "Green pod is dominant to yellow pod. Inflated pod is dominant to constricted pod. Yellow inflated pods are a 3/16 class, not the 9/16 class."]
    ],
    core: "A percent is the box count divided by 16. Name the dominant and recessive looks before you choose 9, 3, or 1.",
    links: [["two-traits", "Where the sixteen boxes come from"], ["not-louder", "When the 3:1 look itself changes"]]
  },
  "not-louder": {
    layers: [
      ["Complete dominance makes the heterozygote look like one parent.", "That gave the 3:1 look in peas."],
      ["In snapdragon, red RR crossed with white rr gives pink Rr.", "The heterozygote is a third phenotype. This is incomplete dominance."],
      ["Pink selfed still gives letters 1:2:1, now also the looks.", "Segregation did not fail. Pink crossed with red gives only red and pink."],
      ["Blood groups add a second exception: both letters can speak.", "IA and IB are dominant over i and co-dominant with each other. Group O is ii, so an IA IB parent cannot have a group O child. IA i with IB i gives group O one time in four."]
    ],
    core: "Dominance is a fact about the look you score. The letters still segregate.",
    links: [["many-or-one", "One gene, many looks, or many genes, one range"], ["louder", "The pea case, where one letter does win"]]
  },
  "many-or-one": {
    layers: [
      ["So far, one gene has been tied to one contrasting pair.", "Tall or dwarf. Red or white. Round or wrinkled."],
      ["Several genes can add toward one range.", "Skin colour in the textbook model uses three genes. AABBCC is darkest. aabbcc is lightest. This is polygenic inheritance, and it is non-Mendelian."],
      ["One gene can also change several characters.", "That is pleiotropy. Phenylketonuria is one failed enzyme, phenylalanine hydroxylase, with more than one effect."],
      ["The pea starch gene is pleiotropy, not multiple alleles.", "Seed shape shows complete dominance. Starch-grain size shows incomplete dominance. Same two alleles, two ways of scoring."]
    ],
    core: "Count the genes and count the characters separately. They need not match.",
    links: [["not-louder", "Incomplete dominance and blood groups"], ["change", "One changed gene, several effects"]]
  },
  "chromosomes": {
    layers: [
      ["A gene is the information for one character.", "Height is one gene. Seed colour is another gene. Each gene is one piece of the message, not the whole message."],
      ["A chromosome is the long body that holds many genes in a row.", "Under the microscope the chromosome is one rod. Along that rod the genes are lined up like addresses on one street."],
      ["So a gene is one short piece of a chromosome, not the chromosome itself.", "Lose a gene and you lose one character's instruction. Lose a chromosome and you lose every gene that rode on it."],
      ["The two versions of that one gene sit at the same place on the two rods of a pair.", "Those versions are the alleles, such as T and t. Sutton and Boveri matched this layout to Mendel's counts. Morgan tested it in the fruit fly. A gamete receives one chromosome from each pair, and so one allele of each gene."]
    ],
    core: "One chromosome carries many genes. One gene is one address on that chromosome.",
    links: [["linked", "Genes on one chromosome do not shuffle freely"], ["sex", "One pair of chromosomes decides sex"]]
  },
  "linked": {
    layers: [
      ["Independent assortment needs the pairs to be free of each other.", "Separate chromosome pairs can line up either way."],
      ["Two genes on the same chromosome tend to travel together.", "Parental combinations then outnumber new ones. That sticking is linkage."],
      ["A break and rejoin can still separate them.", "The new combination is recombination. White and yellow: 1.3 percent. White and miniature wing: 37.2 percent."],
      ["Closer genes recombine less. The enzyme complex of the exchange is recombinase.", "Crossing over stays inside one homologous pair. Translocation moves a piece to a different chromosome, and so to a different linkage group."]
    ],
    core: "Linkage is physical nearness. Recombination is the exception that measures the distance.",
    links: [["map-genes", "Turn the percents into an order"], ["two-traits", "The free case, 9:3:3:1"]]
  },
  "map-genes": {
    layers: [
      ["One percent recombination is one map unit, a centimorgan.", "It is not 10 percent and not 50 percent. Sturtevant used the percent as distance. Morgan found linkage. Sutton and Boveri proposed the theory."],
      ["The largest percent joins the two ends of the line.", "If a to d is 29, a and d are the ends."],
      ["Each other gene is placed by its distance from those ends.", "a to c is 5, so c sits next to a. b to d is 9, so b sits next to d."],
      ["The middle distances must add up.", "a to b is then 20, and b to c is 15. The order is a, c, b, d."]
    ],
    core: "A map is an order forced by the distances. The biggest distance fixes the ends.",
    links: [["linked", "What the percent is counting"], ["almost", "Maps later helped sequence a genome"]]
  },
  "sex": {
    layers: [
      ["Twenty-two human pairs match in males and females.", "Those are the autosomes."],
      ["The remaining pair does not match in the same way.", "Females are XX. Males are XY. The Y is the shorter one."],
      ["Every egg carries X. Half the sperm carry X and half carry Y.", "XX is a girl. XY is a boy. The sperm decides. The mother is not the cause of a daughter."],
      ["Other animals use other pairs.", "Bird females are ZW, so the egg decides. Grasshopper males are XO: 23 chromosomes if females have 24. Honey-bee males are haploid and make sperm by mitosis."]
    ],
    core: "Sex is which sex chromosome the gametes carry. In humans, only the sperm vary.",
    links: [["pedigree", "An X-linked character in a family"], ["chromosomes", "Why a gamete gets one of a pair"]]
  },
  "ladder": {
    layers: [
      ["A gene is a stretch of four letters: A, T, G, and C.", "Adenine pairs with thymine by two bonds. Guanine pairs with cytosine by three. Pairing lets the ladder be copied. The character comes from the order, not from the pairing itself."],
      ["The cell copies that stretch into RNA, and writes U where DNA had T.", "So ATG on the coding strand is read as AUG. The whole ladder is not copied into RNA. One strand of one gene is."],
      ["The RNA is read three letters at a time. Each three letters name one amino acid.", "Four letters in groups of three can name 64 words. That is enough for 20 amino acids, plus start and stop. One letter could name only 4. Two letters could name only 16."],
      ["The amino acids join into a protein, and the protein does a job.", "That job is the character: a pigment, an enzyme, the shape of a cell. GAG names glutamic acid. Change it to GTG and the RNA says GUG, which names valine. In haemoglobin that one change makes the red cell sickle."]
    ],
    core: "The letters do not look like the character. Their order names a protein, and the protein makes the character.",
    links: [["read", "The two reading steps, in full"], ["change", "One letter changes the character"], ["copy", "How the ladder copies"]]
  },
  "proof": {
    layers: [
      ["Griffith saw dead smooth bacteria change live rough ones.", "He did not name the substance. He called it a transforming principle."],
      ["Avery, MacLeod, and McCarty found that only DNA could transform.", "Cutting DNA stopped it. Cutting protein or RNA did not."],
      ["Hershey and Chase tagged DNA with phosphorus and protein with sulfur.", "Only the phosphorus entered the bacterium. That is the unequivocal proof."],
      ["A genetic material must copy, stay stable, change only rarely, and be readable as characters.", "Instability is not required. RNA is less stable and came first. DNA is the later, stabler store."]
    ],
    core: "The ladder is the message because DNA, not protein, is what entered and changed the cell.",
    links: [["ladder", "The structure that was proved"], ["copy", "The copying the structure allows"]]
  },
  "copy": {
    layers: [
      ["Each side of the ladder predicts the other side.", "That was base pairing."],
      ["The two sides separate, and a new side is built on each.", "Each daughter ladder keeps one old strand. This is semiconservative copying."],
      ["After one generation in light nitrogen, heavy DNA is all medium.", "After two generations, half is medium and half is light. Meselson and Stahl used the bacterium. Taylor used the bean Vicia faba."],
      ["The copier adds only 5-prime to 3-prime.", "One new strand grows toward the fork. The other is made in Okazaki fragments and joined by ligase. Ten heavy cells, sixty minutes, twenty minutes a generation: eighty cells, sixty of them fully light."]
    ],
    core: "Copying keeps one old side, so the message is preserved and still doubled.",
    links: [["read", "A copy of one side becomes RNA"], ["ladder", "Why one side determines the other"]]
  },
  "read": {
    layers: [
      ["The cell does not copy the whole ladder into RNA.", "It copies one strand of one gene. The template is read. The coding strand matches the RNA, with U for T."],
      ["A unit is a promoter, the gene, and a terminator.", "In bacteria, sigma starts and rho stops. Those two are bacterial. Polymerase I, II, and III divide the eukaryotic work."],
      ["Eukaryotic RNA is edited before it leaves the nucleus.", "Introns are cut out, exons are joined, a cap is added at the 5-prime end, and adenines are added at the 3-prime end."],
      ["The message is then read three letters at a time.", "AUG is methionine and the start. UAA, UAG, and UGA stop. The code is specific, degenerate, and nearly universal. Transfer RNA is the adapter. In bacteria, 23S RNA forms the peptide bond."]
    ],
    core: "Reading is two steps: one strand becomes RNA, then three letters become one amino acid.",
    links: [["shut", "The cell can refuse to read"], ["change", "One wrong letter changes the protein"]]
  },
  "shut": {
    layers: [
      ["A gene that is present need not be read.", "Reading costs energy, so it is switched."],
      ["In the lac operon, three genes share one switch.", "z cuts lactose, y lets lactose in, and a is a helper."],
      ["Gene i makes a repressor all the time, from its own promoter.", "The repressor sits on the operator and blocks the reader."],
      ["Lactose, or allolactose, pulls the repressor off. Glucose and galactose do not.", "If the repressor cannot bind the inducer, the three genes stay unread."]
    ],
    core: "The letters stay. The switch decides whether they are read.",
    links: [["read", "What happens when the switch is open"], ["pedigree", "A human family, where we cannot set the switch"]]
  },
  "pedigree": {
    layers: [
      ["A pea cross can be set up. A human marriage cannot.", "The record that remains is the family."],
      ["A square is a male. A circle is a female. A filled symbol shows the character.", "A double line means the couple are relatives."],
      ["If a child shows the character and the parents do not, both parents hid it.", "That pattern fits a recessive allele. A character that does not skip in that way fits a dominant allele."],
      ["Some recessive characters sit on X.", "Haemophilia and colour blindness do. A son takes his X from his mother. Two sickle-cell carriers have a one-in-four chance of an affected child. Myotonic dystrophy is the dominant example."]
    ],
    core: "A pedigree is a cross we did not design. The pattern still names dominant, recessive, or X-linked.",
    links: [["sex", "Why an X-linked son gets the letter from his mother"], ["change", "The letter itself, when it is a disease"]]
  },
  "change": {
    layers: [
      ["The message is a sequence, read in threes.", "Change the sequence and you can change the protein."],
      ["A point mutation changes one base pair.", "In sickle-cell anaemia, GAG becomes GUG, so glutamic acid at position 6 becomes valine."],
      ["The chain is still made, but it is the wrong chain.", "That is qualitative. Thalassemia is quantitative: too little alpha or beta chain. Alpha genes are on chromosome 16. The beta gene is on chromosome 11."],
      ["Insert or delete one or two letters and every later codon shifts.", "Insert or delete three letters and the frame holds. Sickle-cell anaemia is autosomal recessive, not X-linked."]
    ],
    core: "A mutation is a change in the letters. One letter is enough to change one amino acid.",
    links: [["extra", "When the change is a whole chromosome"], ["read", "Why three letters, not one, make an amino acid"]]
  },
  "extra": {
    layers: [
      ["A point mutation changes letters. A chromosome error changes the count.", "The two are different disorders."],
      ["If a pair fails to separate, a person can gain or lose one chromosome.", "Gain is trisomy. Loss to a single copy is monosomy. This is aneuploidy, from non-disjunction."],
      ["An extra chromosome 21 is Down syndrome.", "The single palm crease belongs to that description. Langdon Down described it in 1866."],
      ["XXY is Klinefelter syndrome: mostly male, some breast development, sterile.", "A single X is Turner syndrome. No cell plate after division adds a whole set: that is polyploidy."]
    ],
    core: "Letter changes and number changes are separate. Down syndrome is an extra 21, not a changed codon.",
    links: [["change", "The one-letter case"], ["sex", "XXY and a single X are sex-chromosome counts"]]
  },
  "almost": {
    layers: [
      ["People share 99.9 percent of the bases.", "The differences are a small fraction of a ladder of about 3 billion base pairs."],
      ["Less than 2 percent of the genome codes for protein.", "Much of the rest is repeated sequence, and those repeats vary."],
      ["DNA fingerprinting compares the variable repeats.", "The older order is cut, separate, blot, probe, then the film. The pattern matches across tissues of one person, except that identical twins match each other."],
      ["Two ways were used to read the human ladder.", "Expressed sequence tags start from RNA that was made. Sequence annotation reads everything first and names functions later. Chromosome 1 was finished last and has the most genes in that list."]
    ],
    core: "Identity in this test is a pattern of repeats, not a wholly different set of genes.",
    links: [["ladder", "The ladder being compared"], ["crowd", "From one person's letters to a population's frequencies"]]
  },
  "crowd": {
    layers: [
      ["p is the fraction of copies that are A. q is the fraction that are a.", "The picture uses ten copies. Four are A, so p = 0.4. Six are a, so q = 0.6."],
      ["p + q = 1. A child receives one copy from each parent.", "The four boxes are those two draws multiplied."],
      ["Two boxes are Aa, so add them. Aa is 2pq.", "0.24 + 0.24 = 0.48. An answer that says only pq has kept one box and dropped the other."],
      ["With p = 0.4, the crowd is AA 0.16, Aa 0.48, aa 0.36.", "0.4 times 0.4 is 0.16. 2 times 0.4 times 0.6 is 0.48. 0.6 times 0.6 is 0.36. If p is 0.1, AA is 0.01. These fractions hold while p stays the same."]
    ],
    core: "p\u00b2 + 2pq + q\u00b2 = 1. AA is p\u00b2, Aa is 2pq, and aa is q\u00b2.",
    links: [["pushes", "The five things that move the count"], ["two-copies", "The same allele, earlier, inside one body"]]
  },
  "pushes": {
    layers: [
      ["The baseline stays only while nothing pushes.", "The equation of the previous idea is the quiet case."],
      ["Migration, chance, new letters, reshuffling, and unequal offspring move the count.", "Those are gene flow, drift, mutation, recombination, and natural selection."],
      ["Drift is chance, strongest in a small group. The founder effect is drift at a new start.", "Selection is not chance. A heritable trait that leaves more offspring becomes more common. Fitness means offspring, not muscle."],
      ["Selection can keep the middle, shift off the average, or keep both ends.", "Those are stabilising, directional, and disruptive. Homology is a shared build. Analogy is a shared job."]
    ],
    core: "The letters change in frequency only when one of the five pushes acts.",
    links: [["crowd", "The quiet equation"], ["long-story", "The same pushes across deep time"]]
  },
  "long-story": {
    layers: [
      ["The ladder is copied, and copying can change a letter.", "Mutation and selection are already defined."],
      ["Miller sparked methane, hydrogen, ammonia, and water vapour at 800 degrees, and amino acids formed.", "The gases are CH4 and NH3. Earth is about 4.5 billion years old in this account."],
      ["The fossil order is invertebrates, jawless fish, land, then dinosaurs gone about 65 million years ago.", "Those dates are about 500, 350, 320, and 65 million years ago."],
      ["Our line is habilis, then erectus, then Neanderthal, then Homo sapiens, arising in Africa.", "Brains are about 650 to 800, then 900, then 1400. Haeckel's embryo story was rejected by von Baer. Fossils and homologous limbs remain the evidence."]
    ],
    core: "A mango seed still grows a mango: a copied ladder, in pairs, usually unchanged, and sometimes changed in frequency across deep time.",
    links: [["same-kind", "Back to the first sentence"], ["pushes", "The mechanism inside the long story"]]
  }
};

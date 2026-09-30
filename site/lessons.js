const LESSONS = [
  {
    id: "same-kind",
    stage: "Wonder",
    band: "First reading",
    title: "A mango seed grows a mango",
    idea: "Living things pass their own kind on to their young.",
    rests: "Start here. Nothing earlier is required. Stay with the large sentence until it feels easy.",
    words: ["heredity", "inheritance"],
    caption: "The seed carries the kind. A mango seed does not become a neem tree.",
    diagram: "kind",
    plain: [
      "A mango seed does not grow into a neem tree. An elephant's baby is an elephant. That sameness has a name: heredity. It means passed on from parents.",
      "What is passed on is not a tiny finished elephant hidden inside the parent. It is the information for building one."
    ],
    precision: "Genetics studies inheritance and variation. Inheritance is the passing of characters from parents to offspring. The Class 12 chapter opens on this same question: why an elephant gives birth only to an elephant, and a mango seed only to a mango plant.",
    check: {
      prompt: "A puppy grows up to be which of these?",
      choices: [
        ["A dog, because its parents passed on the information for a dog.", true],
        ["Whatever animal it happens to sit beside.", false],
        ["A copy of every breed of dog at once.", false]
      ],
      why: "The kind is inherited. The puppy can vary within dogs. It does not change kind."
    }
  },
  {
    id: "not-copies",
    stage: "Wonder",
    band: "First reading",
    title: "Same family, different faces",
    idea: "Offspring resemble their parents and still differ from them.",
    rests: "You already know that the kind is passed on.",
    words: ["variation"],
    caption: "Three children, one family. Shared kind, different details.",
    diagram: "siblings",
    plain: [
      "Brothers and sisters are the same kind of living thing, and they are not photocopies. One may be taller. One may have a different nose. That difference is variation.",
      "People used this long before any laboratory. They kept the seeds of plants they liked, and the calves of cows they liked. Choosing which differences to pass on is artificial selection. The Sahiwal cow of Punjab is one result of that long choosing."
    ],
    precision: "Variation is the degree by which progeny differ from their parents. Artificial selection uses heritable variation that people choose. Natural selection, at the end of this path, uses the same fact without a human chooser: some inherited differences leave more offspring.",
    check: {
      prompt: "Two sisters can both be human and still look different because:",
      choices: [
        ["Passed-on information can vary.", true],
        ["The kind failed to pass on.", false],
        ["Only the elder sister received any information.", false]
      ],
      why: "Inheritance and variation happen together. Sameness of kind does not mean sameness of every trait."
    }
  },
  {
    id: "message",
    stage: "Wonder",
    band: "First reading",
    title: "The body follows a message",
    idea: "A character is built from information, kept in pieces that do not melt together.",
    rests: "You already know that likeness and difference are both passed on.",
    words: ["gene", "character"],
    caption: "Paint blends and will not unmix. A gene can stay whole and come back later.",
    diagram: "message",
    plain: [
      "If you mix red paint into white paint, you get pink, and you cannot get the pure red back. Inheritance does not work like paint.",
      "A hidden character can disappear for a generation and come back unchanged. So the message stays in pieces. A piece is a gene: the information for a character."
    ],
    precision: "Mendel called these pieces factors. A true-breeding line, after repeated self-pollination, keeps a stable trait. From 1856 to 1863 he counted seven pea characters, each as a pair of contrasting traits: stem height, flower colour, flower position, pod shape, pod colour, seed shape, and seed colour. Large numbers and a check in later generations turned a guess into a rule.",
    check: {
      prompt: "A gene is best described as:",
      choices: [
        ["The information for a character.", true],
        ["The character you can already see.", false],
        ["A tiny organ floating in the blood.", false]
      ],
      why: "The visible character is the result. The gene is the information that helps produce it."
    }
  },
  {
    id: "two-copies",
    stage: "Pairs",
    band: "School",
    title: "The message comes in two copies",
    idea: "For each character you carry two copies, one from each parent.",
    rests: "You already know that a gene is information for a character.",
    words: ["allele", "homozygous", "heterozygous", "genotype", "phenotype"],
    caption: "One copy from each parent. The letters are the genotype. The look is the phenotype.",
    diagram: "copies",
    plain: [
      "The two copies of one gene are alleles: versions of that gene. If both copies match, the organism is homozygous. If they differ, it is heterozygous.",
      "What you see is the phenotype. The letters carried are the genotype. A tall pea plant might be TT or Tt. Looking at it does not tell you which letters are inside.",
      "Use one letter for one gene. T and t belong together. T and d do not, because you cannot see that they are a pair."
    ],
    precision: "In a diploid body each gene is present as a pair of alleles. A true-breeding tall plant is TT. A true-breeding dwarf plant is tt. The heterozygote Tt is the case this path studies next. Gametes, formed later, receive only one allele of the pair.",
    check: {
      prompt: "A heterozygous genotype has:",
      choices: [
        ["Two different copies of the same gene.", true],
        ["Two identical copies.", false],
        ["No copies at all.", false]
      ],
      why: "Homozygous means the two copies match. Heterozygous means they differ. Tt is heterozygous."
    }
  },
  {
    id: "louder",
    stage: "Pairs",
    band: "School",
    title: "One copy can be louder",
    idea: "When the two copies disagree, one character can hide the other.",
    rests: "You already know that each character comes as two copies.",
    words: ["dominant", "recessive", "F1"],
    caption: "True-breeding tall crossed with true-breeding dwarf. Every first-generation plant is tall.",
    diagram: "dominance",
    plain: [
      "Mendel crossed true-breeding tall peas with true-breeding dwarf peas. Every plant in the first generation was tall. None were in between.",
      "The dwarf information was still there. It was silent. The tall copy is called dominant. The dwarf copy is called recessive. This is not a prize for being strong. It is a description of this pair of alleles. Later, some pairs will not behave this simply."
    ],
    precision: "Law of dominance: characters are controlled by discrete factors; factors occur in pairs; in a dissimilar pair, one member dominates the other. The first filial generation is the F1. Dominance often means one working copy of a product is enough. A recessive allele often makes a product that does not work, or makes none, so the trait appears only when both copies are recessive.",
    check: {
      prompt: "All the first-generation plants were tall because:",
      choices: [
        ["The tall copy hid the dwarf copy.", true],
        ["The dwarf copy was destroyed.", false],
        ["Dwarf plants cannot have offspring.", false]
      ],
      why: "The dwarf allele is still in the F1. It is hidden, which is what recessive means. The next lesson shows it coming back."
    }
  },
  {
    id: "returns",
    stage: "Pairs",
    band: "School",
    title: "The quiet copy comes back",
    idea: "The two copies separate when pollen and egg are made, so a hidden character can reappear.",
    rests: "You already know that a dominant copy can hide a recessive one.",
    words: ["segregation", "F2", "Punnett square"],
    caption: "A Tt plant makes T pollen and t pollen equally. Random meetings rebuild TT, Tt, and tt.",
    diagram: "punnett",
    plain: [
      "Mendel let those tall first-generation plants pollinate themselves. In a large count of the next generation, about three plants in four were tall, and about one in four was dwarf. None were medium. The dwarf copy had not been diluted like paint. It had been kept whole.",
      "When a Tt plant makes pollen or an egg, the two copies split. Half the gametes get T and half get t. Meetings at random give TT, Tt, Tt, and tt. Three of those four look tall. One looks dwarf."
    ],
    precision: "This is the law of segregation. Alleles of a pair separate in gamete formation so each gamete receives one. Separation is random. The F2 phenotypic ratio is 3:1. The genotypic ratio is 1 TT : 2 Tt : 1 tt. The same count is the expansion of (1/2 T + 1/2 t) squared. The split happens in meiosis. A Punnett square, from Reginald Punnett, lays the gametes on two sides and fills the meetings.",
    check: {
      prompt: "A Tt plant produces:",
      choices: [
        ["T gametes and t gametes, equally.", true],
        ["Only T gametes.", false],
        ["Only blended medium gametes.", false]
      ],
      why: "Segregation puts one allele in each gamete. A heterozygote therefore makes two kinds, in equal proportion."
    }
  },
  {
    id: "test",
    stage: "Pairs",
    band: "School",
    title: "How to uncover the quiet copy",
    idea: "Cross the unknown with a recessive individual. The children show which letters were hidden.",
    rests: "You already know that Tt makes two kinds of gametes and TT makes one.",
    words: ["test cross"],
    caption: "The dwarf parent can donate only t. So the children display whatever the tall parent donated.",
    diagram: "testcross",
    plain: [
      "A tall plant might be TT or Tt. You cannot see which. Cross it with a dwarf plant, tt.",
      "If every child is tall, the tall parent donated only T, so it was TT. If about half the children are dwarf, the tall parent was also donating t, so it was Tt.",
      "That is a test cross: an organism with the dominant look, genotype unknown, crossed with the recessive parent."
    ],
    precision: "The recessive parent contributes only the recessive allele, so offspring phenotypes copy the gametes of the tested organism. A heterozygous test cross gives about 1:1. A homozygous dominant test cross gives all the dominant phenotype. Self-pollination of a tall F2 plant cannot settle TT versus Tt, because both can have tall children.",
    check: {
      prompt: "A tall plant crossed with a dwarf plant gives about half tall and half dwarf children. The tall parent was:",
      choices: [
        ["Tt.", true],
        ["TT.", false],
        ["tt.", false]
      ],
      why: "Half the children show the recessive trait, so half the gametes from the tall parent carried t. That parent is Tt."
    }
  },
  {
    id: "back",
    stage: "Pairs",
    band: "School",
    title: "A test cross is one kind of back cross",
    idea: "Crossing with a parent is a back cross. Crossing with the recessive parent is the test cross.",
    rests: "You already know how to uncover a hidden recessive copy.",
    words: ["back cross", "test cross"],
    caption: "Every test cross is a back cross. Not every back cross is a test cross.",
    diagram: "backcross",
    plain: [
      "A back cross means the first-generation organism is crossed with either of its parents. That parent might be the dominant one or the recessive one.",
      "A test cross is the special case that uses the recessive parent. Only then do the children's looks copy the gametes of the unknown parent.",
      "If you cross the first generation with the dominant parent instead, a hidden recessive copy can stay hidden. That cross does not test the genotype."
    ],
    precision: "In examination matching lists: allele means two or more alternative forms of a gene; test cross means F1 crossed with the homozygous recessive; back cross means F1 crossed with any parent; ploidy means the number of chromosome sets. Do not swap back cross and test cross.",
    check: {
      prompt: "Which cross reveals a hidden recessive allele?",
      choices: [
        ["A test cross with the recessive parent.", true],
        ["Any back cross, including one with the dominant parent.", false],
        ["Self-pollination of a tall plant, which always settles TT versus Tt.", false]
      ],
      why: "The recessive parent contributes only the quiet allele, so a quiet allele from the tested parent has nothing to hide behind."
    }
  },
  {
    id: "two-traits",
    stage: "Pairs",
    band: "School",
    title: "Two characters can shuffle separately",
    idea: "When two genes are independent, each pair separates without waiting for the other.",
    rests: "You already know how one pair of alleles separates.",
    words: ["independent assortment", "dihybrid"],
    caption: "Four gametes, equally common. Their meetings give four looks, in 9 : 3 : 3 : 1.",
    diagram: "dihybrid",
    plain: [
      "Yellow seed is dominant to green. Round seed is dominant to wrinkled. Follow both at once. A plant that is heterozygous for both characters makes four gametes in equal number: YR, Yr, yR, and yr.",
      "In a large next generation the looks come out about 9 yellow round : 3 yellow wrinkled : 3 green round : 1 green wrinkled. Each character still splits 3:1 on its own. The 9:3:3:1 is those two splits multiplied."
    ],
    precision: "Law of independent assortment: when two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair. The cross of RRYY with rryy gives F1 RrYy, all yellow and round. The F2 phenotypic ratio is 9:3:3:1. The genotypic ratio is not 9:3:3:1. This law fails when the two genes sit close on the same chromosome. That failure is linkage, a later lesson.",
    check: {
      prompt: "Independent assortment means:",
      choices: [
        ["Each pair separates on its own.", true],
        ["The two genes must stay in the parent's combination.", false],
        ["A gamete is allowed to carry only one gene in total.", false]
      ],
      why: "YR, Yr, yR, and yr are all produced. The pairs do not wait for each other. A gamete still carries one allele of each gene."
    }
  },
  {
    id: "sixteenths",
    stage: "Pairs",
    band: "School",
    title: "Turn the sixteenths into a percent",
    idea: "9, 3, 3, and 1 are counts out of 16. Divide by 16 before you call it a percent.",
    rests: "You already know the four looks in a dihybrid generation.",
    words: ["9/16", "3/16", "1/16"],
    caption: "Nine of the sixteen are the double dominant look. Each single-dominant class is three of the sixteen.",
    diagram: "grid16",
    plain: [
      "Count the Punnett boxes. There are 16. Nine show both dominant traits. Three show the first dominant and the second recessive. Three show the first recessive and the second dominant. One shows both recessive.",
      "A percent is that count divided by 16, then multiplied by 100. Nine sixteenths is 56.25 percent. Three sixteenths is 18.75 percent. One sixteenth is 6.25 percent.",
      "For pods, learn the direction of dominance separately from seeds. Green pod is dominant to yellow pod. Inflated pod is dominant to constricted pod. Yellow seed is still dominant to green seed, and round seed is still dominant to wrinkled seed. A question about yellow inflated pods is the 3/16 class, not the 9/16 class."
    ],
    work: {
      prompt: "In a dihybrid F2, what percent of the plants have yellow pods and inflated pods? Green pod is dominant to yellow. Inflated is dominant to constricted.",
      steps: [
        "Yellow pod is the recessive colour, so it is the small letter. Inflated is the dominant shape.",
        "That class is one of the two '3' classes in 9:3:3:1.",
        "3 divided by 16 is 0.1875.",
        "0.1875 times 100 is 18.75 percent. It is not 9 percent, and it is not 56.25 percent."
      ]
    },
    precision: "Parents of the usual pod question are green inflated and yellow constricted. F1 is heterozygous for both. F2 yellow inflated is 3/16. The double dominant class, green inflated, is 9/16, which is 56.25 percent.",
    check: {
      prompt: "3/16 as a percent is:",
      choices: [
        ["18.75 percent.", true],
        ["9 percent.", false],
        ["56.25 percent.", false]
      ],
      why: "3 divided by 16 is 0.1875, which is 18.75 percent. 9/16 is the 56.25 percent class."
    }
  },
  {
    id: "not-louder",
    stage: "Beyond",
    band: "School",
    title: "Sometimes neither copy simply wins",
    idea: "Dominance depends on the phenotype you score, not on a permanent rank of the allele.",
    rests: "You already know that complete dominance makes the first generation look like one parent, and a 3:1 look after that.",
    words: ["incomplete dominance", "co-dominance", "multiple alleles"],
    caption: "Pink is a third phenotype. Blood group AB shows both alleles at once. Try the two parents below.",
    diagram: "both",
    plain: [
      "Cross a true-breeding red snapdragon with a true-breeding white one. The offspring are pink. Self-pollinate the pink plants and you get about 1 red : 2 pink : 1 white. The letters are still 1:2:1. What changed is that the heterozygote has its own look. That is incomplete dominance.",
      "Blood groups are a second pattern. The gene I has three alleles in the human population: I^A, I^B, and i. One person still carries only two of them. I^A and I^B each place a sugar on the red blood cell. Allele i places none. When I^A and I^B are together, both sugars appear. That is co-dominance. The four groups are A, B, AB, and O.",
      "The pea starch gene is the warning. For seed shape, round dominates wrinkled. For the size of the starch grains, the heterozygote is in between. Same alleles. A different verdict, because a different phenotype was scored."
    ],
    precision: "Snapdragon: RR red, Rr pink, rr white. Phenotype ratio and genotype ratio both 1:2:1. ABO genotypes: I^A I^A and I^A i are group A; I^B I^B and I^B i are group B; I^A I^B is group AB; ii is group O. Six genotypes, four phenotypes. Multiple alleles are counted in a population, never as three copies in one diploid person. Starch alleles B and b: BB large grains and round seeds, bb small grains and wrinkled seeds, Bb intermediate grains but round seeds.",
    check: {
      prompt: "A child of blood group O received:",
      choices: [
        ["Allele i from both parents.", true],
        ["I^A from both parents.", false],
        ["I^A from one parent and I^B from the other.", false]
      ],
      why: "Group O is ii. Each parent must have had an i to give, so a group A parent of this child is I^A i and a group B parent is I^B i."
    }
  },
  {
    id: "many-or-one",
    stage: "Beyond",
    band: "School",
    title: "Many genes, or one gene with many effects",
    idea: "The number of genes and the number of characters need not match.",
    rests: "You already know the pattern of one gene with two clear alternatives.",
    words: ["polygenic", "pleiotropy"],
    caption: "Skin colour in the textbook model darkens as dominant alleles are added. One enzyme fault can change several characters.",
    diagram: "poly",
    plain: [
      "Human height is not a clean tall-or-dwarf switch. It is a range. In the textbook model of skin colour, three genes add up. Each dominant allele darkens the skin a little. AABBCC is darkest. aabbcc is lightest. Surroundings also pull on the result. Several genes adding toward one range is polygenic inheritance.",
      "The opposite happens too. One gene can change several characters. Phenylketonuria is a fault in one enzyme, phenylalanine hydroxylase. Phenylalanine is not converted into tyrosine, so it builds up and is turned into other substances. The result can include intellectual disability and lighter hair and skin. One gene, several phenotypes: that is pleiotropy."
    ],
    precision: "Polygenic traits are also pulled by the environment. In the three-gene skin model, three dominant alleles plus three recessive alleles give an intermediate colour. Pleiotropy usually works through a metabolic path that feeds more than one character. PKU is autosomal recessive and returns later in the list of Mendelian disorders. The examination expects both the enzyme name and the idea that one mutation has several phenotypic effects.",
    check: {
      prompt: "Polygenic inheritance is best seen as:",
      choices: [
        ["Several genes adding toward a range.", true],
        ["One gene with only two strict classes.", false],
        ["A trait that cannot be inherited.", false]
      ],
      why: "Height and the skin-colour model are ranges built by adding alleles, not a single on-or-off gene."
    }
  },
  {
    id: "chromosomes",
    stage: "Chromosomes",
    band: "Class 12",
    title: "The copies ride on chromosomes",
    idea: "Genes sit on chromosomes, and chromosomes separate in the same pattern as genes.",
    rests: "You already know that alleles separate, and that independent genes shuffle.",
    words: ["chromosome", "chromosomal theory"],
    caption: "Two pairs can line up in two ways. That is independent assortment, seen as chromosomes.",
    diagram: "chroms",
    plain: [
      "Mendel published in 1865. The work sat quietly until 1900, when de Vries, Correns, and von Tschermak reached the same counts. By then microscopes could show chromosomes doubling and separating in cell division.",
      "Sutton and Boveri noticed the match. Chromosomes occur in pairs. In meiosis a gamete receives one of each pair. Different pairs can line up in more than one way. The two alleles of a gene sit at matching places on a matching pair of chromosomes."
    ],
    precision: "The 1865 paper waited because communication was poor, blending theories were popular, mathematics was unwelcome to many biologists, and no physical object had been shown for a factor. The chromosomal theory of inheritance is the Sutton-Boveri synthesis: chromosome behaviour explains segregation and independent assortment. Morgan tested it with Drosophila melanogaster: a two-week life cycle, many offspring, sexes easy to tell apart, and many visible hereditary variants.",
    check: {
      prompt: "A gamete receives:",
      choices: [
        ["One chromosome from each pair.", true],
        ["Both chromosomes of every pair.", false],
        ["Only the mother's chromosomes, always.", false]
      ],
      why: "Meiosis halves the pairs. Fertilisation restores the pairs. That is why segregation gives one allele per gamete."
    }
  },
  {
    id: "linked",
    stage: "Chromosomes",
    band: "Class 12",
    title: "Neighbours tend to travel together",
    idea: "Genes on the same chromosome do not shuffle freely, unless a break-and-rejoin separates them.",
    rests: "You already know that independent assortment is what separate chromosome pairs do.",
    words: ["linkage", "recombination"],
    caption: "Close neighbours rarely split. Distant genes on the same chromosome split more often.",
    diagram: "link",
    plain: [
      "Morgan crossed fruit flies for two genes that both sat on the X chromosome. The next generation was not in 9:3:3:1. The combinations that came in from the parents were much more common than the new ones.",
      "Sticking together is linkage. A new combination is recombination. Neighbours that sit very close rarely separate. Genes farther apart on the same chromosome separate more often. White and yellow recombined in only 1.3 percent of offspring. White and miniature wing recombined in 37.2 percent. Those percentages became a map of distance."
    ],
    precision: "Morgan hybridised yellow-bodied, white-eyed females with brown-bodied, red-eyed males and then intercrossed the F1. Parental types exceeded the independent prediction. Alfred Sturtevant treated 1 percent recombination as one map unit. Linkage maps later anchored genome sequencing. The physical exchange is crossing over, catalysed by the enzyme complex recombinase during pachytene of meiosis I. Crossing over swaps pieces between homologous chromosomes, so the genes remain in the same linkage group. Translocation moves a piece onto a non-homologous chromosome, so a gene can join a different linkage group. Inversion and duplication rearrange a chromosome without that move between groups. Recombination frequency rises with distance.",
    check: {
      prompt: "A recombination of 1.3 percent means the two genes are:",
      choices: [
        ["Very close on the same chromosome.", true],
        ["On different chromosomes, assorting freely.", false],
        ["Certain to give a 9:3:3:1 ratio.", false]
      ],
      why: "Free assortment would not hug the parental combinations. A very small recombination percentage means the genes rarely get separated, so they lie close together."
    }
  },
  {
    id: "map-genes",
    stage: "Chromosomes",
    band: "Class 12",
    title: "The largest percent is the two ends",
    idea: "To order genes, put the biggest recombination percent at the two ends, then drop the others in by their distances.",
    rests: "You already know that 1 percent recombination is one unit of distance.",
    words: ["map unit", "centimorgan"],
    caption: "a and d are farthest apart. c sits near a. b sits near d. The order is a, c, b, d.",
    diagram: "mapline",
    plain: [
      "A map unit, also called a centimorgan, is the distance that gives 1 percent recombination. It is not 10 percent, and it is not 50 percent.",
      "When several percentages are given, find the largest. Those two genes are the ends of the line. Every other gene is placed by how far it sits from those ends. Check your draft against a middle distance. If the gaps add up, the order is right."
    ],
    work: {
      prompt: "Recombination percents: a-c 5, b-c 15, b-d 9, a-b 20, c-d 25, a-d 29. What is the order?",
      steps: [
        "The largest distance is a to d, 29. Those are the ends.",
        "a to c is only 5, so c is next to a.",
        "b to d is 9, so b is next to d. Then a to b should be about 29 minus 9, which is 20. The given a-b distance is 20. That fits.",
        "Check b to c: from c to b is 20 minus 5, which is 15. The given b-c distance is 15.",
        "The order is a, c, b, d. It is not a, b, c, d, and it is not a, d, b, c."
      ]
    },
    precision: "Sturtevant, not Morgan, was first to use recombination frequency as the distance. Morgan discovered linkage. Sutton and Boveri proposed the chromosomal theory. Henking saw the X body. A question that offers those four names for 'who first used frequency as distance' is Sturtevant.",
    check: {
      prompt: "A map unit is the distance that corresponds to:",
      choices: [
        ["1 percent recombination.", true],
        ["50 percent recombination.", false],
        ["The genes being on different chromosomes.", false]
      ],
      why: "One percent recombination is one centimorgan. Fifty percent would mean the genes assort almost independently."
    }
  },
  {
    id: "sex",
    stage: "Chromosomes",
    band: "Class 12",
    title: "In humans, the sperm decides",
    idea: "Sex chromosomes make two kinds of gametes. In humans, those two kinds are sperm.",
    rests: "You already know that chromosomes are passed on one from each pair.",
    words: ["autosome", "X", "Y", "heterogamety"],
    caption: "Every egg carries X. Half the sperm carry X and half carry Y.",
    diagram: "sex",
    plain: [
      "Humans have 23 pairs of chromosomes. Twenty-two pairs match in males and females. Those are the autosomes. The remaining pair differs: XX in females, XY in males.",
      "Every egg carries an X. Half the sperm carry an X and half carry a Y. XX develops as a girl. XY develops as a boy. Each pregnancy is about an even chance either way. A mother does not decide the sex of the child, and she is not the cause of a daughter.",
      "Other animals use other arrangements. A grasshopper male is XO: one X, and no second sex chromosome. In birds the male is ZZ and the female is ZW, so the egg decides. In the honey bee a fertilised egg becomes a diploid female with 32 chromosomes, and an unfertilised egg becomes a haploid male with 16."
    ],
    precision: "XY and XO are male heterogamety: the male makes two kinds of gametes. ZW is female heterogamety. Henking, in 1891, saw the X body in insect sperm and did not yet know it was a chromosome. Honey-bee males develop by parthenogenesis, make sperm by mitosis, have no father and cannot have sons, but can have a grandfather and grandsons. Drosophila, like humans, uses XX and XY.",
    check: {
      prompt: "A human egg is fertilised by a sperm carrying Y. The child is:",
      choices: [
        ["XY, a boy.", true],
        ["XX, a girl.", false],
        ["Decided by which parent wanted a son.", false]
      ],
      why: "The egg contributes X. The sperm contributes either X or Y. Y from the sperm gives XY."
    }
  },
  {
    id: "ladder",
    stage: "Molecule",
    band: "Class 12",
    title: "The message is four letters",
    idea: "A gene is a stretch of DNA: a ladder of A, T, G, and C.",
    rests: "You already know that a gene is information carried on a chromosome.",
    words: ["DNA", "base pair", "nucleotide"],
    caption: "A pairs with T. G pairs with C. Knowing one side tells you the other side.",
    diagram: "helix",
    plain: [
      "DNA is a long chain of nucleotides. Each nucleotide is a sugar, a phosphate, and a base. The bases are adenine, thymine, guanine, and cytosine. Adenine pairs with thymine. Guanine pairs with cytosine. The two rails of the ladder run in opposite directions, and the ladder twists to the right.",
      "If you know one side, you know the other. That is why a ladder can be copied. In a human cell the DNA is far longer than the nucleus, so it is wrapped around histone proteins, like beads on a string. One bead, with the DNA on it, is a nucleosome."
    ],
    precision: "Watson and Crick, 1953, used X-ray patterns from Rosalind Franklin and Maurice Wilkins, and Chargaff's rule that A equals T and G equals C. Two hydrogen bonds join A to T. Three join G to C. The helix is right-handed. Pitch 3.4 nm, about 10 base pairs per turn, 0.34 nm between base pairs. Haploid human DNA is about 3.3 billion base pairs. The length of about 2.2 metres uses the diploid amount, 6.6 billion base pairs, times 0.34 nm. A histone octamer is rich in lysine and arginine. About 200 base pairs make a nucleosome. Euchromatin is loosely packed and can be read. Heterochromatin is dense and is not. The central dogma: information flows DNA to RNA to protein. In some viruses the first arrow can reverse. Friedrich Miescher, in 1869, had already isolated nuclein.",
    check: {
      prompt: "If one strand has adenine, the base opposite it is:",
      choices: [
        ["Thymine.", true],
        ["Adenine.", false],
        ["Guanine.", false]
      ],
      why: "A pairs with T by two hydrogen bonds. G pairs with C by three. The strands are complementary, not identical."
    }
  },
  {
    id: "proof",
    stage: "Molecule",
    band: "Class 12",
    title: "How we learned the ladder is the message",
    idea: "Three experiments moved the answer from something in the cell to DNA itself.",
    rests: "You already know what the DNA ladder is. These experiments are why it is trusted as the genetic material.",
    words: ["transforming principle"],
    caption: "Griffith saw a change of type. Avery found the substance. Hershey and Chase saw which substance entered the cell.",
    diagram: "proof",
    plain: [
      "Griffith, in 1928, worked with pneumonia bacteria. Smooth bacteria killed mice. Rough bacteria did not. Heat-killed smooth bacteria did not. Heat-killed smooth bacteria mixed with live rough bacteria did kill the mice, and live smooth bacteria could be recovered. Something from the dead cells had changed the live ones. He called it a transforming principle, and he did not yet know what it was made of.",
      "Avery, MacLeod, and McCarty separated the parts of the dead smooth cells. Only the DNA could transform rough cells into smooth cells. Enzymes that destroy protein or RNA did not stop the change. An enzyme that destroys DNA did.",
      "Hershey and Chase, in 1952, used a virus that infects bacteria. They put a radioactive tag on DNA using phosphorus, and a different radioactive tag on protein using sulfur. Only the phosphorus tag entered the bacterium. The instructions that entered were DNA, not protein."
    ],
    precision: "The smooth strain has a polysaccharide coat and is virulent. The rough strain does not. Protease and RNase leave transformation intact. DNase stops it. DNA contains phosphorus and protein does not. Protein contains sulfur and DNA does not. A blender removed viral coats, and a centrifuge separated bacteria from leftover virus. Genetic material must be able to replicate, stay chemically stable, allow occasional mutation, and be expressed as characters. RNA is the genetic material of some viruses, such as tobacco mosaic virus. The 2-prime OH group makes RNA more reactive, so DNA is the stabler store. RNA is thought to have come first: it once both stored information and catalysed reactions. DNA, double stranded and repairable, evolved later as the archive.",
    check: {
      prompt: "In the Hershey-Chase experiment, the tag that entered the bacterium was:",
      choices: [
        ["Phosphorus, which was in the DNA.", true],
        ["Sulfur, which was in the protein.", false],
        ["Both tags, equally.", false]
      ],
      why: "Protein stayed outside with the viral coat. DNA went in, and new viruses were made from that information."
    }
  },
  {
    id: "copy",
    stage: "Molecule",
    band: "Class 12",
    title: "The ladder copies by keeping one old side",
    idea: "Each strand is a mould. Each new ladder has one old strand and one new strand.",
    rests: "You already know that A pairs with T and G pairs with C.",
    words: ["semiconservative", "replication"],
    caption: "After one generation in light nitrogen, every ladder is mixed: one heavy old strand, one light new strand.",
    diagram: "repl",
    plain: [
      "The two strands separate. New letters are laid onto each strand by the pairing rules. Each daughter ladder keeps one parental strand. That plan is semiconservative replication.",
      "Meselson and Stahl proved it in a bacterium. They grew cells for a long time on heavy nitrogen, so the DNA became heavy. Then they switched the food to ordinary light nitrogen. After one generation the DNA was all medium. After another generation, half was medium and half was light. A fully new ladder would have jumped straight to light. It did not.",
      "The enzyme that adds the letters is DNA polymerase. It can add only in one chemical direction. One new strand can grow continuously. The other is made in pieces, and ligase joins the pieces. Copying begins at a special origin, not at a random spot."
    ],
    precision: "Watson and Crick noted in 1953 that base pairing suggested a copying mechanism. Meselson and Stahl, 1958, used 15N, which is heavy but not radioactive, and separated DNA in a cesium chloride density gradient. E. coli divides in about 20 minutes in that experiment. After 20 minutes, hybrid density. After 40 minutes, half hybrid and half light. Taylor and colleagues showed the same pattern in Vicia faba chromosomes with labelled thymidine. E. coli has 4.6 million base pairs and finishes replication in about 18 minutes. The book's rate of about 2,000 base pairs per second fits two forks working at once. One fork alone would need about twice that speed, and the sentence does not say two forks. The building blocks are deoxynucleoside triphosphates, which also supply the energy. The template read 3-prime to 5-prime is copied continuously. The template read 5-prime to 3-prime is copied discontinuously. In eukaryotes this happens in S phase. Replication without a following cell division produces polyploidy.",
    check: {
      prompt: "After one generation on light nitrogen, the heavy parental DNA is:",
      choices: [
        ["Medium: one heavy strand and one light strand.", true],
        ["Still fully heavy.", false],
        ["Fully light, with both old strands discarded.", false]
      ],
      why: "Each old strand stays in a ladder and gains one new light strand. Fully conservative copying would have left some DNA fully heavy. That was not observed."
    }
  },
  {
    id: "read",
    stage: "Reading",
    band: "Class 12",
    title: "The cell reads one side into a protein",
    idea: "A gene is copied into RNA, then read three letters at a time into a protein.",
    rests: "You already know that DNA pairs, and that it copies.",
    words: ["transcription", "translation", "codon", "mRNA", "tRNA"],
    caption: "DNA is transcribed to RNA. RNA is translated three bases at a time. tRNA carries the amino acid.",
    diagram: "dogma",
    plain: [
      "Transcription copies one strand of one stretch of DNA into RNA. The strand that is read is the template. The other strand, the coding strand, matches the new RNA, except that RNA uses uracil where DNA had thymine. The stretch has three parts: a promoter, where the copying enzyme sits down; the gene itself; and a terminator, where copying stops.",
      "In bacteria that RNA can be used at once. In eukaryotes it is edited first. Introns are cut out. Exons are joined. A cap is added at the start and a tail of many A letters at the end. Only then does it leave the nucleus as messenger RNA.",
      "Translation reads the messenger three bases at a time. Those three bases are a codon. Transfer RNA is the adapter: one end matches the codon, the other end carries an amino acid. The ribosome joins the amino acids. AUG means start, and it also means methionine. UAA, UAG, and UGA mean stop."
    ],
    precision: "Both strands are not transcribed. They would code for different proteins, and the two RNAs would pair with each other and could not be translated. RNA polymerase adds 5-prime to 3-prime, so the template is read 3-prime to 5-prime. Bacteria have one RNA polymerase: sigma helps it start, rho helps it stop. Eukaryotes divide the work. RNA polymerase I makes 28S, 18S, and 5.8S ribosomal RNA. Polymerase II makes the precursor of messenger RNA, called hnRNA. Polymerase III makes transfer RNA, 5S ribosomal RNA, and small nuclear RNAs. The cap is an unusual methyl guanosine triphosphate. The tail is about 200 to 300 adenines, added without a template. The code is a triplet, degenerate (several codons can mean one amino acid), continuous (no punctuation), and nearly universal. Sixty-one codons specify amino acids and three are stops. George Gamow argued for a triplet. Har Gobind Khorana and Marshall Nirenberg deciphered it. Severo Ochoa's enzyme helped make RNAs of defined composition. Inserting or deleting one or two bases shifts the frame. Inserting three bases does not. There is no transfer RNA for a stop codon. In bacteria, 23S ribosomal RNA catalyses the peptide bond. Untranslated regions before the start codon and after the stop codon help translation run properly. A cistron is a DNA segment coding for a polypeptide. Eukaryotic genes are mostly monocistronic and split. Bacterial genes are often polycistronic.",
    check: {
      prompt: "The coding strand and the messenger RNA:",
      choices: [
        ["Match, with U in RNA where DNA had T.", true],
        ["Are complementary to each other.", false],
        ["Are both chains of amino acids.", false]
      ],
      why: "The template is the complementary strand. The coding strand is the one that looks like the message. RNA simply writes U for T."
    }
  },
  {
    id: "shut",
    stage: "Reading",
    band: "Class 12",
    title: "The cell can keep a chapter shut",
    idea: "A gene can stay off until the molecule it deals with appears.",
    rests: "You already know that a promoter is where reading starts.",
    words: ["operon", "repressor", "inducer"],
    caption: "No lactose: the repressor sits on the operator. Lactose present: the repressor lets go, and the three genes are read.",
    diagram: "lac",
    plain: [
      "Escherichia coli breaks down lactose only when lactose is available. Three genes sit together and share one switch. One makes the enzyme that cuts lactose. One makes a door that lets lactose in. One makes a third helper.",
      "A repressor protein, made all the time from a nearby gene called i, sits on a short DNA stretch called the operator and blocks the reader. When lactose is present, a form of it grabs the repressor. The repressor lets go. Reading starts. When the lactose is used up, the repressor sits down again. The genes were not destroyed. They were closed, and then opened."
    ],
    precision: "The lac operon is the Jacob and Monod example of negative control. Gene z encodes beta-galactosidase, y encodes permease, and a encodes transacetylase. The i gene means inhibitor, not inducer. The inducer is lactose or allolactose. Glucose and galactose do not induce this operon. A very low level of expression must remain, or lactose could never enter to act as inducer. Once the lactose has been used, the operon shuts again. Positive regulation of this operon also exists and is left beyond this level. In eukaryotes, control can also act at splicing, at export of RNA from the nucleus, and at translation. Other bacterial operons include trp, ara, and his.",
    check: {
      prompt: "The lac genes are read when:",
      choices: [
        ["The inducer inactivates the repressor.", true],
        ["Glucose sits permanently on the operator.", false],
        ["The repressor is destroyed and never made again.", false]
      ],
      why: "The repressor is made continuously. The inducer only changes its shape so it cannot bind the operator. Remove the inducer and the block returns."
    }
  },
  {
    id: "pedigree",
    stage: "Reading",
    band: "Class 12",
    title: "A family is the experiment",
    idea: "When a cross cannot be set up, the family tree shows whether a character is hidden or loud.",
    rests: "You already know dominant, recessive, and sex chromosomes.",
    words: ["pedigree"],
    caption: "Squares and circles are people. A filled symbol shows the character. A recessive character can appear from parents who do not show it.",
    diagram: "pedigree",
    plain: [
      "Pea plants can be crossed on purpose. People cannot. What remains is the family history of a character, drawn as a tree. That drawing is a pedigree.",
      "A square is a male. A circle is a female. A filled symbol shows the character. A horizontal line is a couple. A vertical line leads to their children.",
      "If a child shows a character and neither parent does, the character was hidden in both parents. That pattern fits a recessive allele. If the character does not skip a generation, and people who show it often have a parent who shows it, the pattern fits a dominant allele. Characters on the X chromosome have a further pattern: they often pass from a mother who does not show them to some of her sons."
    ],
    precision: "Mendelian disorders named in the chapter are haemophilia, cystic fibrosis, sickle-cell anaemia, colour blindness, phenylketonuria, and thalassemia. They can be dominant or recessive, autosomal or sex-linked. Colour blindness is X-linked recessive, from a fault in red or green cones, about 8 percent of males and 0.4 percent of females. A daughter is affected only if her father is affected and her mother at least carries the allele. Haemophilia is X-linked recessive: one protein in the clotting cascade fails, so bleeding does not stop. An affected girl is rare, because her father must be affected and her mother must at least be a carrier. Queen Victoria's pedigree is the classical carrier line. The representative textbook pedigrees use myotonic dystrophy for autosomal dominant and sickle-cell anaemia for autosomal recessive.",
    check: {
      prompt: "A character appears in a child, and neither parent shows it. The pattern is most like:",
      choices: [
        ["A recessive allele, hidden in both parents.", true],
        ["A dominant allele that cannot be hidden.", false],
        ["A trait the child caught by sitting near a relative.", false]
      ],
      why: "Two heterozygous parents can each fail to show a recessive character and still both pass the recessive allele on. One child in four, in the simple cross, shows it."
    }
  },
  {
    id: "change",
    stage: "Reading",
    band: "Class 12",
    title: "A changed letter can change a protein",
    idea: "Mutation changes the sequence. One letter can be enough.",
    rests: "You already know that the message is read three letters at a time.",
    words: ["mutation", "point mutation", "frameshift"],
    caption: "GAG means glutamic acid. Change one letter to GUG and that position becomes valine.",
    diagram: "point",
    plain: [
      "A mutation is a change in the DNA sequence. It can change the genotype and, sometimes, the phenotype. A point mutation changes a single base pair.",
      "Sickle-cell anaemia is a point mutation in the gene for the beta chain of haemoglobin. The codon GAG becomes GUG. Glutamic acid at position 6 becomes valine. Under low oxygen the altered haemoglobin sticks together, and the red cell can take a sickle shape. A person with two sickle copies is ill. A person with one sickle copy and one ordinary copy usually looks well and is a carrier.",
      "Insert or delete one letter, or two, and every codon after that point is regrouped. The sentence breaks. Insert or delete three letters and one amino acid is gained or lost, but the rest of the sentence still reads. That regrouping is a frameshift."
    ],
    precision: "The alleles are written HbA and HbS. Only HbS HbS shows the disease. HbA HbS is sickle-cell trait: apparently unaffected, and able to pass the mutant allele on. Thalassemia is the comparison the examination wants. It is also autosomal recessive, but it is a quantitative fault: too little alpha or beta globin is made. Sickle cell is a qualitative fault: the globin is made, and it works incorrectly. Alpha thalassemia involves HBA1 and HBA2, two closely linked genes on chromosome 16. Beta thalassemia involves the single gene HBB on chromosome 11. Mutagens, including ultraviolet radiation, raise the chance of mutation. The detailed chemistry of how a mutagen acts is beyond this chapter. Deletion or duplication of a chromosome segment is a chromosomal aberration, common in cancer cells, and is a larger scale than a point mutation.",
    check: {
      prompt: "Sickle-cell anaemia is caused by:",
      choices: [
        ["A single base change in the beta-globin gene.", true],
        ["An extra copy of chromosome 21.", false],
        ["A missing X chromosome.", false]
      ],
      why: "GAG to GUG changes one amino acid, glutamic acid to valine, at position 6 of the beta chain. Chromosome number is a different class of disorder, next."
    }
  },
  {
    id: "extra",
    stage: "Reading",
    band: "Class 12",
    title: "Sometimes a whole chromosome is extra or missing",
    idea: "Failed separation of chromosomes changes the number, not just a letter.",
    rests: "You already know that chromosomes travel in pairs, and that a single letter can mutate.",
    words: ["aneuploidy", "trisomy", "monosomy", "polyploidy"],
    caption: "Down syndrome is three copies of chromosome 21. Klinefelter syndrome is XXY. Turner syndrome is a single X.",
    diagram: "karyo",
    plain: [
      "A normal human cell has 46 chromosomes: 22 pairs of autosomes and one pair of sex chromosomes. If chromatids fail to separate, a person can end up with an extra chromosome or a missing one. An extra copy is a trisomy. A single copy, where a pair should be, is a monosomy. Gain or loss of individual chromosomes is aneuploidy.",
      "An extra chromosome 21 is Down syndrome. The person has 47 chromosomes. Development of the body and of learning is affected. Features an examination expects you to recognise include short stature, a broad palm with a single crease, and a characteristic face. The name comes from Langdon Down's description in 1866.",
      "An extra X in a male, written 47, XXY, is Klinefelter syndrome. Development is mostly male, with some breast development, and the person is sterile. A single X and no second sex chromosome, written 45, X, is Turner syndrome. The person is a girl with undeveloped ovaries and is sterile. An extra whole set of chromosomes, polyploidy, is a different event. It is common in plants and comes from a failed cell division after the DNA has already copied."
    ],
    precision: "Aneuploidy results from failure of chromatids to segregate. Polyploidy results from failure of cytokinesis after telophase, increasing a whole set. Down syndrome is trisomy 21, not a single-gene mutation. Klinefelter karyotype is 47, XXY, with gynaecomastia and sterility. Turner karyotype is 45, X (also written XO), with rudimentary ovaries and lack of secondary sexual characters. These are read from a karyotype. Do not classify them as Mendelian disorders. Mendelian disorders segregate as alleles. These segregate as chromosomes.",
    check: {
      prompt: "Down syndrome is:",
      choices: [
        ["An additional chromosome 21.", true],
        ["The point mutation that causes sickle-cell anaemia.", false],
        ["A single X chromosome and no second sex chromosome.", false]
      ],
      why: "Trisomy 21 changes the count of one autosome. Turner syndrome is the single-X case. Sickle-cell anaemia is one changed codon."
    }
  },
  {
    id: "almost",
    stage: "Reading",
    band: "Class 12",
    title: "People are almost the same letters",
    idea: "The differences among people are a small fraction of the ladder, and some repeats can identify a person.",
    rests: "You already know that DNA sequence is the message, and that mutation creates differences.",
    words: ["genome", "polymorphism", "DNA fingerprinting"],
    caption: "Most letters match. A few repeated regions vary so much that the pattern can identify a person.",
    diagram: "finger",
    plain: [
      "Reading the whole human ladder was a vast project, finished in 2003. People match at 99.9 percent of the bases. Less than 2 percent of the genome codes for protein. Much of the rest is repeated sequence.",
      "Those repeats often do not code, and they vary from person to person. DNA fingerprinting compares them. The same person's blood, hair, bone, and saliva give the same pattern. Two people differ, except identical twins. Because the repeats are inherited, the pattern can also test whether someone is a parent."
    ],
    precision: "The Human Genome Project ran from 1990 to 2003. One sentence lists the goal of identifying about 20,000 to 25,000 genes. A later sentence in the same chapter still estimates about 30,000 genes, against older guesses of 80,000 to 140,000. Quote the sentence you are using. The salient length is 3164.7 million base pairs. The average gene is given as about 3,000 bases, and dystrophin as 2.4 million bases. Chromosome 1 is listed with 2,968 genes and the Y chromosome with 231. About 1.4 million single-nucleotide polymorphisms were mapped. Two methods were used: expressed sequence tags of RNA, and sequencing the whole genome then annotating it. Fragments were cloned in bacterial and yeast artificial chromosomes and sequenced by Sanger's method, then overlapped by computer. A DNA polymorphism, in the chapter's definition, is a variant present at a frequency greater than 0.01. Alec Jeffreys developed fingerprinting with variable number of tandem repeats, a minisatellite class, about 0.1 to 20 kb. The older steps are isolation, restriction digestion, electrophoresis, blotting to nitrocellulose or nylon, hybridisation with a labelled probe, and autoradiography. PCR now allows the test from a single cell. Bulk DNA and satellite DNA separate as different peaks in a density gradient.",
    check: {
      prompt: "DNA fingerprinting can tell people apart because:",
      choices: [
        ["Some inherited repeat regions vary a great deal.", true],
        ["Every coding gene is entirely different in every person.", false],
        ["Proteins are run on the gel instead of DNA.", false]
      ],
      why: "99.9 percent of bases match. The test looks at highly variable repeats, not at a wholesale difference in every gene."
    }
  },
  {
    id: "crowd",
    stage: "Crowds",
    band: "Entrance",
    title: "Count the copies in a whole crowd",
    idea: "At this level, evolution is a change in how common an allele is.",
    rests: "You already know that each person carries alleles. Now leave the person, and count the alleles in the population.",
    words: ["allele frequency", "gene pool", "Hardy-Weinberg"],
    caption: "Move p, the fraction of allele A. If nothing pushes, the three genotypes stay in these fractions.",
    diagram: "hw",
    plain: [
      "Take one gene with two alleles, A and a. Let p be the fraction of all the copies that are A. Let q be the fraction that are a. Then p + q = 1.",
      "If nothing pushes the population, those fractions stay the same generation after generation. The fraction of people who are AA is p squared. The fraction who are aa is q squared. The fraction who are Aa is 2pq. The three fractions add to 1. This quiet baseline is the Hardy-Weinberg equilibrium. Evolution, in this chapter, is a departure from it."
    ],
    precision: "The gene pool is every allele at that locus in the population. The equation p squared + 2pq + q squared = 1 is the expansion of (p + q) squared. It is the baseline, not a description of every real population. If p = 0.6, then q = 0.4, AA is 0.36, Aa is 0.48, and aa is 0.16. The chapter states the equation and then does not drill it in the exercises. Entrance questions do. Measure a real population, compare it with these expected fractions, and the direction of the difference is the sign of evolutionary change.",
    check: {
      prompt: "If p = 0.5 and q = 0.5, the heterozygote fraction 2pq is:",
      choices: [
        ["0.50.", true],
        ["0.25.", false],
        ["1.", false]
      ],
      why: "2 x 0.5 x 0.5 = 0.5. The two homozygotes are each 0.25. Together with 0.5 they add to 1."
    }
  },
  {
    id: "pushes",
    stage: "Crowds",
    band: "Entrance",
    title: "Five things can move the count",
    idea: "Allele frequencies change by migration, chance, new letters, reshuffling, and unequal success in leaving offspring.",
    rests: "You already know the quiet baseline: p squared + 2pq + q squared.",
    words: ["gene flow", "genetic drift", "natural selection", "fitness"],
    caption: "Selection can favour the middle, one end, or both ends. Fitness means leaving more offspring, not being the strongest in a contest.",
    diagram: "forces",
    plain: [
      "Five pushes disturb the quiet count. Gene flow: individuals move and carry alleles into or out of the group. Genetic drift: the count changes by chance, most strongly in a small group. If a few individuals start a new group, that chance sample is a founder effect. Mutation: a new letter appears. Recombination: old letters are shuffled into new combinations. Natural selection: a heritable trait that leaves more offspring becomes more common.",
      "Selection can favour the average (stabilising), favour one extreme (directional), or favour both extremes and lose the middle (disruptive). Fitness here means reproductive fitness. It means more offspring, not bigger muscles.",
      "Darwin, from the voyage of the Beagle, and Wallace, working in the Malay Archipelago, both saw this. The useful differences are inherited, and they are small. Lamarck's picture, a giraffe stretching its neck and handing the stretch to its calves, is not the mechanism. Hugo de Vries stressed sudden large jumps, which he called saltation. Later population genetics kept Darwin's small heritable differences and added the five pushes."
    ],
    precision: "The five factors in the chapter are gene migration or gene flow, genetic drift, mutation, genetic recombination, and natural selection. Branching descent and natural selection are the two key Darwinian ideas. Industrial melanism is directional selection: on soot-darkened trees, dark moths were eaten less; where industrialisation did not happen, melanic moths stayed rare. Antibiotic resistance and pesticide resistance are the same logic on a short clock. No variant in the moth story was entirely wiped out. Evolution here is not a path toward a chosen goal. Homology is divergent evolution of a shared structure: mammal forelimbs, and the thorn of Bougainvillea with the tendril of Cucurbita. Analogy is convergent evolution toward a similar job from different structures: butterfly and bird wings, octopus and mammal eyes, penguin and dolphin flippers, sweet potato (root) and potato (stem). von Baer rejected the claim that an embryo replays the adult stages of other animals.",
    check: {
      prompt: "A heritable trait that causes its bearers to leave more offspring becomes more common. That push is:",
      choices: [
        ["Natural selection.", true],
        ["A stretch or a suntan passed on to children.", false],
        ["Genetic drift, which is change by chance.", false]
      ],
      why: "Selection is unequal reproductive success of inherited variants. Drift is chance. A suntan or a stretched muscle acquired in one life is not the inherited variation Darwin required."
    }
  },
  {
    id: "long-story",
    stage: "Crowds",
    band: "Entrance",
    title: "The same idea, across deep time",
    idea: "The letters you have been studying are the latest copy of a system that began in chemistry.",
    rests: "You already know copying, mutation, and selection.",
    words: ["chemical evolution", "natural selection"],
    caption: "A timeline is a list of dates. The mechanism is the one you already have: inherited variation, and unequal success in leaving offspring.",
    diagram: "deep",
    plain: [
      "The universe in this account is about 13.8 billion years old. Earth formed about 4.5 billion years ago. Life appears about 500 million years after that. Louis Pasteur showed that living things do not appear in a sterile broth. Oparin and Haldane said the first life was preceded by chemicals forming on a hot Earth with a reducing atmosphere. In 1953 Miller sent sparks through methane, hydrogen, ammonia, and water vapour, and amino acids formed.",
      "The rest of the chapter is a fossil story: early cells, animals, life on land, dinosaurs gone about 65 million years ago, mammals, then humans. The human names to be able to place in order are Dryopithecus and Ramapithecus, then Australopithecines, Homo habilis, Homo erectus, Neanderthals, and Homo sapiens. The dates belong to the examination. The mechanism does not change. Variation that can be copied is sorted by how many offspring it leaves.",
      "A mango seed still grows into a mango. You can now say why, in one chain. It carries a ladder of four letters. The ladder is copied. It is inherited in pairs. It is usually unchanged. Occasionally a letter changes. Across a crowd, and across deep time, those changes in frequency are evolution."
    ],
    precision: "Big Bang, then hydrogen and helium, then galaxies. Early Earth released water vapour, methane, carbon dioxide, and ammonia. Ultraviolet light split water; light hydrogen escaped; ozone formed later; rain filled the oceans. Panspermia and spontaneous generation are the alternatives the chapter sets aside. The first non-cellular forms are placed about 3 billion years ago, and the first cellular forms, in the later sketch, about 2,000 million years ago. Invertebrates were active by about 500 million years ago. Jawless fish and the move toward land are placed near 350 million years ago. Seaweeds and a few plants near 320 million years ago. Plants were on land before animals. Lobefin fish, including the coelacanth found in 1938, are on the way to amphibians, then reptiles. Dinosaurs disappeared about 65 million years ago. Homo habilis is given a brain of about 650 to 800 cubic centimetres. Homo erectus, about 1.5 million years ago, about 900. Neanderthals, about 1,400, lived from about 100,000 to 40,000 years ago and buried their dead. Modern Homo sapiens arose in Africa and spread. Cave art about 18,000 years ago includes Bhimbetka in Madhya Pradesh. Agriculture about 10,000 years ago. Special creation, as the chapter states it, claims that species were created as they are, that diversity does not change, and that Earth is about 4,000 years old. The evidence cited against that view is fossils in dated rocks, homology, artificial selection, and selection observed in moths and in drug resistance.",
    check: {
      prompt: "Miller's spark experiment showed that:",
      choices: [
        ["Amino acids can form under those early-Earth conditions.", true],
        ["A finished cell appears at once inside the flask.", false],
        ["Inheritance in peas follows a 3:1 ratio.", false]
      ],
      why: "The flask produced building blocks, including amino acids. It did not produce a cell. The 3:1 ratio was Mendel's result, much earlier in this path, and it is a different question."
    }
  }
];

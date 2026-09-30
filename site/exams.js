const EXAMS = {
  message: {
    notes: [
      "Mendel used 14 true-breeding varieties, paired into 7 characters. The characters were seed shape, seed colour, pod shape, pod colour, flower colour, flower position, and stem height. Trichomes, glandular or not, were not among them. The years are 1856 to 1863, a seven-year stretch. Papers offer nearby wrong dates such as 1857 to 1869."
    ],
    drills: [
      {
        prompt: "How many true-breeding pea varieties did Mendel select?",
        choices: [
          ["14, as 7 contrasting pairs.", true],
          ["7 varieties in total.", false],
          ["2, tall and dwarf only.", false]
        ],
        why: "Fourteen varieties make seven pairs. Each pair differed in one character."
      },
      {
        prompt: "Which character was not one of Mendel's seven?",
        choices: [
          ["Glandular or non-glandular trichomes.", true],
          ["Seed green or yellow.", false],
          ["Stem tall or dwarf.", false]
        ],
        why: "Pod shape, seed colour, and stem height were used. Trichomes were not."
      }
    ]
  },
  louder: {
    notes: [
      "Law of dominance covers four claims that papers bundle together: one of a pair is dominant and the other recessive; factors occur in pairs in a diploid; the discrete unit is a factor; in the F1 of a monohybrid cross only one parental character shows. The claim that both characters reappear unchanged in the F2 is the law of segregation, not dominance. Do not tick that claim when the question says 'explained by dominance'."
    ],
    drills: [
      {
        prompt: "Which claim belongs to segregation, not to dominance?",
        choices: [
          ["Both characters reappear unchanged in the F2.", true],
          ["Factors occur in pairs.", false],
          ["Only one parental character shows in the F1 of a monohybrid cross.", false]
        ],
        why: "Reappearance of the hidden character, unblended, is segregation. Dominance explains the F1 look and which member of a pair is expressed."
      }
    ]
  },
  returns: {
    notes: [
      "When a paper writes the F2 genotype in words, the order that matches 1:2:1 is tall homozygous : tall heterozygous : dwarf. The swapped order, tall heterozygous first, is the trap. The phenotype in the same cross is 3 tall : 1 dwarf, which is a different line of the question."
    ],
    drills: [
      {
        prompt: "TT crossed with tt, then the F1 selfed. The F2 genotypes are:",
        choices: [
          ["1 tall homozygous : 2 tall heterozygous : 1 dwarf.", true],
          ["1 tall heterozygous : 2 tall homozygous : 1 dwarf.", false],
          ["3 tall : 1 dwarf, and that ratio is the genotype.", false]
        ],
        why: "TT, Tt, Tt, tt. Two of the tall plants are heterozygous. Three tall to one dwarf is the phenotype, not the genotype."
      }
    ]
  },
  back: {
    notes: [
      "Matching lists used in papers: two or more forms of a gene are alleles; F1 crossed with the homozygous recessive is a test cross; F1 crossed with either parent is a back cross; the number of chromosome sets is ploidy. Every test cross with the recessive parent is a back cross. A back cross to the dominant parent is not a test cross."
    ],
    drills: [
      {
        prompt: "F1 progeny crossed with the homozygous recessive parent is called:",
        choices: [
          ["A test cross.", true],
          ["A cross that only measures ploidy.", false],
          ["Independent assortment.", false]
        ],
        why: "That is the test cross. A back cross is the wider name: F1 with any parent."
      }
    ]
  },
  "not-louder": {
    notes: [
      "Snapdragon red RR crossed with white rr gives all pink Rr. Pink selfed gives 1 red : 2 pink : 1 white. Segregation still happens. The statement 'segregation does not apply' is the false one. Pink Rr crossed with red RR gives only RR and Rr, so only red and pink, never white.",
      "ABO uses three ideas at once: I^A and I^B are dominant over i, I^A and I^B are co-dominant with each other, and the three alleles in the population are multiple alleles. It is not incomplete dominance and it is not polygenic. Group O is ii, so both parents must be able to give i. A parent who is I^A I^B cannot have a child of group O. I^A i crossed with I^B i gives AB, A, B, and O in equal fractions, so O is 25 percent. I^A I^B crossed with I^A i gives four genotypes, I^A I^A, I^A i, I^A I^B, and I^B i, and three phenotypes, A, AB, and B. If a paper says only that the father is group A and the mother is group B, all four groups remain possible, and O appears only when both carry i.",
      "Starch synthesis in pea is pleiotropy, not multiple alleles. Seed shape shows complete dominance. Starch-grain size shows incomplete dominance. Same gene, two ways of scoring."
    ],
    drills: [
      {
        prompt: "A pink snapdragon is crossed with a red snapdragon. The progeny are:",
        choices: [
          ["Red and pink only.", true],
          ["Red, pink, and white.", false],
          ["Pink only.", false]
        ],
        why: "Pink is Rr and red is RR. Children are RR or Rr. White rr cannot appear."
      },
      {
        prompt: "Mother I^A i and father I^B i. The chance of a child of group O is:",
        choices: [
          ["25 percent.", true],
          ["50 percent.", false],
          ["Zero, because the parents show A and B.", false]
        ],
        why: "One of the four meetings is ii. The parents show A and B because each also carries a dominant allele, but each can still give i."
      },
      {
        prompt: "Which pairing is wrongly matched?",
        choices: [
          ["Starch synthesis in pea : multiple alleles.", true],
          ["ABO blood groups : co-dominance.", false],
          ["XO sex determination : grasshopper.", false]
        ],
        why: "The starch gene is one gene with two effects, which is pleiotropy. Multiple alleles means more than two alleles in the population, as in ABO."
      },
      {
        prompt: "ABO inheritance includes:",
        choices: [
          ["Dominance, co-dominance, and multiple alleles.", true],
          ["Incomplete dominance and polygenic inheritance.", false],
          ["Polygenic inheritance only.", false]
        ],
        why: "I^A and I^B dominate i, they co-dominate with each other, and three alleles exist in the population. The heterozygote is not a blend, and the trait is not a range built by many genes."
      },
      {
        prompt: "Father group A, mother group B, genotypes not given. Which statement is the one AIIMS expects?",
        choices: [
          ["A, B, AB and O are all possible, and O only if both carry i.", true],
          ["The child must be AB.", false],
          ["The child cannot be O.", false]
        ],
        why: "Group A can be I^A I^A or I^A i. Group B can be I^B I^B or I^B i. Only the second pair of genotypes gives ii."
      }
    ]
  },
  "many-or-one": {
    notes: [
      "Pleiotropy is one gene, several phenotypic effects. Polygenic inheritance is several genes adding toward one range. Epistasis is different again: a gene at one place masks a gene at another place. That is non-allelic. Dominance is allelic, one letter of a pair hiding the other. AIIMS matching lists use exactly these four: pleiotropy is multiple effects of one gene, co-dominance is both alleles expressed, epistasis is non-allelic masking, mutation is a change in nucleotides."
    ],
    drills: [
      {
        prompt: "Pleiotropy means:",
        choices: [
          ["One gene affects several characters.", true],
          ["Several genes affect one character.", false],
          ["Several alleles of one gene control one crossover.", false]
        ],
        why: "Several genes, one character, is polygenic inheritance. Pleiotropy is the reverse count."
      },
      {
        prompt: "The inheritance pattern of a polygenic trait is described as:",
        choices: [
          ["Non-Mendelian.", true],
          ["A simple Mendelian 3:1.", false],
          ["X-linked recessive.", false]
        ],
        why: "There is no single dominant-recessive class. The phenotype is a range."
      },
      {
        prompt: "AIIMS match: epistasis is",
        choices: [
          ["Masking by a gene at a different place, so non-allelic.", true],
          ["Both alleles of one gene expressed together.", false],
          ["One gene with many effects.", false]
        ],
        why: "Both alleles expressed is co-dominance. One gene, many effects, is pleiotropy. Epistasis is between different genes."
      },
      {
        prompt: "Assertion: epistasis is a kind of dominance. Reason: both are masking by the partner allele of the same gene. In the AIIMS pattern, the right choice is",
        choices: [
          ["Assertion false, reason false.", true],
          ["Both true, and the reason explains the assertion.", false],
          ["Assertion true, reason false.", false]
        ],
        why: "Dominance is allelic. Epistasis is non-allelic. The reason describes dominance, not epistasis, and the assertion equates the two, so both fail."
      }
    ]
  },
  chromosomes: {
    notes: [
      "Sutton and Boveri proposed the chromosomal theory. Morgan verified it in Drosophila. The number of linkage groups equals the haploid chromosome number. A human has 23. Drosophila has 4. E. coli has one circular chromosome, so one linkage group. The genome is the complete haploid set of genetic material of the species. CPMT uses that sentence as the definition."
    ],
    drills: [
      {
        prompt: "The chromosomal theory was proposed by:",
        choices: [
          ["Sutton and Boveri.", true],
          ["Morgan, who instead verified it.", false],
          ["Robert Brown.", false]
        ],
        why: "Proposal and experimental verification are different questions. Morgan is the verification."
      },
      {
        prompt: "Linkage groups in a human, and in E. coli, are",
        choices: [
          ["23 and 1.", true],
          ["46 and 1.", false],
          ["23 and 46.", false]
        ],
        why: "Linkage groups equal the haploid set. Human n is 23. E. coli has a single circular chromosome."
      }
    ]
  },
  linked: {
    notes: [
      "In a dihybrid test cross, more parental offspring than recombinant offspring means the two genes are linked on the same chromosome. It does not mean they sit on two different chromosomes. Independent assortment fails for genes that lie close together. The reason 'closely located genes assort independently' is false. Crossing over, inside one linkage group, is catalysed by recombinase in pachytene. A gene moves into a different linkage group by translocation, not by crossing over, inversion, or duplication."
    ],
    drills: [
      {
        prompt: "A dihybrid test cross produces more parental types than recombinant types. This shows:",
        choices: [
          ["The genes are linked on one chromosome.", true],
          ["The genes are on different chromosomes.", false],
          ["Each character is polygenic.", false]
        ],
        why: "Free genes in a dihybrid test cross give 1:1:1:1, parental and recombinant types equally. An excess of parental types is linkage."
      },
      {
        prompt: "A gene moves from one linkage group to another by:",
        choices: [
          ["Translocation.", true],
          ["Crossing over between homologues.", false],
          ["Inversion.", false]
        ],
        why: "Crossing over stays inside the homologous pair. Translocation joins a piece to a non-homologous chromosome."
      }
    ]
  },
  "map-genes": {
    notes: [
      "Who first used recombination frequency as distance: Sturtevant. Morgan found linkage. Sutton and Boveri proposed the theory. Henking saw the X body. One map unit is 1 percent recombination, not 10 and not 50."
    ],
    drills: [
      {
        prompt: "Recombination frequency was first used as a map distance by:",
        choices: [
          ["Alfred Sturtevant.", true],
          ["Thomas Hunt Morgan.", false],
          ["Henking.", false]
        ],
        why: "Morgan's student Sturtevant turned the percentages into a map. Morgan's own credit is linkage and the experimental test of the chromosomal theory."
      }
    ]
  },
  sex: {
    notes: [
      "Grasshopper males are XO and females are XX. In a species where some animals have 23 chromosomes and others 24, the 23 are the males and the 24 are the females. Honey-bee drones are haploid, develop from unfertilised eggs, and make sperm by mitosis, not meiosis. A list that says males make sperm by meiosis is the false line. Birds are ZW in the female, so the egg decides the sex of the chick, not the sperm. A human mother's X chromosome can go to sons and to daughters. The human Y is the shorter sex chromosome. The male fruit fly is heterogametic. Half the sperm of a male grasshopper carry no sex chromosome. A holandric trait is on the Y. The father gives that chromosome to every son and to no daughter, so every son shows it. Criss-cross inheritance of an X-linked trait runs from father to daughter to her son. The Class 12 book treats Drosophila as XX and XY. Older AIIMS papers also asked Bridges' genic balance, the ratio of X chromosomes to sets of autosomes. Keep the book answer when the question is the Class 12 mechanism."
    ],
    drills: [
      {
        prompt: "In honey bees, which statement is false?",
        choices: [
          ["Males produce sperm by meiosis.", true],
          ["A fertilised egg develops as a female.", false],
          ["Males are haploid and females are diploid.", false]
        ],
        why: "Drones are already haploid, so sperm are produced by mitosis."
      },
      {
        prompt: "Some grasshoppers of one species have 23 chromosomes and others have 24. They are:",
        choices: [
          ["Males, then females.", true],
          ["Females, then males.", false],
          ["All males.", false]
        ],
        why: "XO males have one fewer sex chromosome than XX females."
      },
      {
        prompt: "Which statement is incorrect?",
        choices: [
          ["In fowl, the sperm decides the sex of the chick.", true],
          ["The male fruit fly is heterogametic.", false],
          ["In male grasshoppers, half the sperm lack a sex chromosome.", false]
        ],
        why: "In birds the female is ZW, so the egg carries either Z or W. The sperm are all Z."
      },
      {
        prompt: "A holandric character is seen in",
        choices: [
          ["Every son of an affected father, and in no daughter.", true],
          ["Every daughter of an affected father.", false],
          ["Sons only when the mother is a carrier.", false]
        ],
        why: "Holandric means Y-linked. The father gives Y to every son and X, not Y, to every daughter."
      }
    ]
  },
  ladder: {
    notes: [
      "Purines in both DNA and RNA are adenine and guanine. Cytosine is a pyrimidine. Thymine is DNA only. Uracil is RNA only. The sugar in RNA is ribose. The sugar in DNA is deoxyribose. Arabinose is a trap and is in neither.",
      "Chargaff: A equals T, and G equals C, and the four percentages add to 100. If adenine is 30 percent, thymine is 30 percent, and guanine and cytosine are 20 percent each.",
      "Histones are basic, positively charged, rich in lysine and arginine, and grouped as an octamer of eight molecules. The DNA on that octamer is about 146 base pairs. With linker DNA the repeat is about 200, and histone H1 sits on the linker. They are not negatively charged and their character is not acidic. DNA is the negatively charged partner. Higher folding uses non-histone chromosomal proteins. In a bacterial nucleoid the DNA is still negatively charged and is held by positively charged proteins. A statement that says the DNA is positive and the proteins are negative has the charges backwards. Euchromatin is loosely packed and stains light. Heterochromatin is dense and stains dark.",
      "Length in metres, times 10 to the 9, gives nanometres. Divide by 0.34 to get base pairs. A diploid mammalian cell quoted as 6.6 billion base pairs is about 2.2 metres. A molecule of 1.1 metres is about 3.2 billion base pairs."
    ],
    work: {
      prompt: "Adenine is 30 percent of a DNA molecule. What are thymine, guanine, and cytosine?",
      steps: [
        "Adenine pairs with thymine, so thymine is also 30 percent.",
        "The remaining 40 percent is shared equally by guanine and cytosine, because they pair.",
        "Guanine is 20 percent and cytosine is 20 percent."
      ]
    },
    drills: [
      {
        prompt: "Purines found in both DNA and RNA are:",
        choices: [
          ["Adenine and guanine.", true],
          ["Adenine and thymine.", false],
          ["Cytosine and thymine.", false]
        ],
        why: "Thymine and cytosine are pyrimidines. Thymine is absent from RNA."
      },
      {
        prompt: "Which histone statement is wrong?",
        choices: [
          ["Histones are negatively charged.", true],
          ["Histones are rich in lysine and arginine.", false],
          ["Eight histone molecules form the octamer.", false]
        ],
        why: "Histones are basic and positive. DNA is negative. The wrap only works because the charges are opposite in that direction. The octamer plus about 146 base pairs is the core. About 200 base pairs is the core plus the linker, where H1 sits."
      },
      {
        prompt: "In the nucleoid, the charges are:",
        choices: [
          ["Negative DNA held with positive proteins.", true],
          ["Positive DNA held with negative proteins.", false],
          ["DNA wrapped on histones, as in a nucleus.", false]
        ],
        why: "Bacteria do not package DNA on histone octamers. The DNA is still the negative molecule."
      }
    ]
  },
  proof: {
    notes: [
      "Griffith found transformation and did not name the molecule. Avery, MacLeod, and McCarty showed that DNA was the transforming substance, and not every biologist was convinced. The unequivocal proof is Hershey and Chase, with phosphorus-32 in DNA and sulfur-35 in protein. Do not match Hershey and Chase to tobacco mosaic virus, or Alec Jeffreys to pneumonia bacteria.",
      "A molecule that is to be genetic material must replicate, stay chemically stable, allow slow change, and be expressible as characters. 'It should be unstable' is the property that does not belong. RNA is less stable, mutates faster, and can code for protein directly. DNA evolved from RNA and is the stabler store, with repair helped by the complementary strand. Both of those RNA-world claims are accepted at this level."
    ],
    drills: [
      {
        prompt: "Unequivocal proof that DNA is the genetic material came from:",
        choices: [
          ["Hershey and Chase.", true],
          ["Griffith alone.", false],
          ["Watson and Crick, who proposed the structure.", false]
        ],
        why: "Griffith showed that something transformed the bacteria. Hershey and Chase showed that the something which entered was DNA."
      },
      {
        prompt: "Which demand is not made of genetic material?",
        choices: [
          ["It should be chemically unstable.", true],
          ["It should be able to replicate.", false],
          ["It should allow occasional mutation.", false]
        ],
        why: "Stability is required. Mutation is allowed, but it must be slow. Instability is why RNA is the worse archive."
      }
    ]
  },
  copy: {
    notes: [
      "DNA polymerase adds only in the 5-prime to 3-prime direction. It does not add 3-prime to 5-prime, and it does not add in both directions. The new strand built toward the replication fork is the leading strand. The other new strand is the lagging strand, made as Okazaki fragments and joined by ligase. The discontinuous pieces are Okazaki fragments, not polysomes and not polypeptides. AIIMS names the enzymes the Class 12 page leaves unnamed: DNA polymerase III is the main copier in E. coli, and DNA polymerase I removes the RNA primer and fills that gap. Reverse transcriptase, from Temin and Baltimore, copies RNA back into DNA. That is the exception to the usual DNA-to-RNA arrow.",
      "Meselson and Stahl used E. coli, not the pea. Taylor used Vicia faba, not Drosophila. E. coli in that density experiment divides about every 20 minutes. Start with heavy DNA. After one generation every molecule is hybrid. After two generations half the molecules are hybrid and half are fully light. Ten heavy cells switched to light nitrogen for 60 minutes pass through three generations and become 80 cells, of which 60 have DNA with no heavy nitrogen left.",
      "In eukaryotes replication is in S phase. The enzyme of replication is DNA-dependent DNA polymerase, not RNA polymerase."
    ],
    work: {
      prompt: "Ten E. coli cells with heavy DNA are moved to light nitrogen. The cells divide every 20 minutes. After 60 minutes, how many cells have DNA with no heavy strand left?",
      steps: [
        "60 minutes is three generations. Ten cells become 20, then 40, then 80.",
        "After 20 minutes all 20 cells are hybrid, so none are fully light.",
        "After 40 minutes, 20 cells are still hybrid and 20 are fully light.",
        "In the next 20 minutes each hybrid cell produces one hybrid and one light, and each light cell produces two light cells. Fully light cells: 20 from the hybrids plus 40 from the light cells, which is 60."
      ]
    },
    drills: [
      {
        prompt: "During replication, DNA polymerase adds nucleotides:",
        choices: [
          ["Only 5-prime to 3-prime.", true],
          ["Both 5-prime to 3-prime and 3-prime to 5-prime.", false],
          ["Only 3-prime to 5-prime.", false]
        ],
        why: "The direction is one way. That is why one new strand is continuous and the other is made in Okazaki fragments."
      },
      {
        prompt: "The discontinuous pieces on the lagging strand are:",
        choices: [
          ["Okazaki fragments.", true],
          ["Polysomes.", false],
          ["Histone octamers.", false]
        ],
        why: "Ligase joins Okazaki fragments. A polysome is several ribosomes on one messenger."
      },
      {
        prompt: "Semiconservative replication in chromosomes of a bean was shown by Taylor in:",
        choices: [
          ["Vicia faba.", true],
          ["Pisum sativum.", false],
          ["Drosophila.", false]
        ],
        why: "Meselson and Stahl used E. coli. Taylor used Vicia faba. Morgan used Drosophila for linkage, not for this density proof."
      }
    ]
  },
  read: {
    notes: [
      "Write messenger RNA from the template by pairing, and write it 5-prime to 3-prime, with U where the template had A. The coding strand matches that RNA with T in place of U. The coding strand is not the strand that is copied. A template 3-prime-TACATGGCAAATATCCATTCA-5-prime gives 5-prime-AUGUACCGUUUAUAGGUAAGU-3-prime.",
      "The code is a triplet, unambiguous and specific, degenerate, continuous, and nearly universal. It is not palindromic. AUG is methionine and the start. It is not methionine and phenylalanine. UAA, UAG, and UGA stop. UGA is not a start. AAA and AAG both mean lysine. Arginine has six codons: CGU, CGC, CGA, CGG, AGA and AGG. That list is the AIIMS way of asking whether you know degeneracy in a real amino acid. Wobble, Crick's idea, is that the third base of a codon can pair less strictly, so fewer transfer RNAs than codons are enough. George Gamow proposed the three-letter code. Khorana and Nirenberg read it. In bacteria the first methionine on a new chain is formylated, so the initiator is fMet. In eukaryotes it is methionine. The amino acid is attached at the 3-prime CCA end of the transfer RNA.",
      "RNA polymerase I makes 28S, 18S, and 5.8S ribosomal RNA. Polymerase II makes the precursor of messenger RNA. Polymerase III makes transfer RNA, 5S ribosomal RNA, and snRNA. In bacteria, sigma helps the polymerase start and rho helps it stop. Sigma and rho are not the eukaryotic factors. The TATA box is part of a promoter. Splicing uses snRNPs. The same polymerase that transcribes also opens the helix.",
      "A transcription unit is promoter, structural gene, and terminator. The promoter is at the 5-prime side of the coding strand, binds RNA polymerase, and decides which strand is the template. The terminator is at the 3-prime side of the coding strand. All five of those claims are true together.",
      "After transcription in a eukaryote, introns are removed and exons joined, a methylated cap is added at the 5-prime end, and adenines are added at the 3-prime end. The primary transcript is not shipped to the cytoplasm before splicing. Base-pairing of two complementary RNAs is not one of those processing steps. Split genes are eukaryotic, not bacterial. The cap is not added at the 3-prime end.",
      "Translation begins when the small ribosomal subunit meets the messenger. The first chemical step for the amino acid is charging the transfer RNA, called aminoacylation. In bacteria the 23S ribosomal RNA is the ribozyme that forms the peptide bond, and it is also structural. The ribosome contains about 80 different proteins. Eukaryotic ribosomes are 80S, made of 60S and 40S. Bacterial ribosomes are 70S, made of 50S and 30S. An organism with only 70S ribosomes has naked circular double-stranded DNA, not a histone-wrapped nucleus. Transfer RNA does interact with messenger RNA, at the anticodon. Silencing of a chosen messenger by RNA interference uses complementary double-stranded RNA."
    ],
    drills: [
      {
        prompt: "Template strand 3-prime-TACATGGCAAATATCCATTCA-5-prime. The RNA product is:",
        choices: [
          ["5-prime-AUGUACCGUUUAUAGGUAAGU-3-prime.", true],
          ["5-prime-AUGUACCGUUUAUAGGGAAGU-3-prime.", false],
          ["A strand that still contains thymine.", false]
        ],
        why: "Pair each template base, write U opposite A, and keep the new strand 5-prime to 3-prime. An extra G in the middle is a different molecule."
      },
      {
        prompt: "Which pair of claims about the code is acceptable?",
        choices: [
          ["The code is unambiguous and specific, and it is nearly universal.", true],
          ["The code is palindromic, and UGA is the start.", false],
          ["AUG means both methionine and phenylalanine.", false]
        ],
        why: "AUG is methionine only. UGA stops. AAA and AAG are both lysine. Arginine uses six codons, CGU, CGC, CGA, CGG, AGA and AGG, which is degeneracy. Wobble at the third base is why one transfer RNA can serve more than one of those codons."
      },
      {
        prompt: "Assertion: arginine is coded by one codon only. Reason: the genetic code is degenerate. The AIIMS choice is",
        choices: [
          ["Assertion false, reason true.", true],
          ["Both true, and the reason explains the assertion.", false],
          ["Both false.", false]
        ],
        why: "Degeneracy means several codons, not one, can mean the same amino acid. Arginine has six. The reason is true and it contradicts the assertion."
      },
      {
        prompt: "Assertion: in bacteria, transcription occurs in a nucleus. Reason: bacteria have no nucleus, so transcription and translation can run together. The AIIMS choice is",
        choices: [
          ["Assertion false, reason true.", true],
          ["Both true, and the reason explains the assertion.", false],
          ["Assertion true, reason false.", false]
        ],
        why: "Eukaryotic transcription is nuclear. Bacterial transcription is in the cytoplasm, and that is why it can be coupled to translation."
      },
      {
        prompt: "RNA polymerase III transcribes:",
        choices: [
          ["Transfer RNA, 5S ribosomal RNA, and snRNA.", true],
          ["28S, 18S, and 5.8S ribosomal RNA.", false],
          ["The precursor of messenger RNA.", false]
        ],
        why: "Those large ribosomal RNAs are polymerase I. The messenger precursor is polymerase II."
      },
      {
        prompt: "Which set is the eukaryotic processing of hnRNA?",
        choices: [
          ["Splice out introns, cap the 5-prime end, add adenines at the 3-prime end.", true],
          ["Send the unspliced RNA to the cytoplasm, then splice it.", false],
          ["Add the cap at the 3-prime end.", false]
        ],
        why: "Splicing, capping, and tailing happen in the nucleus. The cap is on the 5-prime end."
      },
      {
        prompt: "The peptide bond in a bacterial ribosome is catalysed by:",
        choices: [
          ["23S ribosomal RNA.", true],
          ["5S ribosomal RNA.", false],
          ["A histone.", false]
        ],
        why: "23S RNA is both structural and a ribozyme. Histones package eukaryotic DNA. They do not build the peptide bond."
      }
    ]
  },
  shut: {
    notes: [
      "Gene i is expressed all the time, from its own promoter. It does not share the promoter of z, y, and a. Its product is the repressor. Lactose, or allolactose, inactivates that repressor. Lactose does not activate the repressor into binding the operator. Galactose and glucose do not induce the operon. Permease, from y, carries lactose in. Beta-galactosidase is z. Transacetylase is a.",
      "If a mutation leaves the repressor unable to bind the inducer, lactose cannot pull it off the operator. Genes z, y, and a stay unread. They are not merely left untranslated after being copied."
    ],
    drills: [
      {
        prompt: "In the lac operon, gene i codes for:",
        choices: [
          ["The repressor.", true],
          ["The inducer.", false],
          ["Permease.", false]
        ],
        why: "The letter i comes from inhibitor. The inducer is lactose or allolactose, which is not a protein made by i."
      },
      {
        prompt: "Which lac statement is correct?",
        choices: [
          ["Gene i is expressed whether lactose is present or not.", true],
          ["Galactose induces the operon.", false],
          ["Lactose makes the repressor bind the operator more tightly.", false]
        ],
        why: "The repressor is always made. The inducer stops it binding. Galactose is not the inducer."
      },
      {
        prompt: "The repressor is mutated so it cannot bind the inducer. Lactose is added. Then:",
        choices: [
          ["z, y, and a remain unread.", true],
          ["z, y, and a are transcribed.", false],
          ["Only the repressor gene switches off.", false]
        ],
        why: "Without binding the inducer, the repressor stays on the operator. The structural genes do not get copied."
      }
    ]
  },
  pedigree: {
    notes: [
      "A double horizontal line between a square and a circle means the couple are relatives. A single line is an ordinary couple.",
      "Myotonic dystrophy is the textbook autosomal dominant example. Inbreeding, which AIIMS asks beside these disorders, increases homozygosity. The false statement is that inbreeding increases heterozygosity. It can expose harmful recessives, which is inbreeding depression. Sickle-cell anaemia is autosomal recessive. Thalassemia is autosomal recessive. Haemophilia is X-linked recessive, not autosomal dominant, and not a chromosomal count. Colour blindness is X-linked recessive. Sickle-cell anaemia is not X-linked. A normal probe does not stick to a mutated sequence, so that sequence does not show on the film.",
      "Sons receive their X from their mother and their Y from their father. A colour-blind man married to a woman homozygous for normal vision has no colour-blind sons, because every son takes a normal X from her. A colour-blind woman is X^c X^c. If she marries a man whose own mother was colour-blind, that man is colour-blind too, and every child is colour-blind. A woman whose mother was haemophilic, but who is herself unaffected, is a carrier. With a normal husband the children can be a normal daughter, a carrier daughter, a normal son, or a haemophilic son. Two carriers of sickle-cell anaemia, HbA HbS crossed with HbA HbS, have a 25 percent chance of an affected HbS HbS child."
    ],
    work: {
      prompt: "A colour-blind man marries a woman homozygous for normal colour vision. What is the chance that a son is colour-blind?",
      steps: [
        "The man is X^c Y. The woman is X X.",
        "A son must receive Y from his father and X from his mother.",
        "Her X chromosomes are both normal, so the son's single X is normal.",
        "The probability is 0, not 0.5."
      ]
    },
    drills: [
      {
        prompt: "An autosome-linked dominant trait in the textbook list is:",
        choices: [
          ["Myotonic dystrophy.", true],
          ["Haemophilia.", false],
          ["Sickle-cell anaemia.", false]
        ],
        why: "Haemophilia is X-linked recessive. Sickle-cell anaemia and thalassemia are autosomal recessive."
      },
      {
        prompt: "Both parents are carriers of sickle-cell anaemia. The percent of children who are ill is:",
        choices: [
          ["25.", true],
          ["50.", false],
          ["75.", false]
        ],
        why: "HbA HbS crossed with HbA HbS gives one HbS HbS in four. The heterozygotes are carriers, not the diseased class."
      },
      {
        prompt: "A colour-blind man and a homozygous normal woman have a son. The chance the son is colour-blind is:",
        choices: [
          ["0.", true],
          ["0.5.", false],
          ["1.", false]
        ],
        why: "The son takes his X from his mother. Both of hers are normal."
      }
    ]
  },
  change: {
    notes: [
      "Sickle-cell anaemia is a qualitative change: the beta chain is built, but position 6 is valine instead of glutamic acid because GAG became GUG. Thalassemia is quantitative: too little alpha or beta chain is made. Alpha genes HBA1 and HBA2 are on chromosome 16. The beta gene HBB is on chromosome 11. Sickle-cell anaemia is autosomal recessive, not X-linked. A paper that calls both defects quantitative, or both qualitative, is wrong."
    ],
    drills: [
      {
        prompt: "Which statement about the two globin disorders is correct?",
        choices: [
          ["Thalassemia is too little globin. Sickle-cell anaemia is a wrongly built globin.", true],
          ["Both are only a quantitative failure.", false],
          ["Sickle-cell anaemia is X-linked recessive.", false]
        ],
        why: "Quality versus quantity is the distinction the paper wants. The chromosome for sickle-cell anaemia is an autosome."
      }
    ]
  },
  extra: {
    notes: [
      "Down syndrome is an extra chromosome 21, from failure of chromosomes to separate, called non-disjunction. It is the autosomal case. Langdon Down described it in 1866. The signs papers list are short stature, a small round head, a furrowed tongue, a partly open mouth, a broad palm with one crease, and slowed physical and mental development. Turner syndrome is a missing X, 45, X, not an extra chromosome. Klinefelter syndrome is 47, XXY: overall male development, some breast development, sterile, and often tall. Klinefelter was not described by Langdon Down, is not short stature, and is not the developmental picture written for Down syndrome. XYY is a different karyotype and is not Down syndrome. A Barr body is an inactivated X. The number is the number of X chromosomes minus one. A normal woman has 1. Turner has 0. Klinefelter has 1. A person with three X chromosomes has 2. No cell plate after telophase in a plant adds a whole set and causes polyploidy, not aneuploidy. Matching: Down syndrome with chromosome 21, alpha thalassemia with chromosome 16, beta thalassemia with chromosome 11, Klinefelter syndrome with the X chromosome. Assertion and reason both hold, and the reason explains the assertion, when the assertion says these three syndromes are chromosomal disorders and the reason says they come from absence or excess of chromosomes rather than from one changed codon."
    ],
    drills: [
      {
        prompt: "A broad palm with a single crease points to:",
        choices: [
          ["Down syndrome.", true],
          ["Turner syndrome.", false],
          ["Thalassemia.", false]
        ],
        why: "That crease is part of the trisomy 21 description. Turner syndrome is a missing sex chromosome, without that palm as its marker."
      },
      {
        prompt: "Which two claims about Klinefelter syndrome are the ones to keep?",
        choices: [
          ["Development is mostly male, with some female secondary features, and the person is sterile.", true],
          ["Langdon Down described it, and the person is short.", false],
          ["It is trisomy 21.", false]
        ],
        why: "Langdon Down, short stature, and slowed mental development belong to Down syndrome. Klinefelter syndrome is XXY."
      },
      {
        prompt: "A plant cell finishes telophase but makes no cell plate. The result is:",
        choices: [
          ["Polyploidy.", true],
          ["Aneuploidy of one chromosome.", false],
          ["A point mutation.", false]
        ],
        why: "The whole doubled set stays in one cell. Aneuploidy is gain or loss of individual chromosomes."
      },
      {
        prompt: "Barr bodies in a normal woman, a Turner woman, and a Klinefelter man are",
        choices: [
          ["1, 0 and 1.", true],
          ["1, 1 and 0.", false],
          ["2, 1 and 1.", false]
        ],
        why: "Barr bodies equal the number of X chromosomes minus one. XX gives 1, X gives 0, XXY gives 1."
      },
      {
        prompt: "Assertion: Down syndrome, Klinefelter syndrome and Turner syndrome are chromosomal disorders. Reason: each is an absence or an excess of a chromosome, not one changed codon. The AIIMS choice is",
        choices: [
          ["Both true, and the reason explains the assertion.", true],
          ["Both true, and the reason does not explain the assertion.", false],
          ["Assertion true, reason false.", false]
        ],
        why: "Sickle-cell anaemia is the changed-codon case. These three change the chromosome count, which is why they are chromosomal disorders."
      }
    ]
  },
  almost: {
    notes: [
      "Expressed sequence tags are the genes that are read into RNA. Sequence annotation is the other method: sequence the whole genome, coding and non-coding, then assign functions afterwards. That blind whole-genome path is not called gene mapping and it is not called a tag. Chromosome 1 was the last human chromosome finished, and it is also the one listed with the most genes. The Y chromosome has the fewest in that list. A gene library, the AIIMS phrase, is the collection of cloned DNA fragments that together represent a genome.",
      "Fingerprint order: isolate the DNA and cut it, separate the pieces by electrophoresis, blot them onto a membrane, hybridise with a labelled VNTR probe, then detect the bands by autoradiography. Polymorphism in those repeats is the basis of both fingerprinting and genetic mapping."
    ],
    drills: [
      {
        prompt: "Sequencing an entire genome first, and only later assigning functions, is:",
        choices: [
          ["Sequence annotation.", true],
          ["An expressed sequence tag.", false],
          ["A test cross.", false]
        ],
        why: "An expressed sequence tag starts from RNA that was actually made. Annotation starts from the whole sequence."
      },
      {
        prompt: "The last human chromosome to be sequenced in that project was:",
        choices: [
          ["Chromosome 1.", true],
          ["Chromosome 22.", false],
          ["The Y chromosome, which has the fewest genes.", false]
        ],
        why: "Chromosome 1 was finished in May 2006 in the account used by the papers. It is also the chromosome with the most genes in the salient list."
      },
      {
        prompt: "The order of an old DNA fingerprint is:",
        choices: [
          ["Cut, electrophoresis, blot, probe, autoradiography.", true],
          ["Probe first, then cut, then blot.", false],
          ["Autoradiography before electrophoresis.", false]
        ],
        why: "The pieces must be separated and transferred before a probe can find them. The film is last."
      }
    ]
  },
  crowd: {
    notes: [
      "Heterozygotes are 2pq, not pq. If p is 0.4, then q is 0.6, AA is 0.16, Aa is 0.48, and aa is 0.36. If p is 0.1, AA is 0.01. A constant gene pool is the equilibrium itself. It is not a force that disturbs the equilibrium. Drift, migration, mutation, recombination, and selection are the forces that do."
    ],
    drills: [
      {
        prompt: "The frequency of allele A is 0.4. The frequencies of AA, Aa, and aa are:",
        choices: [
          ["0.16, 0.48, and 0.36.", true],
          ["0.16, 0.36, and 0.48.", false],
          ["0.36, 0.48, and 0.16.", false]
        ],
        why: "q is 0.6. p squared is 0.16. 2pq is 0.48. q squared is 0.36. Swapping Aa with aa is the usual trap."
      },
      {
        prompt: "Which does not disturb Hardy-Weinberg equilibrium?",
        choices: [
          ["A constant gene pool.", true],
          ["Genetic drift.", false],
          ["Gene migration.", false]
        ],
        why: "A constant gene pool is what the equilibrium describes. Drift and migration change frequencies."
      }
    ]
  },
  pushes: {
    notes: [
      "Natural selection produces stabilising, directional, or disruptive change. It is not itself genetic drift. Directional selection moves the crowd off the old average. Stabilising selection keeps the average and loses both extremes, as when newborn weights near 3 kilograms survive and both very light and very heavy newborns die. Disruptive selection keeps both extremes.",
      "The founder effect is genetic drift, not mutation and not recombination. Drift matters most in a small isolated population. Hugo de Vries called a single large step saltation. His mutations are random and directionless. They are not small and directional, and the theory is not Wallace's.",
      "Homology is divergent evolution from a shared structure: vertebrate forelimbs, including a bird wing and a whale flipper, and also vertebrate hearts and brains. Analogy is convergent evolution: penguin and dolphin flippers, octopus and mammal eyes, butterfly and bird wings, moth wing against a bird wing, sweet potato and potato. A shark's dorsal fin is not the homologue of a bird wing. Darwin's finches are adaptive radiation, not an anthropogenic case. Herbicide-resistant weeds, drug-resistant eukaryotes, and breeds of dog are anthropogenic. Australian marsupials in the adaptive-radiation set include numbat, spotted cuscus, and flying phalanger. Mole, flying squirrel, lemur, bobcat, and wolf in those matching lists are placentals. The convergent pairs used in papers are lemur with spotted cuscus, bobcat with Tasmanian tiger cat, anteater with numbat, and flying squirrel with flying phalanger."
    ],
    drills: [
      {
        prompt: "More individuals come to have a value away from the old average. That selection is:",
        choices: [
          ["Directional.", true],
          ["Stabilising.", false],
          ["Genetic drift.", false]
        ],
        why: "Stabilising keeps the mean. Disruptive favours both tails. Drift is chance, not this systematic shift."
      },
      {
        prompt: "Which pair is homologous?",
        choices: [
          ["Bird wing and whale flipper.", true],
          ["Penguin flipper and dolphin flipper.", false],
          ["Butterfly wing and bird wing.", false]
        ],
        why: "Bird and whale forelimbs share the limb-bone plan and do different jobs. The other two pairs do the same sort of job with different structures."
      },
      {
        prompt: "Which set evolved by human action?",
        choices: [
          ["Herbicide-resistant weeds, drug-resistant eukaryotes, and breeds of dog.", true],
          ["Darwin's finches.", false],
          ["Only the finches and the weeds.", false]
        ],
        why: "The finches are adaptive radiation on the islands. The other three are anthropogenic."
      },
      {
        prompt: "de Vries described mutation as:",
        choices: [
          ["Random and directionless, with speciation by saltation.", true],
          ["Small and directional, like Darwin's variations.", false],
          ["A theory first written by Wallace.", false]
        ],
        why: "Saltation is his word for one large step. Wallace shares natural selection with Darwin, not the mutation theory."
      }
    ]
  },
  "long-story": {
    notes: [
      "Miller's flask contained methane, hydrogen, ammonia, and water vapour, at 800 degrees Celsius, with electric sparks. Methane is CH4, not CH3. Ammonia is NH3, not NH4. The temperature in the paper is 800, not 600.",
      "Homo sapiens arose in Africa and then moved across continents, not in Australia. The ice-age window given for modern Homo sapiens is about 75,000 to 10,000 years ago. A usable order is Ramapithecus, then Australopithecus, then Homo habilis, then Homo erectus, then Neanderthal, then Homo sapiens. Among the genus Homo alone, the order is habilis, erectus, Neanderthal, sapiens. Brain sizes used in papers: habilis about 650 to 800 cubic centimetres, erectus about 900, Neanderthal about 1400, and Homo sapiens about 1350. Neanderthal also used hides and buried the dead. The coelacanth is a lobe-finned fish on the way toward amphibians.",
      "Dates to match: about 500 million years ago invertebrates were active, about 350 million years ago jawless fish, about 320 million years ago seaweeds and a few plants, about 65 million years ago the dinosaurs disappeared. Homology and fossils are the evidence the chapter trusts for common descent. Ernst Haeckel's claim that embryos replay adult ancestors was rejected by Karl Ernst von Baer, so that embryological story is not accepted evidence. Analogy, such as insect and bird wings, shows a similar job, not a shared ancestor.",
      "Older papers still ask three further points. The chemical sequence they want is organic monomers, then polymers, then protobionts, then DNA-based systems. The earliest organisms are taken to have been non-green and anaerobic, and the first autotrophs chemoautotrophs that did not release oxygen. The Abingdon tortoise on the Galapagos died out within about a decade of goats arriving, because the goats browsed more efficiently. Era labels used in matching questions: Paleozoic for fishes and amphibians, Mesozoic for reptiles and birds, Cenozoic for mammals, Proterozoic for early invertebrates."
    ],
    drills: [
      {
        prompt: "Miller produced amino acids from:",
        choices: [
          ["CH4, H2, NH3, and water vapour at 800 degrees Celsius.", true],
          ["CH3, H2, NH3, and water vapour at 600 degrees Celsius.", false],
          ["CH4, H2, NH4, and water vapour at 800 degrees Celsius.", false]
        ],
        why: "The carbon gas is methane, CH4. The nitrogen gas is ammonia, NH3. The temperature printed for the experiment is 800 degrees Celsius."
      },
      {
        prompt: "Brain about 1400 cubic centimetres, hides for clothing, and burial of the dead. This is:",
        choices: [
          ["Neanderthal.", true],
          ["Homo habilis, whose brain is about 650 to 800.", false],
          ["Homo erectus, whose brain is about 900.", false]
        ],
        why: "Habilis and erectus have the smaller brains. Burial and hides are the Neanderthal details in the chapter."
      },
      {
        prompt: "Which is not accepted as evidence of common descent?",
        choices: [
          ["Haeckel's claim that an embryo replays adult ancestors.", true],
          ["The same forelimb bones in a human, a bat, and a whale.", false],
          ["Fossils in successively older rocks.", false]
        ],
        why: "von Baer rejected Haeckel's replay. Homologous limbs and fossils remain the evidence the chapter uses."
      },
      {
        prompt: "About 65 million years ago, the event to match is:",
        choices: [
          ["Dinosaurs disappeared.", true],
          ["Jawless fish evolved.", false],
          ["Invertebrates first became active.", false]
        ],
        why: "Jawless fish are placed near 350 million years ago. Invertebrates are placed near 500 million years ago. Seaweeds are near 320."
      }
    ]
  }
};

"""Build the genetics video lecture: en-GB male and female voices, 160 wpm, animated frames."""
import asyncio
import math
import os
import subprocess
import textwrap

import edge_tts
import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.abspath(__file__))
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
W, H = 1280, 720
FPS = 12
ANIM_FRAMES = 36
PAPER = (246, 243, 236)
INK = (28, 25, 21)
GREEN = (30, 77, 58)
GREEN_SOFT = (229, 239, 233)
CLAY = (138, 61, 47)
GOLD = (196, 161, 90)
MUTED = (92, 86, 76)
WHITE = (255, 255, 255)
LINE = (217, 210, 197)

MALE = "en-GB-RyanNeural"
FEMALE = "en-GB-SoniaNeural"

def load_font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\georgiab.ttf" if bold else r"C:\Windows\Fonts\georgia.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

FONT_TITLE = load_font(40, True)
FONT_H = load_font(28, True)
FONT_B = load_font(22, True)
FONT_S = load_font(18)
FONT_XS = load_font(15)

SCENES = [
    {
        "id": "01-open",
        "voice": "female",
        "kicker": "Opening",
        "title": "Genetics, one idea at a time",
        "graphic": "title",
        "text": (
            "This is a lecture in clear English, from the first question a child can ask, "
            "to the genetics course of class twelve and the medical entrance. "
            "I will take one idea. A male voice will take the next. "
            "Watch the picture move, then keep the examination sentence."
        ),
    },
    {
        "id": "02-seed",
        "voice": "male",
        "kicker": "Wonder",
        "title": "A mango seed grows a mango",
        "graphic": "seed",
        "text": (
            "A mango seed grows a mango. It does not grow a neem tree. "
            "An elephant's baby is an elephant. That sameness is heredity. "
            "It means passed on from parents to young. "
            "What is passed on is not a tiny finished animal hidden in the parent. "
            "It is the information for building one. "
            "Genetics is the study of that information, and of the ways the young still differ."
        ),
    },
    {
        "id": "03-vary",
        "voice": "female",
        "kicker": "Wonder",
        "title": "Same family, not photocopies",
        "graphic": "siblings",
        "text": (
            "Brothers and sisters are the same kind of living thing, and they are not copies. "
            "One may be taller. One may have a different nose. That difference is variation. "
            "People noticed this long before laboratories. They kept the seeds of plants they liked, "
            "and the calves of cows they liked. That choosing is artificial selection. "
            "The Sahiwal cow is one result of a long choosing. "
            "Natural selection, later in this lecture, uses the same fact without a human chooser."
        ),
    },
    {
        "id": "04-gene",
        "voice": "male",
        "kicker": "Wonder",
        "title": "The message does not blend like paint",
        "graphic": "paint",
        "text": (
            "Mix red paint into white paint and the red does not come back. Inheritance is not paint. "
            "A hidden character can vanish for one generation and return unchanged. "
            "So the message stays in pieces. A piece is a gene, the information for a character. "
            "Mendel called these pieces factors. From eighteen fifty-six to eighteen sixty-three "
            "he counted seven pea characters, using fourteen true-breeding varieties. "
            "Trichomes were not one of those characters. A true-breeding line keeps the same trait "
            "after repeated self-pollination."
        ),
    },
    {
        "id": "05-copies",
        "voice": "female",
        "kicker": "Pairs",
        "title": "Two copies, one from each parent",
        "graphic": "copies",
        "text": (
            "For each character you carry two copies, one from each parent. "
            "The two versions of one gene are alleles. If they match, the body is homozygous. "
            "If they differ, it is heterozygous. The letters are the genotype. The look is the phenotype. "
            "A tall pea may be capital T capital T, or capital T small t. Looking does not tell you which. "
            "Use one letter for one gene. Capital T and small t belong together. "
            "Capital T and the letter d do not, because you cannot see that they are a pair."
        ),
    },
    {
        "id": "06-loud",
        "voice": "male",
        "kicker": "Pairs",
        "title": "One copy can hide the other",
        "graphic": "dominance",
        "text": (
            "Mendel crossed true-breeding tall peas with true-breeding dwarf peas. "
            "Every plant in the first generation was tall. None were in between. "
            "The dwarf copy was still there. It was silent. Tall is dominant. Dwarf is recessive. "
            "This is not a prize for strength. It describes this pair of alleles. "
            "The law of dominance says factors occur in pairs, one of a dissimilar pair dominates, "
            "and only one parental character shows in that first generation. "
            "The return of both characters in the next generation is a different law."
        ),
    },
    {
        "id": "07-return",
        "voice": "female",
        "kicker": "Pairs",
        "title": "The quiet copy comes back",
        "graphic": "punnett",
        "text": (
            "Those tall plants pollinated themselves. In a large count, about three plants in four were tall, "
            "and one in four was dwarf. None were medium. The dwarf copy had not been diluted. "
            "When a plant with both letters makes pollen or an egg, the two copies split. "
            "Half the gametes get capital T and half get small t. "
            "Random meetings give one capital T capital T, two capital T small t, and one small t small t. "
            "That is the law of segregation. The look is three to one. The letters are one, two, one. "
            "The diagram that lays this out is a Punnett square."
        ),
    },
    {
        "id": "08-test",
        "voice": "male",
        "kicker": "Pairs",
        "title": "How to uncover the quiet copy",
        "graphic": "test",
        "text": (
            "A tall plant might be homozygous or heterozygous. You cannot see which. "
            "Cross it with a dwarf plant, two small t. If every child is tall, the tall parent gave only capital T. "
            "If about half the children are dwarf, the tall parent was also giving small t. "
            "That cross is a test cross. A back cross is wider. It is the first generation crossed with either parent. "
            "Every test cross against the recessive parent is a back cross. "
            "A back cross to the dominant parent is not a test cross. "
            "Self-pollination cannot settle the two tall genotypes, because both can have tall children."
        ),
    },
    {
        "id": "09-two",
        "voice": "female",
        "kicker": "Pairs",
        "title": "Two characters shuffle, then the count becomes a percent",
        "graphic": "dihybrid",
        "text": (
            "Yellow seed is dominant to green. Round seed is dominant to wrinkled. "
            "Follow both at once. A plant heterozygous for both makes four gametes in equal number: "
            "both dominants, yellow wrinkled, green round, and both recessives. "
            "The next generation shows about nine, three, three, and one. "
            "There are sixteen boxes. Nine sixteenths is fifty-six point two five percent. "
            "Three sixteenths is eighteen point seven five percent. "
            "For pods, green is dominant to yellow, and inflated is dominant to constricted. "
            "Yellow inflated pods are a three-out-of-sixteen class, not the nine. "
            "This free shuffle fails when the two genes sit close on the same chromosome."
        ),
    },
    {
        "id": "10-except",
        "voice": "male",
        "kicker": "Beyond",
        "title": "Sometimes neither copy simply wins",
        "graphic": "flowers",
        "text": (
            "A red snapdragon crossed with white gives pink. Pink selfed gives one red, two pink, and one white. "
            "The letters are still one, two, one. Segregation did not fail. The heterozygote has its own look. "
            "That is incomplete dominance. Pink crossed with red gives only red and pink. "
            "Blood groups are different. The alleles I A and I B both place a sugar when they are together. "
            "That is co-dominance. Allele i places none. One person carries only two of the three alleles. "
            "Group O is two copies of i, so a parent who is I A I B cannot have a child of group O. "
            "I A i with I B i gives group O one time in four. "
            "The pea starch gene is pleiotropy, not multiple alleles. Seed shape shows dominance. Grain size does not. "
            "Skin colour in the textbook model is several genes adding. That pattern is non-Mendelian."
        ),
    },
    {
        "id": "11-chrom",
        "voice": "female",
        "kicker": "Chromosomes",
        "title": "The copies ride on chromosomes",
        "graphic": "chroms",
        "text": (
            "Genes sit on chromosomes. Chromosomes occur in pairs, and a gamete receives one from each pair. "
            "Different pairs can line up in more than one way. That is independent assortment, seen in the cell. "
            "Sutton and Boveri proposed the chromosomal theory. Morgan tested it in the fruit fly. He did not propose it. "
            "When two genes sit on the same chromosome, parental combinations outnumber new ones. That is linkage. "
            "A new combination is recombination. White and yellow recombined in only one point three percent. "
            "White and miniature wing recombined in thirty-seven point two percent. "
            "Sturtevant, not Morgan, used those percentages as distance. One percent is one map unit. "
            "Put the largest percent at the two ends. Crossing over stays inside one pair and uses recombinase. "
            "A gene joins a different group by translocation."
        ),
    },
    {
        "id": "12-sex",
        "voice": "male",
        "kicker": "Chromosomes",
        "title": "In humans, the sperm decides",
        "graphic": "sex",
        "text": (
            "Humans have twenty-three pairs. Twenty-two pairs match in males and females. Those are autosomes. "
            "Females are X X. Males are X Y. Every egg carries X. Half the sperm carry X and half carry Y. "
            "The sperm decides the sex of the child. Each pregnancy is about an even chance. "
            "The mother is not the cause of a daughter. In birds the female is Z W, so the egg decides. "
            "Grasshopper males are X O. If some animals have twenty-three chromosomes and others twenty-four, "
            "the twenty-three are the males. Honey-bee males are haploid, grow from unfertilised eggs, "
            "and make sperm by mitosis, not meiosis. A mother's X chromosome can go to sons and to daughters. "
            "A colour-blind man and a woman with two normal X chromosomes have no colour-blind sons, "
            "because a son takes his X from his mother."
        ),
    },
    {
        "id": "13-dna",
        "voice": "female",
        "kicker": "Molecule",
        "title": "The message is four letters",
        "graphic": "helix",
        "text": (
            "A gene is a stretch of DNA, a ladder of four bases. Adenine pairs with thymine by two bonds. "
            "Guanine pairs with cytosine by three. The rails run in opposite directions. "
            "If you know one side, you know the other. Purines in both DNA and RNA are adenine and guanine. "
            "The sugar in RNA is ribose. The sugar in DNA is deoxyribose. "
            "If adenine is thirty percent, thymine is thirty, and guanine and cytosine are twenty each. "
            "Human DNA is far longer than the nucleus, so it wraps on histones. "
            "Histones are positive and basic, rich in lysine and arginine, eight in an octamer. "
            "DNA is the negative partner. A statement that reverses those charges is wrong. "
            "Loose chromatin can be read. Dense chromatin cannot. "
            "Watson and Crick proposed the ladder in nineteen fifty-three, using Franklin and Wilkins, and Chargaff's rule."
        ),
    },
    {
        "id": "14-proof",
        "voice": "male",
        "kicker": "Molecule",
        "title": "Three experiments name the molecule",
        "graphic": "proof",
        "text": (
            "Griffith, in nineteen twenty-eight, saw dead smooth pneumonia bacteria change live rough ones. "
            "He did not name the substance. Avery, MacLeod, and McCarty showed that only DNA could do it. "
            "An enzyme that cuts DNA stopped the change. Enzymes that cut protein or RNA did not. "
            "The unequivocal proof is Hershey and Chase, in nineteen fifty-two. "
            "They tagged virus DNA with phosphorus and virus protein with sulfur. Only the phosphorus entered the bacterium. "
            "Genetic material must copy itself, stay chemically stable, allow slow change, and be read as characters. "
            "Instability is not a requirement. RNA is less stable, mutates faster, and can code for protein directly. "
            "DNA evolved later as the stabler store. RNA was first."
        ),
    },
    {
        "id": "15-copy",
        "voice": "female",
        "kicker": "Molecule",
        "title": "Each new ladder keeps one old side",
        "graphic": "repl",
        "text": (
            "The two strands separate. New letters are laid on by the pairing rules. "
            "Each daughter ladder keeps one parental strand. That is semiconservative copying. "
            "Meselson and Stahl grew bacteria on heavy nitrogen, then switched to light nitrogen. "
            "After one generation every ladder was medium. After two, half were medium and half were light. "
            "They used the bacterium, not the pea. Taylor showed the same pattern in the bean, Vicia faba. "
            "The copier, DNA polymerase, adds only from the five-prime end toward the three-prime end. "
            "It does not add both ways. One new strand grows toward the fork. "
            "The other is made in Okazaki fragments and joined by ligase. "
            "Ten heavy cells, moved to light nitrogen for sixty minutes, with a division every twenty minutes, "
            "become eighty cells, and sixty of those have no heavy strand left."
        ),
    },
    {
        "id": "16-read",
        "voice": "male",
        "kicker": "Reading",
        "title": "One side is read into a protein",
        "graphic": "dogma",
        "text": (
            "Transcription copies one strand of one gene into RNA. The template is read. "
            "The coding strand matches the new RNA, with U where DNA had T. Do not copy both strands. "
            "A unit has a promoter, the gene, and a terminator. In bacteria, sigma helps the start and rho helps the stop. "
            "Those helpers are bacterial. Do not give them to a eukaryote. "
            "Polymerase one makes the large ribosomal RNAs. Polymerase two makes the messenger precursor. "
            "Polymerase three makes transfer RNA, five S RNA, and the small nuclear RNAs. "
            "In a eukaryote, remove introns, join exons, cap the five-prime end, and add adenines at the three-prime end, "
            "before the message leaves the nucleus. "
            "Translation reads three letters at a time. AUG is methionine and the start. It is not also phenylalanine. "
            "UAA, UAG, and UGA stop. AAA and AAG are both lysine. "
            "The code is specific, degenerate, and nearly universal. It is not a palindrome. "
            "Transfer RNA is the adapter. The small subunit meets the message first. "
            "In bacteria, twenty-three S RNA forms the peptide bond."
        ),
    },
    {
        "id": "17-lac",
        "voice": "female",
        "kicker": "Reading",
        "title": "The cell can keep a chapter shut",
        "graphic": "lac",
        "text": (
            "Escherichia coli breaks lactose only when lactose is there. Three genes share one switch. "
            "One cuts lactose. One lets lactose in. One is a helper. "
            "A repressor, made all the time from gene i, sits on the operator and blocks the reader. "
            "Lactose, or allolactose, pulls the repressor off. Glucose and galactose do not. "
            "Gene i has its own promoter. It does not share the promoter of the three genes. "
            "If a mutation leaves the repressor unable to bind the inducer, lactose cannot pull it off, "
            "and the three genes stay unread. "
            "When a human cross cannot be set up, draw the family. A filled symbol shows the character. "
            "A double line means the couple are relatives. A child affected, with parents clear, fits a recessive allele. "
            "Myotonic dystrophy is the dominant example. Haemophilia and colour blindness travel on X. "
            "Two sickle-cell carriers have a one in four chance of an affected child."
        ),
    },
    {
        "id": "18-change",
        "voice": "male",
        "kicker": "Reading",
        "title": "One changed letter, or one extra chromosome",
        "graphic": "mutation",
        "text": (
            "A point mutation changes one base pair. In sickle-cell anaemia, GAG becomes GUG. "
            "Glutamic acid at position six of the beta chain becomes valine. The chain is built, but it is wrong. "
            "That is qualitative. Thalassemia is quantitative. Too little alpha or beta chain is made. "
            "Alpha genes are on chromosome sixteen. The beta gene is on chromosome eleven. "
            "Sickle-cell anaemia is autosomal recessive, not X-linked. "
            "An extra chromosome twenty-one is Down syndrome. The single palm crease belongs there. "
            "Langdon Down described that syndrome, not Klinefelter syndrome. "
            "Klinefelter syndrome is X X Y. Development is mostly male, with some breast development, and the person is sterile. "
            "Turner syndrome is a single X. No cell plate after division adds a whole set. That is polyploidy, not aneuploidy. "
            "People match at ninety-nine point nine percent of bases. Fingerprinting compares repeats. "
            "The order is cut, separate, blot, probe, then the film. Chromosome one was finished last, and it has the most genes in that list."
        ),
    },
    {
        "id": "19-crowd",
        "voice": "female",
        "kicker": "Crowds",
        "title": "Count the copies in the whole crowd",
        "graphic": "hw",
        "text": (
            "Leave the single person. Count the alleles in the population. "
            "Let p be the fraction of allele A, and q the fraction of a. If nothing pushes, those fractions stay. "
            "The fraction of A A is p squared. The fraction of a a is q squared. The fraction of A a is two p q, not p q. "
            "If p is zero point four, q is zero point six. Then A A is zero point one six, A a is zero point four eight, "
            "and a a is zero point three six. A constant gene pool is the quiet baseline. It is not a push. "
            "Five things move the count. Migration carries alleles in or out. Drift is chance, strongest in a small group. "
            "The founder effect is drift at the start of a new group. Mutation writes a new letter. "
            "Recombination shuffles old letters. Natural selection means a heritable trait that leaves more offspring becomes more common."
        ),
    },
    {
        "id": "20-push",
        "voice": "male",
        "kicker": "Crowds",
        "title": "Why the count changes",
        "graphic": "select",
        "text": (
            "Selection can keep the middle, move the crowd off the old average, or keep both ends and lose the middle. "
            "Those are stabilising, directional, and disruptive. Fitness means more offspring, not bigger muscles. "
            "Darwin and Wallace saw small inherited differences. A neck stretched in one life is not passed on. "
            "Hugo de Vries argued for one large step, called saltation. His mutations are random and directionless. "
            "Same bones, different jobs, is homology, from divergent evolution. A bird wing and a whale flipper. "
            "Same job, different build, is analogy, from convergent evolution. Penguin and dolphin flippers. "
            "Insect wings and bird wings. Sweet potato and potato. "
            "Darwin's finches are adaptive radiation, not a human-made breed. "
            "Herbicide-resistant weeds, drug-resistant cells, and breeds of dog are human-made."
        ),
    },
    {
        "id": "21-time",
        "voice": "female",
        "kicker": "Crowds",
        "title": "The same idea across deep time",
        "graphic": "time",
        "text": (
            "The universe in this account is about thirteen point eight billion years old. "
            "Earth formed about four point five billion years ago. "
            "Miller sparked methane, hydrogen, ammonia, and water vapour at eight hundred degrees, and amino acids formed. "
            "The gas is methane, C H four, and ammonia, N H three, not the near misses that papers offer. "
            "Invertebrates were active near five hundred million years ago. Jawless fish near three hundred and fifty. "
            "Seaweeds near three hundred and twenty. Dinosaurs disappeared near sixty-five million years ago. "
            "Among our line, place habilis, then erectus, then Neanderthal, then Homo sapiens. "
            "Brains are about six hundred and fifty to eight hundred, then nine hundred, then fourteen hundred. "
            "Neanderthal used hides and buried the dead. Our species arose in Africa, not Australia. "
            "Haeckel said an embryo replays adult ancestors. von Baer showed that it does not. "
            "Fossils and homologous limbs remain the evidence. "
            "A mango seed still grows a mango, because it carries a copied ladder, inherited in pairs, "
            "usually unchanged, and sometimes changed in frequency across a crowd and across deep time."
        ),
    },
]


def words_of(text):
    return text.split()


def base(title, kicker, speaker):
    im = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, W, 8), fill=GREEN)
    d.text((48, 28), kicker.upper(), font=FONT_XS, fill=GREEN)
    d.text((48, 52), title, font=FONT_TITLE, fill=INK)
    label = "Female narrator" if speaker == "female" else "Male narrator"
    colour = CLAY if speaker == "female" else GREEN
    d.rounded_rectangle((980, 36, 1232, 78), radius=8, fill=colour)
    d.text((1000, 48), label, font=FONT_S, fill=WHITE)
    return im, d


def fade(p, a, b):
    return a + (b - a) * max(0.0, min(1.0, p))


def appear(p, start):
    return max(0.0, min(1.0, (p - start) / 0.18))


def draw_scene(kind, p, title, kicker, speaker):
    im, d = base(title, kicker, speaker)
    y0 = 140

    if kind == "title":
        d.text((48, 220), "Class 12  -  NCERT  -  medical entrance", font=FONT_H, fill=MUTED)
        d.text((48, 280), "Heredity, DNA, and the crowd of alleles.", font=FONT_TITLE, fill=INK)
        w = int(fade(p, 40, 900))
        d.rectangle((48, 360, 48 + w, 368), fill=GREEN)
    elif kind == "seed":
        d.ellipse((80, 250, 160, 330), outline=GREEN, width=4)
        d.text((98, 276), "seed", font=FONT_S, fill=INK)
        d.text((86, 348), "mango", font=FONT_XS, fill=MUTED)
        x2 = int(fade(p, 180, 360))
        d.line((170, 290, x2, 290), fill=GREEN, width=4)
        if p > 0.45:
            a = appear(p, 0.45)
            d.rectangle((400, 200, 470, 360), outline=GREEN, width=3)
            d.ellipse((410, 160, 460, 210), fill=GREEN_SOFT, outline=GREEN, width=3)
            d.text((390, 380), "mango tree", font=FONT_XS, fill=MUTED)
        if p > 0.72:
            d.ellipse((760, 250, 840, 330), outline=CLAY, width=4)
            d.text((778, 276), "seed", font=FONT_S, fill=INK)
            d.text((778, 348), "neem", font=FONT_XS, fill=MUTED)
            d.line((900, 250, 980, 330), fill=CLAY, width=5)
            d.line((980, 250, 900, 330), fill=CLAY, width=5)
            d.text((1000, 276), "not a mango", font=FONT_S, fill=CLAY)
    elif kind == "siblings":
        labels = ["taller", "middle", "different nose"]
        heights = [220, 140, 180]
        for i, (lab, h) in enumerate(zip(labels, heights)):
            a = appear(p, i * 0.2)
            x = 180 + i * 280
            hh = int(h * a)
            d.ellipse((x - 28, 200, x + 28, 256), outline=INK, width=3)
            d.line((x, 256, x, 256 + hh), fill=INK, width=4)
            d.text((x - 50, 520), lab, font=FONT_S, fill=MUTED)
        d.text((48, 600), "same kind, different details", font=FONT_H, fill=GREEN)
    elif kind == "paint":
        d.rounded_rectangle((80, 220, 520, 420), radius=12, outline=LINE, width=2, fill=WHITE)
        d.text((110, 250), "Red paint + white", font=FONT_H, fill=INK)
        d.text((110, 310), "The red does not come back.", font=FONT_S, fill=MUTED)
        if p > 0.4:
            d.rounded_rectangle((640, 220, 1160, 420), radius=12, outline=GREEN, width=3, fill=GREEN_SOFT)
            d.text((670, 250), "A recessive allele", font=FONT_H, fill=GREEN)
            d.text((670, 310), "Hidden, then returned unchanged.", font=FONT_S, fill=INK)
    elif kind == "copies":
        d.rounded_rectangle((120, 240, 320, 400), radius=12, outline=GREEN, width=3, fill=WHITE)
        d.text((190, 290), "T", font=FONT_TITLE, fill=GREEN)
        d.rounded_rectangle((360, 240, 560, 400), radius=12, outline=CLAY, width=3, fill=WHITE)
        d.text((430, 290), "t", font=FONT_TITLE, fill=CLAY)
        if p > 0.45:
            d.rounded_rectangle((760, 220, 1120, 460), radius=12, outline=INK, width=3, fill=WHITE)
            d.text((800, 260), "Child  Tt", font=FONT_H, fill=INK)
            d.text((800, 330), "Letters: genotype", font=FONT_S, fill=MUTED)
            d.text((800, 370), "Look: phenotype", font=FONT_S, fill=MUTED)
    elif kind == "dominance":
        d.text((80, 200), "TT tall   x   tt dwarf", font=FONT_H, fill=INK)
        if p > 0.35:
            d.rounded_rectangle((80, 300, 700, 480), radius=12, fill=GREEN_SOFT, outline=GREEN, width=3)
            d.text((110, 350), "Every F1 plant is Tt, and tall.", font=FONT_H, fill=GREEN)
            d.text((110, 410), "The dwarf copy is silent, not gone.", font=FONT_S, fill=INK)
    elif kind == "punnett":
        labels = [["TT tall", "Tt tall"], ["Tt tall", "tt dwarf"]]
        colours = [[GREEN, GREEN], [GREEN, CLAY]]
        d.text((80, 190), "Gametes T and t, from both sides", font=FONT_S, fill=MUTED)
        for r in range(2):
            for c in range(2):
                a = appear(p, 0.15 + (r * 2 + c) * 0.18)
                if a <= 0:
                    continue
                x, y = 120 + c * 280, 250 + r * 150
                d.rounded_rectangle((x, y, x + 240, y + 120), radius=10, outline=colours[r][c], width=3, fill=WHITE)
                d.text((x + 30, y + 40), labels[r][c], font=FONT_H, fill=colours[r][c])
        if p > 0.85:
            d.text((700, 320), "Look  3 : 1", font=FONT_H, fill=INK)
            d.text((700, 380), "Letters  1 : 2 : 1", font=FONT_H, fill=GREEN)
    elif kind == "test":
        d.rounded_rectangle((60, 220, 580, 460), radius=12, outline=GREEN, width=3, fill=WHITE)
        d.text((90, 260), "TT  x  tt", font=FONT_H, fill=GREEN)
        d.text((90, 330), "All children tall.", font=FONT_S, fill=INK)
        if p > 0.4:
            d.rounded_rectangle((660, 220, 1200, 460), radius=12, outline=CLAY, width=3, fill=WHITE)
            d.text((690, 260), "Tt  x  tt", font=FONT_H, fill=CLAY)
            d.text((690, 330), "About half tall, half dwarf.", font=FONT_S, fill=INK)
    elif kind == "dihybrid":
        cards = ["YR", "Yr", "yR", "yr"]
        for i, lab in enumerate(cards):
            if appear(p, i * 0.12) <= 0:
                continue
            x = 70 + i * 180
            d.rounded_rectangle((x, 200, x + 150, 320), radius=10, outline=GREEN, width=3, fill=WHITE)
            d.text((x + 40, 235), lab, font=FONT_H, fill=INK)
        if p > 0.6:
            d.text((70, 380), "9 yellow round", font=FONT_S, fill=GREEN)
            d.text((320, 380), "3 yellow wrinkled", font=FONT_S, fill=INK)
            d.text((640, 380), "3 green round", font=FONT_S, fill=INK)
            d.text((900, 380), "1 green wrinkled", font=FONT_S, fill=CLAY)
            d.text((70, 460), "3/16  =  18.75 percent", font=FONT_H, fill=GREEN)
    elif kind == "flowers":
        cols = [(180, 48, 48, "RR red"), (210, 120, 140, "Rr pink"), (245, 245, 245, "rr white")]
        for i, (r, g, b, lab) in enumerate(cols):
            if appear(p, i * 0.2) <= 0:
                continue
            x = 140 + i * 280
            d.ellipse((x, 200, x + 140, 340), fill=(r, g, b), outline=INK, width=3)
            d.text((x, 370), lab, font=FONT_H, fill=INK)
        if p > 0.75:
            d.text((80, 480), "ABO: dominance, co-dominance, and multiple alleles.", font=FONT_S, fill=GREEN)
            d.text((80, 530), "Starch shape versus grain size is pleiotropy.", font=FONT_S, fill=MUTED)
    elif kind == "chroms":
        d.rectangle((120, 220, 148, 420), fill=GREEN)
        shift = int(20 * math.sin(p * math.pi))
        d.rectangle((170, 260 + (0 if p < 0.5 else -20), 198, 400 + (0 if p < 0.5 else -20)), fill=GOLD)
        d.rectangle((420, 220, 448, 420), fill=GREEN)
        d.rectangle((470 + shift, 250, 498 + shift, 400), fill=CLAY)
        d.text((100, 460), "Pair one", font=FONT_S, fill=MUTED)
        d.text((400, 460), "A different partner", font=FONT_S, fill=MUTED)
        d.text((80, 540), "Close genes stick. One percent recombination is one map unit.", font=FONT_S, fill=GREEN)
    elif kind == "sex":
        d.rectangle((160, 200, 700, 460), outline=INK, width=2)
        d.line((160, 280, 700, 280), fill=INK, width=2)
        d.line((380, 200, 380, 460), fill=INK, width=2)
        d.text((400, 220), "Sperm X", font=FONT_S, fill=MUTED)
        d.text((540, 220), "Sperm Y", font=FONT_S, fill=MUTED)
        d.text((180, 330), "Egg X", font=FONT_S, fill=MUTED)
        if p > 0.3:
            d.text((420, 340), "XX girl", font=FONT_H, fill=GREEN)
        if p > 0.6:
            d.text((540, 340), "XY boy", font=FONT_H, fill=CLAY)
        d.text((80, 520), "The egg has no choice of sex chromosome. The sperm does.", font=FONT_S, fill=INK)
    elif kind == "helix":
        pairs = [("A", "T", False), ("T", "A", False), ("G", "C", True), ("C", "G", True), ("A", "T", False)]
        for i, (a, b, thick) in enumerate(pairs):
            if appear(p, i * 0.12) <= 0:
                continue
            y = 190 + i * 80
            d.text((180, y), a, font=FONT_H, fill=INK)
            col = CLAY if thick else GREEN
            d.line((250, y + 18, 250 + int(280 * appear(p, i * 0.12)), y + 18), fill=col, width=6 if thick else 3)
            d.text((560, y), b, font=FONT_H, fill=INK)
        d.text((760, 240), "A-T  two bonds", font=FONT_S, fill=GREEN)
        d.text((760, 300), "G-C  three bonds", font=FONT_S, fill=CLAY)
        d.text((760, 380), "Histones are positive.", font=FONT_S, fill=INK)
        d.text((760, 420), "DNA is negative.", font=FONT_S, fill=INK)
    elif kind == "proof":
        bits = [
            ("Griffith  1928", "Something transformed the cells."),
            ("Avery", "Only DNA could do it."),
            ("Hershey and Chase  1952", "Phosphorus entered. Sulfur stayed out."),
        ]
        for i, (h, s) in enumerate(bits):
            if appear(p, i * 0.25) <= 0:
                continue
            y = 190 + i * 140
            d.rounded_rectangle((80, y, 1100, y + 110), radius=10, outline=GREEN, width=3, fill=WHITE)
            d.text((110, y + 20), h, font=FONT_H, fill=GREEN)
            d.text((110, y + 64), s, font=FONT_S, fill=INK)
    elif kind == "repl":
        rows = [
            ("Start", "heavy / heavy"),
            ("1 generation", "all medium"),
            ("2 generations", "half medium, half light"),
        ]
        for i, (a, b) in enumerate(rows):
            if appear(p, i * 0.25) <= 0:
                continue
            y = 200 + i * 130
            d.text((80, y), a, font=FONT_S, fill=MUTED)
            d.rounded_rectangle((360, y - 10, 980, y + 70), radius=10, outline=GREEN, width=3, fill=WHITE)
            d.text((390, y + 16), b, font=FONT_H, fill=INK)
    elif kind == "dogma":
        labs = [("DNA", "ATG"), ("mRNA", "AUG"), ("protein", "Met")]
        for i, (h, s) in enumerate(labs):
            if appear(p, i * 0.22) <= 0:
                continue
            x = 80 + i * 380
            d.rounded_rectangle((x, 240, x + 280, 460), radius=12, outline=GREEN, width=3, fill=WHITE)
            d.text((x + 30, 300), h, font=FONT_TITLE, fill=GREEN)
            d.text((x + 30, 370), s, font=FONT_H, fill=INK)
            if i < 2 and p > 0.3 + i * 0.22:
                d.text((x + 290, 330), ">", font=FONT_TITLE, fill=GOLD)
    elif kind == "lac":
        d.rectangle((80, 300, 200, 360), outline=INK, width=2)
        d.text((115, 316), "i", font=FONT_H, fill=INK)
        d.rectangle((240, 300, 420, 360), outline=GREEN, width=2)
        d.text((270, 316), "operator", font=FONT_S, fill=GREEN)
        for i, lab in enumerate(["z", "y", "a"]):
            d.rectangle((450 + i * 90, 300, 520 + i * 90, 360), fill=GREEN_SOFT, outline=GREEN, width=2)
            d.text((470 + i * 90, 316), lab, font=FONT_H, fill=GREEN)
        lift = int(40 * math.sin(p * math.pi))
        d.rectangle((250, 200 - lift, 410, 250 - lift), fill=CLAY)
        d.text((270, 210 - lift), "repressor", font=FONT_S, fill=WHITE)
        d.text((80, 460), "The block lifts only while the inducer holds the repressor.", font=FONT_S, fill=MUTED)
    elif kind == "mutation":
        d.text((80, 190), "GAG   glutamic acid", font=FONT_H, fill=INK)
        if p > 0.35:
            d.text((80, 260), "GUG   valine at position 6", font=FONT_H, fill=CLAY)
        d.text((80, 360), "Extra 21    Down syndrome", font=FONT_S, fill=INK)
        d.text((80, 410), "XXY    Klinefelter", font=FONT_S, fill=INK)
        d.text((80, 460), "single X    Turner", font=FONT_S, fill=INK)
        d.text((700, 360), "Cut, separate, blot,", font=FONT_S, fill=GREEN)
        d.text((700, 410), "probe, then the film.", font=FONT_S, fill=GREEN)
    elif kind == "hw":
        p_al = 0.4 if p > 0.55 else 0.5
        q = 1 - p_al
        parts = [p_al * p_al, 2 * p_al * q, q * q]
        cols = [GREEN, (125, 154, 134), CLAY]
        labels = ["AA", "Aa", "aa"]
        x = 80
        for part, col, lab in zip(parts, cols, labels):
            wbar = int(1000 * part * appear(p, 0.1))
            d.rectangle((x, 280, x + max(wbar, 1), 360), fill=col)
            d.text((x + 8, 300), lab, font=FONT_S, fill=WHITE)
            x += wbar
        d.text((80, 420), "If p is 0.4:   AA 0.16    Aa 0.48    aa 0.36", font=FONT_H, fill=INK)
        d.text((80, 490), "Heterozygotes are 2pq, not pq.", font=FONT_S, fill=GREEN)
    elif kind == "select":
        # three curves as polylines revealed by p
        curves = [
            ("stabilising", [(40, 420), (90, 420), (140, 220), (190, 420), (240, 420)]),
            ("directional", [(420, 420), (500, 400), (580, 240), (660, 220)]),
            ("disruptive", [(760, 240), (820, 420), (880, 420), (960, 230)]),
        ]
        for i, (name, pts) in enumerate(curves):
            if appear(p, i * 0.25) <= 0:
                continue
            d.line(pts, fill=GREEN, width=4)
            d.text((pts[0][0], 470), name, font=FONT_S, fill=MUTED)
        d.text((80, 560), "Homology shares a build. Analogy shares a job.", font=FONT_S, fill=INK)
    elif kind == "time":
        d.line((60, 320, 60 + int(1160 * min(1, p / 0.7)), 320), fill=INK, width=4)
        marks = [
            (80, "Earth", "4.5 bya"),
            (280, "cells", "~2 bya"),
            (480, "animals", "0.5 bya"),
            (720, "dinosaurs end", "65 mya"),
            (980, "us", "Africa"),
        ]
        for i, (x, a, b) in enumerate(marks):
            if p < 0.15 + i * 0.12:
                continue
            d.ellipse((x - 8, 312, x + 8, 328), fill=GREEN)
            d.text((x - 40, 250), a, font=FONT_S, fill=INK)
            d.text((x - 40, 350), b, font=FONT_XS, fill=MUTED)
    else:
        d.text((80, 300), title, font=FONT_H, fill=INK)
    return im


def srt_time(seconds):
    ms = int(round(seconds * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def cues_from_boundaries(bounds):
    if not bounds:
        return []
    cues = []
    bucket = []
    for item in bounds:
        bucket.append(item)
        if len(bucket) >= 8:
            cues.append(bucket)
            bucket = []
    if bucket:
        cues.append(bucket)
    lines = []
    for i, bucket in enumerate(cues, 1):
        start = bucket[0]["offset"] / 10_000_000
        end = (bucket[-1]["offset"] + bucket[-1]["duration"]) / 10_000_000
        text = " ".join(part["text"] for part in bucket)
        lines.append(f"{i}\n{srt_time(start)} --> {srt_time(end)}\n{text}\n")
    return lines


async def synth(text, voice, rate, audio_path):
    communicate = edge_tts.Communicate(text, voice, rate=rate, boundary="WordBoundary")
    bounds = []
    audio = bytearray()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            audio.extend(chunk["data"])
        elif chunk["type"] == "WordBoundary":
            bounds.append(chunk)
    with open(audio_path, "wb") as handle:
        handle.write(audio)
    return bounds


def run(args):
    subprocess.run(args, check=True, cwd=ROOT)


def ffprobe_duration(path):
    proc = subprocess.run(
        [FFMPEG, "-i", path, "-f", "null", "-"],
        capture_output=True,
        cwd=ROOT,
    )
    text = (proc.stderr or b"").decode("utf-8", "replace")
    for line in text.splitlines():
        if "Duration:" in line:
            stamp = line.split("Duration:")[1].split(",")[0].strip()
            h, m, s = stamp.split(":")
            return int(h) * 3600 + int(m) * 60 + float(s)
    raise RuntimeError("no duration for " + path)


async def calibrate():
    sample = (
        "A mango seed grows a mango. It does not grow a neem tree. "
        "An elephant's baby is an elephant. That sameness is heredity. "
        "It means passed on from parents to young. What is passed on is not a tiny finished animal. "
        "Brothers and sisters are the same kind, and they are not copies. One may be taller. "
        "That difference is variation. People kept the seeds they liked."
    )
    n = len(sample.split())
    path = os.path.join(ROOT, "_cal.mp3")
    wav = os.path.join(ROOT, "_cal.wav")
    await synth(sample, FEMALE, "+0%", path)
    run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", "-i", path, wav])
    dur = ffprobe_duration(wav)
    wpm = n / (dur / 60)
    os.remove(path)
    os.remove(wav)
    pct = (160 / wpm - 1) * 100
    pct = max(-20, min(55, pct))
    print(f"prose wpm {wpm:.1f} on {n} words, using rate {pct:+.0f}%")
    return f"{pct:+.0f}%"


async def build():
    os.makedirs(ROOT, exist_ok=True)
    rate = await calibrate()
    clips = []
    total_words = 0
    total_seconds = 0
    for scene in SCENES:
        print("scene", scene["id"], flush=True)
        audio = os.path.join(ROOT, scene["id"] + ".mp3")
        voice = FEMALE if scene["voice"] == "female" else MALE
        bounds = await synth(scene["text"], voice, rate, audio)
        wav = os.path.join(ROOT, scene["id"] + ".wav")
        run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", "-i", audio, wav])
        srt_path = os.path.join(ROOT, scene["id"] + ".srt")
        with open(srt_path, "w", encoding="utf-8") as handle:
            handle.write("\n".join(cues_from_boundaries(bounds)))
        frame_dir = os.path.join(ROOT, "frames-" + scene["id"])
        os.makedirs(frame_dir, exist_ok=True)
        for i in range(ANIM_FRAMES):
            p = i / (ANIM_FRAMES - 1)
            im = draw_scene(scene["graphic"], p, scene["title"], scene["kicker"], scene["voice"])
            im.save(os.path.join(frame_dir, f"{i:03d}.png"))
        clip = os.path.join(ROOT, scene["id"] + ".mp4")
        style = "FontName=Segoe UI,FontSize=22,PrimaryColour=&H001C1915,OutlineColour=&H00F6F3EC,BorderStyle=3,Outline=3,Alignment=2,MarginV=28"
        run([
            FFMPEG, "-hide_banner", "-loglevel", "error", "-y",
            "-framerate", str(FPS),
            "-i", os.path.join(frame_dir, "%03d.png"),
            "-i", wav,
            "-vf", f"tpad=stop_mode=clone:stop=-1,subtitles={scene['id']}.srt:force_style='{style}'",
            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "22",
            "-c:a", "aac", "-ar", "44100", "-b:a", "160k",
            "-shortest",
            clip,
        ])
        speech = ffprobe_duration(wav)
        dur = ffprobe_duration(clip)
        nwords = len(words_of(scene["text"]))
        total_words += nwords
        total_seconds += dur
        print(f"  {nwords} words, speech {speech:.1f}s, clip {dur:.1f}s, {nwords / (speech / 60):.0f} wpm", flush=True)
        clips.append(clip)
    list_path = os.path.join(ROOT, "list.txt")
    with open(list_path, "w", encoding="utf-8") as handle:
        for clip in clips:
            handle.write("file '" + os.path.basename(clip).replace("'", "'\\''") + "'\n")
    final = os.path.join(ROOT, "genetics-lecture.mp4")
    run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", "list.txt", "-c", "copy", "-movflags", "+faststart", final])
    print(f"DONE {final}")
    print(f"overall {total_words} words, {total_seconds/60:.1f} min, {total_words / (total_seconds/60):.0f} wpm")


if __name__ == "__main__":
    asyncio.run(build())

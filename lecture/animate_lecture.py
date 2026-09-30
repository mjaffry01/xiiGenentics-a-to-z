"""Rebuild the lecture so each process plays before it is explained."""
import math
import os

import build_lecture as B

FPS = 8
LEAD = 2.8
FFMPEG = B.FFMPEG
ROOT = B.ROOT
W, H = 1280, 720
PAPER = (246, 243, 236)
INK = (28, 25, 21)
GREEN = (30, 77, 58)
SOFT = (229, 239, 233)
CLAY = (138, 61, 47)
GOLD = (196, 161, 90)
MUTED = (92, 86, 76)
WHITE = (255, 255, 255)
FONT_TITLE = B.FONT_TITLE
FONT_H = B.FONT_H
FONT_B = B.FONT_B
FONT_S = B.FONT_S
FONT_XS = B.FONT_XS


def clamp(v, a=0.0, b=1.0):
    return max(a, min(b, v))


def seg(t, a, b):
    if b <= a:
        return 1.0 if t >= b else 0.0
    return clamp((t - a) / (b - a))


def run(args):
    B.run(args)


def header(title, kicker, speaker, t):
    im = B.Image.new("RGB", (W, H), PAPER)
    d = B.ImageDraw.Draw(im)
    d.rectangle((0, 0, W, 8), fill=GREEN)
    d.text((48, 24), kicker.upper(), font=FONT_XS, fill=GREEN)
    d.text((48, 46), title, font=FONT_H, fill=INK)
    label = "Female narrator" if speaker == "female" else "Male narrator"
    colour = CLAY if speaker == "female" else GREEN
    d.rounded_rectangle((980, 28, 1232, 70), radius=8, fill=colour)
    d.text((1000, 40), label, font=FONT_S, fill=WHITE)
    if t < LEAD:
        d.text((48, 100), "Watch", font=FONT_B, fill=CLAY)
    return im, d


def plant(d, x, y, h, flower, label):
    h = max(8, int(h))
    d.line((x, y, x, y - h), fill=GREEN, width=5)
    d.ellipse((x - 18, y - h - 34, x + 18, y - h), fill=flower, outline=INK, width=2)
    d.text((x - 36, y + 8), label, font=FONT_XS, fill=INK)


def pollen(d, x1, y1, x2, y2, p):
    p = clamp(p)
    x = x1 + (x2 - x1) * p
    y = y1 + (y2 - y1) * p - 50 * math.sin(math.pi * p)
    d.ellipse((x - 7, y - 7, x + 7, y + 7), fill=GOLD, outline=INK)


def chip(d, x, y, formula, name=None):
    d.rounded_rectangle((x, y, x + 250, y + 78), radius=8, fill=WHITE, outline=GREEN, width=2)
    d.text((x + 14, y + 8), formula, font=FONT_H, fill=GREEN)
    if name:
        d.text((x + 14, y + 44), name, font=FONT_XS, fill=MUTED)


def draw_title(d, t):
    d.text((48, 220), "The picture moves first.", font=FONT_TITLE, fill=INK)
    w = int(40 + 900 * seg(t, 0.2, 2.2))
    d.rectangle((48, 300, 48 + w, 312), fill=GREEN)
    if t > 1.2:
        d.text((48, 340), "Then the voice names what you saw.", font=FONT_H, fill=MUTED)


def draw_seed(d, t):
    h = 20 + 160 * seg(t, 0.2, 1.6)
    plant(d, 220, 520, h, GREEN, "mango seed")
    if t > 1.5:
        plant(d, 520, 520, 180, GREEN, "mango tree")
    if t > 2.0:
        plant(d, 860, 520, 40, CLAY, "neem seed")
        d.line((820, 430, 900, 510), fill=CLAY, width=5)
        d.line((900, 430, 820, 510), fill=CLAY, width=5)


def draw_siblings(d, t):
    heights = [200, 120, 160]
    labels = ["taller", "middle", "different nose"]
    for i, (hh, lab) in enumerate(zip(heights, labels)):
        plant(d, 240 + i * 280, 540, hh * seg(t, 0.2 + i * 0.4, 1.2 + i * 0.4), GREEN, lab)


def draw_paint(d, t):
    d.rounded_rectangle((70, 200, 520, 420), radius=12, fill=(180, 60, 60) if t < 1.2 else (210, 140, 150), outline=INK, width=2)
    d.text((100, 280), "red + white" if t < 1.2 else "paint stays mixed", font=FONT_H, fill=WHITE)
    if t > 1.3:
        d.rounded_rectangle((640, 200, 1180, 420), radius=12, fill=WHITE, outline=GREEN, width=3)
        d.text((670, 250), "t  was hidden", font=FONT_H, fill=INK)
        d.text((670, 320), "t  returns whole", font=FONT_H, fill=GREEN)


def draw_copies(d, t):
    plant(d, 200, 480, 140, GREEN, "parent T")
    plant(d, 420, 480, 80, CLAY, "parent t")
    if t > 1.0:
        p = seg(t, 1.0, 2.2)
        plant(d, int(700 + 80 * p), 480, 120, GREEN, "child Tt")
    chip(d, 860, 180, "T  and  t", "one letter, one gene" if t > 1.4 else None)


def mendel(d, t, mode):
    plant(d, 180, 430, 170 * seg(t, 0.05, 0.7), GREEN, "TT tall")
    plant(d, 420, 430, 70 * seg(t, 0.05, 0.7), CLAY, "tt dwarf")
    if 0.7 < t < 2.0:
        pollen(d, 180, 250, 420, 340, seg(t, 0.7, 1.7))
    if t > 1.7 and mode == "f1":
        for i in range(4):
            plant(d, 700 + i * 120, 470, 130, GREEN, "Tt")
        d.text((700, 180), "the cross is done", font=FONT_H, fill=GREEN)
        d.text((700, 220), "every child is tall", font=FONT_S, fill=INK)
    if t > 1.7 and mode == "f2":
        looks = [(700, 150, GREEN, "TT"), (860, 150, GREEN, "Tt"), (1020, 150, GREEN, "Tt"), (860, 360, CLAY, "tt")]
        for i, (x, h, col, lab) in enumerate(looks):
            if t > 1.5 + i * 0.25:
                plant(d, x, 520, h, col, lab)
        d.text((80, 500), "3 tall, 1 dwarf", font=FONT_H, fill=INK)
    if t > 1.6 and mode == "test":
        plant(d, 760, 470, 140, GREEN, "tall ?")
        plant(d, 980, 470, 70, CLAY, "tt")
        if t > 2.1:
            plant(d, 700, 300, 100, GREEN, "tall")
            plant(d, 860, 300, 60, CLAY, "dwarf")
    if t > 1.5 and mode == "two":
        cards = ["YR", "Yr", "yR", "yr"]
        for i, lab in enumerate(cards):
            if t > 1.4 + i * 0.25:
                x = 680 + (i % 2) * 200
                y = 180 + (i // 2) * 120
                d.rounded_rectangle((x, y, x + 160, y + 90), radius=8, fill=WHITE, outline=GREEN, width=2)
                d.text((x + 40, y + 28), lab, font=FONT_H, fill=INK)


def draw_flowers(d, t):
    plant(d, 160, 460, 120, (180, 40, 40), "RR red")
    plant(d, 360, 460, 120, WHITE, "rr white")
    if 0.6 < t < 1.8:
        pollen(d, 160, 320, 360, 330, seg(t, 0.6, 1.6))
    if t > 1.7:
        plant(d, 620, 460, 130, (220, 130, 150), "Rr pink")
    if t > 2.2:
        chip(d, 860, 180, "IA   IB   i", "three alleles, two per person")


def draw_chroms(d, t):
    # Crossing over plays before the voice names it.
    y = 280
    slide = int(80 * seg(t, 0.3, 1.1))
    swap = seg(t, 1.2, 2.0)
    d.rectangle((120, y, 120 + 220, y + 28), fill=GREEN)
    d.rectangle((120, y + 40, 120 + 220, y + 68), fill=GOLD)
    d.rectangle((120 + slide, y + 120, 340 + slide, y + 148), fill=GREEN if swap < 0.5 else CLAY)
    d.rectangle((120 + slide, y + 160, 340 + slide, y + 188), fill=CLAY if swap < 0.5 else GREEN)
    if 0.9 < t < 1.8:
        d.line((230, y + 68, 250 + slide, y + 120), fill=INK, width=3)
        d.line((250, y + 40, 230 + slide, y + 148), fill=INK, width=3)
    if t > 2.0:
        d.text((420, 200), "crossing over", font=FONT_H, fill=CLAY)
        d.text((420, 250), "ends have swapped", font=FONT_S, fill=INK)
        d.text((420, 360), "1% recombination", font=FONT_H, fill=GREEN)
        d.text((420, 410), "= 1 map unit", font=FONT_S, fill=MUTED)


def draw_sex(d, t):
    d.ellipse((160, 300, 280, 420), outline=GREEN, width=4)
    d.text((190, 345), "egg X", font=FONT_H, fill=GREEN)
    p = seg(t, 0.4, 1.8)
    sx = int(700 - 300 * p)
    d.ellipse((sx, 180, sx + 70, 250), fill=SOFT, outline=GREEN, width=3)
    d.text((sx + 18, 200), "X", font=FONT_H, fill=GREEN)
    yx = int(760 - 340 * min(1, p * 1.05))
    d.ellipse((yx, 430, yx + 70, 500), fill=(248, 235, 230), outline=CLAY, width=3)
    d.text((yx + 18, 450), "Y", font=FONT_H, fill=CLAY)
    if t > 2.0:
        d.text((420, 200), "Y sperm arrived", font=FONT_H, fill=CLAY)
        d.text((420, 250), "child is XY", font=FONT_S, fill=INK)


def draw_helix(d, t):
    # Formulas appear before the names are spoken.
    if t > 0.15:
        chip(d, 40, 150, "C5H5N5", "adenine" if t > 1.1 else None)
    if t > 0.35:
        chip(d, 310, 150, "C5H6N2O2", "thymine" if t > 1.3 else None)
    if t > 0.7:
        d.line((290, 185, 310, 185), fill=GREEN, width=4)
        d.text((250, 120), "two bonds", font=FONT_XS, fill=GREEN)
    if t > 0.9:
        chip(d, 620, 150, "C5H5N5O", "guanine" if t > 1.5 else None)
    if t > 1.05:
        chip(d, 900, 150, "C4H5N3O", "cytosine" if t > 1.7 else None)
    if t > 1.4:
        d.line((870, 185, 900, 185), fill=CLAY, width=6)
        d.text((860, 120), "three bonds", font=FONT_XS, fill=CLAY)
    if t > 2.0:
        chip(d, 40, 360, "C5H10O5", "ribose, in RNA")
        chip(d, 320, 360, "C5H10O4", "deoxyribose, in DNA")
    pairs = [("A", "T"), ("T", "A"), ("G", "C"), ("C", "G")]
    for i, (a, b) in enumerate(pairs):
        if t < 2.2:
            continue
        y = 480 + i * 36
        d.text((700, y), a, font=FONT_S, fill=INK)
        d.line((740, y + 12, 740 + int(120 * seg(t, 2.2 + i * 0.1, 2.6 + i * 0.1)), y + 12), fill=GREEN, width=3)
        d.text((880, y), b, font=FONT_S, fill=INK)


def draw_proof(d, t):
    d.ellipse((80, 220, 200, 340), outline=INK, width=3)
    d.text((100, 265), "cell", font=FONT_S, fill=INK)
    if t > 0.3:
        chip(d, 280, 160, "P", "phosphorus, in DNA" if t > 1.2 else "in the entering strand")
    if t > 0.5:
        chip(d, 560, 160, "S", "sulfur, in protein" if t > 1.4 else "stays outside")
    p = seg(t, 0.6, 1.8)
    d.line((200, 280, 200 + int(220 * p), 280), fill=GREEN, width=6)
    if t > 1.8:
        d.text((80, 400), "DNA entered. Protein did not.", font=FONT_H, fill=GREEN)
    if t > 2.2:
        d.text((80, 460), "Griffith saw the change. Hershey and Chase named the molecule.", font=FONT_S, fill=MUTED)


def draw_repl(d, t):
    d.line((80, 250, 80 + int(400 * seg(t, 0.2, 1.0)), 250), fill=GREEN, width=6)
    d.line((80, 280, 80 + int(400 * seg(t, 0.2, 1.0)), 280), fill=CLAY, width=6)
    if t > 1.0:
        gap = int(80 * seg(t, 1.0, 1.8))
        d.line((80, 250 - gap // 3, 480, 250 - gap), fill=GREEN, width=4)
        d.line((80, 280 + gap // 3, 300, 280 + gap), fill=CLAY, width=4)
        d.line((340, 300 + gap, 480, 300 + gap), fill=GOLD, width=4)
        d.text((520, 220), "one old side kept", font=FONT_S, fill=GREEN)
        d.text((520, 320), "Okazaki pieces", font=FONT_S, fill=GOLD)
    if t > 2.2:
        d.text((80, 460), "heavy, then all medium, then half light", font=FONT_H, fill=INK)


def draw_dogma(d, t):
    if t > 0.2:
        chip(d, 40, 160, "AUG", "start" if t < 1.3 else "methionine")
    if t > 1.2:
        chip(d, 320, 160, "C5H11NO2S", "methionine")
    if t > 1.6:
        chip(d, 620, 160, "UAA  UAG  UGA", "stop")
    if t > 0.8:
        d.rounded_rectangle((40, 320, 300, 430), radius=8, outline=GREEN, width=3, fill=WHITE)
        d.text((60, 355), "DNA   ATG", font=FONT_H, fill=INK)
    if t > 1.4:
        d.text((310, 355), ">", font=FONT_TITLE, fill=GOLD)
        d.rounded_rectangle((360, 320, 680, 430), radius=8, outline=GREEN, width=3, fill=WHITE)
        d.text((380, 355), "RNA   AUG", font=FONT_H, fill=GREEN)
    if t > 2.0:
        d.text((690, 355), ">", font=FONT_TITLE, fill=GOLD)
        d.rounded_rectangle((740, 320, 1180, 430), radius=8, outline=CLAY, width=3, fill=WHITE)
        d.text((760, 355), "protein", font=FONT_H, fill=CLAY)


def draw_lac(d, t):
    if t > 0.15:
        chip(d, 40, 140, "C12H22O11", "lactose" if t > 1.0 else None)
    if t > 1.1:
        chip(d, 320, 140, "C6H12O6", "glucose and galactose" if t > 1.6 else "the two sugars")
    lift = int(50 * seg(t, 0.8, 1.8))
    d.rectangle((40, 420, 160, 470), outline=INK, width=2)
    d.text((80, 432), "i", font=FONT_H, fill=INK)
    d.rectangle((200, 420, 380, 470), outline=GREEN, width=2)
    d.text((230, 432), "operator", font=FONT_S, fill=GREEN)
    for i, lab in enumerate(["z", "y", "a"]):
        d.rectangle((420 + i * 90, 420, 490 + i * 90, 470), fill=SOFT, outline=GREEN)
        d.text((440 + i * 90, 432), lab, font=FONT_H, fill=GREEN)
    d.rectangle((210, 340 - lift, 370, 390 - lift), fill=CLAY)
    d.text((230, 352 - lift), "repressor", font=FONT_S, fill=WHITE)
    if t > 1.8:
        d.text((40, 520), "lactose has pulled the block off", font=FONT_S, fill=GREEN)


def draw_mutation(d, t):
    if t > 0.15:
        chip(d, 40, 150, "C5H9NO4", "glutamic acid" if t > 1.0 else None)
    if t > 0.4:
        chip(d, 320, 150, "C5H11NO2", "valine" if t > 1.2 else None)
    letters = "GAG" if t < 1.5 else "GUG"
    d.text((640, 170), letters, font=FONT_TITLE, fill=CLAY if t >= 1.5 else INK)
    d.text((640, 230), "codon" if t < 1.5 else "one letter changed", font=FONT_S, fill=MUTED)
    if t > 2.0:
        d.text((40, 320), "position 6 of the beta chain", font=FONT_H, fill=INK)
        d.text((40, 380), "extra chromosome 21 is a different kind of change", font=FONT_S, fill=MUTED)
        for i, lab in enumerate(["+21", "XXY", "X"]):
            d.rounded_rectangle((40 + i * 200, 440, 210 + i * 200, 520), radius=8, outline=GREEN, width=2, fill=WHITE)
            d.text((70 + i * 200, 462), lab, font=FONT_H, fill=GREEN)


def draw_hw(d, t):
    p = 0.5 if t < 1.5 else 0.4
    q = 1 - p
    parts = [p * p, 2 * p * q, q * q]
    cols = [GREEN, (125, 154, 134), CLAY]
    labels = ["AA  p2", "Aa  2pq", "aa  q2"]
    grow = seg(t, 0.3, 1.6)
    x = 80
    for part, col, lab in zip(parts, cols, labels):
        wbar = int(1000 * part * grow)
        d.rectangle((x, 240, x + max(wbar, 1), 340), fill=col)
        if wbar > 80:
            d.text((x + 8, 270), lab, font=FONT_S, fill=WHITE)
        x += wbar
    if t > 1.6:
        d.text((80, 400), "p = 0.4    AA 0.16    Aa 0.48    aa 0.36", font=FONT_H, fill=INK)


def draw_select(d, t):
    curves = [
        [(80, 420), (140, 420), (200, 220), (260, 420), (320, 420)],
        [(460, 420), (540, 380), (620, 240), (700, 210)],
        [(820, 230), (900, 420), (980, 420), (1080, 220)],
    ]
    names = ["stabilising", "directional", "disruptive"]
    for i, (pts, name) in enumerate(zip(curves, names)):
        if t > 0.3 + i * 0.6:
            d.line(pts, fill=GREEN, width=4)
            d.text((pts[0][0], 460), name, font=FONT_S, fill=MUTED)
    if t > 2.2:
        d.text((80, 540), "shared bones: homology. Shared job: analogy.", font=FONT_S, fill=INK)


def draw_time(d, t):
    if t > 0.1:
        chip(d, 40, 140, "CH4", "methane" if t > 1.2 else None)
    if t > 0.35:
        chip(d, 310, 140, "NH3", "ammonia" if t > 1.35 else None)
    if t > 0.55:
        chip(d, 580, 140, "H2", "hydrogen" if t > 1.5 else None)
    if t > 0.75:
        chip(d, 850, 140, "H2O", "water" if t > 1.65 else None)
    if t > 1.8:
        d.text((40, 250), "spark  ->  amino acids", font=FONT_H, fill=CLAY)
    length = int(1100 * seg(t, 0.4, 2.4))
    d.line((60, 430, 60 + length, 430), fill=INK, width=4)
    marks = [(80, "Earth"), (300, "cells"), (520, "animals"), (760, "65 mya"), (980, "Africa")]
    for i, (x, lab) in enumerate(marks):
        if t > 0.8 + i * 0.3 and length > x - 60:
            d.ellipse((x - 6, 422, x + 6, 438), fill=GREEN)
            d.text((x - 30, 450), lab, font=FONT_XS, fill=INK)


DRAW = {
    "title": lambda d, t: draw_title(d, t),
    "seed": lambda d, t: draw_seed(d, t),
    "siblings": lambda d, t: draw_siblings(d, t),
    "paint": lambda d, t: draw_paint(d, t),
    "copies": lambda d, t: draw_copies(d, t),
    "dominance": lambda d, t: mendel(d, t, "f1"),
    "punnett": lambda d, t: mendel(d, t, "f2"),
    "test": lambda d, t: mendel(d, t, "test"),
    "dihybrid": lambda d, t: mendel(d, t, "two"),
    "flowers": lambda d, t: draw_flowers(d, t),
    "chroms": lambda d, t: draw_chroms(d, t),
    "sex": lambda d, t: draw_sex(d, t),
    "helix": lambda d, t: draw_helix(d, t),
    "proof": lambda d, t: draw_proof(d, t),
    "repl": lambda d, t: draw_repl(d, t),
    "dogma": lambda d, t: draw_dogma(d, t),
    "lac": lambda d, t: draw_lac(d, t),
    "mutation": lambda d, t: draw_mutation(d, t),
    "hw": lambda d, t: draw_hw(d, t),
    "select": lambda d, t: draw_select(d, t),
    "time": lambda d, t: draw_time(d, t),
}


def parse_stamp(stamp):
    hms, ms = stamp.split(",")
    h, m, s = hms.split(":")
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000


def format_stamp(seconds):
    if seconds < 0:
        seconds = 0
    ms = int(round(seconds * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def shift_srt(src, dst, lead):
    lines = open(src, encoding="utf-8").read().splitlines()
    out = []
    for line in lines:
        if " --> " in line:
            a, b = line.split(" --> ")
            out.append(format_stamp(parse_stamp(a) + lead) + " --> " + format_stamp(parse_stamp(b) + lead))
        else:
            out.append(line)
    with open(dst, "w", encoding="utf-8") as handle:
        handle.write("\n".join(out) + "\n")


def build():
    chapters = []
    cursor = 0.0
    labels = {
        "01-open": ("Opening", "same-kind"),
        "02-seed": ("A mango seed", "same-kind"),
        "03-vary": ("Same family, not copies", "not-copies"),
        "04-gene": ("The message is not paint", "message"),
        "05-copies": ("Two copies", "two-copies"),
        "06-loud": ("The cross", "louder"),
        "07-return": ("The quiet copy returns", "returns"),
        "08-test": ("The test cross", "test"),
        "09-two": ("Two characters", "sixteenths"),
        "10-except": ("When neither copy simply wins", "not-louder"),
        "11-chrom": ("Crossing over", "chroms" and "linked"),
        "12-sex": ("Who decides the sex", "sex"),
        "13-dna": ("Four letters", "ladder"),
        "14-proof": ("Three experiments", "proof"),
        "15-copy": ("The ladder copies", "copy"),
        "16-read": ("Reading a protein", "read"),
        "17-lac": ("A chapter can stay shut", "shut"),
        "18-change": ("A changed letter", "change"),
        "19-crowd": ("Count the crowd", "crowd"),
        "20-push": ("Why the count changes", "pushes"),
        "21-time": ("Deep time", "long-story"),
    }
    # fix the accidental tuple for chroms
    labels["11-chrom"] = ("Crossing over", "linked")
    clips = []
    style = "FontName=Segoe UI,FontSize=22,PrimaryColour=&H001C1915,OutlineColour=&H00F6F3EC,BorderStyle=3,Outline=3,Alignment=2,MarginV=28"
    for scene in B.SCENES:
        print("animate", scene["id"], flush=True)
        wav = os.path.join(ROOT, scene["id"] + ".wav")
        speech = B.ffprobe_duration(wav)
        total = LEAD + speech
        frames = max(FPS, int(round(total * FPS)))
        frame_dir = os.path.join(ROOT, "mov-" + scene["id"])
        os.makedirs(frame_dir, exist_ok=True)
        painter = DRAW[scene["graphic"]]
        for i in range(frames):
            t = i / FPS
            im, d = header(scene["title"], scene["kicker"], scene["voice"], t)
            painter(d, t)
            im.save(os.path.join(frame_dir, f"{i:04d}.jpg"), quality=85)
        shifted = os.path.join(ROOT, scene["id"] + ".shifted.srt")
        shift_srt(os.path.join(ROOT, scene["id"] + ".srt"), shifted, LEAD)
        clip = os.path.join(ROOT, "mov-" + scene["id"] + ".mp4")
        run([
            FFMPEG, "-hide_banner", "-loglevel", "error", "-y",
            "-framerate", str(FPS), "-i", os.path.join(frame_dir, "%04d.jpg"),
            "-itsoffset", str(LEAD), "-i", wav,
            "-vf", f"subtitles={scene['id']}.shifted.srt:force_style='{style}'",
            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", "22",
            "-c:a", "aac", "-ar", "44100", "-b:a", "160k",
            "-shortest", clip,
        ])
        dur = B.ffprobe_duration(clip)
        label, lesson = labels[scene["id"]]
        chapters.append((round(cursor), label, lesson))
        cursor += dur
        clips.append(clip)
        print(f"  start was previous, clip {dur:.1f}s", flush=True)
    list_path = os.path.join(ROOT, "mov-list.txt")
    with open(list_path, "w", encoding="utf-8") as handle:
        for clip in clips:
            handle.write("file '" + os.path.basename(clip) + "'\n")
    final = os.path.join(ROOT, "genetics-lecture.mp4")
    run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", "mov-list.txt", "-c", "copy", final])
    js = os.path.join(ROOT, "..", "site", "chapter-times.js")
    with open(js, "w", encoding="utf-8") as handle:
        handle.write("const CHAPTERS = [\n")
        for seconds, label, lesson in chapters:
            handle.write(f'  [{seconds}, "{label}", "{lesson}"],\n')
        handle.write("];\n")
    print("DONE", final, "seconds", round(cursor))


if __name__ == "__main__":
    build()

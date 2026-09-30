const CODON = {
  UUU: "Phe", UUC: "Phe", UUA: "Leu", UUG: "Leu",
  UCU: "Ser", UCC: "Ser", UCA: "Ser", UCG: "Ser",
  UAU: "Tyr", UAC: "Tyr", UAA: "Stop", UAG: "Stop",
  UGU: "Cys", UGC: "Cys", UGA: "Stop", UGG: "Trp",
  CUU: "Leu", CUC: "Leu", CUA: "Leu", CUG: "Leu",
  CCU: "Pro", CCC: "Pro", CCA: "Pro", CCG: "Pro",
  CAU: "His", CAC: "His", CAA: "Gln", CAG: "Gln",
  CGU: "Arg", CGC: "Arg", CGA: "Arg", CGG: "Arg",
  AUU: "Ile", AUC: "Ile", AUA: "Ile", AUG: "Met, and start",
  ACU: "Thr", ACC: "Thr", ACA: "Thr", ACG: "Thr",
  AAU: "Asn", AAC: "Asn", AAA: "Lys", AAG: "Lys",
  AGU: "Ser", AGC: "Ser", AGA: "Arg", AGG: "Arg",
  GUU: "Val", GUC: "Val", GUA: "Val", GUG: "Val",
  GCU: "Ala", GCC: "Ala", GCA: "Ala", GCG: "Ala",
  GAU: "Asp", GAC: "Asp", GAA: "Glu", GAG: "Glu",
  GGU: "Gly", GGC: "Gly", GGA: "Gly", GGG: "Gly"
};

const DIAGRAMS = {
  kind() {
    return `<svg viewBox="0 0 640 220" role="img">
      <g font-family="Palatino, Georgia, serif" font-size="16" fill="#1c1915">
        <g class="rise">
          <circle cx="90" cy="90" r="28" fill="#fbfaf7" stroke="#1e4d3a" stroke-width="2"/>
          <text x="90" y="95" text-anchor="middle">seed</text>
          <text x="90" y="150" text-anchor="middle" font-size="14" fill="#5c564c">mango</text>
        </g>
        <line class="draw d1" x1="130" y1="90" x2="200" y2="90" stroke="#1e4d3a" stroke-width="2"/>
        <g class="rise d2">
          <rect x="220" y="48" width="70" height="100" fill="none" stroke="#1e4d3a" stroke-width="2"/>
          <circle cx="255" cy="40" r="18" fill="#e5efe9" stroke="#1e4d3a"/>
          <text x="255" y="175" text-anchor="middle">mango tree</text>
        </g>
        <g class="rise d3">
          <circle cx="430" cy="90" r="28" fill="#fbfaf7" stroke="#8a3d2f" stroke-width="2"/>
          <text x="430" y="95" text-anchor="middle">seed</text>
          <text x="430" y="150" text-anchor="middle" font-size="14" fill="#5c564c">neem</text>
        </g>
        <g class="rise d4">
          <line x1="520" y1="78" x2="548" y2="106" stroke="#8a3d2f" stroke-width="2"/>
          <line x1="548" y1="78" x2="520" y2="106" stroke="#8a3d2f" stroke-width="2"/>
          <text x="560" y="95" font-size="14" fill="#8a3d2f">not a mango</text>
        </g>
      </g>
    </svg>`;
  },
  siblings() {
    return `<svg viewBox="0 0 640 200" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="14" fill="#1c1915">
        ${[80, 250, 420].map((x, i) => {
          const h = [70, 110, 88][i];
          return `<circle cx="${x}" cy="70" r="22" fill="#fbfaf7" stroke="#1c1915"/>
            <line x1="${x}" y1="92" x2="${x}" y2="${92 + h}" stroke="#1c1915" stroke-width="2"/>
            <text x="${x}" y="${180}" text-anchor="middle" fill="#5c564c">${["taller", "shorter", "different nose"][i]}</text>`;
        }).join("")}
        <text x="560" y="78" fill="#1e4d3a">same kind</text>
        <text x="560" y="100" fill="#8a3d2f">not copies</text>
      </g>
    </svg>`;
  },
  message() {
    return `<div class="cards">
      <div class="card"><b>Red paint + white</b><span>Becomes pink, and the red does not come back.</span></div>
      <div class="card"><b>A recessive allele</b><span>Can be hidden for one generation and return unchanged.</span></div>
    </div>`;
  },
  copies() {
    return `<div class="gen-row"><div class="gen-label">Parent</div><div class="card"><b>T</b><span>one copy</span></div><div class="card"><b>t</b><span>other parent</span></div></div>
      <div class="gen-row"><div class="gen-label">Child</div><div class="card"><b>Tt</b><span>genotype, the letters</span></div><div class="card"><b>tall</b><span>phenotype, the look</span></div></div>`;
  },
  dominance() {
    return `<div class="gen-row"><div class="gen-label">Parents</div><div class="card"><b>TT tall</b><span>true-breeding</span></div><div class="card"><b>tt dwarf</b><span>true-breeding</span></div></div>
      <div class="gen-row"><div class="gen-label">F1</div><div class="card"><b>Tt tall</b><span>every plant. Dwarf is silent, not gone.</span></div></div>`;
  },
  punnett() {
    return `<table class="grid-fig">
      <tr><th></th><th>T</th><th>t</th></tr>
      <tr><th>T</th><td class="rise d1">TT tall</td><td class="rise d2">Tt tall</td></tr>
      <tr><th>t</th><td class="rise d3">Tt tall</td><td class="rise d4">tt dwarf</td></tr>
    </table>
    <p class="why rise d5">Looks: 3 tall : 1 dwarf. Letters: 1 TT : 2 Tt : 1 tt.</p>`;
  },
  testcross() {
    return `<div class="cards">
      <div class="card"><b>TT x tt</b><span>All children tall. The unknown was TT.</span></div>
      <div class="card"><b>Tt x tt</b><span>About half tall, half dwarf. The unknown was Tt.</span></div>
    </div>`;
  },
  dihybrid() {
    return `<div class="cards">
      <div class="card"><b>YR</b><span>1/4 of gametes</span></div>
      <div class="card"><b>Yr</b><span>1/4</span></div>
      <div class="card"><b>yR</b><span>1/4</span></div>
      <div class="card"><b>yr</b><span>1/4</span></div>
    </div>
    <p class="why">Meetings: 9 yellow round : 3 yellow wrinkled : 3 green round : 1 green wrinkled.</p>`;
  },
  both() {
    return `<div class="cards">
      <div class="card"><b>RR</b><span>red snapdragon</span></div>
      <div class="card"><b>Rr</b><span>pink, its own look</span></div>
      <div class="card"><b>rr</b><span>white</span></div>
    </div>
    <div class="widget" data-blood>
      <label>Allele from parent 1
        <select data-a>
          <option>IA</option><option>IB</option><option selected>i</option>
        </select>
      </label>
      <label>Allele from parent 2
        <select data-b>
          <option>IA</option><option>IB</option><option selected>i</option>
        </select>
      </label>
      <p class="result" data-out></p>
    </div>`;
  },
  poly() {
    const shades = ["#f4e6d4", "#e0c2a2", "#c4966a", "#a56b3c", "#7a4a24", "#4a2c14", "#24160c"];
    return `<div class="cards">${["aabbcc", "Aabbcc", "AaBbcc", "AaBbCc", "AABbCc", "AABBCc", "AABBCC"].map((g, i) =>
      `<div class="card" style="background:${shades[i]}; color:${i > 3 ? "#fff" : "#1c1915"}"><b>${g}</b><span style="color:inherit">${i} dominant</span></div>`
    ).join("")}</div>
    <p class="why">One gene, the other way: a fault in phenylalanine hydroxylase changes several characters at once.</p>`;
  },
  chroms() {
    return `<svg viewBox="0 0 640 220" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="13" fill="#1c1915">
        <text x="40" y="28">Possibility 1</text>
        <rect x="40" y="50" width="16" height="70" fill="#1e4d3a"/>
        <rect x="62" y="70" width="16" height="40" fill="#c4a15a"/>
        <text x="40" y="140">these two go together</text>
        <text x="250" y="28">Possibility 2</text>
        <rect x="250" y="50" width="16" height="70" fill="#1e4d3a"/>
        <rect class="slide-pair" x="272" y="60" width="16" height="54" fill="#8a3d2f"/>
        <text x="250" y="140">a different partner</text>
        <text x="430" y="90" fill="#5c564c">Different pairs line up</text>
        <text x="430" y="112" fill="#5c564c">independently in meiosis.</text>
      </g>
    </svg>`;
  },
  link() {
    return `<div class="cards">
      <div class="card"><b>white and yellow</b><span>1.3% recombination. Very close.</span></div>
      <div class="card"><b>white and miniature wing</b><span>37.2% recombination. Farther apart, same chromosome.</span></div>
      <div class="card"><b>different chromosomes</b><span>Would shuffle toward 9:3:3:1.</span></div>
    </div>`;
  },
  sex() {
    return `<table class="grid-fig">
      <tr><th></th><th>Sperm X</th><th>Sperm Y</th></tr>
      <tr><th>Egg X</th><td>XX girl</td><td>XY boy</td></tr>
    </table>
    <p class="why">The egg has no choice of sex chromosome. The sperm does.</p>`;
  },
  helix() {
    return `<svg viewBox="0 0 640 200" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="16" fill="#1c1915">
        ${[["A", "T"], ["T", "A"], ["G", "C"], ["C", "G"], ["A", "T"]].map((pair, i) => {
          const y = 30 + i * 32;
          return `<g class="rise d${i + 1}">
            <text x="180" y="${y}" text-anchor="middle">${pair[0]}</text>
            <line class="bond" style="animation-delay:${0.2 + i * 0.18}s" x1="200" y1="${y - 5}" x2="280" y2="${y - 5}" stroke="${pair[0] === "G" || pair[0] === "C" ? "#8a3d2f" : "#1e4d3a"}" stroke-width="${pair[0] === "G" || pair[0] === "C" ? 3 : 1.5}"/>
            <text x="310" y="${y}" text-anchor="middle">${pair[1]}</text>
          </g>`;
        }).join("")}
        <text x="420" y="70" fill="#1e4d3a">A-T, two bonds</text>
        <text x="420" y="98" fill="#8a3d2f">G-C, three bonds</text>
        <text x="420" y="130" fill="#5c564c">rails run opposite ways</text>
      </g>
    </svg>`;
  },
  proof() {
    return `<div class="cards">
      <div class="card"><b>Griffith, 1928</b><span>Dead smooth cells changed live rough cells.</span></div>
      <div class="card"><b>Avery and colleagues</b><span>Only DNA could do it. Cutting DNA stopped it.</span></div>
      <div class="card"><b>Hershey and Chase, 1952</b><span>Phosphorus in DNA entered. Sulfur in protein stayed out.</span></div>
    </div>`;
  },
  repl() {
    return `<div class="gen-row rise"><div class="gen-label">Start</div><div class="card"><b>heavy / heavy</b><span>both strands old, grown on heavy nitrogen</span></div></div>
      <div class="gen-row rise d2"><div class="gen-label">1 generation</div><div class="card"><b>heavy / light</b><span>all medium</span></div></div>
      <div class="gen-row rise d4"><div class="gen-label">2 generations</div><div class="card"><b>half medium</b><span>heavy / light</span></div><div class="card"><b>half light</b><span>light / light</span></div></div>`;
  },
  dogma() {
    return `<div class="gen-row"><div class="card rise"><b>DNA</b><span>coding strand ATG</span></div><span class="arrow flow d2">to</span><div class="card rise d3"><b>mRNA</b><span>AUG, U for T</span></div><span class="arrow flow d4">to</span><div class="card rise d5"><b>protein</b><span>methionine, then the next codon</span></div></div>
      <p class="why">tRNA matches the codon at one end and carries the amino acid at the other. AUG starts. UAA, UAG, and UGA stop.</p>`;
  },
  lac() {
    return `<svg viewBox="0 0 640 150" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="13" fill="#1c1915">
        <rect x="40" y="58" width="70" height="28" fill="#efeae1" stroke="#1c1915"/>
        <text x="75" y="77" text-anchor="middle">i</text>
        <rect x="140" y="58" width="70" height="28" fill="#fff" stroke="#1e4d3a"/>
        <text x="175" y="77" text-anchor="middle">operator</text>
        <rect x="230" y="58" width="50" height="28" fill="#e5efe9" stroke="#1e4d3a"/>
        <text x="255" y="77" text-anchor="middle">z</text>
        <rect x="290" y="58" width="50" height="28" fill="#e5efe9" stroke="#1e4d3a"/>
        <text x="315" y="77" text-anchor="middle">y</text>
        <rect x="350" y="58" width="50" height="28" fill="#e5efe9" stroke="#1e4d3a"/>
        <text x="375" y="77" text-anchor="middle">a</text>
        <g class="lift">
          <rect x="145" y="28" width="60" height="22" fill="#8a3d2f"/>
          <text x="175" y="44" text-anchor="middle" fill="#fff">repressor</text>
        </g>
        <text x="40" y="120" fill="#5c564c">The block lifts only while the inducer holds the repressor. Then it sits down again.</text>
      </g>
    </svg>`;
  },
  pedigree() {
    return `<svg viewBox="0 0 640 210" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="13" fill="#1c1915">
        <text x="40" y="24">Recessive: parents clear, a child filled</text>
        <circle cx="70" cy="60" r="12" fill="#fff" stroke="#1c1915"/>
        <rect x="110" y="48" width="24" height="24" fill="#fff" stroke="#1c1915"/>
        <line x1="82" y1="60" x2="110" y2="60" stroke="#1c1915"/>
        <line x1="96" y1="60" x2="96" y2="100" stroke="#1c1915"/>
        <circle cx="96" cy="114" r="12" fill="#1c1915"/>
        <text x="300" y="24">Dominant: a parent and a child filled</text>
        <circle cx="330" cy="60" r="12" fill="#1c1915"/>
        <rect x="370" y="48" width="24" height="24" fill="#fff" stroke="#1c1915"/>
        <line x1="342" y1="60" x2="370" y2="60" stroke="#1c1915"/>
        <line x1="356" y1="60" x2="356" y2="100" stroke="#1c1915"/>
        <rect x="344" y="102" width="24" height="24" fill="#1c1915"/>
        <text x="40" y="180" fill="#5c564c">Circle female. Square male. Filled means the character shows.</text>
      </g>
    </svg>`;
  },
  point() {
    return `<div class="cards">
      <div class="card"><b>GAG</b><span>glutamic acid, ordinary haemoglobin</span></div>
      <div class="card"><b>G<span class="pulse-letter">U</span>G</b><span>one letter changes. Valine at position 6.</span></div>
      <div class="card"><b>One letter in or out</b><span>every later codon is regrouped</span></div>
      <div class="card"><b>Three letters in or out</b><span>one amino acid changes, the frame holds</span></div>
    </div>`;
  },
  karyo() {
    return `<div class="cards">
      <div class="card"><b>47, +21</b><span>Down syndrome. One extra autosome.</span></div>
      <div class="card"><b>47, XXY</b><span>Klinefelter syndrome.</span></div>
      <div class="card"><b>45, X</b><span>Turner syndrome. One sex chromosome missing.</span></div>
    </div>`;
  },
  finger() {
    return `<svg viewBox="0 0 640 180" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="13" fill="#1c1915">
        <text x="40" y="28">Person A</text>
        <text x="180" y="28">Person B</text>
        <text x="320" y="28">Sample</text>
        ${[0, 1].map((col) => [40, 70, 100, 130].map((y, i) => {
          const shift = col === 1 && (i === 1 || i === 3) ? 18 : 0;
          const x = 40 + col * 140;
          return `<rect x="${x}" y="${y + shift}" width="70" height="8" fill="#1c1915"/>`;
        }).join("")).join("")}
        ${[40, 70, 100, 130].map((y, i) => {
          const shift = i === 1 || i === 3 ? 18 : 0;
          return `<rect x="320" y="${y + shift}" width="70" height="8" fill="#1e4d3a"/>`;
        }).join("")}
        <text x="420" y="90" fill="#1e4d3a">The sample matches B,</text>
        <text x="420" y="110" fill="#1e4d3a">not A.</text>
      </g>
    </svg>`;
  },
  hw() {
    return `<div class="widget" data-hw>
      <label>Frequency of allele A, as a percent
        <input data-p type="range" min="0" max="100" value="50">
      </label>
      <p class="result" data-out></p>
      <div class="stack-bar">
        <div class="seg-dom" data-seg="dom"></div>
        <div class="seg-het" data-seg="het"></div>
        <div class="seg-rec" data-seg="rec"></div>
      </div>
      <div class="legend">
        <span><i class="seg-dom"></i>AA, p squared</span>
        <span><i class="seg-het"></i>Aa, 2pq</span>
        <span><i class="seg-rec"></i>aa, q squared</span>
      </div>
    </div>`;
  },
  forces() {
    return `<svg viewBox="0 0 640 90" role="img">
      <g fill="none" stroke="#1e4d3a" stroke-width="2">
        <path class="draw" d="M20 70 C50 70 60 20 90 20 C120 20 130 70 160 70"/>
        <path class="draw d2" d="M230 70 C270 70 280 25 340 22"/>
        <path class="draw d3" d="M430 55 C450 20 470 70 500 70 C530 70 540 20 580 22"/>
      </g>
      <g font-family="Segoe UI, sans-serif" font-size="12" fill="#5c564c">
        <text x="90" y="86" text-anchor="middle">stabilising</text>
        <text x="290" y="86" text-anchor="middle">directional</text>
        <text x="510" y="86" text-anchor="middle">disruptive</text>
      </g>
    </svg>
    <div class="cards">
      <div class="card"><b>Gene flow</b><span>alleles move with migrants</span></div>
      <div class="card"><b>Drift</b><span>chance, strong in a small group</span></div>
      <div class="card"><b>Mutation</b><span>a new letter</span></div>
      <div class="card"><b>Recombination</b><span>old letters, new combinations</span></div>
      <div class="card"><b>Selection</b><span>more offspring, so the allele spreads</span></div>
    </div>
    <p class="why">Shapes of selection: stabilising keeps the middle, directional moves the crowd to one side, disruptive keeps both ends.</p>`;
  },
  backcross() {
    return `<div class="cards">
      <div class="card"><b>Back cross</b><span>F1 crossed with either parent.</span></div>
      <div class="card"><b>Test cross</b><span>The back cross that uses the recessive parent only.</span></div>
    </div>`;
  },
  grid16() {
    const cells = [
      "RY", "RY", "RY", "RY", "RY", "RY", "RY", "RY", "RY",
      "Ry", "Ry", "Ry",
      "rY", "rY", "rY",
      "ry"
    ];
    return `<div class="cards">${cells.map((label) => `<div class="card"><b>${label}</b><span>1 of 16</span></div>`).join("")}</div>
      <p class="why">9/16 is 56.25 percent. 3/16 is 18.75 percent. 1/16 is 6.25 percent.</p>`;
  },
  mapline() {
    return `<svg viewBox="0 0 640 120" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="14" fill="#1c1915">
        <line x1="40" y1="50" x2="600" y2="50" stroke="#1c1915"/>
        <circle class="pop d1" cx="40" cy="50" r="5" fill="#1e4d3a"/><text class="rise d1" x="40" y="28" text-anchor="middle">a</text>
        <circle class="pop d2" cx="140" cy="50" r="5" fill="#1e4d3a"/><text class="rise d2" x="140" y="28" text-anchor="middle">c</text>
        <circle class="pop d3" cx="440" cy="50" r="5" fill="#1e4d3a"/><text class="rise d3" x="440" y="28" text-anchor="middle">b</text>
        <circle class="pop d4" cx="600" cy="50" r="5" fill="#1e4d3a"/><text class="rise d4" x="600" y="28" text-anchor="middle">d</text>
        <text x="90" y="78" text-anchor="middle" fill="#5c564c">5</text>
        <text x="290" y="78" text-anchor="middle" fill="#5c564c">15</text>
        <text x="520" y="78" text-anchor="middle" fill="#5c564c">9</text>
        <text x="320" y="100" text-anchor="middle">a to d is the long span, 29</text>
      </g>
    </svg>`;
  },
  gens() {
    return `<div class="cards">
      <div class="card"><b>0 min, 10 cells</b><span>all heavy</span></div>
      <div class="card"><b>20 min, 20 cells</b><span>all hybrid</span></div>
      <div class="card"><b>40 min, 40 cells</b><span>20 hybrid, 20 light</span></div>
      <div class="card"><b>60 min, 80 cells</b><span>20 hybrid, 60 light</span></div>
    </div>`;
  },
  codon() {
    const bases = ["U", "C", "A", "G"];
    const tables = bases.map((first) => {
      const rows = bases.map((second) => bases.map((third) => {
        const key = first + second + third;
        const stop = CODON[key] === "Stop" ? " stop" : "";
        return `<tr><td>${key}</td><td class="${stop.trim()}">${CODON[key]}</td></tr>`;
      }).join("")).join("");
      return `<table class="grid-fig codon-table"><tr><th colspan="2">First base ${first}</th></tr>${rows}</table>`;
    }).join("");
    const menus = ["c1", "c2", "c3"].map((name, i) => `<label>Base ${i + 1}
        <select data-${name}>${bases.map((base) => `<option>${base}</option>`).join("")}</select>
      </label>`).join("");
    return `<div class="cards codon-wrap">${tables}</div>
      <div class="widget" data-codon>${menus}<p class="result" data-out></p></div>`;
  },
  ribo() {
    return `<div class="cards">
      <div class="card"><b>Bacterial ribosome 70S</b><span>50S plus 30S. About 80 proteins. 23S rRNA makes the bond.</span></div>
      <div class="card"><b>Eukaryotic ribosome 80S</b><span>60S plus 40S.</span></div>
      <div class="card"><b>Charges</b><span>DNA is negative. Histones and nucleoid proteins are positive.</span></div>
    </div>`;
  },
  deep() {
    return `<svg viewBox="0 0 640 160" role="img">
      <g font-family="Segoe UI, sans-serif" font-size="12" fill="#1c1915">
        <line class="draw long" x1="30" y1="70" x2="610" y2="70" stroke="#1c1915"/>
        ${[
          [40, "Earth", "4.5 bya"],
          [150, "cells", "~2 bya"],
          [270, "animals", "~0.5 bya"],
          [390, "dinosaurs end", "65 mya"],
          [510, "our species", "Africa, then"],
          [600, "you", "pairs of letters"]
        ].map(([x, a, b]) => `<circle cx="${x}" cy="70" r="5" fill="#1e4d3a"/>
          <text x="${x}" y="50" text-anchor="middle">${a}</text>
          <text x="${x}" y="100" text-anchor="middle" fill="#5c564c">${b}</text>`).join("")}
      </g>
    </svg>`;
  }
};

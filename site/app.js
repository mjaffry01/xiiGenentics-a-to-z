(function () {
  const lessonRoot = document.getElementById("lesson");
  const ladder = document.getElementById("ladder");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let index = 0;

  function bloodText(a, b) {
    const pair = [a, b].slice().sort().join("+");
    const table = {
      "IA+IA": "Group A. Both copies are IA.",
      "IA+IB": "Group AB. Both sugars are placed. That is co-dominance.",
      "IA+i": "Group A. IA places a sugar. i is silent.",
      "IB+IB": "Group B. Both copies are IB.",
      "IB+i": "Group B. IB places a sugar. i is silent.",
      "i+i": "Group O. Neither copy places a sugar."
    };
    return table[pair] || "";
  }

  function bindWidgets(scope) {
    const blood = scope.querySelector("[data-blood]");
    if (blood) {
      const a = blood.querySelector("[data-a]");
      const b = blood.querySelector("[data-b]");
      const out = blood.querySelector("[data-out]");
      const draw = () => {
        out.textContent = bloodText(a.value, b.value);
      };
      a.addEventListener("change", draw);
      b.addEventListener("change", draw);
      draw();
    }
    const hw = scope.querySelector("[data-hw]");
    if (hw) {
      const range = hw.querySelector("[data-p]");
      const out = hw.querySelector("[data-out]");
      const segs = {
        dom: hw.querySelector('[data-seg="dom"]'),
        het: hw.querySelector('[data-seg="het"]'),
        rec: hw.querySelector('[data-seg="rec"]')
      };
      const draw = () => {
        const p = Number(range.value) / 100;
        const q = 1 - p;
        const aa = p * p;
        const het = 2 * p * q;
        const bb = q * q;
        segs.dom.style.width = (aa * 100) + "%";
        segs.het.style.width = (het * 100) + "%";
        segs.rec.style.width = (bb * 100) + "%";
        const fmt = (n) => n.toFixed(2);
        out.textContent = "p = " + fmt(p) + ", q = " + fmt(q) + ". AA " + fmt(aa) + ", Aa " + fmt(het) + ", aa " + fmt(bb) + ".";
      };
      range.addEventListener("input", draw);
      draw();
    }
    const codon = scope.querySelector("[data-codon]");
    if (codon && typeof CODON === "object") {
      const menus = ["c1", "c2", "c3"].map((name) => codon.querySelector("[data-" + name + "]"));
      const out = codon.querySelector("[data-out]");
      const draw = () => {
        const key = menus.map((menu) => menu.value).join("");
        const meaning = CODON[key] || "no entry";
        out.textContent = key + " means " + meaning + ".";
      };
      menus.forEach((menu) => menu.addEventListener("change", draw));
      draw();
    }
  }

  function buildLadder() {
    ladder.replaceChildren();
    let lastStage = "";
    LESSONS.forEach((lesson, i) => {
      if (lesson.stage !== lastStage) {
        const label = document.createElement("p");
        label.className = "stage-label";
        label.textContent = lesson.stage;
        ladder.appendChild(label);
        lastStage = lesson.stage;
      }
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ladder-btn";
      btn.textContent = (i + 1) + ". " + lesson.title;
      btn.addEventListener("click", () => show(i, true));
      ladder.appendChild(btn);
    });
  }

  function show(i, focusHeading) {
    index = Math.max(0, Math.min(LESSONS.length - 1, i));
    const lesson = LESSONS[index];
    history.replaceState(null, "", "#" + lesson.id);

    lessonRoot.replaceChildren();

    const stages = [];
    LESSONS.forEach((item) => {
      if (!stages.includes(item.stage)) stages.push(item.stage);
    });
    const stageAt = stages.indexOf(lesson.stage);
    const meter = document.createElement("div");
    meter.className = "meter";
    meter.setAttribute("aria-hidden", "true");
    stages.forEach((stage, n) => {
      const bar = document.createElement("span");
      bar.title = stage;
      if (n <= stageAt) bar.className = "on";
      meter.appendChild(bar);
    });
    lessonRoot.appendChild(meter);

    const kicker = document.createElement("p");
    kicker.className = "kicker";
    kicker.textContent = lesson.stage + " | " + lesson.band + " | idea " + (index + 1) + " of " + LESSONS.length;
    lessonRoot.appendChild(kicker);

    const title = document.createElement("h2");
    title.textContent = lesson.title;
    title.tabIndex = -1;
    lessonRoot.appendChild(title);

    const idea = document.createElement("p");
    idea.className = "idea";
    idea.textContent = lesson.idea;
    lessonRoot.appendChild(idea);

    const rests = document.createElement("p");
    rests.className = "rests";
    rests.textContent = lesson.rests;
    lessonRoot.appendChild(rests);

    if (lesson.words && lesson.words.length) {
      const words = document.createElement("div");
      words.className = "words";
      lesson.words.forEach((word) => {
        const chip = document.createElement("span");
        chip.textContent = word;
        words.appendChild(chip);
      });
      lessonRoot.appendChild(words);
    }

    const figure = document.createElement("figure");
    figure.className = "diagram";
    const draw = DIAGRAMS[lesson.diagram];
    figure.innerHTML = draw ? draw() : "";
    const cap = document.createElement("figcaption");
    cap.textContent = lesson.caption;
    figure.appendChild(cap);
    lessonRoot.appendChild(figure);

    const prose = document.createElement("div");
    prose.className = "prose";
    lesson.plain.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      prose.appendChild(p);
    });
    lessonRoot.appendChild(prose);

    const exam = (typeof EXAMS !== "undefined") ? EXAMS[lesson.id] : null;
    const workData = lesson.work || (exam && exam.work);
    if (workData) {
      const work = document.createElement("div");
      work.className = "work";
      const ask = document.createElement("p");
      ask.className = "prompt";
      ask.textContent = workData.prompt;
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = "Show the working";
      const list = document.createElement("ol");
      workData.steps.forEach((step) => {
        const item = document.createElement("li");
        item.textContent = step;
        list.appendChild(item);
      });
      details.appendChild(summary);
      details.appendChild(list);
      work.appendChild(ask);
      work.appendChild(details);
      lessonRoot.appendChild(work);
    }

    const precision = document.createElement("details");
    precision.className = "precision";
    precision.open = lesson.band === "Class 12" || lesson.band === "Entrance";
    const summary = document.createElement("summary");
    summary.textContent = "Same idea, in Class 12 language";
    const precise = document.createElement("p");
    precise.textContent = lesson.precision;
    precision.appendChild(summary);
    precision.appendChild(precise);
    lessonRoot.appendChild(precision);

    const check = document.createElement("div");
    check.className = "check";
    const h3 = document.createElement("h3");
    h3.textContent = "Check yourself";
    const prompt = document.createElement("p");
    prompt.className = "prompt";
    prompt.textContent = lesson.check.prompt;
    check.appendChild(h3);
    check.appendChild(prompt);
    const why = document.createElement("p");
    why.className = "why";
    why.hidden = true;
    why.textContent = lesson.check.why;
    lesson.check.choices.forEach(([text, ok]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice";
      btn.textContent = text;
      btn.addEventListener("click", () => {
        check.querySelectorAll(".choice").forEach((other) => {
          other.disabled = true;
        });
        lesson.check.choices.forEach((choice, n) => {
          const node = check.querySelectorAll(".choice")[n];
          if (choice[1]) node.classList.add("right");
          else if (node === btn) node.classList.add("wrong");
        });
        why.hidden = false;
      });
      check.appendChild(btn);
    });
    check.appendChild(why);
    lessonRoot.appendChild(check);

    if (exam && (exam.notes || exam.drills)) {
      const block = document.createElement("section");
      block.className = "entrance";
      const heading = document.createElement("h3");
      heading.textContent = "Medical entrance";
      block.appendChild(heading);
      (exam.notes || []).forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        block.appendChild(p);
      });
      (exam.drills || []).forEach((drill) => {
        const item = document.createElement("div");
        item.className = "drill-item";
        const q = document.createElement("p");
        q.className = "prompt";
        q.textContent = drill.prompt;
        item.appendChild(q);
        const because = document.createElement("p");
        because.className = "why";
        because.hidden = true;
        because.textContent = drill.why;
        drill.choices.forEach(([text, ok]) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "choice";
          btn.textContent = text;
          btn.addEventListener("click", () => {
            item.querySelectorAll(".choice").forEach((other) => {
              other.disabled = true;
            });
            drill.choices.forEach((choice, n) => {
              const node = item.querySelectorAll(".choice")[n];
              if (choice[1]) node.classList.add("right");
              else if (node === btn) node.classList.add("wrong");
            });
            because.hidden = false;
          });
          item.appendChild(btn);
        });
        item.appendChild(because);
        block.appendChild(item);
      });
      lessonRoot.appendChild(block);
    }

    bindWidgets(lessonRoot);

    ladder.querySelectorAll(".ladder-btn").forEach((btn, n) => {
      if (n === index) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
    const currentBtn = ladder.querySelector('[aria-current="true"]');
    if (currentBtn) currentBtn.scrollIntoView({ block: "nearest" });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === LESSONS.length - 1;
    if (focusHeading) title.focus();
  }

  prevBtn.addEventListener("click", () => show(index - 1, true));
  nextBtn.addEventListener("click", () => show(index + 1, true));
  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "");
    const found = LESSONS.findIndex((lesson) => lesson.id === id);
    if (found >= 0 && found !== index) show(found, false);
  });

  buildLadder();
  const fromHash = location.hash.replace("#", "");
  const start = Math.max(0, LESSONS.findIndex((lesson) => lesson.id === fromHash));
  show(start === -1 ? 0 : start, false);
})();

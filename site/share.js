// Share buttons. Plain links, so no Facebook or X script loads on the page.
// They always share the published address, even when the site is opened from a folder.
const SITE = "https://mjaffry01.github.io/xiiGenentics-a-to-z/site/";

function shareBar(page, text) {
  const url = SITE + page;
  const bar = document.createElement("nav");
  bar.className = "share";
  bar.setAttribute("aria-label", "Share");
  const label = document.createElement("span");
  label.textContent = "Share";
  bar.appendChild(label);
  const targets = [
    ["Facebook", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url)],
    ["X", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(url)],
    ["WhatsApp", "https://wa.me/?text=" + encodeURIComponent(text + " " + url)],
  ];
  targets.forEach(([name, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = name;
    bar.appendChild(link);
  });
  return bar;
}

(function () {
  const form = document.getElementById("archive-search-form");
  const input = document.getElementById("archive-query");
  const results = document.getElementById("search-results");
  const summary = document.getElementById("search-summary");
  if (!form || !input || !results || !summary) return;

  const params = new URLSearchParams(window.location.search);
  input.value = params.get("q") || "";

  function normalize(value) {
    return String(value || "").normalize("NFD").toLocaleLowerCase("ko-KR").replace(/[\\s·ㆍ]/g, "");
  }
  function esc(value) {
    return String(value || "").replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }
  async function search(query) {
    const q = normalize(query);
    if (!q) {
      summary.textContent = "검색어를 입력해 주세요.";
      results.innerHTML = "";
      return;
    }
    summary.textContent = "검색 중입니다…";
    try {
      const base = document.querySelector('meta[name="site-baseurl"]')?.content || "";
      const response = await fetch(base + "/search-index.json");
      if (!response.ok) throw new Error("검색 색인을 불러오지 못했습니다.");
      const index = await response.json();
      const found = index.filter(item => normalize(item.search_text).includes(q));
      summary.textContent = `검색 결과 ${found.length}건`;
      results.innerHTML = found.length ? found.map(item =>
        `<a class="entry-row" href="${esc(item.url)}"><strong>${esc(item.title)}</strong><span>${esc(item.summary || item.type || "")}</span><span class="row-arrow">→</span></a>`
      ).join("") : '<p class="empty-note">일치하는 자료가 없습니다. 이형태나 옛 표기로도 검색해 보세요.</p>';
    } catch (error) {
      summary.textContent = error.message;
    }
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim();
    const url = new URL(window.location.href);
    url.searchParams.set("q", query);
    history.replaceState({}, "", url);
    search(query);
  });
  if (input.value.trim()) search(input.value.trim());
})();

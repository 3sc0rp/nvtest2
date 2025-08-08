// Dummy MenuIQ helpers — stand‑in for your AI logic/backend.

export function getFeaturedDishes(menu, limit = 3) {
  return [...menu].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
}

export function filterMenu(menu, { query = '', category = 'all', popular = false } = {}) {
  let result = [...menu];

  if (category && category !== 'all' && category !== 'most') {
    result = result.filter(m => m.category === category);
  }

  if (category === 'most' || popular) {
    result = result.filter(m => m.popularity >= 90 || (m.tags || []).includes('Most Popular'));
  }

  if (query) {
    const q = query.toLowerCase();
    result = result.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      (m.tags || []).some(t => t.toLowerCase().includes(q))
    );
  }

  return result;
}

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export const withBase = (path: string) => `${base}${path.replace(/^\/+/, '')}`;

export const demoUrl = withBase('book-a-demo/');

export const isActivePath = (currentPath: string, path: string) => {
  const target = withBase(path).replace(/\/$/, '');
  const current = currentPath.replace(/\/$/, '');
  if (target === base.replace(/\/$/, '')) return current === target;
  return current === target || current.startsWith(`${target}/`);
};

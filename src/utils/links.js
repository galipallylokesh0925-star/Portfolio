export function getLinkProps(url, { external = false } = {}) {
  const isPlaceholder = typeof url === 'string' && url.startsWith('#')

  return {
    href: isPlaceholder ? '#' : url,
    target: isPlaceholder ? undefined : external ? '_blank' : undefined,
    rel: isPlaceholder ? undefined : external ? 'noopener noreferrer' : undefined,
    onClick: isPlaceholder
      ? (event) => {
          event.preventDefault()
        }
      : undefined,
  }
}

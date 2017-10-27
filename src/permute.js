function flatten(items) {
  return [].concat.apply([], items);
}

export default function permute(items) {
  return items.length > 1
    ? flatten(items.map((item, i) =>
        permute(items.slice(i + 1).concat(items.slice(0, i))).map(p => [items[i]].concat(p))
      ))
    : [items];
}


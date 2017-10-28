import { parse, wrap, Match, Empty, Skip, Fault } from "chimpanzee";

export default function expr(schema, onMatch, opts = {}, params = {}) {
  return wrap(
    (obj, key, parents, parentKeys) => context => {
      const result = parse(schema)(obj, key, parents, parentKeys)(context);
      return result instanceof Match
        ? onMatch ? onMatch(result.value) : result
        : result instanceof Skip
          ? opts.onSkip ? opts.onSkip(result) : result
          : result instanceof Fault
            ? opts.onFault ? opts.onFault(result) : result
            : result instanceof Empty
              ? opts.onEmpty ? opts.onEmpty(result) : result
              : result;
    },
    params
  );
}

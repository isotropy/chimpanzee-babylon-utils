class ChimpanzeeBabylonUtilsError extends Error {
  constructor(message, inner, props) {
    super(message);
    this.inner = inner;
    this.props = props;
    this.name = "ChimpanzeeBabylonUtilsError";
  }
}

export default function(message, inner, props) {
  throw new ChimpanzeeBabylonUtilsError(message, inner, props);
}

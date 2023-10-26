export const chooseString = (score) => {
  let string;
  if (score < 0) string = "ohno";
  if (score >= 0 && score < 0.3) string = "ooops";
  if (score >= 0.3 && score < 0.6) string = "ok";
  if (score >= 0.6 && score < 0.9) string = "good";
  if (score >= 0.9) string = "verygood";
  return string;
};

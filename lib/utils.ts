export const formatCurrency = (
  value: number | string,
  currency: string = "USD"
): string => {
  try {
    const numericValue = typeof value === "number" ? value : Number(value);

    if (Number.isNaN(numericValue)) {
      return "$0.00";
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  } catch {
    const num = Number(value);
    return Number.isNaN(num) ? "$0.00" : `$${num.toFixed(2)}`;
  }
};


export function add(input: string): number {
    if (!input.trim()) return 0;

    const parts = input.split(/,|\n/).filter(Boolean);

    const numbers = parts.map((p) => Number(p));

    if (numbers.some((n) => Number.isNaN(n))) {
        throw new Error("Invalid number detected.");
    }

    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numbers.reduce((sum, n) => sum + n, 0);
}

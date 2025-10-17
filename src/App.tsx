import { useState } from "react";
import { add } from "./stringCalculator";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      setResult(add(input));
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=1200&auto=format&fit=crop"
          alt="String Calculator Visual"
          role="presentation"
          className="w-full h-[300px] object-cover"
        />

        <div className="p-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
            String Calculator
          </h1>
          <p className="text-gray-600 mb-8 text-base max-w-xl mx-auto">
            Enter numbers separated by commas <code>,</code> or newlines <code>\n</code>.
            <br />This tool will instantly calculate their sum for you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col gap-5 text-left"
          >
            <label
              htmlFor="numbers"
              className="block text-lg font-semibold text-gray-700"
            >
              Enter numbers:
            </label>

            <textarea
              id="numbers"
              rows={5}
              placeholder={`Example:\n1,2,3\nor\n1\n2`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-invalid={!!error}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 resize-none text-gray-800 placeholder-gray-400"
            />

            <p className="text-sm text-gray-500">
              💡 Tip: You can mix commas and newlines — both are supported.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Calculate ➜
            </button>
          </form>

          <div className="mt-8 text-center">
            {error && (
              <div
                role="alert"
                className="text-red-600 font-medium bg-red-50 border border-red-200 py-2 px-4 rounded-md inline-block"
              >
                {error}
              </div>
            )}

            {result !== null && !error && (
              <div
                role="status"
                aria-live="polite"
                className="text-green-700 font-bold text-2xl bg-green-50 border border-green-200 py-3 px-6 rounded-lg inline-block mt-4"
              >
                Result: {result}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

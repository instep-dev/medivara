"use client";

export default function ArticleBackLink({
  label
}: {
  label: string;
}) {
  const handleBack = () => {
    window.addEventListener(
      "popstate",
      () => window.location.reload(),
      { once: true }
    );
    window.history.back();
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-teal"
    >
      ← {label}
    </button>
  );
}

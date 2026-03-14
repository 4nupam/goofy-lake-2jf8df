import { useState } from "react";

export default function Live() {
  const maxLength = 30;
  const [query, setQuery] = useState("");

  const remaining = maxLength - query.length;
  const active = query.length > 3;

  return (
    <div>
      <div
        style={{
          fontFamily: "-apple-system",
          color: active ? "red" : "green",
        }}
      >
        {remaining}
      </div>

      <textarea
        maxLength={maxLength}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

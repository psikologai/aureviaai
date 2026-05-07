export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const KEY = (process.env.ANTHROPIC_API_KEY || "").replace(/\s/g, "");
  if (!KEY || !KEY.startsWith("sk-")) {
    return res.status(500).json({ error: "API key not configured on server" });
  }

  try {
    const { system, messages, max_tokens } = req.body;
    if (!system || !messages) {
      return res.status(400).json({ error: "Missing system or messages" });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-5",
        max_tokens: max_tokens || 2000,
        system,
        messages,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Anthropic API error: " + response.status
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error: " + err.message });
  }
}

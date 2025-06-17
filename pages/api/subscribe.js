export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwdI7v_bWLGNIWtpVwS0rDj7zhD93Go5B26EzXfigp7zYFj-6-IpKO8BbvxsC0ViFZzvA/exec";

  try {
    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to save subscription" });
    }

    const data = await response.json();

    if (data.status !== "success") {
      return res.status(500).json({ error: data.message || "Unknown error" });
    }

    res.status(200).json({ message: "Thank you for subscribing!" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
}

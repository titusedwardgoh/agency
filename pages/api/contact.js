export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/23399290/uobpms7/";

      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        return res.status(500).json({ error: "Zapier webhook failed" });
      }

      return res.status(200).json({ message: "Sent to Zapier successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

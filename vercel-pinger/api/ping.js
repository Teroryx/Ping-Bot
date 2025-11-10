export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const url = "https://ton-bot.onrender.com/"; // remplace par ton lien Render
  try {
    await fetch(url);
    res.status(200).send("Ping envoyé !");
  } catch (err) {
    res.status(500).send("Erreur : " + err.message);
  }
}

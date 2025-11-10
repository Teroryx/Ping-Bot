export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const url = "https://ton-bot.onrender.com/"; // ton lien Render ici
  await fetch(url);
  res.status(200).send("Ping envoyé !");
}

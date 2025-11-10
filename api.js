export default async function handler(req, res) {
  const fetch = (await import('node-fetch')).default;
  const url = "https://https://ping-bot.vercel.app/"; // ton lien Render ici
  await fetch(url);
  res.status(200).send("Ping envoyé !");
}

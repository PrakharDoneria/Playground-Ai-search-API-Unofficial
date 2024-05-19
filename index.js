const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("YOUR_BOT_TOKEN");

bot.command("search", async (ctx) => {
    const query = ctx.message.text.split(" ").slice(1).join(" ");

    if (!query) {
        return ctx.reply("Please provide a search query.");
    }

    const url = `https://playground.com/_next/data/ba0kOy0FZsenBfbBIZHrR/search.json?q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(url);
        const data = response.data.pageProps.data;

        if (data && data.length > 0) {
            const firstResult = data[0];
            const imageUrl = firstResult.url;

            await ctx.sendChatAction("upload_photo");

            await ctx.replyWithPhoto({ url: imageUrl });

            ctx.reply(
                `Title: ${firstResult.title || "N/A"}\nPrompt: ${firstResult.prompt}\nUser: ${firstResult.user.displayName}`,
            );
        } else {
            ctx.reply(`No results found for "${query}".`);
        }
    } catch (error) {
        console.error("Error fetching search results:", error);
        ctx.reply(
            "Sorry, an error occurred while fetching the search results.",
        );
    }
});

bot.launch()
    .then(() => {
        console.log("Bot started.");
    })
    .catch((error) => {
        console.error("Error starting the bot:", error);
    });

# Telegram Search Bot

This is a Telegram bot that performs search queries using the Telegraf framework and Axios for HTTP requests. The bot sends the first image from the search results as a reply to the user.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- A Telegram bot token from BotFather

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the required packages using npm:

    ```sh
    npm install telegraf axios
    ```

## Configuration

1. Replace `'YOUR_BOT_TOKEN'` in `bot.js` with your actual Telegram bot token from BotFather.

## Usage

1. Start the bot by running the following command in your terminal:

    ```sh
    node index.js
    ```

2. Open your Telegram app and start a chat with your bot.

3. Use the `/search` command followed by your query to perform a search. For example:

    ```sh
    /search car
    ```

4. The bot will respond with the first image from the search results along with some additional information.

## Example

- **User:** `/search car`
- **Bot:**
  - ![Image](https://images.playground.com/6553994500674b3daef8f2645fd170a2.jpeg)
  - `Title: N/A`
  - `Prompt: super car fast and 3d, trending on artstation, sharp focus, studio photo, intricate details, highly detailed, by greg rutkowski`
  - `User: ayden Simon`

## Error Handling

If the bot encounters an error while fetching the search results, it will log the error and reply with a message informing the user of the issue.

## Additional Information

- The bot currently only responds to the `/search` command. Any other messages will receive a reply prompting the user to use the `/search` command.


exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Help',
            description: `
            +play <songName> - Play a song from youtube โถ
            +pause - pause music โธ
            +resume - resume music โถ
            +np - Get now playing song's info ๐
            +skip - Skip to next song โญ
            +stop - Stop playing music ๐
            +queue - to see the full song queue ๐ผ
                                 ยบ by Andrei oes
            `,
            color: '#cc0099'
        }
    })
}

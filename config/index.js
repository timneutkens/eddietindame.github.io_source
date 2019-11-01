const { NODE_ENV } = process.env

const c = {
    DEV: NODE_ENV !== 'production',
    PORT: 3000,
    TITLE: 'Eddie Tindame - Full Stack Developer',
    DESC: 'I am a full-stack / creative developer currently working out of Firepit Technology in the heart of Warner Music Group, London. I take freelance gigs if they\'re cool enough!',
    GA_TRACKING_ID: 'UA-151353051-1'
}

c.HOST = c.DEV
    ? `http://localhost:${c.PORT}`
    : 'https://eddietindamegithubionext.firepit1.now.sh'
    // : 'https://eddietindame.github.io'

c.FAVICON = `${c.HOST}/static/favicon.ico`
c.OG_IMAGE = `${c.HOST}/static/img/og.png`

module.exports = c

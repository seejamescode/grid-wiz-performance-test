# Grid Wiz Performance Test

A project for the AustinJS 2019 January Meetup! Check out [Grid Wiz](grid-wiz.now.sh) to learn more.

## Contributing

This repo uses the [Next.js PWA Boilerplate](https://github.com/pingboard/next-pwa-boilerplate) with service workers disabled for style performance testing. Next.js PWA Boilerplate starts your progressive web app off with a perfect Google Lighthouse score. To see this in action, open [the website](https://next-pwa-boilerplate.now.sh) with Chrome, go to the “Audits” tab in dev tools, and click “Run audit”.

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Styled Components](https://www.styled-components.com/) - Use the best bits of ES6 and CSS to style your apps without stress
- [Next.js](https://nextjs.org/) - A minimalistic framework for server-rendered React applications
- [Node.js](https://nodejs.org) for the server
- [Express.js](https://expressjs.com/) for the server’s routing
- [ZEIT Now](https://zeit.co/now) for hosting the app on the web

### Run locally

#### One-Time Setup

Must have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en/) installed:

1. `git clone https://github.com/pingboard/next-pwa-boilerplate`
2. `npm i`
3. Replace all images in `./static/graphics/` with your desired app icons, splash screens, and thumbnail for social sharing. If you have Sketch, you can use the artboards included in `./graphics.sketch`. Ensure that all replacement graphics include the same filenames, file type, and dimensions.

#### Run

`npm run dev` and go to http://localhost:3000

### Deploying

#### One-Time Setup

1. Make an account on [ZEIT](https://zeit.co).
2. Install Zeit’s Now CLI: `npm install -g now`
3. Change the name and alias on `now.json` to your unique string. If you don’t have a full domain with ZEIT, `yourUniqueString.now.sh` will the domain.
4. Replace the `next-pwa-boilerplate` inside `https://next-pwa-boilerplate.now.sh` in `./pages/_document.js` with the same string as the previous step.

#### Deploy

`npm run deploy`

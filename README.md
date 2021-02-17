This is a companion repository for the "Creating, Using, and Maintaining a Design System" [webinar](https://www.linkedin.com/posts/openfin_register-openfin-presents-lab49-creating-activity-6765297027396993024-PyMh/) hosted by [OpenFin](https://openfin.co/).

This webinar took place on Februrary 17th, 2021.

## Intro

Creating, using, and maintaining a design system is a complex task that requires participation from many parts of an organization. In this talk, we'll discuss why one might want to consider creating a design system to build, organize, and maintain the user interfaces of your applications.

This codebase contains:

1. A [Next.js](https://nextjs.org/) application
2. A [Storybook](https://storybook.js.org/) application
3. A script to run the Next.js application in OpenFin

The purpose of this codebase is to demonstrate the various parts that make up a design system, with a very simple design system and component library implementation.

While real design systems are much more comprehensive and complex, the intent of this example is to provide a starting point, and a view into what a living style guide looks like.

Feel free to fork, use, share, and modify this codebase.

## Getting started

1. Make sure you have `node` and `npm`. We recommend [nvm](https://github.com/nvm-sh/nvm)
2. Clone the repository
3. `$ npm install`
4. `$ npm run storybook`
5. `$ npm run dev`
6. `$ npm run openfin`

Storybook will start at [http://localhost:6006](http://localhost:6006). Visit that URL in your browser to explore the living style guide.

The demo application will start at [http://localhost:3000](http://localhost:3000). Additionally, the application can be run in OpenFin, and the `openfin-cli` tool will automatically launch and display the main window.

## Talk notes

As mentioned during the talk, there are a number of helpful links and resources:

#### Book and other resources:

- https://atomicdesign.bradfrost.com/
- https://en.wikipedia.org/wiki/Inner_source
- https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar

#### Design concepts and tools:

- https://airbnb.design/designops-airbnb/
- https://www.contrast.app/
- https://www.abstract.com/

#### Other design systems:

- https://blueprintjs.com/
- https://www.lightningdesignsystem.com/
- https://atlassian.design/
- https://polaris.shopify.com/
- https://www.carbondesignsystem.com/

#### Blog post:

- https://www.lab49.com/insights/building-effective-design-systems-driving-productivity-and-avoiding-pitfalls/

#### Contacts:

Brian McAllister
Interactive Practice Head
[brian.mcallister@lab49.com](brian.mcallister@lab49.com)

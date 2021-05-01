# Next.js blog

This is a blog created with Next.js as part of a study comparing perfomance of Wordpress and Next.js.

The app was created using this tutorial as the base and then modifying it.
https://strapi.io/blog/build-a-blog-with-next-react-js-strapi

## Start the app

Make sure the instance of Strapi with corresponding number of posts is running,
i.e `strapi-<number of posts>`.

The port number for the app can be changed in `package.json`.

```
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p <port>"
  },
```

Build the app.

`npm install`

`NEXT_PUBLIC_STRAPI_API_URL=<url-of-strapi> npm run build`

Start the app.

`npm run start`

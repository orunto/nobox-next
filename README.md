# Nobox Next.js Template
This is a [Next.js](https://nextjs.org) template bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) integrated with the [Nobox Backend](https://nobox.cloud), based on the integration template found in the [documentation](https://docs.nobox.cloud/integrate-nobox)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Note: Delete the bun.lock file first before using your preferred package manager to install dependencies .

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses the [shadcn](https://ui.shadcn.com) component library ([TailwindCSS](https://tailwindcss.com) is in tow) and [SWR](https://swr.vercel.app) for data fetching.

### Configuration
Here is the folder structure of the `nobox` folder containing `config` file schemas in the `record-structures` folder
```
.
├── nobox
│   ├── config.ts
│   └── record-structures
│       ├── app-details.ts
│       ├── cars.ts
│       └── user.ts
├── package.json
```

Store your api key that you generate from your [project dashboard](https://dashboard.nobox.cloud) as `yourToken` in the .env file you'll create and import it in the `config` file with 

```
export const config: Config = {
    endpoint:  "https://api.nobox.cloud", // or http://localhost:8000 if you are running local
    project:  "[yourproject]", //Replace [yourProject] with your desired project name
    token: process.env.yourToken as string, //From the .env file
};
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Nobox Documentation](https://docs.nobox.cloud) - Get started with the Nobox backend

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Configuring the backend
Import the `.env` file in the Enviroment Variable

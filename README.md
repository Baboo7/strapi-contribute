# Strapi Contribute

Contribute to Strapi plugins easily.

## Table Of Content

- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)

# Setup

1. Clone the repo

```bash
git clone https://github.com/Baboo7/strapi-contribute.git
```

2. Install the plugin `strapi-plugin-import-export-entries`

```bash
mkdir ./src/plugins && cd $_

git clone https://github.com/Baboo7/strapi-plugin-import-export-entries.git

mv strapi-plugin-import-export-entries import-export-entries && cd ../../
```

3. Install project dependencies:

```bash
yarn
```

or

```bash
npm i
```

# Usage

1. Run the project:

```bash
yarn dev:admin
```

or

```bash
npm run dev:admin
```

> Any modification made to the plugin folder `import-export-entries` will trigger a rerender of the admin panel of the repo `strapi-contribute`

2. Connect to the [admin panel](http://localhost:8000) (http://localhost:8000) with the credentials contributor@yopmail.com / Hello123

1. Seed the database by importing the file `database/seed.json` from the content manager page of the collection `CollectionType`.

1. Open the plugin folder `import-export-entries` in your IDE:

```bash
# Opening with VSCode
code src/plugins/import-export-entries
```

5. Create a new branch in the repo `import-export-entries`, commit & push your changes and create a pull request

## Author

Baboo - [@Baboo7](https://github.com/Baboo7)

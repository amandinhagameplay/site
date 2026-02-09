# Real Estate Catalog

This project is a real estate catalog built with React and Vite, utilizing Decap CMS for content management. It allows users to manage property listings easily through an admin interface.

## Project Structure

- **public/admin**: Contains the admin interface for Decap CMS.
  - `config.yml`: Configuration file for Decap CMS.
  - `index.html`: Entry point for the Decap CMS admin interface.

- **src/assets**: Directory for static assets like images and styles.

- **src/components**: Contains React components, including property listing components.

- **src/pages**: Directory for page components in the application.

- **src/main.tsx**: Entry point for the React application.

- **package.json**: Configuration file for npm, listing dependencies.

- **vite.config.ts**: Configuration for Vite, including settings for handling Markdown files.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd real-estate-catalog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

- Access the Decap CMS admin interface at `/admin` after logging in.
- Manage property listings in the 'imoveis' collection.
- Each property listing includes:
  - Title (`titulo`)
  - Price (`preco`)
  - Description (`descricao`)
  - Image (`imagem`)
  - Category (`categoria`)

## Additional Notes

- Ensure to install the `gray-matter` dependency to read Markdown files.
- Use `import.meta.glob` in your React components to dynamically import and render property cards from `src/content/imoveis/*.md`.
- Uploaded images will be displayed from the `public/images/uploads` directory.
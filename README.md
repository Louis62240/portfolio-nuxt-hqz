
# Portfolio Nuxt HQZ

## What is Nuxt?
Nuxt is a powerful open-source framework based on Vue.js for building modern web applications. It provides features like server-side rendering (SSR), static site generation (SSG), automatic routing, and easy configuration, making development faster and more efficient. Nuxt is ideal for creating fast, SEO-friendly, and scalable websites.

This is a personal portfolio website built with Nuxt.js and Tailwind CSS. It showcases my projects, skills, education, and contact information in a modern and responsive design.

## Features
- Home page with introduction
- Project showcase
- Skills and education sections
- Contact form/modal
- Responsive design
- Custom components
- Docker support

## Technologies Used
- [Nuxt.js](https://nuxt.com/) (Vue 3)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Docker

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/Louis62240/portfolio-nuxt-hqz.git
	cd portfolio-nuxt-hqz
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```

### Development
To start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:3000`.

### Build for Production
To build the project for production:
```bash
npm run build
```
To start the production server:
```bash
npm run start
```

### Docker
To build and run with Docker:
```bash
docker build -t portfolio-nuxt-hqz .
docker run -p 3000:3000 portfolio-nuxt-hqz
```

## Project Structure
- `pages/` - Main pages
- `components/` - Vue components
- `assets/` - Images, CSS, PDFs
- `public/` - Static files
- `server/` - Server-side code
- `plugins/` - Nuxt plugins

## Customization
You can edit the content in the components and pages to personalize your portfolio.

## CI/CD
A basic CI/CD pipeline is included using GitHub Actions. The workflow automatically installs dependencies, builds the project, and can deploy it when changes are pushed to the repository. You can find the configuration in `github/workflows/deploy.yml`.

## License
This project is open source and available under the MIT License.

## Contact
For any questions or feedback, feel free to contact me via the contact form on the website.
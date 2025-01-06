# Étape de base
FROM node:18-alpine

# Création du répertoire de travail
WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY nuxt.config.ts ./

# Installation des dépendances
RUN npm ci

# Copie du reste des fichiers
COPY . .

# Build de l'application
RUN npm run build

# Exposition du port (par défaut 3000 pour Nuxt)
EXPOSE 3000

# Commande de démarrage
CMD ["node", ".output/server/index.mjs"]
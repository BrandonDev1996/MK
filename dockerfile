# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del backend
COPY backend backend/

# Copia los archivos del frontend
COPY frontend frontend/

# Instala las dependencias del frontend y construye
RUN cd frontend && npm install && npm run build

# Expone el puerto del backend
EXPOSE 3000

# Comando para ejecutar el backend
CMD ["npm", "run", "start-backend"]

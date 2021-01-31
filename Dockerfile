FROM node:14 as build

WORKDIR /app
COPY simon987/ ./

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
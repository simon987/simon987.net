FROM node:14 as build

WORKDIR /app
COPY simon987/ ./

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./gpg /www/gpg/
COPY ./keybase /www/keybase/
COPY --from=build /app/dist/ /www/
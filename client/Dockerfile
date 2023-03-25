FROM node:14 as builder

WORKDIR /client

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /client/build .

CMD ["nginx", "-g", "daemon off;"]
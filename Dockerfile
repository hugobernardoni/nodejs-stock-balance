FROM node:alpine
WORKDIR /www/var
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE "${PORT}"
#ENTRYPOINT ["./init.sh"] 
CMD npm start
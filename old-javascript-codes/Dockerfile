FROM node:12-alpine
RUN sudo apt nodejs
RUN npm install
RUN npm run server
RUN exec -t CONTAINER_ID test.js



DELETE
https://localhost/restAPI/course/1/student?id=studentID&&token=tokenValue
https://localhost/restAPI/student?course=courseId&&token=tokenValue
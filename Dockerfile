FROM node:12.18.2-alpine as build

COPY /frontend /frontend

WORKDIR /frontend

RUN npm install && npm run build

FROM python:3.8.2-alpine

COPY /.aws /.aws

EXPOSE 5000

RUN apk update \
    && apk add --virtual build-deps gcc python3-dev musl-dev \
    && apk add postgresql-dev \
    && pip install psycopg2-binary \
    && apk del build-deps

RUN pip install pipenv

COPY /backend/Pipfile* ./

RUN pipenv lock --requirements > requirements.txt

RUN pip install -r requirements.txt

COPY /backend .

COPY --from=build /frontend/build /frontend/build

ENTRYPOINT [ "./docker-entrypoint.sh"]
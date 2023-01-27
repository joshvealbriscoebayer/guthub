FROM postgres:15

COPY docker-entrypoint-initdb.d docker-entrypoint-initdb.d
ENV POSTGRES_PASSWORD=mysecretpassword
EXPOSE 5432
CMD ["postgres"]

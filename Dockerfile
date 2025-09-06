# Dockerfile para banco de dados postgres
FROM postgres:latest

# Defina variáveis de ambiente para o banco de dados
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=nestjs

# Exponha a porta padrão do PostgreSQL

EXPOSE 5432
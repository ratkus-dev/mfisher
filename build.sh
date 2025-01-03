#!/bin/bash

# Параметры
REPO_URL="git@github.com:ratkus-dev/mfisher.git" # Замените на ваш репозиторий
APP_DIR="/var/www/mfisher.agency"                          # Директория для проекта

# Шаги
echo "Обновляем репозиторий..."
if [ ! -d "$APP_DIR" ]; then
    git clone $REPO_URL $APP_DIR
else
    cd $APP_DIR
    git reset --hard
    git pull origin main
fi

echo "Устанавливаем зависимости..."
cd $APP_DIR
npm install

echo "Собираем проект..."
npm run build

echo "Запускаем сервер..."
pm2 start dist --name "mfisher" --no-daemon

# Update_Deploy
    Простое обновление:
        $ . ./apps/client/deploy.sh
    Сложное обновление:
        $ cd /apps/client
        $ git pull
            [ npm version ]
            [ $ npm i ]
            [ .env ]
        $ npm run build
        $ mp2 restart 
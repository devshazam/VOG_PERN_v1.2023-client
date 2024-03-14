# Update_Deploy
    - $ ssh root@92.53.115.66
    Простое обновление:
        cd /apps/client && . ./deploy.sh
                            Сложное обновление:
                                $ cd /apps/client
                                $ git pull
                                    [ npm version ]
                                    [ $ npm i ]
                                    [ .env ]
                                $ npm run build
                                $ mp2 restart 
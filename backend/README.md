# NODEJS EXPRESS API WITH POSTGRESSQL

This project still has the mysql connections, 
I would change that connections for postgresql instance
to develop the core in NODEJS with POSTGRES in this proyect

##  NODE JS SERVER

[ NODEJS COMANDS ]

run `tsc` to compile ts files in js files and it drops in build folder. In package json the are a var with "build": "tsc -w"
run `npm run build` to  start compilation in watch mode
run `npm run dev` to start nodemon server in port 3000 . There are a var in package.json script "dev": "nodemon build/main.js"

[ SERVICES ]
run `killall -s KILL` to stop all node process

## POSTMAN
run `su` to scalate privilage as sudo then run `postman` to start postman.sh that is possible for home variables

## POSTGRESS DATA BASE

[ CONIFG ]
run `nano /etc/postgresql/12/main/pg_hba.conf` to manage the ACL
run `psql -U postgres -h localhost` to login as a another user

[ SERVICES ]
run `sudo service postgresql start` to start DB service..
run `sudo service postgresql restart` to restart the linux service
run `/etc/init.d/postgresql status`   to check the service status and log
run `/sbin/service postgresql status` to check the service status and log
run `service postgresql status` to know where postgresql is running and if it's alive

[ AUTH ]
run `su postgres` to authenticate with postgres linux user, that user manage the postgrsql instance
run `PGPASSWORD=123456 psql -U lautaro -d bms` to auth as lautaro in dbms database and initiate a shell psql
run `psql -U lautaro -d bms` to auth as lautaro in dbms database and initiate a shell psql`

[ PSQL SHELL COMANDS]
run `psql` to access to the Postgres Shell
run `\l` to list all databases
run `\c 'bms' ` to use the bms database

[ USERS MANAGEMENT ]
run `createuser -P -s -e joe` To create the user joe as a superuser, and assign a password immediately:
run `sudo -u postgres createuser -s -i -d -r -l -w <<username>>` to crete a user with superuser role
run `sudo -u postgres psql -c "ALTER ROLE <<username>> WITH PASSWORD '<<password>>';"` change  pw of the user create above

[ USER ACCOUNTS ]
master password pgadmin | 123456
postgres | postgres
lautaro | 123456
joe | joe

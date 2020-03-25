## DB START
run `sudo service postgresql start` to start DB service..
run `sudo service postgresql restart` to restart the linux service
run `/etc/init.d/postgresql status`   to check the service status and log
run `/sbin/service postgresql status` to check the service status and log

run `nano /etc/postgresql/12/main/pg_hba.conf` ACL
run `psql -U postgres -h localhost` to login as a another user

run `su postgres` to authentica as a postgres super user this auth takes the OS credentials for the right user
run `psql` for access to the Postgres Shell

run `createuser -P -s -e joe` To create the user joe as a superuser, and assign a password immediately:
run `sudo -u postgres createuser -s -i -d -r -l -w <<username>>` to crete a user with superuser role
run `sudo -u postgres psql -c "ALTER ROLE <<username>> WITH PASSWORD '<<password>>';"` change  pw of the user create above

## USERS
[ joe / joe ] 
[ postgres / postgres ] 
[ lautaro / 123456 ]

## pg_hba.conf
# Database administrative login by Unix domain socket
local   all             postgres                                ident

# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
# IPv6 local connections:
host    all             all             ::1/128                 trust
# Allow replication connections from localhost, by a user with the
# replication privilege.
local   replication     all                                     peer
host    replication     all             127.0.0.1/32            md5
host    replication     all             ::1/128                 md5

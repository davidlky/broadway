# Postgres username.
DB_USER="broadway"
# Postgres password.
DB_PASS="B0bby1sG@y6969"
# Database name.
DB_NAME="broadway"
# Delete database if it exists.
psql -c "DROP DATABASE IF EXISTS $DB_NAME;"
# Delete user if it exists.
psql -c "DROP ROLE IF EXISTS $DB_USER;"
# Create user.
psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"
# Make user a superuser.
psql -c "ALTER USER $DB_USER WITH SUPERUSER;"
# Make database.
psql -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
# Grant privilages on database.
psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME to $DB_USER;"
#!/bin/bash
BACKUP_DIR="/var/backups/eshop"
DB_NAME="eshop"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
docker exec eshop-db pg_dump -U postgres $DB_NAME > $BACKUP_DIR/eshop_$DATE.sql
gzip $BACKUP_DIR/eshop_$DATE.sql
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete
echo "✅ Backup completed: eshop_$DATE.sql.gz"

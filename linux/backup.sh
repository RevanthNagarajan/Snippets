#!/bin/bash
####################################
#
# Backup to NFS mount script.
#
####################################

# What to backup. 
backup_files="./revanth/revy.txt"

# Where to backup to.
dest="./bkp/tar"

# Create archive filename.
day=$(date +%A)
hostname=$(hostname -s)
archive_file="$hostname-$day.tgz"

# Print start status message.
echo "Backing up $backup_files to $dest/$archive_file"
date
echo

# Backup the files using tar.
tar czf $dest/$archive_file $backup_files

# Print end status message.
echo
echo "Backup finished"
date

# Long listing of files in $dest to check file sizes.
ls -lh $dest

# To exceute 
# chmod u+x backup.sh -- executable format
# Terminal --> sudo ./backup.sh
# Terminal cron --> sudo crontab -e (crontab file contains # m h dom mon dow   command : 0 0 * * * bash /usr/local/bin/backup.sh)
# Created file --> -rw-r--r-- 1 root root 149 Jun  3 11:41 INSWL-6TCXWT2-Monday.tgz
# https://help.ubuntu.com/lts/serverguide/backup-shellscripts.html.en
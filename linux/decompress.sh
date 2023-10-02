#!/bin/bash
####################################
#
# decompress to NFS mount script.
#
####################################

# What to decompress. 

# Where to decompress to.
dest="./retrieved"


# Create archive filename.
day=$(date +%A)
hostname=$(hostname -s)
backedup_files="$hostname-$day.tgz"

# Print start status message.
echo "Extracting  to $dest"
date
echo

# decompress the files from tar.
tar xvzf ./bkp/tar/$backedup_files -C $dest/

# Print end status message.
echo
echo "Export finished"
date

# Long listing of files in $dest to check file sizes.
ls -lh $dest

# To exceute 
# chmod u+x decompress.sh -- executable format
# Terminal --> sudo ./decompress.sh || bash ./decompress.sh
# Terminal cron --> sudo crontab -e (crontab file contains # m h dom mon dow   command : 0 0 * * * bash /usr/local/bin/decompress.sh)
# Created file --> -rw-r--r-- 1 root root 149 Jun  3 11:41 INSWL-6TCXWT2-Monday.tgz
# https://help.ubuntu.com/lts/serverguide/decompress-shellscripts.html.en
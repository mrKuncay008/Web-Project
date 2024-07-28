#!/bin/bash

GREEN="\033[1;32m"
NOCOLOR="\033[0m"

echo
echo -e "Step 1: ${GREEN}Git status${NOCOLOR}"
git status

echo
echo -e "Step 2: ${GREEN}Git add all File ${NOCOLOR}"
git add .
echo "Success to add !!"
echo

read -p "Enter Messege Commit: " commit
echo
echo -e "Step 3: ${GREEN}Git Commit ${NOCOLOR}"
git commit -m "$commit"

echo

echo -e "Final Step: ${GREEN} Git Push repo ${NOCOLOR}"
git push

echo

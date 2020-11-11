#!/bin/sh
npm run build
LC_ALL=C
mkdir -p vicnala.xyz
rm -rf vicnala.xyz/*
cp build/* build/static/css/* build/static/js/* build/static/media/* vicnala.xyz/
rm vicnala.xyz/*.map
rm vicnala.xyz/*.txt

for i in vicnala.xyz/*
do
    sed -i '' -e 's/\/static\/css\///g' $i > /dev/null 2>&1    
    sed -i '' -e 's/\/static\/js\///g' $i > /dev/null 2>&1    
    sed -i '' -e 's/\/static\/media\///g' $i > /dev/null 2>&1    
done

rm -fr vicnala.xyz/.!*
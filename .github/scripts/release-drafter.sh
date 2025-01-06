#!/bin/sh
set -e

tagName=${1-""}

if [ -z "$tagName" ]; then
    echo "Tag name must be provided"
    exit 1
fi

echo "Drafting release for a tag $tagName"

releases=$(gh release list --json "isDraft,tagName" --jq ".[] | select(.isDraft == true) | .tagName")

for release in $releases
do
    echo "Deleting draft release $release..."
    yes | gh release delete "$release"
done

startTag=$(gh release list --json "tagName,isLatest" --jq ".[] | select(.isLatest == true) | .tagName")
if [ ! -z "$startTag" ]; then
    echo "Creating release $tagName with startTag $startTag..."
    gh release create $tagName -d --verify-tag --generate-notes --notes-start-tag="$startTag" --title="$tagName"
else
    echo "Creating release $tagName..."
    gh release create "$tagName" -d --verify-tag --generate-notes --title="$tagName"
fi
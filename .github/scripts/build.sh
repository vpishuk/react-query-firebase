#!/bin/bash
set +e

mv docs/.vitepress .vitepress

(
    set -e
    rm -rf docs
    npx typedoc --plugin typedoc-plugin-markdown --plugin typedoc-vitepress-theme
    exit 1
)
EXITCODE=$?

mkdir -p docs/
mv ./.vitepress docs/.vitepress

if [[ $EXITCODE -ne 0 ]]; then
    exit $EXITCODE
fi


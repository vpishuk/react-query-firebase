#!/bin/bash
set +e

mv docs/.vitepress .vitepress

(
    set -e
    rm -rf docs
    npx typedoc ./src/web.ts --plugin typedoc-plugin-markdown --plugin typedoc-vitepress-theme
)
EXITCODE=$?

mkdir -p docs/
mv ./.vitepress docs/.vitepress

if [[ $EXITCODE -ne 0 ]]; then
    exit $EXITCODE
fi


#!/usr/bin/env bash

# Abort if any command exits with error.
set -e

# By default, Bash takes the error status of the last item in pipeline.
# Instead, exit when any item in the pipeline fails.
set -o pipefail

# This associates the API Key with the account
vsce publish -p "${VSCE_ACCESS_TOKEN}"

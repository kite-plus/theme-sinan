#!/bin/sh
# Packs a release as the zip the index lists, with `kite theme pack`, which
# needs Kite 0.1.5 or later. KITE names another kite binary than the one on
# PATH.
set -eu
cd "$(dirname "$0")/.."

kite=${KITE:-kite}
# An older Kite prints its help for an unknown command and still exits 0.
if ! "$kite" theme --help 2>&1 | grep -q '^  pack '; then
	echo "package.sh: $kite has no 'theme pack'; Kite 0.1.5 or later has it" >&2
	exit 1
fi
exec "$kite" theme pack "$@"

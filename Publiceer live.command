#!/bin/zsh

set -euo pipefail

finish() {
  echo
  if [[ -t 0 ]]; then
    read -r "?Druk op Enter om af te sluiten... "
  fi
}

trap finish EXIT

APP_DIR="${0:A:h}"
ROOT_EXPORT="$APP_DIR/lokale-exporten/live-opdrachten.json"
NESTED_EXPORT="$APP_DIR/lokale-exporten/lokale-exporten/live-opdrachten.json"

cd "$APP_DIR"

echo "Columbus Beweegbibliotheek"
echo "Publiceer live-export"
echo

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Deze map is geen git-repository."
  exit 1
fi

if [[ -f "$NESTED_EXPORT" && ( ! -f "$ROOT_EXPORT" || "$NESTED_EXPORT" -nt "$ROOT_EXPORT" ) ]]; then
  cp "$NESTED_EXPORT" "$ROOT_EXPORT"
  echo "Nieuwste live-export uit extra submap overgenomen."
fi

if [[ ! -f "$ROOT_EXPORT" ]]; then
  echo "Geen live-opdrachten.json gevonden in lokale-exporten."
  exit 1
fi

git add "$ROOT_EXPORT"

if git diff --cached --quiet -- "$ROOT_EXPORT"; then
  echo "Geen nieuwe live-wijzigingen om te publiceren."
  exit 0
fi

STAMP="$(date '+%Y-%m-%d %H:%M')"

echo "Maak commit..."
git commit -m "Update live export ($STAMP)"

echo "Push naar GitHub..."
git push

echo
echo "Klaar. De nieuwste live-export staat nu op GitHub."

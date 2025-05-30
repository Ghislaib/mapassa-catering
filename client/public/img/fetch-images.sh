#!/usr/bin/env bash
set -e

# Since this script lives in img/, download here
IMG_DIR="."
echo "Downloading into $(pwd)…"

declare -A images=(
  ["logo.png"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fafrican-food-logo_75946454.htm&psig=AOvVaw3JVpW4AzfgqIl0Ov65MK7Q&ust=1748473050386000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD_v-_fxI0DFQAAAAAdAAAAABAE"
  ["hero.jpg"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fp%2FAfrican-Foods-Market-Limited-100069178783339%2F&psig=AOvVaw3JVpW4AzfgqIl0Ov65MK7Q&ust=1748473050386000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD_v-_fxI0DFQAAAAAdAAAAABAK"
  ["rice-plate.png"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcheflolaskitchen.com%2Frice-beans-recipe%2F&psig=AOvVaw3roIzqUNbErdumIUCG85Tx&ust=1748473267619000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJC5ndLgxI0DFQAAAAAdAAAAABAg"
  ["puff-puffs.png"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcookingwithclaudy.com%2Feasy-puff-puff-recipe%2F&psig=AOvVaw1qh7FigVyurwXzhMrXAfs3&ust=1748473415199000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj00JnhxI0DFQAAAAAdAAAAABAE"
  ["gallery1.jpg"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tastyvibescatering.com%2F&psig=AOvVaw0l5QAh3w6ujaG3HhEro-tk&ust=1748473478808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOih9rrhxI0DFQAAAAAdAAAAABAE"
  ["gallery2.jpg"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tastyvibescatering.com%2F&psig=AOvVaw0l5QAh3w6ujaG3HhEro-tk&ust=1748473478808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOih9rrhxI0DFQAAAAAdAAAAABAE"
  ["gallery3.jpg"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tastyvibescatering.com%2F&psig=AOvVaw0l5QAh3w6ujaG3HhEro-tk&ust=1748473478808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOih9rrhxI0DFQAAAAAdAAAAABAE"
  ["gallery4.jpg"]="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tastyvibescatering.com%2F&psig=AOvVaw0l5QAh3w6ujaG3HhEro-tk&ust=1748473478808000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOih9rrhxI0DFQAAAAAdAAAAABAE"
)

for file in "${!images[@]}"; do
  url="${images[$file]}"
  echo "- $file ← $url"
  if command -v curl >/dev/null 2>&1; then
    curl -fSL "$url" -o "$IMG_DIR/$file" || true
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "$IMG_DIR/$file" "$url" || true
  else
    echo "⚠️ No curl or wget—skipping $file"
  fi
done

echo "✅ Done. Files in $IMG_DIR:"
ls -1 "$IMG_DIR"
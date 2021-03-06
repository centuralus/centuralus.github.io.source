git add .
git commit -am "$1"
git push
npm run build
cd centuralus.github.io
git add .
git commit -am "$1"
git push

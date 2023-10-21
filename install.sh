pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install ffmpeg -y
pkg install imagemagick -y
pkg install npm
git clone https://github.com/SazumiVicky/sazumi-bot
cd sazumi-bot
npm install
node .


const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = path.join(__dirname, "public/img/galleries/gal6");
const files = fs.readdirSync(dir);

const getImages = async (files) => {
  const images = [];
  for (const file of files) {
    const { width, height } = await sharp(path.join(dir, file)).metadata();
    images.push({
      src: `/img/galleries/gal6/${file}`,
      alt: file,
      width,
      height,
    });
  }
  return images;
};

const printYaml = async files => {
    const images = await getImages(files);
    console.log('images:');
    images.forEach(image => {
        console.log(`- src: "${image.src}"`);
        console.log(`  alt: "${image.alt}"`);
        console.log(`  width: ${image.width}`);
        console.log(`  height: ${image.height}`);
    });
};

printYaml(files);
const Jimp = require('jimp');
const path = require('path');


async function main() {
    try{
        const mainImage1Path = path.join(__dirname, '..../Shapes/picture1.svg');
        //const mainImage2Path = path.join(__dirname, 'path');
        //const mainImage3Path = path.join(__dirname, 'path');
        const maskImagePath = path.join(__dirname, 'path');
        const outputImagePath = path.join(__dirname, 'path');

        const mainImage1 = await Jimp.read(mainImage1Path);
        //const mainImage2 = await Jimp.read(mainImage2Path);
        //const mainImage3 = await Jimp.read(mainImage3Path);
        const maskImage = await Jimp.read(maskImagePath);

        // mask resize if needed

        mainImage1.mask(maskImage, 0, 0);

        await mainImage1.writeAsync(outputImagePath);

        console.log("mask applied yay");
    }
    catch (error) {
        console.log("fucked up somewhere :~(");
    }
}

main();
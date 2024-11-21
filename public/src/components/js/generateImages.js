// ES Module 방식 (generateImages.js)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname 대체: 현재 파일 경로 및 디렉토리 경로 계산
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 이미지 디렉토리 경로와 결과 파일 경로 설정
const imageDir = path.join(__dirname, "../../assets/img");
const outputFile = path.join(__dirname, "./images.js");

// 이미지 파일 필터링
const files = fs
  .readdirSync(imageDir)
  .filter((file) => /\.(png|jpe?g|svg)$/.test(file));

// export 형태로 변환
const exportContent = files
  .map((file) => `  "${file}": new URL('./images/${file}', import.meta.url)`)
  .join(",\n");

const content = `const images = {\n${exportContent}\n};\n\nexport default images;`;

// 결과 파일 생성
fs.writeFileSync(outputFile, content, "utf-8");

console.log("Images file generated!");

// Get list of files in the _posts folder
const path = require("path");
const fs = require("fs");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

const directoryPath = path.join(__dirname, "_posts");

const getPosts = () =>
  fs.readdirSync(directoryPath, function (err, files) {
    if (err) {
      return console.log("unable to scan directory: " + err);
    }
    const list = [];
    files.forEach((file) => {
      list.push(file);
    });
    return list;
  });

const posts = getPosts();

const formatFileToString = (file) => {
  fs.readFile(`${directoryPath}/${file}`, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    //console.log(typeof data);
    const result = md.render(data);
    console.log(result);
    return result;
  });
};

const markdownToHtml = (file) => {
  const string = formatFileToString(file);
  // //const html = md.render(string);
  // console.log(typeof string);
};

markdownToHtml(posts[0]);

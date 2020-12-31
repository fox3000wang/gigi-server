export function closeFile(err, fd) {
  err && console.error(err);
  fs.close(fd, () => console.log('done'));
}

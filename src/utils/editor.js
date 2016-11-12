export const resolveType = (fileName) => {
  const ext = fileName.split('.')[fileName.split('.').length - 1];
  switch (ext) {
    case 'js':
      return 'jsx';
    case 'css':
      return 'css';
    case 'html':
      return 'htmlmixed';
    default:
      return false;
  }
};

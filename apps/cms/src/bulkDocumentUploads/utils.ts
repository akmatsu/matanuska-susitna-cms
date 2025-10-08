const allowedMimeTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/xml',
  'text/plain',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

export function validateFiles(files: FileList) {
  if (!files || files.length === 0) {
    return 'Please upload a file';
  }
  for (let i = 0; i < files.length; i++) {
    if (!allowedMimeTypes.includes(files[i].type)) {
      return 'Invalid file type';
    }
  }
  return true;
}

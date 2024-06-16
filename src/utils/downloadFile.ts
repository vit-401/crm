export enum TypeFile {
  CSV = 'text/csv',
  ZIP = 'application/zip',
}

export const downloadFile = function (
  data: BlobPart,
  contentDisposition: string | null,
  type: TypeFile = TypeFile.CSV,
) {
  if (!data) {
    return;
  }

  const fileExtension = type === TypeFile.CSV ? '.csv' : '.zip';

  // Creating a Blob with specified type
  const blob = new Blob([data], { type: type });

  // Creating an object for downloading url
  const url = window.URL.createObjectURL(blob);

  // Creating an anchor(a) tag of HTML
  const a = document.createElement('a');

  // Passing the blob downloading url
  a.setAttribute('href', url);

  // Setting the anchor tag attribute for downloading
  // and passing the download file name
  a.setAttribute(
    'download',
    contentDisposition?.split(fileExtension)[0] || `download${fileExtension}`,
  );
  // Performing a download with click
  a.click();
};

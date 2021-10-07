export interface RowDataModel {
  thumbnails: string,
  publishedAt: string,
  title: { title: string, videoId: string },
  description: string,
}

export const RowDataEmpty: RowDataModel = {
  thumbnails: '',
  publishedAt: '',
  title: { title: '', videoId: '' },
  description: '',
};

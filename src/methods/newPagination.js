export default function newPagination(page, data) {
  const per = 9;
  const filterData = [];
  const pages = {
    total_pages: Math.ceil(data.length / per),
    current_page: Number(page),
    has_pre: false,
    has_next: false,
    maxData: page * per,
    minData: (page - 1) * per + 1,
  };
  data.forEach((item, i) => {
    if (i + 1 >= pages.minData && i + 1 <= pages.maxData) {
      filterData.push(item);
    }
  });
  if (page > 1) {
    pages.has_pre = true;
  }
  if (page < pages.total_pages) {
    pages.has_next = true;
  }
  return {
    pages,
    filterData,
  };
}

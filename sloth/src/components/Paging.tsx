import { Button } from "./ui/button";

const Paging = ({
  page,
  setPage,
  total,
  pageLimit,
}: {
  page: number;
  setPage: (p: number) => void;
  total: number;
  pageLimit: number;
}) => {
  const start = (page - 1) * pageLimit + 1;
  let end = page * pageLimit;
  end = end <= total ? end : total;

  return (
    <div className="flex border-t-2 mb-5 relative bottom-0 pt-2 mt-2">
      <div className="flex-initial w-full p-2 m-1">
        Showing {start}-{end} out of {total}
      </div>
      <div className="flex gap-1">
        {page > 1 && (
          <Button
            variant="default"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </Button>
        )}
        {end != total && (
          <Button
            variant="default"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Paging;

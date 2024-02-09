import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useTaskParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.has("page") ? parseInt(searchParams.get("page") as string) : 1
  );
  const [onlyToDo, setOnlyToDo] = useState(
    searchParams.has("onlyToDo")
      ? (searchParams.get("onlyToDo") as unknown as boolean)
      : false
  );
  useEffect(() => {
    let params: any = {};
    params.page = page;
    params.onlyToDo = onlyToDo;
    setSearchParams(params);
  }, [page, onlyToDo]);
  return { page, setPage, onlyToDo, setOnlyToDo };
};

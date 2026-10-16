import { useEffect, useState } from "react";

export function useCurrentDate() {
	const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

	return year
}
import {useMemo, useState} from "react";

const useSortByRating = (devices = []) => {
    const [isDescSorts, setIsDescSorts] = useState(false);

    const sortedDevices = useMemo(() => {
        const sortableDevice = [...devices];

        sortableDevice.sort((a, b) => {
            if (+a.rating < +b.rating) {
                return isDescSorts ? 1 : -1;
            }
            if (+a.rating > +b.rating) {
                return isDescSorts ? 1 : -1;
            }
            return 0;
        });

        return sortableDevice;
    }, [isDescSorts, devices]);
    return {
        isDescSorts,
        setIsDescSorts,
        sortedDevices
    }
}

export {useSortByRating};

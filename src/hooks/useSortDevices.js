import {useState, useMemo} from "react";

const useSortDevices = (devices = []) => {
   const [isDescSort, setIsDescSort] = useState(false);

   const sortedDevices = useMemo(() => {
       const sortableDevices = [...devices];

       sortableDevices.sort((a, b) => {
           if (+a.price < +b.price) {
               return isDescSort ? 1 : -1;
           }
           if (+a.price > +b.price) {
               return isDescSort ? -1 : 1;
           }
           return 0;
       });

       return sortableDevices;
   }, [isDescSort, devices]);

   return {
       isDescSort,
       setIsDescSort,
       sortedDevices
   }
}

export {useSortDevices};
